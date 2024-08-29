import s from './Year.module.css'

const Year = () => {
    return(
        <div className={s.year}>
            <div>
                Year:
            </div>
            <select>
                <option selected>Choose year</option>
                <option>1700</option>
                <option>1701</option>
                <option>1702</option>
                <option>1703</option>
                <option>1704</option>
                <option>.....</option>
            </select>
        </div>
    );
}

export default Year;