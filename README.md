# 可爱风格登录界面

一个高质量的可爱风格登录页面，采用玻璃拟态设计和流畅的动画效果。

## 项目结构

```
login-ui/
├── public/              # 前端静态文件
│   └── index.html       # 登录页面
├── server.js            # 后端服务器
├── package.json         # 项目配置
└── README.md            # 项目说明
```

## 技术栈

- **前端**：HTML5 + CSS3 + JavaScript
- **后端**：Node.js + Express.js
- **设计风格**：可爱（kawaii）、玻璃拟态（glassmorphism）
- **响应式**：支持手机和电脑端

## 功能特性

- 🌺 可爱风格设计，柔和的马卡龙配色
- 🔮 玻璃拟态效果，带有模糊背景
- 🎨 流畅的动画效果（卡片浮动、背景渐变流动）
- 📱 响应式设计，适配各种屏幕尺寸
- 🔐 完整的登录功能，与后端API集成
- ✨ 装饰元素（漂浮气泡）

## 安装步骤

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd login-ui
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动服务器**
   ```bash
   npm start
   ```

4. **访问登录页面**
   打开浏览器访问：`http://localhost:3001`

## 测试账号

- **邮箱**：user@example.com
- **密码**：password123

## 设计亮点

1. **视觉设计**
   - 柔和的渐变背景
   - 玻璃拟态登录卡片
   - 圆角设计和柔和阴影

2. **交互效果**
   - 输入框焦点动画
   - 按钮悬停和点击效果
   - 卡片浮动动画
   - 密码可见性切换

3. **用户体验**
   - 清晰的视觉层次
   - 友好的错误提示
   - 响应式布局

## 后端API

### 登录接口
- **URL**：`/api/login`
- **方法**：POST
- **请求体**：
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **响应**：
  ```json
  {
    "success": true,
    "user": {
      "id": 1,
      "email": "user@example.com",
      "name": "Test User"
    }
  }
  ```

## 开发说明

- 前端页面位于 `public/index.html`
- 后端服务器位于 `server.js`
- 端口配置为 3001
- 静态文件服务已配置，可直接访问HTML文件

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 许可证

MIT
