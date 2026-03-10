# User Manage - 用户信息管理系统

前后端分离的全栈项目，用于管理用户信息。

## 技术栈

### 后端 (backend/)
- **Spring Boot 3.5.0**
- **Spring Data JPA** - 数据持久化
- **MySQL** - 数据库
- **Lombok** - 简化代码
- **Maven** - 构建工具

### 前端 (frontend/)
- **Vue 3** - 框架
- **TypeScript** - 类型安全
- **Vue Router** - 路由管理
- **Pinia** - 状态管理
- **Vite** - 构建工具
- **Vitest** - 单元测试

## 项目结构

```
user-manage/
├── backend/          # Spring Boot 后端
│   ├── src/
│   └── pom.xml
├── frontend/         # Vue 前端
│   ├── src/
│   └── package.json
├── docs/             # 项目文档
└── docker-compose.yml # 容器编排（待添加）
```

## 快速开始

### 后端
```bash
cd backend
./mvnw spring-boot:run
```

### 前端
```bash
cd frontend
npm install
npm run dev
```

## 开发计划

- [ ] 用户 CRUD 接口
- [ ] 前端页面开发
- [ ] 数据库设计
- [ ] 登录认证
- [ ] 部署配置
