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
        {name: "", artist: "", album: "", id: ""},
        {name: "", artist: "", album: "", id: ""},
        {name: "", artist: "", album: "", id: ""},
      ],
      playlistName: 'Déchirant',
      playlistTracks: [
        {name: 'Say Something', artist: 'Great Big World', album: 'Sad', id: 'ss1'},
        {name: "How Far", artist: "Martina McBride", album: "Goodbye", id: "hf1"},
        {name: "All at Once", artist: "Whitney Houston", album: "Oldies", id: "ao1"},
      ],

    }
};

addTrack() {
  if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
  return;
  }
}

  render() {
    return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App-playlist">
    <Playlist>
      <h2 playlistName= {this.state.playlistName} />
      <h2 playlistTracks= {this.state.playlistTracks} />
    </Playlist>
    </div>
    </div>
    );
  }
}

export default App;
