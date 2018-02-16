import App from './App.vue'
export const routes = Object.keys(App.components).map(component => ({
  path: `/${component}`,
  component: App.components[component],
  name: component.toLowerCase(),
}))
console.log(routes)
export default routes
