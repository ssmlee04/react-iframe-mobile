var React = require('react');
var Iframe = require('../index');

var g = React.render(
	<Iframe url ='http://cnn.com' width={"100%"} height={"100%"}/> ,
	document.body
);
