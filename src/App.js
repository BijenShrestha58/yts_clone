import { HomeLayout } from './layouts/HomeLayout';
import {Route, Routes} from "react-router";
import { MovieDetails } from './pages/MovieDetails';


const App=()=>{
  const routes=[
    {path:'',element:<HomeLayout/>},
    {path:'home',element:<HomeLayout/>},
    {path:'movie/:id',element:<MovieDetails/>},

  ]
  return(
    <>
      <Routes>
        {routes.map((v,key)=>(
          <Route path={v.path} element={v.element} key={key}></Route>
        ))}
      </Routes>
    </>
  )
}

export default App;
