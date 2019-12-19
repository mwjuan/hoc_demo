let DataSource = {
	getData1: () => {
		return ['data1', 'data2', 'data3'];
	},
	getData2: () => {
		return 'blogPost Contents';
	},
	addChangeListener: () => {
		console.log('addChangeListener')
	},
	removeChangeListener: () => {
		console.log('removeChangeListener')
	}
}

export default DataSource;

