import React from 'react'
import FriendCard from './components/FriendCard'
import Wrapper from './components/Wrapper'
import friends from './friends.json'
import './App.css'
var clickArray = []

class App extends React.Component {
  state = {
    friends,
    clicked: []
  }  

  removeFriend = id => {
    console.log(id)
    clickArray.push(id)
    this.setState( { clicked: clickArray })
    console.log(this.state.clicked)
  }

  render() {
    return (
      <Wrapper>
        <h1 className='title'>Clicky Game</h1>
        <h3 className='title'>You've clicked {this.state.clicked.length}</h3>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            // name={friend.name}
            image={friend.image}
            // occupation={friend.occupation}
            // location={friend.location}
          />
        ))}
      </Wrapper>
    )
  }
}

export default App
