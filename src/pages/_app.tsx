import '@/src/styles/globals.css'
import { CacheProvider, EmotionCache } from '@emotion/react'
import type { AppProps } from 'next/app'

import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import Head from 'next/head'
import theme from 'src/helpers/theme'
import createEmotionCache from '../helpers/create-emotion-cashe'

const clientSideEmotionCache = createEmotionCache()
export interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache
}

function MyApp(props: MyAppProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
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
