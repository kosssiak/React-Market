import s from './Offer.module.css'
import Photo from './Photo/Photo'
import Description from './Description/Description'
import Price from './Price/Price'

const Offer = (props) => {
    return(
        <div className={s.offer}>
            <div>
                <Photo rev={props.rev} obv={props.obv} />
            </div>
            <div>
                <Description desc={props.desc}/>
            </div>
            <div>
                <Price price={props.price}/>
            </div>
        </div>
    );
}

export default Offer;