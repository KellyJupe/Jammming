import React, { Component } from 'react';
import '../TrackList/TrackList';
import './SearchResults.css';

class SearchResults extends Component {
  render() {
    return (
<div className="SearchResults">
  <h2>Results</h2>
    searchResults = {this.state.searchResults};
</div>,
<div className="Tracks">
  <h2>Results</h2>

</div>,
<div className="TrackList">
  <h2>Results</h2>
    tracks={this.props.searchResults}
</div>
    );
  }
}

export default SearchResults;
