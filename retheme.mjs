// Usage : node retheme.mjs src/App.tsx
// Crée une sauvegarde App.tsx.bak puis remplace les couleurs en dur par la palette rose.
import fs from 'node:fs'

const file = process.argv[2] || 'src/App.tsx'
let code = fs.readFileSync(file, 'utf8')
fs.writeFileSync(file + '.bak', code)

const HEX = {
  // fonds & surfaces
  '#f8f0e7': '#fbefea', // fond page
  '#fffaf4': '#fff8f5', // cartes
  '#f0ddd0': '#f7dfd9', // rose pâle (pills, actifs)
  '#f4e3d3': '#f9e4dd',
  '#f6ede3': '#f8ebe6',
  '#eee2d8': '#f3e1dc', // fond barres
  // bordures & lignes
  '#e3d0c0': '#ebcfc6',
  '#d8bca9': '#ddb1a5',
  '#cfb8a9': '#e0b9b0',
  // accent : bordeaux -> rose poudré
  '#6f2730': '#a65a68',
  '#511b22': '#7e3e4b',
  // textes
  '#3b2220': '#4a2730',
  '#765e54': '#8a6b6b',
  '#9d8171': '#a98b8b',
  '#64748b': '#8a6b6b',
  // couleurs hors palette (orange / vert / gris-bleu) -> rose gold & rose
  '#ea580c': '#a9715e',
  '#ea8a00': '#a9715e',
  '#f0fdf4': '#fbe9e3',
  '#059669': '#a65a68',
}

code = code.replace(/#[0-9a-fA-F]{6}\b/g, m => HEX[m.toLowerCase()] ?? m)

const RGBA = [
  [/rgba\(\s*111\s*,\s*39\s*,\s*48\s*,/g, 'rgba(166,90,104,'],
  [/rgba\(\s*59\s*,\s*34\s*,\s*32\s*,/g, 'rgba(74,39,48,'],
  [/rgba\(\s*234\s*,\s*88\s*,\s*12\s*,/g, 'rgba(169,113,94,'],
  [/rgba\(\s*5\s*,\s*150\s*,\s*105\s*,/g, 'rgba(166,90,104,'],
]
for (const [re, to] of RGBA) code = code.replace(re, to)

fs.writeFileSync(file, code)
console.log('OK -> ' + file + ' (sauvegarde : ' + file + '.bak)')
