import React from 'react';
import superagent from 'superagent';

const dropdownTypes = {
    shortPost: ['asset'],
    longPost: ['title', 'file'],
    linkedPost: ['title', 'url', 'quote'],
    imagePost: ['title', 'file']
};

class EntryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postType: 'shortPost',
            types: {
                title: 'hidden',
                url: 'hidden',
                quote: 'hidden',
                asset: 'text',
                file: 'hidden'
            }
        };
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }

    handleDropdownChange(event) {
        const currentTypes = this.state.types;
        const validTypes = dropdownTypes[event.target.value];
        for (let [field, status] of Object.entries(this.state.types)) {
            if (validTypes.includes(field)) {
                if (field === 'file') {
                    currentTypes[field] = 'file';
                } else {
                    currentTypes[field] = 'text'
                }
            } else {
                currentTypes[field] = 'hidden';
            }
        }
        this.setState({
            postType: event.target.value,
            types: currentTypes
        });
    }

    handleSubmit(event) {

        event.preventDefault();
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <ul>
                    <li><label>
                        Select post type:
                    <select onChange={this.handleDropdownChange}>
                            <option value="shortPost">Short Post</option>
                            <option value="longPost">Long Post</option>
                            <option value="linkPost">Linked Post</option>
                            <option value="imagePost">Image Post</option>
                        </select>
                    </label></li>
                    <li><input type={this.state.types.title} name="title" placeholder="Post Title..." /></li>
                    <li><input type={this.state.types.url} name="url" placeholder="Url to Link Title..." /></li>
                    <li><input type={this.state.types.quote} name="quote" placeholder="Quote Text Snippet..." /></li>
                    <li><input type={this.state.types.asset} name="assetString" placeholder="Type your post here..." /></li>
                    <li><input type={this.state.types.file} name="file" ref={this.fileInput} /></li>
                    <li><input type="submit" value="Submit" /></li>
                </ul>
            </form>
        );
    }
}

export default EntryForm;