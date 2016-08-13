var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,
    dataType: 'json',
    success: function(data) {
      console.log('success');

      if (callback) {
        callback(data.items);
      }
    },
    error: function(error) {
      console.log('Error!', error);
    }

  });
};

window.searchYouTube = searchYouTube;
