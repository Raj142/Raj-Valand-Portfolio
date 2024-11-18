import React from "react";
import stockProject from '../assets/images/stock_trade_project.jpeg';
import dalBookBarn from '../assets/images/dalBookBarn.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Raj142/CSCI5308-StockTradingPlatform" target="_blank" rel="noreferrer"><img src={stockProject} className="zoom" alt="thumbnail" width="100%" height="70%"/></a>
                <a href="https://github.com/Raj142/CSCI5308-StockTradingPlatform" target="_blank" rel="noreferrer"><h2>Stock Trade Management</h2></a>
                <p>Developed a user-friendly web application for seamless stock trading and investment featureing functionalities like WatchLists, Baskets, SIPs, and real-time stock charts.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Raj142/CSCI5709-DalBookBarn" target="_blank" rel="noreferrer"><img src={dalBookBarn} className="zoom" alt="thumbnail" width="100%" height="70%"/></a>
                <a href="https://github.com/Raj142/CSCI5709-DalBookBarn" target="_blank" rel="noreferrer"><h2>Dal Book Barn</h2></a>
                <p>Lead and Developed a resilient front end and interactive back end for book management system. Used React js, Mongo DB, Express Js, Node js for development purpose and CI/CD pipelins for deployment</p>
            </div>
        </div>
    </div>
    );
}

export default Project;