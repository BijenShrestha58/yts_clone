import { Nav } from "../components/partials/nav";
import { Home } from "../pages/Home";
export const HomeLayout=()=>{
    return(<>
        <Nav/>
        <div className="home">
            <Home/>
        </div>
    </>
    )
}