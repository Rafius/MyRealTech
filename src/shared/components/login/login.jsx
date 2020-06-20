import React, { useState } from "react"
import { FormWrapper } from "../form/form.styled"
import { userLogIn } from "../../../shared/db/utils"
import { Link } from "react-router-dom"
import { Form } from "../../components"

const Login = () => {
	const [data, setData] = useState({
		email: "rafius93@gmail.com",
		password: "test12"
	})

	const { email, password } = data

	const handleSubmit = () => {
		userLogIn(email, password)
	}

	const handleChange = (modelName, value) => {
		setData({ ...data, [modelName]: value })
	}

	const fields = [
		{
			id: 0,
			label: "Email",
			modelName: "email",
			type: "email",
			value: email,
			onChange: handleChange
		},
		{
			id: 1,
			label: "Password",
			modelName: "password",
			type: "password",
			value: password,
			onChange: handleChange
		}
	]

	return (
		<FormWrapper>
			<Form fields={fields} handleSubmit={handleSubmit} buttonText={"Login"} />
			<Link to="/register">Not an user yet?</Link>
		</FormWrapper>
	)
}

export default Login
