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
                        <button className="home__groupButton1">Yes</button>
                        <button className="home__groupButton2">No</button>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Home;