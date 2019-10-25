import React from 'react';

class ShortPost extends React.Component {
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
                        <span className="text"> { this.props.details.asset.assetString }</span>
                    </p>

                </li>
            </React.Fragment>
        );
    }
}