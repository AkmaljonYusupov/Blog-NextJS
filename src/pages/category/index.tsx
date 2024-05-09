import { CategoryType } from '@/src/interfaces/categories.interface'
import Layout from '@/src/layout/layout'
import SEO from '@/src/layout/seo/seo'
import { BlogsService } from '@/src/services/blog.services'
import { Box, Button, ButtonGroup, Typography } from '@mui/material'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

const CategoryPage = ({ category }: CategoryPageProps) => {
	const router = useRouter()
	return (
		<SEO metaTitle='All Categories'>
			<Layout>
				<Box
					width={{ xs: '100%', md: '80%' }}
					marginX={'auto'}
					marginTop={'10vh'}
					borderRadius={'8px'}
					height={{ xs: '30vh', md: '50vh' }}
					sx={{
						backgroundColor: 'black',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						rowGap: '20px',
						boxShadow: '0 0 10px rgba(255,255,255,0.1)',
					}}
				>
					<Typography variant='h3' fontFamily={'cursive'}>
						All Categories
					</Typography>
					<ButtonGroup
						variant='contained'
						aria-label='outlined primary button group'
					>
						{category.map(item => (
							<Button
								key={item.slug}
								onClick={() => router.push(`/category/${item.slug}`)}
							>
								# {item.label}
							</Button>
						))}
					</ButtonGroup>
				</Box>
			</Layout>
		</SEO>
	)
}

export default CategoryPage

export const getServerSideProps: GetServerSideProps<
	CategoryPageProps
> = async () => {
	const category = await BlogsService.getCategories()

	return {
		props: {
			category,
		},
	}
}

interface CategoryPageProps {
	category: CategoryType[]
}
