import s from './Offers.module.css'
import Offer from './Offer/Offer'

const Offers = (props) => {

    let CoinDesc = props.CoinData.map ( c => <Offer rev={c.rev} obv={c.obv} desc={c.desc} price={c.price} />);

    return(
        <div className={s.offers}>
            { CoinDesc }
        </div>
    );
}

export default Offers;