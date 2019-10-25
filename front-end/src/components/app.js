import React from 'react';
import EntryForm from './entry-form.js';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <React.Fragment>
                <EntryForm />
            </React.Fragment>
        );
    }
}

export default App;