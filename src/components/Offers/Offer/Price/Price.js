import s from './Price.module.css'

const Price = (props) => {
    return(
        <div className={s.price}>
            <div>
                Price: {props.price}
            </div>
            <div>
                <button><a href=''>Add to cart</a></button>
                <button><a href=''>Buy now!</a></button>
            </div>
        </div>
    );
}

export default Price;