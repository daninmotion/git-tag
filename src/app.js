import React from 'react' //'import' is an ES6 mechanism

//Here we are ES6.
//We will use 'const' instead of 'var'. When you use 'const' this means that you can't assign a new meaning to 'Hello' later on. 
//'render ()' is the same as writing 'render: function'
const Hello = React.createClass({
	render () {
		return (
			<div>Hello, {this.props.name} </div>
		)
	}
})

React.render(<Hello name="Dan" />, document.body)

