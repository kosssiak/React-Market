import s from './Header.module.css'
import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <div className={s.head_gr}>
            <div className={s.head}>
                <div>
                    <a href=''><img src='https://www.m-dv.ru/themes/responsive/img/logo.png'/></a>
                </div>
                <textarea>Search...</textarea>
                <NavLink activeClassName={s.active} to='/registr'>                         Registration</NavLink>
                <NavLink activeClassName={s.active} to='/entry'>                                   Entry            </NavLink>
            </div>
        </div>
    );
}

export default Header;