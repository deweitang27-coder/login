const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

// 中间件
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('.'));

// 模拟用户数据
const users = [
  {
    id: 1,
    email: 'user@example.com',
    password: 'password123',
    name: 'Test User'
  }
];

// 登录 API
app.post('/api/login', (req, res) => {
  console.log('Login request received:', req.body);
  const { email, password } = req.body;
  
  // 查找用户
  const user = users.find(u => u.email === email && u.password === password);
  console.log('User found:', user);
  
  if (user) {
    // 登录成功
    res.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name
      }
    });
  } else {
    // 登录失败
    res.json({
      success: false,
      message: 'Invalid email or password'
    });
  }
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});