// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is an X post, not this program: the meme lives on X, and this
// program only hands the post's address to the gate by copying POST.json
// from the repository into the output directory. The house reads the post
// itself — its first picture and its text — and an AI judge compares the
// posts two at a time.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
try {
  copyFileSync(join(repoDir, 'POST.json'), join(outDir, 'POST.json'));
} catch (err) {
  console.error(`Could not copy POST.json out of ${repoDir}: ${(err as Error).message}`);
  process.exit(1);
}
console.log(`POST.json copied to ${join(outDir, 'POST.json')}`);
