var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={props.search}/>
    <button className="btn hidden-sm-down" type="submit" onClick={props.pressed}>
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
