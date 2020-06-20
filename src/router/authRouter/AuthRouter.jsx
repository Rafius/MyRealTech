import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import Auth from "../../sections/auth"
import { Login, Register } from "../../shared/components"

const AuthRouter = () => (
	<Auth>
		<Switch>
			<Route exact path="/login" component={Login} />
			<Route exact path="/register" component={Register} />
			<Redirect to="/login" />
		</Switch>
	</Auth>
)

export default AuthRouter
