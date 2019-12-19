import React, { Component } from 'react';
import Component01 from './Component01.js';
import Component02 from './Component02';
import DataSource from './DataSource';
import withHeader from './WithHeader';
import './App.css';

const WithSubscription = (MyComponent, selectData) => {
	return class extends Component {
		constructor(props) {
			super(props);
			this.handleChange = this.handleChange.bind(this);
			this.state = {
				data: selectData(DataSource, props)
			};
		}

		componentDidMount() {
			// ……注意订阅数据……
			DataSource.addChangeListener(this.handleChange);
		}

		componentWillUnmount() {
			DataSource.removeChangeListener(this.handleChange);
		}

		handleChange() {
			this.setState({
				data: selectData(DataSource, this.props)
			});
		}
		render() {
			const style = {
				'marginBottom': '30px'
			}
			return (
				<div style={style}>
					<div>This is a HOC Component...</div>
					<MyComponent data={this.state.data} {...this.props} />
				</div>
			);
		}
	}
}

const EnhanceDemo1 = withHeader(Component01, 'Component1标题');
const EnhanceDemo2 = withHeader(Component02, 'Component2标题');

const Component1 = WithSubscription(
	EnhanceDemo1,
	(DataSource) => DataSource.getData1()
);

const Component2 = WithSubscription(
	EnhanceDemo2,
	(DataSource, props) => DataSource.getData2(props.id)
);

class App extends Component {
	render() {
		const style = {
			width: '100%',
			'text-align': 'center',
			title: {
				color: 'red'
			}
		}
		return (
			<div style={style}>
				<h1 style={style.title}>This is my hoc</h1>
				<Component1 />
				<Component2 />
				<EnhanceDemo2 />
			</div>
		);
	}
}

export default App;
