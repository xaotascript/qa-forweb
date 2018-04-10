import React, { Component } from 'react';
import './Filter.css';

export default class Filter extends Component {
	onChange(evt) {
		this.props.onChange(evt.target.value);
	}

	render() {
		return (
			<div className="Filter">
				<input className="FilterInput" type="text" placeholder="Search" onChange={this.onChange.bind(this)}/>
			</div>
		);
	}
}
