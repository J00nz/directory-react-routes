var React = require('react');
var Route = require('react-router').Route

module.exports = function DirectoryToReactRoutes(req, filter, routeProps) {
  var pageComponents = {}

  req.keys().forEach(function(key) {
    var newKey = key.replace("./", "").replace(".jsx", "").replace(".js", "")

    var component = req(key)

    if (filter && !filter(component))
      return

    pageComponents[newKey] = component
  })

  var routes = Object.keys(pageComponents).map(function(i) {
    var path = "/" + i.replace(/\/index$/, '');

    var props = {
      key: i, 
      path: path + "(/**)",
      component: pageComponents[i].default,
      base: path,
    };

    Object.assign(props, routeProps);

    return React.createElement(Route, props);
  })

  return routes
}
