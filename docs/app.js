const verses = window.BIBLE_VERSES || [];
const devotions = window.DAILY_DEVOTIONS || [];
const content = document.getElementById('content');
const tabs = [...document.querySelectorAll('.tab')];
const state = {
  tab: 'today',
  book: '',
  chapter: 1,
};

const keys = {
  favorites: 'daily_bible_devotional:favorites',
  settings: 'daily_bible_devotional:settings',
};

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function settings() {
  const saved = readJson(keys.settings, {});
  return {
    reminder_time: typeof saved.reminder_time === 'string' ? saved.reminder_time : '08:00',
    font_size: Number.isFinite(saved.font_size) ? saved.font_size : 18,
    theme: saved.theme === 'dark' ? 'dark' : 'light',
  };
}

function saveSettings(next) {
  writeJson(keys.settings, next);
  applySettings();
}

function favorites() {
  const ids = readJson(keys.favorites, []);
  return Array.isArray(ids) ? ids.filter(Number.isInteger) : [];
}

function setFavorites(ids) {
  writeJson(keys.favorites, ids);
}

function applySettings() {
  const current = settings();
  document.documentElement.style.setProperty('--font-size', current.font_size + 'px');
  document.body.classList.toggle('dark', current.theme === 'dark');
}

function todayDevotion() {
  if (!devotions.length) return null;
  const start = new Date(new Date().getFullYear(), 0, 1);
  const dayOfYear = Math.floor((Date.now() - start.getTime()) / 86400000) + 1;
  return devotions[(dayOfYear - 1) % devotions.length];
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[char]));
}

function section(title, body) {
  return '<div><h3>' + escapeHtml(title) + '</h3><div class="body">' + body + '</div></div>';
}

function renderDevotion(item) {
  if (!item) return '<p class="body">尚未匯入每日靈修資料。</p>';
  const favs = favorites();
  const isFav = favs.includes(item.id);
  const reflection = (item.reflection || []).map((line, index) => (index + 1) + '. ' + escapeHtml(line)).join('\n');
  return `
    <article class="section">
      <div>
        <h2 class="title">${escapeHtml(item.title)}</h2>
        <p class="ref">${escapeHtml(item.verse_ref)}</p>
      </div>
      <div class="card body">${escapeHtml(item.verse_text)}</div>
      <div class="actions">
        <button class="primary" data-action="toggle-favorite" data-id="${item.id}">${isFav ? '取消收藏' : '加入收藏'}</button>
        <span class="muted">${item.review_status === 'approved' ? '已審核' : '待人工審核'}</span>
      </div>
      ${section('背景', escapeHtml(item.background))}
      ${section('解說', escapeHtml(item.explanation))}
      ${section('今日應用', escapeHtml(item.application))}
      ${section('反思問題', reflection)}
      ${section('禱告', escapeHtml(item.prayer))}
    </article>
  `;
}

function renderToday() {
  content.innerHTML = renderDevotion(todayDevotion());
}

function books() {
  const seen = new Set();
  return verses.filter((item) => {
    if (seen.has(item.book)) return false;
    seen.add(item.book);
    return true;
  }).map((item) => item.book);
}

function chapters(book) {
  return [...new Set(verses.filter((item) => item.book === book).map((item) => item.chapter))];
}

function renderBible() {
  const bookList = books();
  if (!state.book) state.book = bookList[0] || '';
  const chapterList = chapters(state.book);
  if (!chapterList.includes(state.chapter)) state.chapter = chapterList[0] || 1;
  const current = verses
    .filter((item) => item.book === state.book && item.chapter === state.chapter)
    .filter((item, index, rows) => {
      const previous = rows[index - 1];
      return !(previous && previous.verse_label === item.verse_label && previous.text === item.text);
    });
  content.innerHTML = `
    <section class="section">
      <h2 class="title">讀經</h2>
      <div class="row">
        <select id="bookSelect">${bookList.map((book) => `<option value="${escapeHtml(book)}" ${book === state.book ? 'selected' : ''}>${escapeHtml(book)}</option>`).join('')}</select>
        <select id="chapterSelect">${chapterList.map((chapter) => `<option value="${chapter}" ${chapter === state.chapter ? 'selected' : ''}>第 ${chapter} 章</option>`).join('')}</select>
      </div>
      <div class="verse-list">${current.map((item) => `<p class="body"><span class="verse-num">${escapeHtml(item.verse_label || item.verse)}</span>${escapeHtml(item.text)}</p>`).join('')}</div>
    </section>
  `;
  document.getElementById('bookSelect').addEventListener('change', (event) => {
    state.book = event.target.value;
    state.chapter = 1;
    renderBible();
  });
  document.getElementById('chapterSelect').addEventListener('change', (event) => {
    state.chapter = Number(event.target.value);
    renderBible();
  });
}

function renderFavorites() {
  const ids = favorites();
  const items = devotions.filter((item) => ids.includes(item.id));
  content.innerHTML = `
    <section class="section">
      <h2 class="title">收藏</h2>
      ${items.length ? items.map((item) => '<div class="card">' + renderDevotion(item) + '</div>').join('') : '<p class="body">尚未收藏靈修。</p>'}
    </section>
  `;
}

function renderSettings() {
  const current = settings();
  content.innerHTML = `
    <section class="section">
      <h2 class="title">設定</h2>
      <div>
        <h3>每日提醒時間</h3>
        <div class="row">
          <input id="reminderTime" type="time" value="${escapeHtml(current.reminder_time)}" />
          <button class="primary" data-action="save-reminder">儲存</button>
        </div>
        <p class="muted">Web/Windows 版會保存提醒時間；Android 版使用本機系統通知。</p>
      </div>
      <div>
        <h3>字體大小</h3>
        <div class="row">
          <button data-action="font-minus">A-</button>
          <span>${current.font_size}</span>
          <button data-action="font-plus">A+</button>
        </div>
      </div>
      <div>
        <h3>主題</h3>
        <button data-action="toggle-theme">${current.theme === 'dark' ? '切換淺色' : '切換深色'}</button>
      </div>
    </section>
  `;
}

function renderAbout() {
  content.innerHTML = `
    <section class="section">
      <h2 class="title">來源與版權</h2>
      <div class="body">
        <p>聖經譯本：新標點和合本 Chinese Union Version Traditional。PDF 標示為 Public Domain。</p>
        <p>本版本完全離線，不使用 AI API、不使用 OpenAI API、不使用遠端 Bible API。</p>
        <p>每日靈修內容目前標記為待人工審核，正式發布前應逐筆確認經文、解說與應用。</p>
      </div>
    </section>
  `;
}

function render() {
  tabs.forEach((tab) => tab.classList.toggle('active', tab.dataset.tab === state.tab));
  if (state.tab === 'today') renderToday();
  if (state.tab === 'bible') renderBible();
  if (state.tab === 'favorites') renderFavorites();
  if (state.tab === 'settings') renderSettings();
  if (state.tab === 'about') renderAbout();
}

document.addEventListener('click', async (event) => {
  const tab = event.target.closest('.tab');
  if (tab) {
    state.tab = tab.dataset.tab;
    render();
    return;
  }

  const action = event.target.dataset.action;
  if (!action) return;
  const current = settings();

  if (action === 'toggle-favorite') {
    const id = Number(event.target.dataset.id);
    const ids = favorites();
    setFavorites(ids.includes(id) ? ids.filter((item) => item !== id) : [id, ...ids]);
    render();
  }
  if (action === 'save-reminder') {
    const time = document.getElementById('reminderTime').value || '08:00';
    saveSettings({ ...current, reminder_time: time });
    if ('Notification' in window && Notification.permission === 'default') {
      await Notification.requestPermission();
    }
    renderSettings();
  }
  if (action === 'font-minus') {
    saveSettings({ ...current, font_size: Math.max(14, current.font_size - 1) });
    renderSettings();
  }
  if (action === 'font-plus') {
    saveSettings({ ...current, font_size: Math.min(28, current.font_size + 1) });
    renderSettings();
  }
  if (action === 'toggle-theme') {
    saveSettings({ ...current, theme: current.theme === 'dark' ? 'light' : 'dark' });
    renderSettings();
  }
});

applySettings();
render();
