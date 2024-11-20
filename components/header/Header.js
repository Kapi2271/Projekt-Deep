import React from 'react'
import Logo from '../images/logo.png'
import Lupa from '../images/lupa.png'

const Header = () => {
  return (
    <header>
        <section class="search" id="search">
            <img src={Lupa} alt="Magnifing glass" class="mGlass" id="mGlass"/>
            <input class="searchInput" id="searchInput" type="text" placeholder="Search Items:"/>
        </section>
        <p class="category-p">Item category:</p>
        <section class="category" id="category">
            <select class="categories" id="categories">
                <option id="catAll">All</option>
                <option id="catWeapon">Weapon</option>
                <option id="catEquipment">Equipment</option>
                <option id="catItem">Item</option>
            </select>
        </section>
        <img src={Logo} alt="Deepwoken logo" class="logo" id="logo"/>
    </header>
  )
}

export default Header