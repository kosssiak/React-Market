import s from './Description.module.css'

const Description = (props) => {
    return(
        <div className={s.desc}>
            <div>
                {props.desc}
            </div>
        </div>
    );
}

export default Description;