import Layout from '../../components/layout/Layout.jsx'
import { useNavigate } from 'react-router-dom'

function Home() {

	const navigate = useNavigate()

	return (
		<Layout bgImage={'/images/home_bg.jpeg'}>
			<h1>HOME PAGE</h1>
		</Layout>
	)
}

export default Home
