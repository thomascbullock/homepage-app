import React from 'react';

class ShortPost extends React.Component {
    render() {
        return (
            <React.Fragment>
                <li>
                    <ul>
                        <li>
                        <span>{ this.props.details.date }</span>
                        </li>
                        <li>
                        <span> { this.props.details.asset.assetString }</span>
                        </li>
                    </ul>
                </li>
            </React.Fragment>
        );
    }
}