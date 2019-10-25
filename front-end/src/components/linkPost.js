import React from 'react';

class ShortPost extends React.Component {

    //check if a title url exists
    //if so, construct an a href
    //

    render() {
        return (
            <React.Fragment>
                <li>
                    <ul>
                        <li>
                        <span className="date">{ this.props.details.date }</span>
                    </li>
                    <li>
                        <span className="title"><a href={ this.props.details.title.titleHref }>{ this.props.details.title.titleString }</a></span>
                    </li>
                    </ul>
                </li>
            </React.Fragment>
        );
    }
}