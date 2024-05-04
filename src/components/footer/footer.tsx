import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LanguageIcon from '@mui/icons-material/Language'
import TelegramIcon from '@mui/icons-material/Telegram'
import { Box, ButtonGroup, Typography } from '@mui/material'
import { format } from 'date-fns'

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
					<TelegramIcon sx={{ cursor: 'pointer' }} />
					<InstagramIcon sx={{ cursor: 'pointer' }} />
					<FacebookIcon sx={{ cursor: 'pointer' }} />
					<LanguageIcon sx={{ cursor: 'pointer' }} />
				</Box>
			</ButtonGroup>
		</Box>
	)
}

export default Footer
