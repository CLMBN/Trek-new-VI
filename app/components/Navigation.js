
// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

// Create the Main component
var Navigation = React.createClass({

  // Here we render the component
  render: function() {

    return (
    
<header className="header">

      {/*<!-- TOP INFO BAR -->*/}

      <div className="nav-wrapper">

        {/*<!-- NAVBAR -->*/}
        <nav id="menuBar" className="navbar navbar-default lightHeader" role="navigation">
          <div className="container">

            {/*<!-- Brand and toggle get grouped for better mobile display -->*/}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="index.html"><img src="img/logo-blue.png" alt="logo"></img></a>
            </div>

            {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
            <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li className=""><a href="blog.html">blog </a></li>
                <li className=" dropdown singleDrop">
                  <a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">admin <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                  <ul className="dropdown-menu dropdown-menu-right">
                      <li><a href="dashboard.html">Dashboard</a></li>
                      <li><a href="add-listings.html">Add Listing</a></li>
                      <li><a href="edit-listings.html">Edit Listing</a></li>
                      <li><a href="listings.html">My Listings</a></li>
                      <li><a href="profile.html">My Profile</a></li>
                      <li><a href="oders.html">My Orders</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <button type="button" className="btn btn-default navbar-btn" data-toggle="modal" data-target="#loginModal"> + <span>Add Listing</span> </button>
          </div>
        </nav>
      </div>
    </header>

   
    );
  }
});

// Export the component back for use in other files
module.exports = Navigation;
