// Include React
var React = require("react");
var Link = require("react-router").Link;
var Tours = require("./Tours");

var Search = React.createClass({

    getInitialState: function() {
    return { 
      city: "", 
      category: ""

    };
  },

    handleChange(event) {
   
    if(event.target.id === 'city'){
       this.setState({city: event.target.value});
    }

    if(event.target.id === 'category'){
       this.setState({category: event.target.value});
    }

  },

  // Here we render the component
  render: function() {
    var category = "hello"
    var city = "nyc"
    return (
      <section className="clearfix homeBanner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="banerInfo">
                <h1>Explore. Discover. Share</h1>
                <p>Trek it Out helps to find local tours designed by locals</p>
                <form className="form-inline" action="listing-sidebar-map-left.html" method="">
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-addon">Find</div>
                      <input type="text" className="form-control" id="findItem" placeholder="What are you looking for?"></input>
                      <div className="input-group-addon addon-right"></div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-addon">Near</div>
                      <input type="text" className="form-control" id="nearLocation" placeholder="Location"></input>
                      <div className="input-group-addon addon-right"><i className="icon-listy icon-target" aria-hidden="true"></i></div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">Search <i className="fa fa-search" aria-hidden="true"></i></button>
                  <button> <Link to="Tempcomp">Temp Result</Link></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
});
module.exports = Search;
