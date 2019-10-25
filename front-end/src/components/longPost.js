import React from 'react';

class ShortPost extends React.Component {
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
                        <span className="text"> { this.props.details.asset.assetString }</span>
                        </li>
                    </ul>
                </li>
            </React.Fragment>
        );
    }
}