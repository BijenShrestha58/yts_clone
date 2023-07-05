import { Logo } from "../common/logo";
import { useNavigate } from "react-router";

export const Nav=()=>{
    const navigate=useNavigate();

    return(
        <>
            <div className="nav">
                <div className="nav-image">
                    <div className="logo" onClick={()=>{navigate('/home')}}>
                        <Logo/>
                    </div>
                    <div className="slogan">
                        HD movies at the smallest file size.
                    </div>
                </div>
                <div className="nav-items">
                    <div className="search">
                        <i className="material-icons">search</i><input type="text" placeholder="Quick Search" name="search"/>
                    </div>
                    <div className="nav-item">Home</div>
                    <div className="nav-item green">4k</div>
                    <div className="nav-item">Trending</div>
                    <div className="nav-item">Browse Movies</div>
                    <div className="nav-item login">Login</div>
                    <div className="line"></div>
                    <div className="nav-item login">Register</div>
                </div>

            </div>
        </>
    )
}