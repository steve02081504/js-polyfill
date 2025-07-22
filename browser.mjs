if (!('anchorName' in document.documentElement.style))
	import('https://esm.run/@oddbird/css-anchor-positioning').catch(_ => 0)

if (!('popover' in HTMLElement.prototype))
	await import('https://esm.run/@oddbird/popover-polyfill').catch(_ => 0)

if (!navigator?.plugins?.['Shockwave Flash'])
	await import('https://esm.run/@ruffle-rs/ruffle').catch(_ => 0)

const scripts = Array.from(document.querySelectorAll('script'))
if (scripts.some(script => script.src?.includes?.('@tailwindcss/browser')))
	import('https://esm.run/@unocss/runtime')
