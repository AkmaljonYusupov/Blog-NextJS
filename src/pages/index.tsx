import { Box } from '@mui/material'
import { GetServerSideProps } from 'next'
import { Content, Hero, Sidebar } from '../components'
import { BlogsType } from '../interfaces/blogs.interface'
import Layout from '../layout/layout'
import { BlogsService } from '../services/blog.services'

const IndexPage = ({ blogs }: HomePageProps) => {
	console.log(blogs)
	return (
		<Layout>
			<Hero />
			<Box
				sx={{
					display: 'flex',
					flexDirection: { xs: 'column', md: 'row' },
					gap: '20px',
					padding: '20px',
				}}
			>
				<Sidebar />
				<Content />
			</Box>
		</Layout>
	)
}

export default IndexPage

export const getServerSideProps: GetServerSideProps<
	HomePageProps
> = async () => {
	const blogs = await BlogsService.getAllBlogs()

	return {
		props: {
			blogs,
		},
	}
}

interface HomePageProps {
	blogs: BlogsType[]
}
