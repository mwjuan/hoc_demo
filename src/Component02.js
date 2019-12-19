import React from 'react'

export default class extends React.Component {
	render() {
		return (
			<div>
				<textarea value={this.props.data} />
			</div>
		);
	}
}