import s from './Filters.module.css'
import Name from './Name/Name'
import Price from './Price/Price'
import Categories from './Categories/Categories'
import Year from './Year/Year'
import Material from './Material/Material'
import Period from './Period/Period'
import Grade from './Grade/Grade'
const Filters = () => {
    return(
      <div className={s.filter}>
          <div className={s.filt}>
              Filters:
          </div>
          <div>
              <Name />
          </div>
          <div>
              <Price />
          </div>
          <div>
              <Categories />
          </div>
          <div>
              <Year />
          </div>
          <div>
              <Material />
          </div>
          <div>
              <Period />
          </div>
          <div>
              <Grade />
          </div>
      </div>

    );
}

export default Filters;