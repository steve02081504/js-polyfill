if (!('anchorName' in document.documentElement.style))
	import('https://esm.sh/@oddbird/css-anchor-positioning').catch(_ => 0)

if (!('popover' in HTMLElement.prototype))
	await import('https://esm.sh/@oddbird/popover-polyfill').catch(_ => 0)

if (!navigator?.plugins?.['Shockwave Flash'])
	window.addEventListener('load', () => {
		document.head.append(Object.assign(document.createElement('script'), {
			src: 'https://cdn.jsdelivr.net/npm/@ruffle-rs/ruffle/ruffle.js',
			onerror: () => 0
		}))
	})
