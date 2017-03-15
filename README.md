# directory-react-routes
Simple module that translate a directory from a webpack-context to react-router routes.

## Install

```
npm install directory-react-routes
```

## Arguments

###### context
A webpack context, the directory which this context is initiated in will be used as base when building the routes.


###### filter
A function that will get the component which is about to be added to the route as argument.
If the function returns false the component will not be added to the resulting list of routes.


###### props
A object from whose props all the resulting ruotes will inherit from.
Useful if you would like to inject something as a onLoad etc.

## Example

```js
var directoryRoutes = require('directory-react-routes');

var context = require.context('./pages/', true, /^(.*\.(jsx$))[^.]*$/igm)

var routes = directoryRoutes(context, function(route) { return route.doAdd }, { onEnter: function() { alert("routed!") } })


<Router>
  {routes}
</Router>

```
