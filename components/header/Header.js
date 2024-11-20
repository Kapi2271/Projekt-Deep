import React from 'react'

const Header = () => {
  return (
    <header>
        <section class="search" id="search">
            <img src="lupg.png" alt="Magnifing glass" class="mGlass" id="mGlass"/>
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
        <img src="logo.png" alt="Deepwoken logo" class="logo" id="logo"/>
    </header>
  )
}

export default Header