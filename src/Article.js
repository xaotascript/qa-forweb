import React, { Component } from 'react';

export default class Article extends Component {
	render() {
		return (
			<article>
				<h2>{this.props.question}</h2>
				<p>{this.props.answer}</p>
			</article>
		);
	}
}