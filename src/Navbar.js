import react from "react";
import Aboutus from "./Aboutus";
import { Link, NavLink } from "react-router-dom";
import ContactUs from "./ContactUs";
function Navbar(){

   //get login user if any
   let loggedInUser = window.sessionStorage.getItem("firstname");
   const logout = () => {
     window.sessionStorage.removeItem("email");
     window.sessionStorage.removeItem("firstname");
     window.location.reload();
   }

   return (
       <>
       <div className="container-fluid nav_bg">
       <div className="row">
       <div className="col-10 mx-auto">
      
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
 <div className="container-fluid">
   <a className="navbar-brand" href="/Home">Emotion Detection</a>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       <li className="nav-item">
         <a className="nav-link active" aria-current="page" href="/Home">Home</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="/aboutus">AboutUs</a>
                 
       </li>

       <li className="nav-item">
         <a className="nav-link" href="/contactUs">Contact US</a>
                 
       </li>
     </ul>
    
    
   </div>
 </div>
</nav>
</div>
</div>
</div>
       </>
   );
};
export default Navbar;