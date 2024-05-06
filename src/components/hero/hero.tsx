import { calculateEstimatedTimeToRead } from '@/src/helpers/time.format'
import { Avatar, Box, Button, Typography } from '@mui/material'
import { format } from 'date-fns'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { HeroProps } from './hero.props'

const Hero = ({ blogs }: HeroProps) => {
	const router = useRouter()
	return (
		<Box width={'100%'}>
			<Carousel
				responsive={{
					mobile: {
						breakpoint: { max: 4000, min: 0 },
						items: 1,
					},
				}}
			>
				{blogs.map(item => (
					<Box key={item.id}>
						<Box
							sx={{
								position: 'relative',
								width: '100%',
								height: '70vh',
								backgroundColor: 'red',
							}}
						>
							<Image
								src={item.image.url}
								alt={item.title}
								fill
								style={{ objectFit: 'cover' }}
								priority
								sizes='true'
							/>
							<Box
								sx={{
									position: 'absolute',
									top: 0,
									left: 0,
									right: 0,
									bottom: 0,
									width: '100%',
									height: '100%',
									backgroundColor: 'rgba(0, 0, 0, .6)',
								}}
							></Box>
							<Box
								width={{ xs: '100%', md: '70%' }}
								position={'relative'}
								color={'#fff'}
								sx={{
									top: '50%',
									transform: 'translateY(-50%)',
									paddingLeft: { xs: '10px', md: '50px' },
								}}
							>
								<Typography sx={{ fontSize: { xs: '30px', md: '50px' } }}>
									{item.title}
								</Typography>
								<Typography
									color={'gray'}
									sx={{ fontSize: { xs: '20px', md: '25px' } }}
								>
									{item.excerpt}
								</Typography>
								<Box display={'flex'} flexDirection={'column'} rowGap={'20px'}>
									<Box sx={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
										<Avatar
											alt={item.author.name}
											src={item.author.avatar.url}
										/>
										<Box>
											<Typography>{item.author.name}</Typography>
											<Box>
												{format(new Date(item.createdAt), 'dd.MMM.yyy')}{' '}
												&#x2022;{' '}
												{calculateEstimatedTimeToRead(item.description.text)}{' '}
												min read
											</Box>
										</Box>
									</Box>
									<Button
										onClick={() => router.push(`/blog/${item.slug}`)}
										variant='outlined'
										style={{
											display: 'inline-block',
											padding: '10px',
											width: '200px',
										}}
									>
										Read more
									</Button>
								</Box>
							</Box>
						</Box>
					</Box>
				))}
			</Carousel>
		</Box>
	)
}

export default Hero
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
