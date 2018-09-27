import React, { Component } from 'react'
import { connect } from 'react-redux'

import { checkAuth } from '../redux/actions/actions-auth'
// import { setOptions } from '../redux/actions/actions-options'

class InitializeApp extends Component {

	componentDidMount = () => {

		const { dispatch } = this.props

		// if( ! window.isMobile ){
		// 	document.body.style.minWidth = "1000px"
		// }

		//Hide Loading of Webpage after 500 miliseconds for a good visual
		setTimeout(() => window.hideLoading(), 500)

		dispatch(checkAuth())

		// window.addEventListener("beforeinstallprompt", ev => {
		// 	// Stop Chrome from asking _now_
		// 	ev.preventDefault();

		// 	// Create your custom "add to home screen" button here if needed.
		// 	// Keep in mind that this event may be called multiple times, 
		// 	// so avoid creating multiple buttons!
		// 	// myCustomButton.onclick = () => ev.prompt();

		// 	// Ask for adding it to homescreen after 3 seconds
		// 	setTimeout(() => ev.prompt(), 3000)
		// });


	}

	render() {
		return <React.Fragment></React.Fragment>
	}

}

export default connect()(InitializeApp);
