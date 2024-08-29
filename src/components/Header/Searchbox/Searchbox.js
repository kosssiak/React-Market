import s from './Searchbox.module.css'

const Searchbox = () => {
    return(
        <div className={s.search}>
            <textarea>Search...</textarea>
        </div>
    );
}

export default Searchbox;