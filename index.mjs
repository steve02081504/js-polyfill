await import('http://esm.run/core-js')

if (globalThis.document) await import('./browser.mjs')
