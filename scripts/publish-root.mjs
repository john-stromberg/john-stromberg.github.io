import { cpSync, existsSync, rmSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')

rmSync(join(root, 'assets'), { recursive: true, force: true })
cpSync(join(dist, 'assets'), join(root, 'assets'), { recursive: true })
cpSync(join(dist, 'index.html'), join(root, 'index.html'))
cpSync(join(dist, 'favicon.svg'), join(root, 'favicon.svg'))

// Static demos from Vite public/ (e.g. /macro-desk, /wealth-center)
for (const demo of ['macro-desk', 'wealth-center']) {
  const from = join(dist, demo)
  const to = join(root, demo)
  if (!existsSync(from)) continue
  rmSync(to, { recursive: true, force: true })
  cpSync(from, to, { recursive: true })
}
