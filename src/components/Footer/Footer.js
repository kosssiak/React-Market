import s from './Footer.module.css'
import About_us from './About_us/About_us'
import Buyers from './Buyers/Buyers'
import Dealers from './Dealers/Dealers'

const Footer = () => {
    return (
        <div className={s.foot_gr}>
            <div className={s.foot}>
                <div>
                    <About_us/>
                </div>
                <div>
                    <Buyers/>
                </div>
                <div>
                    <Dealers/>
                </div>
            </div>
        </div>
    );
}

export default Footer;