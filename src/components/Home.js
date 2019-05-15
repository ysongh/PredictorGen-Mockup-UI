import React, { Component } from 'react';
import List from "./List";

class Home extends Component {
    render(){
        return(
            <div className="home">
                <p className="home__gen">1,000 GEN</p>
                <div className="home__container">
                    <h1 className="home__title">Title</h1>
                    <p className="home__description">Description</p>
                    <p className="home__link">Link -> <i class="far fa-sticky-note"></i></p>
                    <div className="home__group">
                        <i class="home__groupButton1 far fa-arrow-alt-circle-up"></i>
                        <i class="home__groupButton1 far fa-arrow-alt-circle-down"></i>
                    </div>
                </div>
                <List />
            </div>
            
        );
    }
}

export default Home;