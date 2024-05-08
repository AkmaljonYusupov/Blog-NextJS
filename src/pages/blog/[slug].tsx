import { Sidebar } from '@/src/components'
import { calculateEstimatedTimeToRead } from '@/src/helpers/time.format'
import { BlogsType } from '@/src/interfaces/blogs.interface'
import { CategoryType } from '@/src/interfaces/categories.interface'
import Layout from '@/src/layout/layout'
import { BlogsService } from '@/src/services/blog.services'
import { Avatar, Box, Divider, Typography } from '@mui/material'
import { format } from 'date-fns'
import { GetServerSideProps } from 'next'
import Image from 'next/image'

const DetailedblogsPage = ({
	blog,
	latestBlogs,
	categories,
}: DetailedBlogsPageProps) => {
	console.log(blog)
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
					<Box
						display={'flex'}
						flexDirection={'column'}
						rowGap={'10px'}
						width={{ xs: '100%', md: '65%' }}
						sx={{
							backgroundColor: 'rgba(0,0,0,0.5)',
							borderRadius: '8px',
							boxShadow: '0 0 10px rgba(255,255,255,0.1)',
							padding: '20px',
							display: 'flex',
							flexDirection: 'column',
							rowGap: '20px',
						}}
					>
						<Box
							position={'relative'}
							width={'100%'}
							height={{ xs: '30vh', md: '50vh' }}
						>
							<Image
								src={blog.image.url}
								alt={blog.title}
								fill
								sizes='true'
								priority
								style={{
									objectFit: 'cover',
									borderRadius: '8px',
								}}
							/>
						</Box>
						<Box sx={{ display: 'flex', gap: '10px' }}>
							<Avatar alt={blog.author.name} src={blog.author.avatar.url} />
							<Box>
								<Typography>{blog.author.name}</Typography>
								<Box color={'gray'}>
									{format(new Date(blog.createdAt), 'dd.MMM.yyy')} &#x2022;{' '}
									{calculateEstimatedTimeToRead(blog.description.text)} min read
								</Box>
							</Box>
						</Box>
						<Box display={'flex'} flexDirection={'column'} rowGap={'10px'}>
							<Typography variant='h3'>{blog.title}</Typography>
							<Typography color={'gray'}>{blog.excerpt}</Typography>
							<Divider />
							<div
								style={{
									opacity: '0.8',
								}}
								dangerouslySetInnerHTML={{ __html: blog.description.html }}
							/>
						</Box>
					</Box>

					<Sidebar latestBlogs={latestBlogs} categories={categories} />
				</Box>
			</Layout>
		</>
	)
}

export default DetailedblogsPage

export const getServerSideProps: GetServerSideProps<
	DetailedBlogsPageProps
> = async ({ query }) => {
	const blog = await BlogsService.getDetailedBlogs(query.slug as string)
	const latestBlogs = await BlogsService.getLatestBlog()
	const categories = await BlogsService.getCategories()
	return {
		props: {
			blog,
			latestBlogs,
			categories,
		},
	}
}

interface DetailedBlogsPageProps {
	blog: BlogsType
	latestBlogs: BlogsType[]
	categories: CategoryType[]
}
