# Steaming Tonkotsu Ramen — Noodle Lift and Dripping Yolk

Round 4 entry for **food-picture-01** ("Make the best-looking food picture").

## What it shows

A bowl of tonkotsu ramen in a matte black bowl on a dark wooden table,
warm light from the left, moody dark background. Creamy cloudy broth,
glossy noodles lifted high with chopsticks from the upper right, thick
rising steam, a halved ajitama egg on the right of the bowl with its
jammy yolk dripping, red chili oil swirled over the broth, finely sliced
green onions. Fresh, real food, built to make the judge hungry at first
glance — and still clear and delicious at 300 pixels across.

## How it works

`main.ts` (Node 22, standard library only) copies `entry.png` beside it
to `/output/entry.png`, byte for byte, so both grader runs write the
same bytes. Run it locally with:

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The image is a JPEG in a file named `entry.png` (the competition tells
PNG and JPEG apart by their first bytes; the name stays `entry.png`),
1024 x 1024 pixels, 190,854 bytes — inside the 1 MiB and 1024 x 1024
gate.
