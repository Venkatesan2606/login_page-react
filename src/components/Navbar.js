import { isAuthenticated } from '../services/Auth';
import {Link} from 'react-router-dom'

export default function Navbar(props){
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Venkat Shop</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto"  >
                    {!isAuthenticated()?<li className="nav-item"><Link className="nav-link" to="/register" >Register</Link></li>:null}
                    {!isAuthenticated()?<li><Link className="nav-link" to="/login" >Login</Link></li>:null}
                    {isAuthenticated()?<li className="nav-item"><Link className="nav-link" to='/dashboard' >Dashboard</Link></li>:null}
                    {isAuthenticated()?<li><a className="nav-link" style={{cursor:"pointer"}} onClick={props.logoutUser}>Logout</a></li>:null}
                </ul>
            </div>
        </nav>
    )
}