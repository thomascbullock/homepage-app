import React from 'react';
import superagent from 'superagent';

const dropdownTypes = {
    SHORT: ['asset'],
    LONG: ['title', 'file'],
    LINK: ['title', 'url', 'quote'],
    IMAGE: ['title', 'file']
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
            },
            postAdded: false,
            post: [],
            assetId: null,

        };
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
        this.saveFile = this.saveFile.bind(this);
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

    async saveFile(){
        const reader = new FileReader(); 
        reader.onload = async function(evt) {
            const fileBody = evt.target.result;
            const fileData = {fileBody};
            const uploadResponse = await superagent.post(`${process.env.REACT_APP_API_URL}/upload`).send(fileData);
            console.log(uploadResponse);
            return uploadResponse.body;
        }
        reader.readAsBinaryString(this.fileInput.current.files[0]);
    }

    async handleSubmit(event) {

        event.preventDefault();
        let asset = {
            assetString: event.target.assetString.value
        };
        const postData = {
            date: Date.now(),
            title: {
                titleString: event.target.title.value,
                titleHref: event.target.url.value
            },
            postType: this.state.postType,
            quote: event.target.quote.value
        };

        if (this.fileInput.current.files[0]) {
            const fileId = await this.saveFile();
            console.log('fileId: ', fileId);
            this.setState({assetId: fileId});
            console.log(this.state.assetId);
        }

        if (this.state.assetId) {
            asset['isS3'] = true;
            asset['assetString'] = this.state.assetId;
        } else {
            asset['isS3'] = false;
        };
       
       const postResult = await superagent.post(`${process.env.REACT_APP_API_URL}/post`).send(postData);
       console.log(postResult.body);
       this.setState({
           postAdded: true,
           post: postResult.body
       });
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <ul>
                    <li><label>
                        Select post type:
                    <select onChange={this.handleDropdownChange}>
                            <option value="SHORT">Short Post</option>
                            <option value="LONG">Long Post</option>
                            <option value="LINK">Linked Post</option>
                            <option value="IMAGE">Image Post</option>
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