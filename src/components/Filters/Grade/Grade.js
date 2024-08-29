import s from './Grade.module.css'

const Grade = () => {
    return(
        <div className={s.grade}>
            <div>
                Grade:
            </div>
            <select>
                <option selected>Choose grade</option>
                <option>AU 55</option>
                <option>MS 64</option>
                <option>MS 65</option>
            </select>
        </div>
    );
}

export default Grade;