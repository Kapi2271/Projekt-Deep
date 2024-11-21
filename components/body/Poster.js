import React from 'react'
import Note from '../images/note.png'

function Poster() {
  return (
    <section class="poster" id="poster">
        <p class="itemName" id="itemName">Crypt Blade</p>
            <br/>
            <img src="" alt="item" class="itemImage" id="itemImage"/>
            <br/>
            <p class="owner" id="owner">Player Name:</p>
            <br/>
            <p class="cost" id="cost">Cost: 2020<img class="note" id="note" src={Note} alt="Note"/>
        </p>
    </section>
    
  )
}

export default Poster