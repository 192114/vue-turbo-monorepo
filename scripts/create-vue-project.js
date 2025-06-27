#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 获取命令行参数
const args = process.argv.slice(2);
const projectName = args[0];

// 检查是否提供了项目名称
if (!projectName) {
  console.error('❌ 请提供项目名称！');
  console.log('使用方法: node create-vue-project.js <项目名称>');
  console.log('示例: node create-vue-project.js my-vue-app');
  process.exit(1);
}

// 检查项目名称是否合法
if (!/^[a-zA-Z0-9-_]+$/.test(projectName)) {
  console.error('❌ 项目名称只能包含字母、数字、连字符和下划线！');
  process.exit(1);
}

// 确保 apps 目录存在
const appsDir = path.join(process.cwd(), 'apps');
if (!fs.existsSync(appsDir)) {
  fs.mkdirSync(appsDir, { recursive: true });
}

// 检查项目目录是否已存在
const projectPath = path.join(appsDir, projectName);
if (fs.existsSync(projectPath)) {
  console.error(`❌ 项目目录 "apps/${projectName}" 已存在！`);
  process.exit(1);
}

// 模板仓库 URL - 修正为正确的 degit 格式
const templateUrl = '192114/vue-turbo-monorepo/apps/web';

console.log(`🚀 正在创建 Vue 项目: ${projectName}`);
console.log(`📦 使用模板: ${templateUrl}`);
console.log(`📁 项目将创建在: apps/${projectName}`);

try {
  // 使用 degit 克隆模板到 apps 目录
  console.log('📥 正在下载模板...');
  execSync(`pnpx degit ${templateUrl} apps/${projectName}`, { stdio: 'inherit' });

  // 进入项目目录
  process.chdir(projectPath);

  // 检查 package.json 是否存在
  if (fs.existsSync('package.json')) {
    console.log('📦 正在安装依赖...');
    execSync('pnpm install', { stdio: 'inherit' });
  } else {
    console.log('⚠️  未找到 package.json，跳过依赖安装');
  }

  // 创建 .gitignore 文件（如果不存在）
  if (!fs.existsSync('.gitignore')) {
    const gitignoreContent = `# Dependencies
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
pnpm-debug.log*
yarn-debug.log*
yarn-error.log*
ppnpm-debug.log*

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
`;
    fs.writeFileSync('.gitignore', gitignoreContent);
  }

  // 更新 package.json 中的项目名称
  if (fs.existsSync('package.json')) {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    packageJson.name = projectName;
    fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
  }

  console.log('\n✅ 项目创建成功！');
  console.log(`📁 项目路径: ${projectPath}`);
  console.log('\n🚀 开始开发:');
  console.log(`  cd apps/${projectName}`);
  console.log('  pnpm run dev');
  console.log('\n📚 更多命令:');
  console.log('  pnpm run build    # 构建生产版本');
  console.log('  pnpm run preview  # 预览生产版本');
  console.log('  pnpm run lint     # 代码检查');

} catch (error) {
  console.error('❌ 创建项目时发生错误:', error.message);
  process.exit(1);
} 