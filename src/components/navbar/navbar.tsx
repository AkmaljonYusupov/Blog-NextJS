import { navItems } from '@/src/config/constants'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import {
	AppBar,
	Box,
	Button,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Toolbar,
	Typography,
} from '@mui/material'
import { useState } from 'react'

import CodeIcon from '@mui/icons-material/Code'

interface Props {
	window?: () => Window
}
const Navbar = ({ window }: Props) => {
	const [mobileOpen, setMobileOpen] = useState(false)

	const handleDrawerToggle = () => {
		setMobileOpen(prevState => !prevState)
	}

	const container =
		window !== undefined ? () => window().document.body : undefined

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					paddingX: '20px',
				}}
			>
				<Box sx={{ my: 2, display: 'flex', alignItems: 'center', gap: '5px' }}>
					<CodeIcon
						sx={{
							width: '30px',
							height: '30px',
							border: '2px solid rgb(0 0 0 / 67%)',
							padding: '1px',
							borderRadius: '50%',
						}}
					/>
					<Typography variant='h6'>Coder</Typography>
				</Box>
				<CloseIcon sx={{ cursor: 'pointer' }} />
			</Box>
			<Divider />
			<List>
				{navItems.map(item => (
					<ListItem key={item.label} disablePadding>
						<ListItemButton sx={{ textAlign: 'center' }}>
							<ListItemText primary={item.label} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	)

	return (
		<Box height={'10vh'} sx={{ display: 'flex' }}>
			<AppBar
				sx={{ height: '10vh', backgroundColor: '#141414' }}
				component='nav'
			>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant='h6'
						component='div'
						sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
					>
						<Box
							sx={{ my: 2, display: 'flex', alignItems: 'center', gap: '10px' }}
						>
							<CodeIcon
								sx={{
									width: '30px',
									height: '30px',
									border: '2px solid white',
									padding: '1px',
									borderRadius: '50%',
								}}
							/>
							Coder
						</Box>
					</Typography>
					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						{navItems.map(item => (
							<Button key={item.route} sx={{ color: '#fff' }}>
								{item.label}
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>
			<Box component='nav'>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: `100%` },
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	)
}

export default Navbar
