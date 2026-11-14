// food-picture-01 entry (Node 22, standard library only): the picture is the
// entry.png beside this file, and the program copies it to /output/entry.png.
//
// The image is a steaming bowl of gourmet ramen — rich golden broth with
// glistening oil droplets and chili-oil swirls, jammy soft eggs with glossy
// yolks, caramelized chashu pork, fresh green onions, nori and bamboo shoots,
// chopsticks on the rim, warm natural light on a dark rustic table. It was
// generated to make the judge hungry at first glance and to read clearly
// even at 300 pixels across, with the bowl filling the frame.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
