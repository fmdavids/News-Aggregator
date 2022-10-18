import {Link} from 'react-router-dom'
const Nav = () => {
    return ( 
        <div className="container mt-3">
            <div className="nav">
                <ul className="mt-4">
                    <li className="ps-lg-3" ><Link to="/">All</Link></li >
                    <li className="ps-lg-3" ><Link to="tech">Tech</Link></li >
                    <li className="ps-lg-3" ><Link to="Politics">Politics</Link></li >
                    <li className="ps-lg-3" ><Link to="Entertainment">Entertainment</Link></li >
                    <li className="ps-lg-3" ><Link to="Health">Health</Link></li >
                    <li className="ps-lg-3" ><Link to="Sport">Sport</Link></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Nav;