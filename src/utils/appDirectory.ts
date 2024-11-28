
import { app } from 'electron';
import { join } from 'node:path';
import { mkdtemp, rm } from 'node:fs/promises';

let appDirectory = null as string|null;

export const createAppDirectory = async () => {
  appDirectory = await mkdtemp(join(app.getPath('temp'), 'metaScore'));
  return appDirectory;
}

export const getAppDirectory = () => {
  return appDirectory;
}

export const clearAppDirectory = async () => {
  if (appDirectory) {
    try {
      await rm(appDirectory, { recursive: true });
    } catch (e) { /**/ }

    appDirectory = null;
  }
}