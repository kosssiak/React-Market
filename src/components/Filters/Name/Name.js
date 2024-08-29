import s from './Name.module.css'

const Name = () => {
    return(
        <div className={s.name}>
            <div>
                Name:
            </div>
            <div>
                <textarea>Key words...</textarea>
            </div>
        </div>
    );
}

export default Name;