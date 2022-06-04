import React, { useState } from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'

const db = [
  {
    name: 'Richard Hendricks',
    url: './img/richard.jpg'
  },
  {
    name: 'Erlich Bachman',
    url: './img/erlich.jpg'
  },
  {
    name: 'Monica Hall',
    url: './img/monica.jpg'
  },
  {
    name: 'Jared Dunn',
    url: './img/jared.jpg'
  },
  {
    name: 'Dinesh Chugtai',
    url: './img/dinesh.jpg'
  }
]

function Simple ({reject,cand}) {
  const [characters,setCharacters]=useState(db)
  const [x,setX]=useState([])
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, character) => {
    if(direction=='left'){
      setX(prev=>[...prev,character])
    }
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <>
      <div>
        <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
        <h1>{reject?"Rejected Candidates":"Swipe Right for Acceptance and Swipe Left for Reject"}</h1>
        <div className='cardContainer'>
          {characters.map((character) =>
            <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character)} onCardLeftScreen={() => outOfFrame(character.name)}>
              <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          )}
        </div>
        {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
      </div>
      <div>
        <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
        <h1>Rejected Candidates</h1>
        <div className='cardContainer'>
          {x.map((character) =>
            <TinderCard className='swipe' key={character.name}  onCardLeftScreen={() => outOfFrame(character.name)}>
              <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          )}
        </div>
        {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
      </div>
    
    </>
  )
}

export default Simple
