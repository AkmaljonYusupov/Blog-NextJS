import { Box } from '@mui/material'
import { Content, Hero, Sidebar } from '../components'
import Layout from '../layout/layout'
const IndexPage = () => {
	return (
		<Layout>
			<Hero />
			<Box sx={{ display: 'flex', gap: '20px', padding: '20px' }}>
				<Sidebar />
				<Content />
			</Box>
		</Layout>
	)
}

export default IndexPage
