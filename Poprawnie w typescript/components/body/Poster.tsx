import Note from '../images/note.png'

function Poster() {
  return (
    <section className="poster" id="poster">
        <p className="itemName" id="itemName">Crypt Blade</p>
            <br/>
            <img src="" alt="item" className="itemImage" id="itemImage"/>
            <br/>
            <p className="owner" id="owner">Player Name:</p>
            <br/>
            <p className="cost" id="cost">Cost: 2020<img className="note" id="note" src={Note} alt="Note"/>
        </p>
    </section>
    
  )
}

export default Poster