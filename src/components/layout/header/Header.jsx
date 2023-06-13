import Hamburger from '../hamburger/Hamburger.jsx'

import styles from './Header.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { IoMdArrowBack } from 'react-icons/io'
import { SlUser } from 'react-icons/sl'

const Header = ({ children, bgImage, heading = '', backLink = '/' }) => {

	const {pathname} = useLocation()
	const navigate = useNavigate()


	return (
		<header className={styles.header}>
			{pathname !== '/'
				? <button onClick={() => {navigate((backLink))}}>
					<IoMdArrowBack />
				</button>
				: <button onClick={() => {navigate(('/profile'))}}>
					<SlUser />
				</button>
			}
			{/*{User profile}*/}
			<Hamburger />
		</header>
	)
}

export default Header
