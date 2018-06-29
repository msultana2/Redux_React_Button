import React, {Component} from 'react';
import './App.css';

import {connect} from 'react-redux';

class Button extends Component {
    handleSubmit = () => {
        this.props.dispatch({ type: 'SHOW' });
    }
    render() {
        return(
            <div className='App'>
                <br/><br/><button onClick={this.handleSubmit}>Submit</button><br/><br/>
                {this.props.showText ? 'Click button shows a Paragraph!' : null}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    showText: state.showText
});

export default connect(mapStateToProps)(Button);