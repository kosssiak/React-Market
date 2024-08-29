import s from './Buyers.module.css'

const Buyers = () => {
    return(
        <div className={s.buyers}>
            <div>
                To buyers:
            </div>
            <div>
                <ul>
                    <li><a href=''>How to buy?</a></li>
                    <li><a href=''>Personal account</a></li>
                    <li><a href=''>Product catalog</a></li>
                    <li><a href=''>FAQ</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Buyers;