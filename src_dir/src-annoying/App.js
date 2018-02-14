import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  constructor(){
    super()
    this.state = {friends: friends}
  }
  removeCard(friend) {
    console.log(friend.id);
    const newFriends = this.state.friends.filter(friendId => {
      return friendId.id !== friend.id
    })
    console.log(newFriends)
    this.setState({
      friends: newFriends
    })
  }
  render() {
    return (
      <Wrapper>
        <h1 className="title">Friends List</h1>
        {this.state.friends.map(friend => {
          return (
            <FriendCard
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
              removeCard={this.removeCard.bind(this, friend)}
            />
          );
        })}
      </Wrapper>
    );
  }
}

export default App;
