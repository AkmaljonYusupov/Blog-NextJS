import { Content } from '@/src/components'
import { BlogsType } from '@/src/interfaces/blogs.interface'
import Layout from '@/src/layout/layout'
import SEO from '@/src/layout/seo/seo'
import { BlogsService } from '@/src/services/blog.services'
import { Box } from '@mui/material'
import { GetServerSideProps } from 'next'

const BlogPage = ({ blogs }: BlogPageProps) => {
	return (
		<SEO metaTitle='All Blogs'>
			<Layout>
				<Box
					sx={{
						display: 'flex',
						gap: '20px',
						flexDirection: { xs: 'column', md: 'row' },
						padding: '20px',
						justifyContent: 'center',
					}}
				>
					<Content blogs={blogs} />
				</Box>
			</Layout>
		</SEO>
	)
}

export default BlogPage

export const getServerSideProps: GetServerSideProps<
	BlogPageProps
> = async () => {
	const blogs = await BlogsService.getAllBlogs()
	return {
		props: { blogs },
	}
}

interface BlogPageProps {
	blogs: BlogsType[]
}
