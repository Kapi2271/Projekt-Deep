import React from 'react'
import Romb from '../images/romb.png'

function Title() {
  return (
    <section>
        <img class="rombus" id="rombus" alt="rombus" src={Romb}/>
        <p class="shopHeader" id="shopHeader">SHOP</p>
        <img class="rombus" id="rombus" alt="rombus" src={Romb}></img>
    </section>
  )
}

export default Title