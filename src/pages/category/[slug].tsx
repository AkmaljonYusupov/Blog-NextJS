import { Content, Sidebar } from '@/src/components'
import { BlogsType } from '@/src/interfaces/blogs.interface'
import { CategoryType } from '@/src/interfaces/categories.interface'
import Layout from '@/src/layout/layout'
import { BlogsService } from '@/src/services/blog.services'
import { Box } from '@mui/material'
import { GetServerSideProps } from 'next'

const CategoryDetailedPage = ({
	blogs,
	latestBlogs,
	categories,
}: DetaieldCategoriesPageProps) => {
	return (
		<>
			<Layout>
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
		</>
	)
}

export default CategoryDetailedPage

export const getServerSideProps: GetServerSideProps<
	DetaieldCategoriesPageProps
> = async ({ query }) => {
	const blogs = await BlogsService.getDetaieldCateogriesBlog(
		query.slug as string
	)
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

interface DetailedBlogsPageProps {
	blogs: BlogsType
	latestBlogs: BlogsType[]
	categories: CategoryType[]
}
