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
    // console.log(id)
    if (!clickArray.includes(id)) {
      clickArray.push(id)
      this.setState( { clicked: clickArray })
    } else {
      clickArray = []
      this.setState( { clicked: clickArray })
      console.log("You already clicked that one.")
    }
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
            image={friend.image}
          />
        ))}
      </Wrapper>
    )
  }
}

export default App
