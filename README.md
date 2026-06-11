# 每日聖經靈修 Daily Bible Devotional App

繁體中文《每日聖經靈修》App，提供每日經文、背景、解說、今日應用、反思問題、禱告與收藏功能。

本專案目標是製作一個可離線使用、成本低、簡潔易讀的每日讀經工具，支援 Web、Windows 及 Android 測試版。

---

## 線上使用

Web 版可直接用瀏覽器開啟：

https://sion-rgb.github.io/daily-bible-app/

---

## 下載版本

請到 GitHub Releases 下載最新版本：

https://github.com/sion-rgb/daily-bible-app/releases

目前提供：

* Web 版 ZIP
* Windows EXE 版 ZIP
* Android APK 測試版

---

## v2.0.0 重大更新

本次 v2.0.0 為重大內容更新，主要包括：

* 每日靈修內容由 365 日升級至 1,095 日
* 加入全新 App Icon
* Web / Windows / Android 版本同步更新
* 維持完全離線、本機閱讀與收藏
* 不接駁 AI API
* 不需要登入
* 不需要伺服器即時生成內容
* 持續改善背景、解說、今日應用、反思問題與禱告內容

Android APK 目前仍屬測試版。

---

## 主要功能

* 每日經文
* 經文背景
* 經文解說
* 今日應用
* 反思問題
* 禱告
* 收藏功能
* 讀經頁面
* 設定頁面
* 來源說明頁面
* 完全離線閱讀
* 手機與電腦瀏覽器均可使用

---

## 支援平台

| 平台                 | 狀態   |
| ------------------ | ---- |
| Web / GitHub Pages | 可使用  |
| Windows EXE        | 可使用  |
| Android APK        | 測試版  |
| iOS App Store      | 暫未提供 |
| Google Play        | 暫未上架 |

---

## Web 版使用方法

直接開啟：

https://sion-rgb.github.io/daily-bible-app/

建議手機用戶可將網站加入主畫面，作為 Web App 使用。

---

## Windows 版使用方法

1. 到 GitHub Releases 下載 Windows ZIP
2. 解壓縮
3. 執行：

```text
DailyBible.exe
```

注意：Windows 版本未作商業代碼簽署，首次執行時系統可能顯示安全提示。

---

## Android APK 測試版使用方法

1. 到 GitHub Releases 下載 Android APK
2. 在 Android 手機允許「安裝未知來源」
3. 安裝 APK
4. 開啟《每日聖經靈修》

注意：Android APK 目前為測試版，可能仍有裝置相容性問題。

---

## 聖經資料來源

本專案使用 Public Domain Chinese Union Version Traditional Bible text。

資料來源說明：

```text
Title: Chinese Union Version (Traditional)
Status: Public Domain
Language: Chinese
Dialect: Mandarin, Traditional Script
PDF generated using Haiola and XeLaTeX on 22 May 2026
Source files dated: 12 Dec 2025
Identifier: c03bb35c-f042-59c2-88d7-1111d9a01842
```

本專案並非香港聖經公會、聯合聖經公會或任何官方聖經機構出版。

---

## 內容原則

本 App 的靈修內容以基督新教與唯獨聖經原則為方向，目標是幫助使用者每日回到聖經本身。

內容原則包括：

* 以《舊約聖經》與《新約聖經》為最高權威
* 中文經文以《和合本聖經（繁體）》為準
* 不以教會傳統、個人經驗、異象或靈修感動作為教義根據
* 不使用天主教教義作為解經基礎
* 不把聖經沒有明確啟示的內容說成定論
* 合理推論需與經文本身保持界線

每日靈修內容仍會持續進行人工審核、修訂與優化。

---

## AI 使用說明

本 App 本身不接駁 OpenAI API 或任何 AI API。

所有經文與靈修內容均預先整理並打包於 App 內，使用者打開 App 時不會產生 AI API 成本，也不需要伺服器即時生成內容。

開發期間可能使用 AI 工具協助：

* 程式開發
* 資料整理
* 內容草稿生成
* 格式檢查
* 相似度檢查
* 錯誤修正

但 App 正式使用時不會即時呼叫 AI API。

---

## 專案結構

可能的專案結構如下：

```text
daily-bible-app/
├── docs/
│   ├── index.html
│   ├── assets/
│   ├── manifest.json
│   └── service-worker.js
├── src/
├── public/
├── scripts/
├── outputs/
├── android-webview/
├── package.json
├── package-lock.json
├── README.md
└── .github/
    └── workflows/
        └── build.yml
```

`docs/` 用於 GitHub Pages Web 版部署。
`outputs/` 用於產生 build 檔案或資料輸出。
`scripts/` 用於資料處理、驗證及 build 輔助工具。
`android-webview/` 用於 Android WebView APK 測試版。

---

## 開發與 Build

安裝依賴：

```bash
npm install
```

Web build：

```bash
npm run build
```

如有 Android WebView build script，可使用：

```bash
scripts/build-android-webview-apk.bat
```

成功後 APK 可能輸出至：

```text
outputs/daily-bible-devotional-webview-debug.apk
```

實際指令需按專案內 `package.json` 與 scripts 設定為準。

---

## GitHub Pages 部署

本專案 Web 版使用 GitHub Pages。

部署來源：

```text
Branch: main
Folder: /docs
```

網站網址：

```text
https://sion-rgb.github.io/daily-bible-app/
```

如更新後頁面沒有即時變化，可能是瀏覽器或 Service Worker 快取問題，可嘗試：

```text
https://sion-rgb.github.io/daily-bible-app/?v=2
```

或清除瀏覽器網站快取後重新開啟。

---

## 已知限制

* Android APK 仍為測試版
* Windows EXE 未作商業代碼簽署
* iOS 原生 App 暫未提供
* 部分每日靈修內容仍會持續人工審核與修訂
* Web App 離線快取可能導致更新後需要重新整理或清除快取

---

## 免責聲明

本 App 為個人 / 非官方聖經靈修工具，並非任何聖經公會或官方教會機構出版。

靈修內容只作每日讀經輔助，不能取代個人查考聖經本身。使用者應以聖經經文本身為最高依據，並對解說內容作審慎分辨。

---

## License

Bible text: Public Domain
App code: 請按專案需要選擇合適 License
Devotional content: Copyright by project author unless otherwise stated

---

## 作者

Sion Barzahd

Project Repository:

```text
https://github.com/sion-rgb/daily-bible-app
```
# 每日聖經靈修 Daily Bible Devotional App

繁體中文《每日聖經靈修》App，提供每日經文、背景、解說、今日應用、反思問題、禱告與收藏功能。

本專案目標是製作一個可離線使用、成本低、簡潔易讀的每日讀經工具，支援 Web、Windows 及 Android 測試版。

---

## 線上使用

Web 版可直接用瀏覽器開啟：

https://sion-rgb.github.io/daily-bible-app/

---

## 下載版本

請到 GitHub Releases 下載最新版本：

https://github.com/sion-rgb/daily-bible-app/releases

目前提供：

* Web 版 ZIP
* Windows EXE 版 ZIP
* Android APK 測試版

---

## v2.0.0 重大更新

本次 v2.0.0 為重大內容更新，主要包括：

* 每日靈修內容由 365 日升級至 1,095 日
* 加入全新 App Icon
* Web / Windows / Android 版本同步更新
* 維持完全離線、本機閱讀與收藏
* 不接駁 AI API
* 不需要登入
* 不需要伺服器即時生成內容
* 持續改善背景、解說、今日應用、反思問題與禱告內容

Android APK 目前仍屬測試版。

---

## 主要功能

* 每日經文
* 經文背景
* 經文解說
* 今日應用
* 反思問題
* 禱告
* 收藏功能
* 讀經頁面
* 設定頁面
* 來源說明頁面
* 完全離線閱讀
* 手機與電腦瀏覽器均可使用

---

## 支援平台

| 平台                 | 狀態   |
| ------------------ | ---- |
| Web / GitHub Pages | 可使用  |
| Windows EXE        | 可使用  |
| Android APK        | 測試版  |
| iOS App Store      | 暫未提供 |
| Google Play        | 暫未上架 |

---

## Web 版使用方法

直接開啟：

https://sion-rgb.github.io/daily-bible-app/

建議手機用戶可將網站加入主畫面，作為 Web App 使用。

---

## Windows 版使用方法

1. 到 GitHub Releases 下載 Windows ZIP
2. 解壓縮
3. 執行：

```text
DailyBible.exe
```

注意：Windows 版本未作商業代碼簽署，首次執行時系統可能顯示安全提示。

---

## Android APK 測試版使用方法

1. 到 GitHub Releases 下載 Android APK
2. 在 Android 手機允許「安裝未知來源」
3. 安裝 APK
4. 開啟《每日聖經靈修》

注意：Android APK 目前為測試版，可能仍有裝置相容性問題。

---

## 聖經資料來源

本專案使用 Public Domain Chinese Union Version Traditional Bible text。

資料來源說明：

```text
Title: Chinese Union Version (Traditional)
Status: Public Domain
Language: Chinese
Dialect: Mandarin, Traditional Script
PDF generated using Haiola and XeLaTeX on 22 May 2026
Source files dated: 12 Dec 2025
Identifier: c03bb35c-f042-59c2-88d7-1111d9a01842
```

本專案並非香港聖經公會、聯合聖經公會或任何官方聖經機構出版。

---

## 內容原則

本 App 的靈修內容以基督新教與唯獨聖經原則為方向，目標是幫助使用者每日回到聖經本身。

內容原則包括：

* 以《舊約聖經》與《新約聖經》為最高權威
* 中文經文以《和合本聖經（繁體）》為準
* 不以教會傳統、個人經驗、異象或靈修感動作為教義根據
* 不使用天主教教義作為解經基礎
* 不把聖經沒有明確啟示的內容說成定論
* 合理推論需與經文本身保持界線

每日靈修內容仍會持續進行人工審核、修訂與優化。

---

## AI 使用說明

本 App 本身不接駁 OpenAI API 或任何 AI API。

所有經文與靈修內容均預先整理並打包於 App 內，使用者打開 App 時不會產生 AI API 成本，也不需要伺服器即時生成內容。

開發期間可能使用 AI 工具協助：

* 程式開發
* 資料整理
* 內容草稿生成
* 格式檢查
* 相似度檢查
* 錯誤修正

但 App 正式使用時不會即時呼叫 AI API。

---

## 專案結構

可能的專案結構如下：

```text
daily-bible-app/
├── docs/
│   ├── index.html
│   ├── assets/
│   ├── manifest.json
│   └── service-worker.js
├── src/
├── public/
├── scripts/
├── outputs/
├── android-webview/
├── package.json
├── package-lock.json
├── README.md
└── .github/
    └── workflows/
        └── build.yml
```

`docs/` 用於 GitHub Pages Web 版部署。
`outputs/` 用於產生 build 檔案或資料輸出。
`scripts/` 用於資料處理、驗證及 build 輔助工具。
`android-webview/` 用於 Android WebView APK 測試版。

---

## 開發與 Build

安裝依賴：

```bash
npm install
```

Web build：

```bash
npm run build
```

如有 Android WebView build script，可使用：

```bash
scripts/build-android-webview-apk.bat
```

成功後 APK 可能輸出至：

```text
outputs/daily-bible-devotional-webview-debug.apk
```

實際指令需按專案內 `package.json` 與 scripts 設定為準。

---

## GitHub Pages 部署

本專案 Web 版使用 GitHub Pages。

部署來源：

```text
Branch: main
Folder: /docs
```

網站網址：

```text
https://sion-rgb.github.io/daily-bible-app/
```

如更新後頁面沒有即時變化，可能是瀏覽器或 Service Worker 快取問題，可嘗試：

```text
https://sion-rgb.github.io/daily-bible-app/?v=2
```

或清除瀏覽器網站快取後重新開啟。

---

## 已知限制

* Android APK 仍為測試版
* Windows EXE 未作商業代碼簽署
* iOS 原生 App 暫未提供
* 部分每日靈修內容仍會持續人工審核與修訂
* Web App 離線快取可能導致更新後需要重新整理或清除快取

---

## 免責聲明

本 App 為個人 / 非官方聖經靈修工具，並非任何聖經公會或官方教會機構出版。

靈修內容只作每日讀經輔助，不能取代個人查考聖經本身。使用者應以聖經經文本身為最高依據，並對解說內容作審慎分辨。

---

## License

Bible text: Public Domain
App code: 請按專案需要選擇合適 License
Devotional content: Copyright by project author unless otherwise stated

---

## 作者

Sion Barzahd

Project Repository:

```text
https://github.com/sion-rgb/daily-bible-app
```
