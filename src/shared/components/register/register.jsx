import React, { useState } from "react"
import { FormWrapper } from "../form/form.styled"
import { userRegister } from "../../../shared/db/utils"
import { Link } from "react-router-dom"
import { Form } from "../../components"

const Register = () => {
	const [data, setData] = useState({
		email: "",
		password: "",
		username: "",
		name: "",
		age: ""
	})

	const { email, password, username, name, age } = data

	const handleSubmit = () => {
		userRegister(data)
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
		},
		{
			id: 2,
			label: "Username",
			modelName: "username",
			type: "text",
			value: username,
			onChange: handleChange
		},
		{
			id: 3,
			label: "Name",
			modelName: "name",
			type: "text",
			value: name,
			onChange: handleChange
		},
		{
			id: 4,
			label: "Age",
			modelName: "age",
			type: "text",
			value: age,
			onChange: handleChange
		}
	]

	return (
		<FormWrapper>
			<Form
				fields={fields}
				handleSubmit={handleSubmit}
				buttonText={"Register"}
			/>
			<Link to="/login">Already an user?</Link>
		</FormWrapper>
	)
}

export default Register
