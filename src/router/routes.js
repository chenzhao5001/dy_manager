import Login2 from "../views/Login2"
import HelloWorld from "../views/HelloWorld"
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
let routes = [
  { path: '/', component: Login2 },
  { path: '/hello_world', component: HelloWorld },
  // { path: '/foo', component: Foo },
  // { path: '/bar', component: Bar },
]


export default routes
