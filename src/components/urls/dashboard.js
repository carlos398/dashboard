import React from "react";
import { Test } from "../views/test";
import { Users } from "../views/users";
import "../../App.css";

export const DashBoard = (props) =>{
    if(props.token.length > 10){
        console.log(1)
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
    else{
        console.log(2)
        return(
            <h2>You dont goin to be here</h2>
        )
    }
}