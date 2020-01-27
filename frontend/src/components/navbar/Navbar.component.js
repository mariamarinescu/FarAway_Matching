
import React from "react";
import {Link} from 'react-router-dom'
import { useAuth0 } from "../../react-auth0-spa";
import {Button} from 'react-bootstrap'
import Welcome from '../Welcome.component'

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout} = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <div>
       
        <button variant="danger" className="button" type="button" onClick={() => loginWithRedirect({})}>Log in/Sign in</button>
        <Welcome/>
<div className="fade"></div>
        <section class="star-wars">

  <div class="crawl">
    
    <div class="title">
      <p>Far Away Matching</p>
      <h1>The Best Hope</h1>
    </div>
    
    <p>It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.</p>     
    <p>During the battle, you can relax and find your match... Just imagine, winning the war and having someone special exactly suited for your personality and not only, to share this moment with and all the special moments that you'll face together, after.</p>
    <p>Hapilly ever after to the Death Star and back... with Far Away Matching!</p>

  </div>

</section>
        </div>
      )}
     

{isAuthenticated && <button onClick={() => logout()}>Log out</button>}

{/* NEW - add a link to the home and profile pages */}
{isAuthenticated && (
  <span>
    <Link to="/home">Home</Link>&nbsp;
    <Link to="/profile">Profile</Link>
  </span>
)}
  </div>
  );
};

export default NavBar;