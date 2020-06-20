import React from "react"
import { Route, Redirect } from "react-router-dom"
import * as Auth from "../../shared/services/auth"

const PublicRoute = ({ component: Component, rest }) => (
	<Route
		{...rest}
		render={props =>
			Auth.isAuthenticated() ? <Redirect to="/" /> : <Component {...props} />
		}
	/>
)

export default PublicRoute
