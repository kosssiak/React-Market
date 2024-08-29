import s from './Reverse.module.css'

const Reverse = (props) => {
    return(
        <div className={s.reverse}>
            <img src={props.rev}/>
        </div>
    );
}

export default Reverse;