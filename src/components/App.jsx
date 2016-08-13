class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0],
      videos: exampleVideoData
    };
    this.changeVideo = this.changeVideo.bind(this);
  }
  
  changeVideo() {
    console.log(this);
    this.setState({
      currentVideos: exampleVideoData[1]
    });
  }

  render() {
    return (
    <div>
      <Nav />
      <div className="col-md-7">
        <VideoPlayer video={this.state.currentVideo}/>
      </div>
      <div className="col-md-5">
        <VideoList videos={this.state.videos} handleClick={this.changeVideo}/>
      </div>
    </div>
    );
  }
}

App.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
