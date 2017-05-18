import React from 'react'
import Router from 'ampersand-router'
import HomePage from './pages/home'
import ReposPage from './pages/repos'

export default Router.extend({
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
		React.render(<HomePage />, document.body)
	}, 

	repos () {
		React.render(<ReposPage />, document.body)
	}

})