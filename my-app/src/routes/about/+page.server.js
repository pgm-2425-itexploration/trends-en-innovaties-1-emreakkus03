import { readFile } from 'fs/promises';

export async function load() {
  const dataPath = './src/lib/data/about.json'; 
  const jsonData = await readFile(dataPath, 'utf-8');
  const about = JSON.parse(jsonData);


  return {
    about
  };
}
