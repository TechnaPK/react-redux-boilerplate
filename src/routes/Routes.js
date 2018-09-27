import React, { Fragment, Component } from 'react'
import { Switch, Route } from 'react-router-dom'


class Routes extends Component {

	render() {
		return (
			<Fragment>
				<Switch>
					<Route path="/" />
				</Switch>
			</Fragment>
		)
	}

}

export default Routes;
