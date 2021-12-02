import React from "react";
import { Test } from "../views/test";
import { Users } from "../views/users";
import "../../App.css";

export const DashBoard = () =>{
    return(
        <section className="dash">
            <div className="dash-one">
                <Users/>
            </div>
            <div className="dash-two">
                <div>
                    <Test/>
                </div>
                <div>
                    <Test/>
                </div>
                <div>
                    <Test/>
                </div>
                <div>
                    <Test/>
                </div>
            </div>
        </section>
    )
}