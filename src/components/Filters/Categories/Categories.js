import s from './Categories.module.css'

const Categories = () => {
    return(
        <div className={s.categories}>
            <div>
                Categories:
            </div>
            <select>
                <option selected>Choose category</option>
                <option>Coins</option>
                <option>Bonds</option>
            </select>
        </div>
    );
}

export default Categories;