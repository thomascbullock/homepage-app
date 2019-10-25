import React from 'react';

class ShortPost extends React.Component {
    render() {
        return (
            <React.Fragment>
                <li>
                    <p>
                        <span>{ this.props.details.date }</span>
                    </p>
                    <p>
                        <span> { this.props.details.title.titleString }</span>
                    </p>
                </li>
            </React.Fragment>
        );
    }
}