import React from 'react'
import { Route } from 'react-router'

export default function DirectoryToReactRoutes(req, filter, routeProps) {
  
  var pageComponents = {}
  
  req.keys().forEach(function(key) {
    let newKey = key.replace("./", "").replace(".jsx", "").replace(".js", "")

    let component = req(key)
    
    if (filter && !filter(component))
      return

    pageComponents[newKey] = component
  })
  
  var routes = Object.keys(pageComponents).map(function(i) {
    var path = "/" + i.replace(/\/index$/, '')
    
    return <Route key={i} path={ path + "(/**)"} component={ pageComponents[i].default } base={ path } { ...routeProps } />
  })
  
  return routes
}