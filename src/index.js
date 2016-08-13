// TODO: Render the `App` component to the DOM
var options = {
  q: 'javascript',
  max: 5,
  key: window.YOUTUBE_API_KEY,
  part: 'snippet',
  type: 'video',
  videoEmbeddable: 'true'
};

ReactDOM.render(<App videos = {exampleVideoData}/>,
  document.getElementById('app'));

searchYouTube(options);
