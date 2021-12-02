import React from "react";
import "../../App.css";


export const UsersCard = () =>{
    return(
        <div className="usersCard">
            <div className="imagenContainer">
                <img src="https://th.bing.com/th/id/OIP.1v9GBCp6VNe4SKL2bbx0RQHaFj?pid=ImgDet&rs=1" alt="profile pic"/>
            </div>
            <div className="contentContainer">
                <div className="textContainer">
                    <h3>Carlos andres reyes p</h3>
                    <h4>@careyes</h4>
                </div>
                
                <div className="inputContainer">
                    <h5>active?</h5>
                    <input type="checkbox"/>
                </div>
            </div>

        </div>
    )
}