import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var marked = require('marked');

class Display extends React.Component {
	constructor(){
		super();
		this.state = {
			input: 'Heading\n=======\r\n\r\nSub-heading\r\n-----------\r\n\r\n### Another deeper heading\r\n\r\nParagraphs are separated\r\nby a blank line.\r\n\r\nLeave 2 spaces at the end of a line to do a\r\nline break\r\n\r\nText attributes *italic*, **bold**,\r\n`monospace`, ~~strikethrough~~ .\r\n\r\nShopping list:\r\n\r\n  * apples\r\n  * oranges\r\n  * pears\r\n\r\nNumbered list:\r\n\r\n  1. apples\r\n  2. oranges\r\n  3. pears\r\n\r\nThe rain---not the reign---in\r\nSpain.\r\n\r\n *[Herman Fassett](https:\/\/freecodecamp.com\/hermanfassett)*'
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({input: event.target.value});
	}

	render(){
		return (
			<div className="container">
				<header>Markdown previewer</header>
				<div className="description">You can type GitHub-flavored Markdown into a text area and see the output in the result block.</div>
				<div >
					<textarea onChange={this.handleChange} defaultValue={this.state.input} className="block markdown_block"></textarea>
				</div>
				<div className="block render_block" dangerouslySetInnerHTML={this.createMarkup()}/>
			</div>
		)
	}

	createMarkup(){
    	var markdown = marked(this.state.input);
    	return {__html: markdown};
  	}
};

ReactDOM.render(
  	<Display />,
  	document.getElementById('root')
);