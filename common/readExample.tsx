import fs from 'fs';
import hljs from 'highlight.js';
import path from 'path';

export const readExample = (): Record<string, string> => {
    const dirPath = path.join(process.cwd(), 'example');
    const result: Record<string, string> = {};

    const readDirRecursive = (dir: string) => {
        const entries = fs.readdirSync(dir, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            const relativePath = `.${path.sep}${path.relative(process.cwd(), fullPath)}`;

            if (entry.isDirectory()) {
                readDirRecursive(fullPath);
            } else {
                const file = fs.readFileSync(fullPath, 'utf8');

                const relativeToCWDPath = `.${path.sep}${path.relative(dirPath, fullPath)}`;

                const fileWithComment = `// ${relativeToCWDPath}\n\n${file}`

                const {value} = hljs.highlight(fileWithComment, {
                    language: 'typescript'
                })
                
                result[relativePath] = value
            }
        }
    };

    readDirRecursive(dirPath);

    return result;
};
