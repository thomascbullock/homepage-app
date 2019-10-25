import React from 'react';

class ShortPost extends React.Component {

    //check if a title url exists
    //if so, construct an a href
    //

    render() {
        return (
            <React.Fragment>
                <li>
                    <p>
                        <span className="date">{ this.props.details.date }</span>
                    </p>
                    <p>
                        <span className="title"> { this.props.details.title.titleString }</span>
                    </p>
                    
                </li>
            </React.Fragment>
        );
    }
}