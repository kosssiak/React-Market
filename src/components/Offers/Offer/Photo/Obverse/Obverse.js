import s from './Obverse.module.css'

const Obverse = (props) => {
    return(
        <div className={s.obverse}>
            <img src={props.obv}/>
        </div>
    );
}

export default Obverse;