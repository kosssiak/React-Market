import s from './Logo.module.css'
import {NavLink} from 'react-router-dom'

const Logo = () => {
    return(
        <div className={s.logo}>
          <img src='https://www.m-dv.ru/themes/responsive/img/logo.png'/>
        </div>
    );
}

export default Logo;