if (!JSON.isRawJSON) await import('https://esm.sh/core-js').catch(_ => 0)

if (globalThis.document) await import('./browser.mjs').catch(_ => 0)
