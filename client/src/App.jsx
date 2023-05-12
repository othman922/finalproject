import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Outlet
} from "react-router-dom";
import Home from "./pages/home/Home";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />


      </Route>
    )
  )
  return (
    <main id="App" className="row m-0" >
      <aside id="appNavigation" className="col-12 border bg-dark text-light text-center">
        navigation
      </aside>
      <RouterProvider router={router} />

      <footer id="appFooter" className="col-12 border bg-dark text-light text-center">
        Footer
      </footer>
    </main>

  )
}

const Root = () => {
  return (
    <section id="appBody" className="container col-12  bg-danger ">
      <Outlet />
    </section>

  )
}

export default App
