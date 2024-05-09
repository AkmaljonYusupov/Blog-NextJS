import '@/src/styles/globals.css'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Router } from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useEffect } from 'react'
import theme from 'src/helpers/theme'
import createEmotionCache from '../helpers/create-emotion-cashe'

const clientSideEmotionCache = createEmotionCache()
export interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache
}

function MyApp(props: MyAppProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

	useEffect(() => {
		const handleRouteStart = () => NProgress.start()
		const handleRouteDone = () => NProgress.done()

		Router.events.on('routeChangeStart', handleRouteStart)
		Router.events.on('routeChangeComplete', handleRouteDone)
		Router.events.on('routeChangeError', handleRouteDone)

		return () => {
			// Make sure to remove the event handler on unmount!
			Router.events.off('routeChangeStart', handleRouteStart)
			Router.events.off('routeChangeComplete', handleRouteDone)
			Router.events.off('routeChangeError', handleRouteDone)
		}
	}, [])

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name='viewport' content='initial-scale=1, width=device-width' />
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
	)
}
export default MyApp
