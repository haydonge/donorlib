# 最简单的页面保护方案

## 🎯 功能特点

- ✅ **纯前端验证**：无需服务器配置
- ✅ **本地存储**：使用localStorage，刷新页面仍有效
- ✅ **一键退出**：右上角退出按钮
- ✅ **零依赖**：无需安装任何包

## 🚀 使用方法

### 方案1：在需要保护的页面添加脚本

在任何需要保护的 `.astro` 或 `.html` 文件的 `<head>` 部分添加：

```html
<script src="/protect.js"></script>
```

### 方案2：全局保护（推荐）

在 `src/layouts/` 下的布局文件中添加保护脚本：

```astro
---
// 在布局文件头部
---
<html>
<head>
    <!-- 其他meta标签 -->
    <script src="/protect.js"></script>
</head>
<body>
    <!-- 页面内容 -->
</body>
</html>
```

## 🔑 访问密码

**密码：** 请联系微信haydonge

## 📝 文件说明

- `/src/pages/login.astro` - 登录页面
- `/public/protect.js` - 保护脚本
- 认证状态保存在 `localStorage['donorlib-auth']`

## 🔧 自定义配置

### 修改密码

编辑 `/src/pages/login.astro` 文件第 85 行：

```javascript
if (password === 'donorlib2024') {  // 改为您的密码
```

### 修改存储键名

编辑两个文件中的存储键名：

- `/src/pages/login.astro` 中的 `'donorlib-auth'`
- `/public/protect.js` 中的 `'donorlib-auth'`

## 🎉 完成！

现在您的文档站点已经有了最简单的密码保护。用户需要输入正确密码才能访问内容。

访问 `/login` 进行登录，或直接访问任何页面会自动跳转到登录页面。
