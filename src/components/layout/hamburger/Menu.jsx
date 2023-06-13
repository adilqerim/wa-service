import styles from './Hamburger.module.scss'
import { menu } from './menu.data.js'
import cn from 'clsx'
import { Link } from 'react-router-dom'


const Menu = ({isShow}) =>  {

    const logoutHandler = () => {}


    return <nav className={cn(styles.menu, {
        [styles.show]: isShow
    })}>
        <ul>
            { menu.map((item, index) => (
                <li key={`_menu_${index}`}>
                    <Link to={item.link}>{item.title}</Link>
                </li>
            ))}
        </ul>
        <li>
            <button onClick={logoutHandler}>Logout</button>
        </li>
    </nav>
}

export default Menu;