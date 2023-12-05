import fs from 'fs/promises';

export const readFileLines = async (path: string): Promise<string[]> => {
  try {
    const file: string = await fs.readFile(path, {
      encoding: 'utf-8',
    });

    return file.trim().split('\n');
  } catch (err) {
    throw new Error(`readFileLines Failed ${err}`);
  }
};
