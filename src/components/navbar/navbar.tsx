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
import { useRouter } from 'next/router'

interface Props {
	window?: () => Window
}
const Navbar = ({ window }: Props) => {
	const [mobileOpen, setMobileOpen] = useState(false)
	const router = useRouter()

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
				<Box
					sx={{
						my: 2,
						display: 'flex',
						alignItems: 'center',
						gap: '5px',
						cursor: 'pointer',
					}}
					onClick={() => router.push('/')}
				>
					<CodeIcon
						sx={{
							width: '50px',
							height: '50px',
							border: '2px solid white',
							padding: '1px',
							borderRadius: '50%',
						}}
					/>
					<Typography variant='h4' fontFamily={'cursive'}>
						Coder
					</Typography>
				</Box>
				<CloseIcon sx={{ cursor: 'pointer' }} />
			</Box>
			<Divider />
			<List>
				{navItems.map(item => (
					<ListItem key={item.label} disablePadding>
						<ListItemButton
							onClick={() => router.push(item.route)}
							sx={{ textAlign: 'center' }}
						>
							<ListItemText primary={item.label} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	)

	return (
		<Box sx={{ display: 'flex' }}>
			<AppBar
				sx={{ backgroundColor: '#141414', height: '9vh' }}
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

					<Box
						onClick={() => router.push('/')}
						sx={{
							display: 'flex',
							alignItems: 'center',
							gap: '5px',
							cursor: 'pointer',
							my: 2,
							flexGrow: 1,
						}}
					>
						<CodeIcon
							sx={{
								width: '40px',
								height: '40px',
								border: '2px solid white',
								padding: '1px',
								borderRadius: '50%',
							}}
						/>
						<Typography variant='h4' fontFamily={'cursive'}>
							Coder
						</Typography>
					</Box>

					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						{navItems.map(item => (
							<Button
								onClick={() => router.push(item.route)}
								key={item.route}
								sx={{ color: '#fff' }}
							>
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
