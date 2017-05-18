import React from 'react'
import Router from 'ampersand-router'
import HomePage from './pages/home'
import ReposPage from './pages/repos'
import Layout from './layout'

export default Router.extend({
	renderPage (page, opts = {layout: true}) {
		if (opts.layout) {
			page = (
				<Layout>
					{page}
				</Layout>
			)
		} 

		React.render(page, document.body)
	},

	routes: {
		'': 'home', //root page
		'repos': 'repos' //page that list repos 
	},

	//Our corresponding methods to our routes above
	/*Another way to write the below function;
		public: function() {
			...
		}
	*/
	home () {
		this.renderPage(<HomePage />, {layout: false}) //layout is an object and we are passing false to it and passing it in to our HomePage component.
	}, 

	repos () {
		this.renderPage(<ReposPage />)
	}

})