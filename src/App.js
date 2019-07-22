import React from 'react'
import FriendCard from './components/FriendCard'
import Wrapper from './components/Wrapper'
import friends from './friends.json'
import './App.css'
/* i tried to make the code drier by updating the clicked state array using setState
but i encountered an error when i used the .push method directly saying that 
this.state.clicked.push(id) was not a function, so i made another array i could push to.
*/
var clickArray = []

class App extends React.Component {
  state = {
    friends,
    clicked: [],
    score: 0,
    topScore: 0,
    gameStatus: 'Click any picture below to begin!'
  }  

  shuffle = () => {
    var array = this.state.friends
    var currentIndex = array.length;
	  var temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {
		// Pick a remaining element...
		  randomIndex = Math.floor(Math.random() * currentIndex);
		  currentIndex -= 1;

		// And swap it with the current element.
		  temporaryValue = array[currentIndex];
		  array[currentIndex] = array[randomIndex];
		  array[randomIndex] = temporaryValue;
	  }

	  return array;
  }

  userPlay = id => {
    // if the user's play has not already been clicked
    // and the current score is the same as the top score...
    if (!clickArray.includes(id) && this.state.score === this.state.topScore) {
      // ...add the id of the play to the array
      clickArray.push(id)
      // shuffle the array

      // ...increment both scores by one
      this.setState( { 
        clicked: clickArray, 
        score: this.state.score + 1, 
        topScore: this.state.topScore + 1,
        gameStatus: 'Good job, keep going!'
       })
    } // if the current score is less than the top score
      else if (!clickArray.includes(id) && this.state.score < this.state.topScore) {
        /* do everything above but don't increment the top score.
        i tried to make this code drier by setting the topScore equal to the score, but the scores
        didn't update simultaneously; the top score stayed one behind the current score.
        */
        clickArray.push(id)
        this.setState( { 
          clicked: clickArray, 
          score: this.state.score + 1,
          gameStatus: 'Good job, keep going!'
        }) 
    } else {
      /* if the id is already in the array, the player loses and gets a loss message, the score resets,
      and the clicked array gets emptied
      */
      clickArray = []
      this.setState( { clicked: clickArray, score: 0, gameStatus: 'Oops, you lost. Click a picture to start playing again!' })
    }

    // game status text update for max score achieved (win)
    // would like to implement this without having to embed it within another if statement
    // if the player has achieved the highest score...
    // if (this.state.score === 12) {
    //   this.setState( { gameStatus: 'Nice going! You\'ve won! Play again?'} )
    // }
  }

  render() {
    return (
      <Wrapper>
        <h1 className='title'>Clicky Game</h1>
        <h2 className='title'>{this.state.gameStatus} | Don't click the same picture twice!</h2>
        <h2 className='title'>Your score: {this.state.score} | Top score: {this.state.topScore}</h2>
        {this.state.friends.map(friend => (
          <FriendCard
            shuffle={this.shuffle}
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
