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
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
};

addTrack() {
  if (this.state.playlistTracks.find(savedTrack => savedTrack.id === this.track.id)) {
  return;
  }
}

removeTrack(track) {
  const remaining = this.state.playlistTracks.filter((tk) => {
      if(tk.id !== track.id)
      return tk;
      return ''

  });
      this.setState({playlistTracks: remaining});
}

updatePlaylistName(name) {
  this.setState({playlistName: name});
}

savePlaylist() {
  trackURIs: []
}

search(term) {
  console.log(term);
}

render() {
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar
          onSearch={this.search}
        />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults}
                         onAdd={this.addTrack} />
          <Playlist
            playlistTracks={this.state.playlistTracks}
            onRemove={this.removeTrack}
            onNameChange={this.updatePlaylistName}
            onChange={this.handleNameChange}
            onSave={this.savePlaylist}
            />
        </div>
      </div>
    </div>
  );
}
}

export default App;
