class Search extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      string: ''
    };
  }

  handleInput(e) {
    this.setState({
      string: ReactDOM.findDOMNode(this.refs.input).value
    });
    this.props.search(e, this.state.string);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" ref="input" type="text" onKeyPress={_.debounce((e) => this.handleInput(e), 500)}/>
        <button type="submit" className="btn hidden-sm-down" onClick={this.props.pressed}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
}
Search.propTypes = {
  search: React.PropTypes.func.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
