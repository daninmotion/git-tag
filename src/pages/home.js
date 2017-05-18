import React from 'react'

export default React.createClass({
	render () {
		return (
			<div className='container fl w-100 pa5'>
				<header role='banner'>
					<h1>GitTag</h1>
				</header>
				<div>
					<p>Label your git-tags.</p>
					<a href='login' className='button button-large'>
						<span className='mega-octicon octicon-mark-gihub'>Login with GitHub</span>
					</a>
				</div>
			</div>
		)
	}
})