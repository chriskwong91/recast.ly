class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0],
      videos: exampleVideoData,
      search: ''
    };

    this.click = this.click.bind(this);
    this.userSearch = this.userSearch.bind(this);
    this.userInput = this.userInput.bind(this);
  }

  click(video) {
    this.setState({
      currentVideo: video
    });
  }

  userSearch(e) {
    this.setState({
      search: e.target.value
    });

      
      
    /*console.log(e);
    console.log(this);*/
    //var criteria = ReactDOM.findDOMNode(this.refs.search);
    // console.log($('.form-control').val());

    /*var options = {
      q: string,
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
      }.bind(this));*/
  }

  userInput() {
    console.log('pressed');
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
      <Nav search={this.userSearch} pressed={this.userInput}/>
      <div className="col-md-7">
        <VideoPlayer video={this.state.currentVideo}/>
      </div>
      <div className="col-md-5">
        <VideoList videos={this.state.videos} onClick={this.click}/>
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
