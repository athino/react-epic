import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { cwd } from 'process';

export const writeHTMLFiles = (arg: {
    files: Array<{
        filename: string
        html: string
    }>
}) => {
    const outputDir = join(cwd(), '.');
    mkdirSync(outputDir, { recursive: true });
    
    arg.files.map((file) => {
        const path = join(outputDir, file.filename);
        writeFileSync(path, file.html, 'utf8');
        console.log(`File written to ${path}`);    
    })
}
