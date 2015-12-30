"use strict";
var React = require("react");
var $ = require ('jquery');
var Iframe = React.createClass({
    displayName: "React-Iframe",

    propTypes: {
        url: React.PropTypes.string.isRequired,
        width: React.PropTypes.string,
        height: React.PropTypes.string
    },

    getInitialState: function(){
        return {isClosed: false};
    },

    getDefaultProps: function getDefaultProps() {
        return {
            height: "100%",
            width: "100%",
            position: "fixed"
        };
    },

    componentDidMount: function() {
        $('#scroller').css({'overflow' : 'auto', '-webkit-overflow-scrolling' : 'touch'});
        $('#contentIframe').contents().find('body').css('-webkit-transform', 'translate3d(0, 0, 0)');
    },

    shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
        return this.props.url !== nextProps.url || this.state.isClosed !== nextState.state;
    },

    handleOnClose : function() {
        this.setState({isClosed : true});
    },

    render: function render() {
        var that = this;
        var isClosed = this.state.isClosed;
        var width = this.props.width;
        var height = "100%" ; //this.props.height;
        if (!width || width.toString().indexOf("%") === -1) width = "100%";
        if (!height || height.toString().indexOf("%") === -1) height = "100%";
        var widthNumber = width.replace("%", "");
        var heightNumber = height.replace("%", "");
        var marginWidth = (100 - widthNumber) / 2 + "%";
        var marginHeight = (100 - heightNumber) / 2 + "%";

        var a = React.createElement("img", {src: "//s3.amazonaws.com/clearstreet/misc/cross.png",
            onClick:this.handleOnClose,
            style: {marginTop: "15px", marginRight: "15px", width: "12%", position: "fixed", top: marginHeight, right: marginWidth, zIndex: 3, float: "left"}
        });
        var f = React.createElement("iframe", { ref: "iframe",
            className: "contentIframe",
            frameBorder: "0",
            src: this.props.url,
            style: { height: "100%", width: "100%"},
            height: "100%", width: "100%"
        });
        return !isClosed && React.createElement("div", {id: "scroller", style: {overflow: "auto", height: height, width: width, marginLeft: marginWidth, marginTop: marginHeight, position: "fixed", top: 0, left: 0, zIndex: 1}}, f, a) || React.createElement("div");
    }
});

module.exports = Iframe;