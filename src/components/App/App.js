import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
constructor(props) {
  super(props);
    this.state = {
      searchResults: [
        {name: "name", artist: "artist", album: "album", id: "id"},
        {name: "name", artist: "artist", album: "album", id: "id"},
        {name: "name", artist: "artist", album: "album", id: "id"},
      ]
    }
};
  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
      <h2>{this.props.track.name}</h2>
    <div className="App-playlist">

    </div>
  </div>
</div>
    );
  }
}

export default App;
ReactDOM.render(<h2 />, document.getElementById('track'));
