import React from "react";
import "../../App.css";


export const Users = () =>{
    return(
        <section className="userSearchSection">
            <h2>Users List</h2>
            <form className="UsersearchForm">
                <div>
                    <input type="text" placeholder="username to search"/>
                </div>
                <div>
                    <button className="btnSearch">Search User</button>
                </div>
            </form>
        </section>
    )
}