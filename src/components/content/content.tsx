import { calculateEstimatedTimeToRead } from '@/src/helpers/time.format'
import { Avatar, Box, Divider, Typography } from '@mui/material'
import { format } from 'date-fns'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ContentProps } from './content.props'

function Content({ blogs }: ContentProps) {
	const router = useRouter()

	return (
		<Box
			width={{ xs: '100%', md: '65%' }}
			sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
		>
			{blogs.map(item => (
				<Box
					key={item.id}
					sx={{
						padding: '20px',
						backgroundColor: 'rgba(0,0,0,0.5)',
						borderRadius: '8px',
						boxShadow: '0 0 10px rgba(255,255,255,0.1)',
						cursor: 'pointer',
					}}
					onClick={() => router.push(`/blog/${item.slug}`)}
				>
					<Box
						position={'relative'}
						width={'100%'}
						height={{ xs: '30vh', md: '50vh' }}
					>
						<Image
							src={item.image.url}
							alt={item.title}
							fill
							sizes='true'
							priority
							style={{ objectFit: 'cover', borderRadius: '10px' }}
						/>
					</Box>
					<Typography variant='h4' marginTop={'30px'}>
						{item.excerpt}
					</Typography>
					<Typography variant='body1' color={'gray'}>
						{item.excerpt}
					</Typography>
					<Divider sx={{ marginTop: '30px' }} />
					<Box sx={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
						<Avatar alt={item.author.name} src={item.author.avatar.url} />
						<Box>
							<Typography>{item.author.name}</Typography>
							<Box color={'gray'}>
								{format(new Date(item.createdAt), 'dd.MMM.yyy')} &#x2022;{' '}
								{calculateEstimatedTimeToRead(item.description.text)} min read
							</Box>
						</Box>
					</Box>
				</Box>
			))}
		</Box>
	)
}

export default Content

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
