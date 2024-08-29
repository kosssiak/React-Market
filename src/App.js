import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Menu from './components/Menu/Menu'
import Filters from './components/Filters/Filters'
import Offers from './components/Offers/Offers'
import News from "./components/News/News"
import FAQ from "./components/FAQ/FAQ"
import Entry from './components/Entry/Entry'
import Registration from './components/Registration/Registration'
import gr_header from './components/Header/Header.module.css'
import gr_menu from './components/Menu/Menu.module.css'
import gr_filters from './components/Filters/Filters.module.css'
import gr_offers from './components/Offers/Offers.module.css'
import gr_footer from './components/Footer/Footer.module.css'
import {Route} from "react-router-dom"

function App(props) {
    return (
            <div className="App">
                <div className={gr_header.head_gr}>
                    <Header/>
                </div>
                <div className={gr_menu.menu_gr}>
                    <Menu/>
                </div>
                <div className={gr_filters.filt_gr}>
                    <Filters/>
                </div>
                <div className={gr_offers.offers_gr}>
                    <Route path='/coins' render={ () => <Offers CoinData={props.AppState.CoinData}/> } />
                    <Route path='/news' render={ () => <News />} />
                    <Route path='/faq' render={ () => <FAQ />} />
                    <Route path='/registr' render={ () => <Registration />} />
                    <Route path='/entry' render={ () => <Entry />} />
                </div>
                <div className={gr_footer.foot_gr}>
                    <Footer/>
                </div>
            </div>
    );
}

export default App;
