#!/usr/bin/env node

import { Command } from 'commander';
import prompts from 'prompts';
import chalk from 'chalk';
import ora from 'ora';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const program = new Command();

program
  .name('create-pnpm-custom-app')
  .description('Scaffold a professional full-stack monorepo with Next.js, Fastify, and pnpm workspaces')
  .version('1.0.0')
  .argument('[project-name]', 'Name of the project')
  .parse(process.argv);

const args = program.args;

async function main() {
  console.log(chalk.bold.cyan('\n🚀 Create PNPM Custom App\n'));

  let projectName = args[0];

  if (!projectName) {
    const response = await prompts({
      type: 'text',
      name: 'projectName',
      message: 'What is your project name?',
      initial: 'my-app',
      validate: (value) => (value.length > 0 ? true : 'Project name is required'),
    });

    if (!response.projectName) {
      console.log(chalk.red('\n❌ Project creation cancelled.'));
      process.exit(1);
    }

    projectName = response.projectName;
  }

  const projectPath = path.resolve(process.cwd(), projectName);

  if (fs.existsSync(projectPath)) {
    console.log(chalk.red(`\n❌ Directory "${projectName}" already exists.`));
    process.exit(1);
  }

  console.log(chalk.gray(`\n📁 Creating project at: ${projectPath}\n`));

  const spinner = ora('Creating project structure...').start();

  try {
    // Create project directory
    fs.mkdirSync(projectPath, { recursive: true });

    // Copy all templates
    const templatesDir = path.join(__dirname, '../templates');
    fs.copySync(templatesDir, projectPath);

    // Rename gitignore files (npm publish removes .gitignore)
    const gitignoreRootPath = path.join(projectPath, 'gitignore-root');
    if (fs.existsSync(gitignoreRootPath)) {
      fs.renameSync(gitignoreRootPath, path.join(projectPath, '.gitignore'));
    }

    const webGitignorePath = path.join(projectPath, 'apps/web/gitignore');
    if (fs.existsSync(webGitignorePath)) {
      fs.renameSync(webGitignorePath, path.join(projectPath, 'apps/web/.gitignore'));
    }

    const apiGitignorePath = path.join(projectPath, 'apps/api/gitignore');
    if (fs.existsSync(apiGitignorePath)) {
      fs.renameSync(apiGitignorePath, path.join(projectPath, 'apps/api/.gitignore'));
    }

    // Replace project name in package.json files
    const packageJsonPaths = [
      path.join(projectPath, 'package.json'),
      path.join(projectPath, 'apps/web/package.json'),
      path.join(projectPath, 'apps/api/package.json'),
      path.join(projectPath, 'packages/shared/package.json'),
    ];

    packageJsonPaths.forEach((pkgPath) => {
      if (fs.existsSync(pkgPath)) {
        const content = fs.readFileSync(pkgPath, 'utf-8');
        const updated = content.replace(/\{\{PROJECT_NAME\}\}/g, projectName);
        fs.writeFileSync(pkgPath, updated);
      }
    });

    // Replace project name in all other files (tsx, ts, md, json, etc.)
    const filesToReplace = [
      path.join(projectPath, 'README.md'),
      path.join(projectPath, 'CONTRIBUTING.md'),
      path.join(projectPath, 'apps/web/app/layout.tsx'),
      path.join(projectPath, 'apps/web/app/manifest.json'),
      path.join(projectPath, 'apps/web/app/components/layout/Nav.component.tsx'),
      path.join(projectPath, 'apps/web/messages/en.json'),
      path.join(projectPath, 'apps/web/messages/es.json'),
      path.join(projectPath, 'apps/api/src/app.ts'),
      path.join(projectPath, 'packages/shared/src/index.ts'),
      path.join(projectPath, '.github/copilot-instructions.md'),
    ];

    filesToReplace.forEach((filePath) => {
      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf-8');
        const updated = content.replace(/\{\{PROJECT_NAME\}\}/g, projectName);
        fs.writeFileSync(filePath, updated);
      }
    });

    spinner.succeed(chalk.green('Project structure created!'));

    // Install dependencies
    spinner.start('Installing dependencies with pnpm... This may take a few minutes.');
    
    try {
      execSync('pnpm install', { cwd: projectPath, stdio: 'ignore' });
      spinner.succeed(chalk.green('Dependencies installed successfully!'));
    } catch (error) {
      spinner.warn(chalk.yellow('Could not install dependencies automatically.'));
      console.log(chalk.gray('  Run `pnpm install` manually inside the project.'));
    }

    // Success message
    console.log(chalk.bold.green(`\n✅ Project "${projectName}" created successfully!\n`));
    console.log(chalk.cyan('📦 Project structure:'));
    console.log(chalk.gray('  ├── apps/'));
    console.log(chalk.gray('  │   ├── web/        (Next.js 16 + TypeScript + Tailwind 4)'));
    console.log(chalk.gray('  │   └── api/        (Fastify + MongoDB + TypeScript)'));
    console.log(chalk.gray('  ├── packages/'));
    console.log(chalk.gray('  │   └── shared/     (Shared types and interfaces)'));
    console.log(chalk.gray('  └── docs/           (Project documentation)\n'));

    console.log(chalk.cyan('🚀 Next steps:'));
    console.log(chalk.white(`  1. cd ${projectName}`));
    console.log(chalk.white('  2. Copy .env.example files and configure:'));
    console.log(chalk.gray('     - apps/web/.env.local'));
    console.log(chalk.gray('     - apps/api/.env'));
    console.log(chalk.white('  3. Start development:'));
    console.log(chalk.gray('     - Frontend: pnpm --filter web dev'));
    console.log(chalk.gray('     - Backend:  pnpm --filter api dev'));
    console.log(chalk.white('  4. Read the README.md for more information\n'));

    console.log(chalk.bold.magenta('Happy coding! 🎉\n'));

  } catch (error) {
    spinner.fail(chalk.red('Failed to create project'));
    console.error(error);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(chalk.red('An error occurred:'), error);
  process.exit(1);
});
