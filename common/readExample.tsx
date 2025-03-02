import fs from 'fs/promises';
import path from 'path';
import {tokenize} from './tokenize/tokenize';

export const readExample = async (): Promise<Record<string, string>> => {
    const dirPath = path.join(process.cwd(), 'example');
    const result: Record<string, string> = {};

    const readDirRecursive = async (dir: string): Promise<void> => {
        const entries = await fs.readdir(dir, { withFileTypes: true });

        await Promise.all(
            entries.map(async (entry) => {
                const fullPath = path.join(dir, entry.name);
                const relativePath = `.${path.sep}${path.relative(process.cwd(), fullPath)}`;

                if (entry.isDirectory()) {
                    await readDirRecursive(fullPath);
                } else {
                    const file = await fs.readFile(fullPath, 'utf8');
                    const relativeToCWDPath = `// .${path.sep}${path.relative(dirPath, fullPath)}`;
                    const fileWithComment = `${relativeToCWDPath}\n\n${file}`;

                    const mok = tokenize(fileWithComment).map(({text, kind}) => {
                        return `<span class="${kind}">${text}</span>`
                    }).join('')

                    result[relativePath] = mok;
                }
            })
        );
    };

    await readDirRecursive(dirPath)

    return result
};
