# GitHub Pages 部署指南

## 自动部署（推荐）

### 1. 创建 GitHub 仓库
1. 登录 GitHub，创建新仓库
2. 仓库名可以是任意名称（如：fund-tracker）
3. 设置为 Public（GitHub Pages 免费版需要公开仓库）

### 2. 上传代码到 GitHub
```bash
# 初始化 git 仓库
git init

# 添加所有文件
git add .

# 提交代码
git commit -m "Initial commit"

# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/你的用户名/你的仓库名.git

# 推送到 main 分支
git branch -M main
git push -u origin main
```

### 3. 启用 GitHub Pages
1. 进入仓库的 Settings 页面
2. 滚动到 "Pages" 部分
3. 在 "Source" 下选择 "GitHub Actions"
4. 保存设置

### 4. 等待部署完成
- 推送代码后，GitHub Actions 会自动运行
- 在 Actions 标签页可以查看部署进度
- 部署成功后，网站地址为：`https://你的用户名.github.io/你的仓库名`

## 手动部署

如果你想手动部署，可以使用以下命令：

```bash
# 安装依赖
npm install

# 构建静态文件
npm run build

# 部署到 gh-pages 分支
npm run deploy
```

## 重要配置说明

### 如果仓库名不是 `用户名.github.io`
需要在 `next.config.js` 中取消注释并修改以下配置：

```javascript
basePath: '/你的仓库名',
assetPrefix: '/你的仓库名/',
```

### 如果使用自定义域名
1. 在 `public` 目录下创建 `CNAME` 文件
2. 文件内容为你的域名（如：`fund.example.com`）
3. 在域名提供商处设置 CNAME 记录指向 `你的用户名.github.io`

## 故障排除

### 1. 页面显示 404
- 检查 `basePath` 和 `assetPrefix` 配置
- 确保 GitHub Pages 已正确启用

### 2. 样式或脚本加载失败
- 检查 `assetPrefix` 配置
- 确保所有资源路径正确

### 3. API 请求失败
- GitHub Pages 是静态托管，确保所有 API 调用都是客户端发起的
- 检查 CORS 设置

## 更新网站

每次推送到 main 分支时，GitHub Actions 会自动重新部署网站。