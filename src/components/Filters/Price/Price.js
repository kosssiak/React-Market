import s from './Price.module.css'
import From from './From/From'
import To from './To/To'

const Price = () => {
    return(
        <div className={s.price}>
            <div>
               Price:
            </div>
            <div className={s.from_to}>
                <div>
                    <From />
                </div>
                <div>
                    <To />
                </div>
            </div>
        </div>
    );
}

export default Price;