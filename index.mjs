await import('http://esm.run/core-js')

// fix firefox and safari's anchor
if (!('anchorName' in document.documentElement.style))
	import('https://esm.run/@oddbird/css-anchor-positioning')

if (!('popover' in HTMLElement.prototype))
	await import('https://esm.run/@oddbird/popover-polyfill')

const scripts = Array.from(document.querySelectorAll('script'))
if (scripts.some(script => script.src?.includes?.('@tailwindcss/browser')))
	import('./scripts/tailwindcssCdnFixer.mjs').then(({ fixTailwindcssCDN }) => fixTailwindcssCDN())
