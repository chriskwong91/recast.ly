var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onKeyPress={props.search}/>
    <button type="submit" className="btn hidden-sm-down" onClick={props.pressed}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

Search.propTypes = {
  search: React.PropTypes.func.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
