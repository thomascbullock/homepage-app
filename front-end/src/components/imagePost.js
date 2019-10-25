import React from 'react';

class ShortPost extends React.Component {

    //get the image blob
    //render the blob
    //display the stuff

    render() {
        return (
            <React.Fragment>
                <li>
                    <ul>
                       <li> 
                           <span className="date">{ this.props.details.date }</span>
                       </li>
                        <li>
                        <span className="title"> { this.props.details.title.titleString }</span>
                        </li>
                        <li>
                        <span className="image"> { this.props.details.image }</span>
                        </li>
                    </ul>
                </li>
            </React.Fragment>
        );
    }
}