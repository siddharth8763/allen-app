import React from 'react'
import "./Card.css"

function Card({type,value}) {
  
  let emoji;
  
  if(type==='Club'){
    emoji='♣️'
  } else if (type==='Diamonds') {
    emoji='♦️'
  } else if (type==='Hearts') {
    emoji='💗'
  } else if (type==='Spades') {
    emoji='♠️'
  }

  return (
    <div className='card'>
        <div className='imoji'>{emoji}</div>
        <div className='value'>{value}</div>
    </div>
  )
}

export default Card