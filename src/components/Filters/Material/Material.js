import s from './Material.module.css'

const Material = () => {
    return(
        <div className={s.material}>
            <div>
                Material:
            </div>
            <select>
                <option selected>Choose material</option>
                <option>Bronze</option>
                <option>Gold</option>
                <option>Brass</option>
                <option>Copper</option>
                <option>Copper-nickel</option>
                <option>Cupronickel</option>
                <option>Nickel Silver</option>
                <option>Paper</option>
            </select>
        </div>
    );
}

export default Material;