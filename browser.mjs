if (!('anchorName' in document.documentElement.style))
	import('https://esm.sh/@oddbird/css-anchor-positioning').catch(_ => 0)

if (!('popover' in HTMLElement.prototype))
	await import('https://esm.sh/@oddbird/popover-polyfill').catch(_ => 0)

if (!navigator?.plugins?.['Shockwave Flash'])
	window.addEventListener('load', () => import('https://esm.sh/@ruffle-rs/ruffle').catch(_ => 0))
