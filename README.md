# fundNext_app

## <a name="introduction">项目简介</a>
这是一款基于Next.js开发的应用程序，使用了 Next.js 的主要功能（File-based Route、Serverless Route Handle、SSR）以及利用 MongoDB 数据库并进行 NextAuth 身份验证的全面 CRUD AI 建议共享系统。


## <a name="tech-stack">技术栈</a>

- Next.js
- MongoDB
- NextAuth
- TailwindCSS


## <a name="features">功能</a>
👉  允许用户发现社区共享的人工智能建议，并创建自己的建议与世界分享。

👉  用户可以随时编辑自己创建的建议，并在需要时删除它们。

👉  每个用户都会获得一个专用的个人资料页面，其中展示了他们创建的所有建议，并提供了他们的贡献的概述。

👉  实现便捷的“复制到剪贴板”功能，方便用户轻松复制AI建议以供使用。

👉  允许用户根据特定标签搜索建议，更轻松地找到与特定主题相关的建议。


## <a name="quick-start">快速开始</a>

**克隆项目**

```bash
git clone https://github.com/sunhx-shx/fundNext_app.git
```

**安装依赖**

```bash
 npm install
```

**设置环境变量**

在项目的根目录中创建一个名为“.env.local”的新文件并添加以下内容：

```env
  MONGO_URL=...
  PORT=3000

	EMAIL_SERVER=smtp://username:password@smtp.forwardemail.net:587
	EMAIL_FROM=support@example.com
```

**运行**

```bash
npm run dev
```

打开地址[http://localhost:3000](http://localhost:3000) 即可预览项目内容