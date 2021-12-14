import React from "react";
import { Test } from "../views/test";
import { Users } from "../views/users";
import "../../App.css";

export const DashBoard = (props) =>{
    const Token = props.token
    return(
        <section className="dash">
            <div className="dash-one">
                <Users token = {Token}/>
            </div>
            <div className="dash-two">
                <div>
                    <Test token = {Token}/>
                </div>
                <div>
                    <Test token = {Token}/>
                </div>
                <div>
                    <Test token = {Token}/>
                </div>
                <div>
                    <Test token = {Token}/>
                </div>
            </div>
        </section>
    )
}