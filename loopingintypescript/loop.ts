// create type RouteObj in such a way that it returns object where both key and value are member of the union
type Route = "/" | "/routes" | "/admin"
type RouteObj = unknown;

const obj: RouteObj = {
  "/": "/",
  "/admin": "/admin",
  "/routes": "/routes"
}
 