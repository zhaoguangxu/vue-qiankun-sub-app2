#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// 获取项目根目录
const rootDir = process.cwd();

// 检查是否在Git仓库中
if (!fs.existsSync(path.join(rootDir, '.git'))) {
  console.error('❌ 错误：当前目录不是Git仓库！');
  process.exit(1);
}

// 检查.gitmessage文件是否存在
if (!fs.existsSync(path.join(rootDir, '.gitmessage'))) {
  console.error('❌ 错误：.gitmessage文件不存在！');
  process.exit(1);
}

try {
  // 配置Git提交模板
  execSync('git config commit.template .gitmessage', { stdio: 'inherit' });

  // 检查配置是否成功
  const template = execSync('git config commit.template').toString().trim();

  if (template === '.gitmessage') {
    console.log('✅ Git提交模板配置成功！');
    console.log('现在您可以使用 git commit 命令，将会自动加载提交模板。');
  } else {
    console.error('❌ Git提交模板配置失败！');
    process.exit(1);
  }
} catch (error) {
  console.error('❌ 配置过程中发生错误：', error.message);
  process.exit(1);
}
