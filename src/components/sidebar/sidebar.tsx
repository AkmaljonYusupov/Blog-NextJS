import { Avatar, Box, Button, Divider, Typography } from '@mui/material'
import { format } from 'date-fns'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { SidebarProps } from './sidebar.props'

function Sidebar({ latestBlogs, categories }: SidebarProps) {
	const router = useRouter()

	return (
		<Box width={{ xs: '100%', md: '35%' }}>
			<Box
				position={'sticky'}
				top={'100px'}
				sx={{
					transition: 'all .5s ease',
					display: 'flex',
					flexDirection: 'column',
					gap: '20px',
				}}
			>
				<Box padding={'20px'} border={'1px solid gray'} borderRadius={'8px'}>
					<Typography variant='h5'>Latest blog</Typography>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							marginTop: '20px',
						}}
					>
						{latestBlogs.map(item => (
							<Box
								sx={{ cursor: 'pointer' }}
								key={item.id}
								marginTop={'20px'}
								onClick={() => router.push(`/blog/${item.slug}`)}
							>
								<Box
									sx={{
										display: 'flex',
										gap: '20px',
										alignItems: 'center',
									}}
								>
									<Image
										src={item.image.url}
										alt={item.title}
										width={100}
										height={100}
										style={{ objectFit: 'cover', borderRadius: '8px' }}
										priority
										sizes='true'
									/>
									<Box
										sx={{
											display: 'flex',
											flexDirection: 'column',
											gap: '5px',
										}}
									>
										<Typography variant='body1'>{item.title}</Typography>
										<Box sx={{ display: 'flex', gap: '10px' }}>
											<Avatar
												alt={item.author.name}
												src={item.author.avatar.url}
											/>
											<Box>
												<Typography variant='body2'>
													{item.author.name}
												</Typography>
												<Box sx={{ opacity: '0.6' }}>
													{format(new Date(item.createdAt), 'dd.MMM.yyy')}
												</Box>
											</Box>
										</Box>
									</Box>
								</Box>
								<Divider sx={{ marginTop: '20px' }} />
							</Box>
						))}
					</Box>
				</Box>
				<Box padding={'20px'} border={'1px solid gray'} borderRadius={'8px'}>
					<Typography variant='h5'>Category</Typography>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							marginTop: '20px',
						}}
					>
						{categories.map(nav => (
							<Fragment key={nav.slug}>
								<Button
									fullWidth
									sx={{ justifyContent: 'flex-start', height: '50px' }}
									onClick={() => router.push(`/category/${nav.slug}`)}
								>
									{nav.label}
								</Button>
								<Divider />
							</Fragment>
						))}
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default Sidebar
const data = [
	{
		image:
			'https://eu-west-2.graphassets.com/clvs7zi3tykmp07mmh4q920fy/clvuq3stmp57307lc5z33k7vv',
		title: 'Technical SEO with Hygraph',
		exerpt:
			'Get started with your SEO implementation when using a Headless CMS',
		author: {
			name: 'Akmaljon Yusupov',
			image:
				'https://eu-west-2.graphassets.com/clvs7zi3tykmp07mmh4q920fy/clvuqjrqfp7gh07mmuwbw58g9',
		},
	},
	{
		image:
			'https://eu-west-2.graphassets.com/clvs7zi3tykmp07mmh4q920fy/clvtt3dz6kgho07mli5vlq7u2',
		title: 'Union Types and Sortable Relations with Hygraph',
		exerpt:
			'Learn more about Polymorphic Relations and Sortable Relations with Hygraph',
		author: {
			name: 'Akmaljon Yusupov',
			image:
				'https://eu-west-2.graphassets.com/clvs7zi3tykmp07mmh4q920fy/clvuqjrqfp7gh07mmuwbw58g9',
		},
	},
]
