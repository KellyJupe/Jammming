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

    this.addTrack = this.addTrack.bind(this);

};

addTrack() {
  if (this.state.playlistTracks.find(savedTrack => savedTrack.id === this.track.id)) {
  return;
  }
}

render() {
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults}
                         onAdd={this.addTrack} />
          <Playlist playlistTracks={this.state.playlistTracks} />
        </div>
      </div>
    </div>
  );
}
}

export default App;
