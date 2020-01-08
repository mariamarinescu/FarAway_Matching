import React, { Fragment } from "react";
import { useAuth0 } from "../../react-auth0-spa";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    
    <Fragment>


<input id="slider" class="customSlider" type="checkbox"/>
<label for="slider"></label>

<div class="wrapper">
    <div class="top-icons">
        <i class="fas fa-long-arrow-alt-left"></i>
        <i class="fas fa-ellipsis-v"></i>
        <i class="far fa-heart"></i>
    </div>
    
    <div class="profile">
        <img src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w" class="thumbnail"/>
        <div class="check"><i class="fas fa-check"></i></div>
        <h3 class="name">Beverly Little</h3>
        <p class="title">Javascript Developer</p>
        <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!</p>
        <button type="button" class="btn">Hire Me</button>
    </div>
    
    <div class="social-icons">
        <div class="icon">
            <a href="/"><i class="fab fa-dribbble"></i></a>
            <h4>12.8k</h4>
            <p>Followers</p>
        </div>
        
        <div class="icon">
            <a href="#"><i class="fab fa-behance"></i></a>
            <h4>12.8k</h4>
            <p>Followers</p>
        </div>
        
        <div class="icon">
            <a href="#"><i class="fab fa-twitter"></i></a>
            <h4>12.8k</h4>
            <p>Followers</p>
        </div>
    </div>
</div>

<div class="concept">concept by 
    <a href="https://dribbble.com/shots/4346772-Profile-Card" target="_blank">
        <i class="fab fa-dribbble"></i> Vijay Verma
    </a>
</div>



</Fragment>


     
   
  );
};

export default Profile;


