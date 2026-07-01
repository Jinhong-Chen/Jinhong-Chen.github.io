---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 5befbee4af0da1cf7c3aaced27a98a04_89449a9c757c11f1a7da5254006c9bbf
    ReservedCode1: qH3+phws2bKxCRKw4nj/6Cjx6vjrAxUB0FYozpzHo4a6q51vW/JpAisavSsMObB3rgeAUS1bf36YPApdmDFfu4EaZz0jy+okRNbJG4g/hlkDzyFefex6aKwaW2FVMgJmbVLx8DmBHq0Xccxcq5hZ7btWfwV06wC7qOl1Qp3wx+FxJnvUW6h6ykyxLZ8=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 5befbee4af0da1cf7c3aaced27a98a04_89449a9c757c11f1a7da5254006c9bbf
    ReservedCode2: qH3+phws2bKxCRKw4nj/6Cjx6vjrAxUB0FYozpzHo4a6q51vW/JpAisavSsMObB3rgeAUS1bf36YPApdmDFfu4EaZz0jy+okRNbJG4g/hlkDzyFefex6aKwaW2FVMgJmbVLx8DmBHq0Xccxcq5hZ7btWfwV06wC7qOl1Qp3wx+FxJnvUW6h6ykyxLZ8=
---

# TODO_NAME | Embodied AI Portfolio

基于纯静态 HTML/CSS/JS 构建的个人作品集网站，支持中英文切换和明暗主题。部署于 GitHub Pages。

## 项目结构

```
embodied-ai-portfolio/
├── index.html              # 主页面
├── assets/
│   ├── css/
│   │   └── style.css       # 全局样式（含明暗主题变量）
│   ├── js/
│   │   ├── i18n.js         # 中英文切换逻辑
│   │   └── main.js         # 主题切换、滚动动画、交互逻辑
│   ├── images/             # 项目图片（占位）
│   └── files/              # 简历等文件（占位）
├── lang/
│   ├── zh.json             # 中文语言包
│   └── en.json             # 英文语言包
└── README.md
```

## 技术栈

- 纯静态 HTML/CSS/JS（无框架依赖）
- Font Awesome 6.5 CDN 图标
- CSS 自定义属性（CSS Variables）实现主题切换
- 响应式布局（Flexbox + Grid）
- Intersection Observer 滚动动画

## 本地预览

### 方式一：Python HTTP 服务器（推荐）

```bash
cd embodied-ai-portfolio
python -m http.server 8080
```

浏览器访问 `http://localhost:8080`

### 方式二：VS Code Live Server

安装 Live Server 插件，右键 `index.html` → "Open with Live Server"。

### 方式三：直接打开

双击 `index.html` 用浏览器打开（部分功能可能因跨域限制受影响）。

## 部署到 GitHub Pages

1. 创建一个名为 `<你的用户名>.github.io` 的 GitHub 仓库
2. 将本项目所有文件推送到该仓库：

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/<用户名>/<用户名>.github.io.git
git push -u origin main
```

3. 进入仓库 Settings → Pages → Source 选择 `main` 分支 → Save
4. 等待 1-2 分钟后访问 `https://<用户名>.github.io`

## 自定义配置

### 替换个人信息

1. 全局搜索 `TODO_NAME` 并替换为你的真实姓名
2. 全局搜索 `TODO_EMAIL` 替换为你的邮箱
3. 全局搜索 `TODO_GITHUB` 替换为你的 GitHub 用户名
4. 修改 `lang/zh.json` 和 `lang/en.json` 中的文案
5. 替换 `assets/images/` 中的项目图片占位
6. 将简历 PDF 放入 `assets/files/` 目录

### 自定义主题色

修改 `assets/css/style.css` 中的 CSS 变量：

- Light theme: `:root` 块
- Dark theme: `[data-theme="dark"]` 块

主要颜色变量：
- `--accent`: 强调色
- `--accent-glow`: 发光效果
- `--cyan`: 辅助青色

## License

MIT
*（内容由AI生成，仅供参考）*
