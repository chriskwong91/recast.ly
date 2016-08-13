class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0],
      videos: exampleVideoData,
      search: ''
    };

    this.titleClick = this.titleClick.bind(this);
    this.userKeyPress = this.userKeyPress.bind(this);
  }

  titleClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  userKeyPress(e) {
    this.setState({
      search: e.target.value

    });
    if (e.key === 'Enter') {
      this.requestYouTube();
    }
  }

  requestYouTube(e) {
    var options = {
      q: this.state.search,
      maxResults: 5,
      key: window.YOUTUBE_API_KEY,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: 'true'
    };

    this.props.searchYouTube(options,
      function(data) {
        this.setState({
          currentVideo: data[0],
          videos: data
        });
      }.bind(this));
  }

  componentDidMount() {
    var options = {
      q: 'javascript',
      maxResults: 5,
      key: window.YOUTUBE_API_KEY,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: 'true'
    };

    this.props.searchYouTube(options,
      function(data) {
        this.setState({
          currentVideo: data[0],
          videos: data
        });
      }.bind(this));
  }

  render() {
    return (
    <div>
      <Nav search={this.userKeyPress} pressed={this.requestYouTube}/>
      <div className="col-md-7">
        <VideoPlayer video={this.state.currentVideo}/>
      </div>
      <div className="col-md-5">
        <VideoList videos={this.state.videos} onClick={this.titleClick}/>
      </div>
    </div>
    );
  }
}

App.propTypes = {
  videos: React.PropTypes.array.isRequired,
  searchYouTube: React.PropTypes.func.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
