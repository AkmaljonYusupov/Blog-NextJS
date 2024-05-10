import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LanguageIcon from '@mui/icons-material/Language'
import TelegramIcon from '@mui/icons-material/Telegram'
import { Box, ButtonGroup, Typography } from '@mui/material'
import { format } from 'date-fns'
import Link from 'next/link'

const Footer = () => {
	return (
		<Box
			padding={'20px'}
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				backgroundColor: '#141414',
				color: 'white',
			}}
			borderTop={'1px solid rgba(255,255,255,0.5)'}
		>
			<Typography>
				© {format(new Date(), 'yyyy')} Coder. Barcha huquqlar himoyalangan.
			</Typography>
			<ButtonGroup
				disableElevation
				variant='contained'
				aria-label='Disabled elevation buttons'
			>
				<Box sx={{ display: 'flex', gap: '15px' }}>
					<Link href='https://t.me/AkmaljonYusupov' target='_blank'>
						<TelegramIcon sx={{ cursor: 'pointer', color: 'white' }} />
					</Link>

					<Link
						href='https://www.instagram.com/akmaljon.yusupov'
						target='_blank'
					>
						<InstagramIcon sx={{ cursor: 'pointer', color: 'white' }} />
					</Link>

					<Link href='https://www.facebook.com/infoakmaljon.uz' target='_blank'>
						<FacebookIcon sx={{ cursor: 'pointer', color: 'white' }} />
					</Link>
					<Link href='https://coder.ac' target='_blank'>
						<LanguageIcon sx={{ cursor: 'pointer', color: 'white' }} />
					</Link>
				</Box>
			</ButtonGroup>
		</Box>
	)
}

export default Footer
