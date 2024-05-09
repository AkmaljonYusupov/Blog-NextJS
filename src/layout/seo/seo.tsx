import { SiteConfig } from '@/src/config/site.config'
import Head from 'next/head'
import { SeoProps } from './seo.props'

const SEO = ({
	children,
	author = SiteConfig.author,
	metaDescription = SiteConfig.metaDescription,
	metaKeywords = SiteConfig.metaKeywords,
	metaTitle = SiteConfig.metaTitle,
}: SeoProps) => {
	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<title>{metaTitle}</title>
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta name='keywords' content={metaKeywords} />
				<meta name='author' content={author} />
				<meta name='description' content={metaDescription} key='desc' />
				<link rel='shortcut icon' href={'/vercel.svg'} type='image/x-icon' />
			</Head>
			{children}
		</>
	)
}

export default SEO
