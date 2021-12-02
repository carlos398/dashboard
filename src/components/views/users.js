import React from "react";
import "../../App.css";
import {UsersCard} from './user_card'

export const Users = () =>{
    return(
        <section className="userSearchSection">
            <div>
                <h2>Users List</h2>
                <form className="UsersearchForm">
                    <div>
                        <input type="text" placeholder="username to search"/>
                    </div>
                    <div>
                        <button className="btnSearch">Search User</button>
                    </div>
                </form>
            </div>
            <div>
                <UsersCard/>
            </div>

        </section>
    )
}