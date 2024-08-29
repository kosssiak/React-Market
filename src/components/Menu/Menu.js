import s from './Menu.module.css'

import {NavLink} from "react-router-dom";

const Menu = () => {
    return(
        <div className={s.menu_gr}>
            <div className={s.menu}>

                <NavLink activeClassName={s.active} to='/coins'>                   Coins                       </NavLink>
                <NavLink activeClassName={s.active} to='/news'>                         News                        </NavLink>
                <NavLink activeClassName={s.active} to='/faq'>                           FAQ               </NavLink>

            </div>
        </div>
    );
}

export default Menu;