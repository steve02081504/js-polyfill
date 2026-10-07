if (!('anchorName' in document.documentElement.style))
	import('https://esm.sh/@oddbird/css-anchor-positioning').catch(_ => 0)

if (!('popover' in HTMLElement.prototype))
	await import('https://esm.sh/@oddbird/popover-polyfill').catch(_ => 0)

if (!navigator?.plugins?.['Shockwave Flash'])
	window.addEventListener('load', () => {
		const src = 'https://cdn.jsdelivr.net/npm/@ruffle-rs/ruffle/ruffle.js'

		((window.RufflePlayer ??= {}).config ??= {}).publicPath ??= new URL('.', src).href

		document.head.append(Object.assign(document.createElement('script'), {
			src,
			onerror: () => 0
		}))
	})
