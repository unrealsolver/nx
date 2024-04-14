import { join } from 'path';
import { readJson, Tree } from '@nx/devkit';
import { existsSync, readdirSync } from 'fs';

export const nxVersion = require('../../package.json').version;

export const remixVersion = '^2.8.1';
export const isbotVersion = '^4.4.0';
export const reactVersion = '^18.2.0';
export const reactDomVersion = '^18.2.0';
export const typesReactVersion = '^18.2.0';
export const typesReactDomVersion = '^18.2.0';
export const eslintVersion = '^8.56.0';
export const typescriptVersion = '^5.3.3';
export const tailwindVersion = '^3.3.0';
export const testingLibraryReactVersion = '^14.1.2';
export const testingLibraryJestDomVersion = '^6.2.0';
export const testingLibraryUserEventsVersion = '^14.5.2';

export function getRemixVersion(tree: Tree): string {
  return getPackageVersion(tree, '@remix-run/dev') ?? remixVersion;
}

export function getPackageVersion(tree: Tree, packageName: string) {
  const packageJsonContents = readJson(tree, 'package.json');
  return (
    packageJsonContents?.['devDependencies']?.[packageName] ??
    packageJsonContents?.['dependencies']?.[packageName] ??
    null
  );
}

/**
 * Infer bundler type depending on vite.config.ts presence
 * @param root workspace root path
 */
export function getBunlderType(root: string): 'classic' | 'vite' {
  return existsSync(join(root, 'vite.config.ts')) ? 'vite' : 'classic';
}
