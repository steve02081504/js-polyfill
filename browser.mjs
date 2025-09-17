if (!('anchorName' in document.documentElement.style))
	import('https://esm.sh/@oddbird/css-anchor-positioning').catch(_ => 0)

if (!('popover' in HTMLElement.prototype))
	await import('https://esm.sh/@oddbird/popover-polyfill').catch(_ => 0)

if (!navigator?.plugins?.['Shockwave Flash'])
	await import('https://esm.sh/@ruffle-rs/ruffle').catch(_ => 0)

const scripts = Array.from(document.querySelectorAll('script'))
if (scripts.some(script => script.src?.includes?.('@tailwindcss/browser')))
	import('https://esm.sh/@unocss/runtime')
