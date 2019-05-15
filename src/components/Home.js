import React, { Component } from 'react';

class Home extends Component {
    render(){
        return(
            <div className="home">
                <div className="home__container">
                    <h1>Title</h1>
                    <p className="home__description">Description</p>
                    <p className="home__link">Link</p>
                    <div className="home__group">
                        <i class="home__groupButton1 far fa-arrow-alt-circle-up"></i>
                        <i class="home__groupButton1 far fa-arrow-alt-circle-down"></i>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Home;