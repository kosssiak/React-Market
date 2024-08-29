import s from './Period.module.css'

const Period = () => {
    return(
        <div className={s.period}>
            <div>
                Period:
            </div>
            <select>
                <option selected>Choose period</option>
                <option>Peter 1</option>
                <option>Catherine 1</option>
                <option>Peter 2</option>
                <option>Anna Ioanovna</option>
                <option>Ioan Antonovich</option>
                <option>Elizabeth Petrovna</option>
                <option>Peter 3</option>
                <option>Catherine 2</option>
                <option>Paul 1</option>
                <option>Alexander 1</option>
                <option>Nicolas 1</option>
                <option>Alexander 2</option>
                <option>Alexander 3</option>
                <option>Nicolas 2</option>
            </select>
        </div>
    );
}

export default Period;