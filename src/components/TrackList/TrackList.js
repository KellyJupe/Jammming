import React, { Component } from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends Component {
  render() {
    return (
<div className="TrackList">
  {this.props.tracks.map(track =>
    <Track track={track} key={track.id}/>
  )}

</div>
    );
console.log(this.props.track.name, this.props.track.artist, this.props.track.album);
  }
}
export default TrackList;
