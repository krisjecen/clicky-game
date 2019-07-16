import React from 'react'
import FriendCard from './components/FriendCard'
import Wrapper from './components/Wrapper'
import friends from './friends.json'
import './App.css'
var clickArray = []

class App extends React.Component {
  state = {
    friends,
    clicked: [],
    score: 0,
    topScore: 0
  }  

  userPlay = id => {
    // if the user's play has not already been clicked
    // and the current score is the same as the top score...
    if (!clickArray.includes(id) && this.state.score === this.state.topScore) {
      // ...add the id of the play to the array
      clickArray.push(id)
      // ...increment both scores by one
      this.setState( { clicked: clickArray, score: this.state.score + 1, topScore: this.state.topScore + 1 })
    } // 
      else if (!clickArray.includes(id) && this.state.score < this.state.topScore) {
        clickArray.push(id)
        this.setState( { clicked: clickArray, score: this.state.score + 1 }) 
    } else {
      clickArray = []
      this.setState( { clicked: clickArray })
      this.setState( { score: 0 })
      console.log("You already clicked that one.")
    }

    console.log(this.state.clicked)
  }

  render() {
    return (
      <Wrapper>
        <h1 className='title'>Clicky Game</h1>
        <h3 className='title'>Your score: {this.state.score}</h3>
        <h3 className='title'>Top score: {this.state.topScore}</h3>
        {this.state.friends.map(friend => (
          <FriendCard
            userPlay={this.userPlay}
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
