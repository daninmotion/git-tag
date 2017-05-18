import Router from './router' //'import' is an ES6 mechanism
import styles from './styles/main.css'
import Tachyons from 'tachyons'

window.app = {
	//init method
	init () {
		this.router = new Router()
		this.router.history.start()
	}
}

window.app.init()

