import Logo from '../images/logo.png'
import Lupa from '../images/lupa.png'

const Header = () => {
  return (
    <header>
        <section className="search" id="search">
            <img src={Lupa} alt="Magnifing glass" className="mGlass" id="mGlass"/>
            <input className="searchInput" id="searchInput" type="text" placeholder="Search Items:"/>
        </section>
        <p className="category-p">Item category:</p>
        <section className="category" id="category">
            <select className="categories" id="categories">
                <option id="catAll">All</option>
                <option id="catWeapon">Weapon</option>
                <option id="catEquipment">Equipment</option>
                <option id="catItem">Item</option>
            </select>
        </section>
        <img src={Logo} alt="Deepwoken logo" className="logo" id="logo"/>
    </header>
  )
}

export default Header