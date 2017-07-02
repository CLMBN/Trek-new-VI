// Include React
var React = require("react");
var Tourlist = require("./Tourlist");

var ResultsPage = React.createClass({

  // Here we render the component
  render: function() {

    return (

<section className="clerfix">
  <div className="container">
    <div className="row">
      <div className="col-sm-8 col-xs-12">
        <div className="resultBar barSpaceAdjust">
          <h2>We found <span>8</span> Results for you</h2>
        </div>

        <Tourlist/>

        <div className="paginationCommon blogPagination categoryPagination">
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li>
                <a href="#" aria-label="Previous">
                  <span aria-hidden="true"><i className="fa fa-angle-left" aria-hidden="true"></i></span>
                </a>
              </li>
              <li className="active"><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li>
                <a href="#" aria-label="Next">
                  <span aria-hidden="true"><i className="fa fa-angle-right" aria-hidden="true"></i></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="col-sm-4 col-xs-12">
        <div className="clearfix map-sidebar map-right map-margin-btm">
          <div id="map"  style="position:relative; margin: 0;padding: 0;height: 538px; max-width: none;"></div>
        </div>
      </div>
    </div>
  </div>
</section>
    );
  }
});

// Export the component back for use in other files
module.exports = ResultsPage;
