import React from "react";

function Content(){
    return(
        <div>
            <div className="image" />
            <div className="content">
            <h1 className="name">Amirah Ezzamie</h1>
            <h3 className="title">FrontEnd Developer</h3>
            <button className="email-button">
                <i className="fa-solid fa-envelope"></i>
                <span>Email</span>
            </button>
            <div className="content-items">
            <h2>About</h2>
            <p>I thrive in a self-paced environment, driven by an insatiable thirst for learning.
                 As a frontend developer, my focus lies in simplifying complexities and streamlining daily workflows.  
                 Constantly seeking fresh knowledge, I enthusiastically embrace new opportunities to expand my skill set.
            </p>
            <h2>Interest</h2>
            <p>Coffee fanatic. Meat lover. Reader. Minimalist</p>
            </div>
        </div>
        </div>
       
    )
}

export default Content