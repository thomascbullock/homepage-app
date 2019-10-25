import React from 'react';

class ShortPost extends React.Component {

    //get the image blob
    //render the blob
    //display the stuff

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
                    <p>
                        <span className="image"> { this.props.details.image }</span>
                    </p>
                </li>
            </React.Fragment>
        );
    }
}