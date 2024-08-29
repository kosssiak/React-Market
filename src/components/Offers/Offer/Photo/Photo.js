import s from './Photo.module.css'
import Obverse from './Obverse/Obverse'
import Reverse from './Reverse/Reverse'
const Photo = (props) => {
    return(
        <div className={s.photo}>
            <div>
                <Reverse rev={props.rev} />

            </div>
            <div>
                <Obverse obv={props.obv} />
            </div>
        </div>
    );
}

export default Photo;