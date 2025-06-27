#!/bin/bash

# 获取项目名称
PROJECT_NAME=$1

# 检查是否提供了项目名称
if [ -z "$PROJECT_NAME" ]; then
    echo "❌ 请提供项目名称！"
    echo "使用方法: ./create-vue-project.sh <项目名称>"
    echo "示例: ./create-vue-project.sh my-vue-app"
    exit 1
fi

# 检查项目名称是否合法（只允许字母、数字、连字符和下划线）
if [[ ! $PROJECT_NAME =~ ^[a-zA-Z0-9_-]+$ ]]; then
    echo "❌ 项目名称只能包含字母、数字、连字符和下划线！"
    exit 1
fi

# 确保 apps 目录存在
if [ ! -d "apps" ]; then
    mkdir -p apps
fi

# 检查项目目录是否已存在
if [ -d "apps/$PROJECT_NAME" ]; then
    echo "❌ 项目目录 \"apps/$PROJECT_NAME\" 已存在！"
    exit 1
fi

# 模板仓库 URL - 修正为正确的 degit 格式
TEMPLATE_URL="192114/vue-turbo-monorepo/apps/web"

echo "🚀 正在创建 Vue 项目: $PROJECT_NAME"
echo "📦 使用模板: $TEMPLATE_URL"
echo "📁 项目将创建在: apps/$PROJECT_NAME"

# 使用 degit 克隆模板到 apps 目录
echo "📥 正在下载模板..."
pnpx degit --force "$TEMPLATE_URL" "apps/$PROJECT_NAME"

# 检查是否成功创建项目  
if [ ! -d "apps/$PROJECT_NAME" ]; then
    echo "❌ 项目创建失败！"
    exit 1
fi

# 进入项目目录
cd "apps/$PROJECT_NAME"

# 检查 package.json 是否存在并安装依赖
if [ -f "package.json" ]; then
    echo "📦 正在安装依赖..."
    pnpm install
else
    echo "⚠️  未找到 package.json，跳过依赖安装"
fi

# 创建 .gitignore 文件（如果不存在）
if [ ! -f ".gitignore" ]; then
    echo "📝 创建 .gitignore 文件..."
    cat > .gitignore << 'EOF'
# Dependencies
node_modules/
.pnp
.pnp.js

# Production
dist/
build/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Editor directories and files
.vscode/
.idea/
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Turbo
.turbo/
EOF
fi

# 更新 package.json 中的项目名称
if [ -f "package.json" ]; then
    echo "📝 更新 package.json 中的项目名称..."
    # 使用 sed 更新 package.json 中的 name 字段
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        sed -i '' "s/\"name\": \"[^\"]*\"/\"name\": \"$PROJECT_NAME\"/" package.json
    else
        # Linux
        sed -i "s/\"name\": \"[^\"]*\"/\"name\": \"$PROJECT_NAME\"/" package.json
    fi
fi

echo ""
echo "✅ 项目创建成功！"
echo "📁 项目路径: $(pwd)"
echo ""
echo "🚀 开始开发:"
echo "  cd apps/$PROJECT_NAME"
echo "  pnpm run dev"
echo ""
echo "📚 更多命令:"
echo "  pnpm run build    # 构建生产版本"
echo "  pnpm run preview  # 预览生产版本"
echo "  pnpm run lint     # 代码检查" 