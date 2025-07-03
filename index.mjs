await import('https://esm.run/core-js').catch(_ => 0)

if (globalThis.document) await import('./browser.mjs').catch(_ => 0)
