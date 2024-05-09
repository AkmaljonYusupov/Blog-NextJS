import { Box } from '@mui/material'
import { GetServerSideProps } from 'next'
import { Content, Hero, Sidebar } from '../components'
import { BlogsType } from '../interfaces/blogs.interface'
import { CategoryType } from '../interfaces/categories.interface'
import Layout from '../layout/layout'
import SEO from '../layout/seo/seo'
import { BlogsService } from '../services/blog.services'

const IndexPage = ({ blogs, latestBlogs, categories }: HomePageProps) => {
	console.log(blogs)
	return (
		<SEO>
			<Layout>
				<Hero blogs={blogs.slice(0, 4)} />
				<Box
					sx={{
						display: 'flex',
						flexDirection: { xs: 'column', md: 'row' },
						gap: '20px',
						padding: '20px',
					}}
				>
					<Sidebar latestBlogs={latestBlogs} categories={categories} />
					<Content blogs={blogs} />
				</Box>
			</Layout>
		</SEO>
	)
}

export default IndexPage

export const getServerSideProps: GetServerSideProps<
	HomePageProps
> = async () => {
	const blogs = await BlogsService.getAllBlogs()
	const latestBlogs = await BlogsService.getLatestBlog()
	const categories = await BlogsService.getCategories()
	return {
		props: {
			blogs,
			latestBlogs,
			categories,
		},
	}
}

interface HomePageProps {
	blogs: BlogsType[]
	latestBlogs: BlogsType[]
	categories: CategoryType[]
}
