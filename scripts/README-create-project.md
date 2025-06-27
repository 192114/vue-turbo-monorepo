# Vue 项目创建脚本

这个仓库包含了两个脚本，用于从指定的 GitHub 模板创建新的 Vue 项目。

## 模板来源

脚本使用以下模板：
- **GitHub 仓库**: https://github.com/192114/vue-turbo-monorepo/tree/master/apps/web
- **模板路径**: `apps/web` 目录

## 可用的脚本

### 1. Shell 脚本 (推荐)

**文件名**: `create-vue-project.sh`

**使用方法**:
```bash
./create-vue-project.sh <项目名称>
```

**示例**:
```bash
./create-vue-project.sh my-vue-app
```

### 2. Node.js 脚本

**文件名**: `create-vue-project.js`

**使用方法**:
```bash
node create-vue-project.js <项目名称>
```

**示例**:
```bash
node create-vue-project.js my-vue-app
```

## 功能特性

两个脚本都提供以下功能：

### ✅ 输入验证
- 检查是否提供了项目名称
- 验证项目名称格式（只允许字母、数字、连字符和下划线）
- 检查项目目录是否已存在

### 📦 自动安装
- 自动检查并安装 `degit`（如果未安装）
- 自动安装项目依赖

### 🔧 项目配置
- 自动更新 `package.json` 中的项目名称
- 创建标准的 `.gitignore` 文件（如果不存在）

### 🎨 用户体验
- 彩色输出，提供清晰的进度反馈
- 详细的错误信息
- 创建完成后的使用指南

## 系统要求

- **Node.js**: 需要安装 Node.js 和 npm
- **操作系统**: 支持 macOS 和 Linux
- **网络**: 需要网络连接来下载模板

## 使用步骤

1. **克隆或下载脚本**
   ```bash
   # 如果脚本在当前目录
   ls create-vue-project.sh
   ```

2. **给脚本添加执行权限** (仅 shell 脚本)
   ```bash
   chmod +x create-vue-project.sh
   ```

3. **运行脚本**
   ```bash
   # 使用 shell 脚本
   ./create-vue-project.sh my-project-name
   
   # 或使用 Node.js 脚本
   node create-vue-project.js my-project-name
   ```

4. **开始开发**
   ```bash
   cd my-project-name
   npm run dev
   ```

## 创建的项目结构

脚本会创建一个基于 Vue 3 + Vite 的项目，包含：

```
my-project-name/
├── src/
│   ├── App.vue
│   ├── main.ts
│   └── assets/
├── public/
├── package.json
├── vite.config.ts
├── tsconfig.json
├── .gitignore
└── README.md
```

## 可用的 npm 脚本

创建项目后，你可以使用以下命令：

```bash
npm run dev      # 启动开发服务器
npm run build    # 构建生产版本
npm run preview  # 预览生产版本
npm run lint     # 代码检查
```

## 故障排除

### 常见问题

1. **权限错误**
   ```bash
   chmod +x create-vue-project.sh
   ```

2. **Node.js 未安装**
   - 访问 [nodejs.org](https://nodejs.org) 下载并安装 Node.js

3. **网络连接问题**
   - 检查网络连接
   - 确保可以访问 GitHub

4. **项目名称包含特殊字符**
   - 只使用字母、数字、连字符和下划线

### 错误信息

- `❌ 请提供项目名称！` - 需要提供项目名称参数
- `❌ 项目名称只能包含字母、数字、连字符和下划线！` - 项目名称格式不正确
- `❌ 项目目录 "xxx" 已存在！` - 目录已存在，请选择其他名称
- `❌ 未找到 npx，请先安装 Node.js` - 需要安装 Node.js

## 贡献

如果你想要改进这些脚本，可以：

1. Fork 这个仓库
2. 创建你的特性分支
3. 提交你的更改
4. 推送到分支
5. 创建一个 Pull Request

## 许可证

这些脚本遵循 MIT 许可证。 