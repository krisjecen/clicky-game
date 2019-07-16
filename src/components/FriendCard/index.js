import React from 'react'
import './style.css'

function FriendCard (props) {
  return (
    <div className='card'>
      <div onClick={() => props.removeFriend(props.id)} className='img-container'>
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  )
}
export default FriendCard
