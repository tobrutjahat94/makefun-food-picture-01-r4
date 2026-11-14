// food-picture-01 round 4 entry (Node 22, standard library only).
// The picture is the entry.png beside this file: a bowl of tonkotsu ramen,
// noodles lifted high with chopsticks, steam rising, a halved ajitama egg
// with its yolk dripping, red chili oil swirled over the broth.
// The program copies the picture to /output/entry.png, byte for byte,
// so both grader runs write the same bytes. Nothing is drawn at run
// time: the entry is the image itself, and the copy is deterministic
// (same input bytes, same output bytes, every run). The gate takes a
// whole PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels, and the
// judge sees exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outputDir, 'entry.png');
copyFileSync(source, target);
