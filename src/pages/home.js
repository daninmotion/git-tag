import React from 'react'

export default React.createClass({
	/*Another way to write the below render function is;
		render: function () {
	
		}
	*/

	render () {
		return (
			<div className='container fl w-100 pa5'>
				<header role='banner'>
					<h1>GitTag</h1>
				</header>
				<div>
					<p>Label your git-tags.</p>
					<a href='login' className='f6 link dim br3 ph3 pv2 mb2 dib white bg-light-purple'>
						<span className='mega-octicon octicon-mark-gihub'>Login with GitHub</span>
					</a>
				</div>
			</div>
		)
	}
})