import {Link,Outlet} from "react-router-dom"

const Nav = () => {
  const handleClick =()=>{
    window.location.reload();
  };
    return(
        <>
        <nav className="navbar navbar-expand-md bg-success ">
        <a className="navbar-brand" href="#">ShopSphere</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link text-white" to='/' onClick={handleClick}>Home</Link>

        </li>
        <li className="nav-item">
        <Link className="nav-link text-white" to='/Contact' >Contacts</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link text-white" to='/About'>About</Link>

        </li>    
        <li className="nav-item">
        <Link className="nav-link text-white" to='/Product'>Products</Link>

        </li>    
      </ul>
    </div>
       
        </nav>  
        <Outlet/> 
        </>
    )
}

export default Nav