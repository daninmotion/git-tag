import React from 'react'

export default React.createClass({
	render () {
		return (
			<div>
				<nav className='dt w-100 border-box pa3 ph5-ns' role='navigation'>
					<a className='dtc v-mid mid-gray link dim w-25' href='/' title='Home'>
						GitTag
					</a>
					<div className='dtc v-mid w-75 tr'>
						<a className='link dim dark-gray f6 f5-ns dib mr3 mr4-ns' href='/repos' title='Repos'>
							Repos
						</a>
						<a className='link dim dark-gray f6 f5-ns dib mr3 mr4-ns' href='/logout' title='Repos'>
							Logout
						</a>
					</div>
				</nav>
				<div className='container fl w-100 pa5'>
					{this.props.children}
				</div>
			</div>
		)
	}
})