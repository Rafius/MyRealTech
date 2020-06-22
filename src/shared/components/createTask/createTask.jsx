import React, { useState } from "react"
import { FormWrapper } from "../form/form.styled"
import { Form } from "../../components"
import { insertData } from "../../db/utils"

const CreateTask = () => {
	const [data, setData] = useState({
		title: "asa",
		description: "asa",
		date: "",
		visibility: ""
	})
	const { title, description, date, visibility } = data

	const handleSubmit = () => {
		console.log(data)
		insertData("tasks", { ...data })
	}

	const handleChange = (modelName, value) => {
		setData({ ...data, [modelName]: value })
	}

	const fields = [
		{
			id: 0,
			label: "Title",
			modelName: "title",
			type: "text",
			value: title,
			onChange: handleChange
		},
		{
			id: 1,
			label: "Description",
			modelName: "description",
			type: "description",
			value: description,
			onChange: handleChange
		},
		{
			id: 2,
			label: "Date",
			modelName: "date",
			type: "date",
			value: date,
			onChange: handleChange
		},
		{
			id: 3,
			label: "Public/Private",
			modelName: "visibility",
			type: "text",
			value: visibility,
			onChange: handleChange
		}
	]

	return (
		<FormWrapper>
			<Form
				fields={fields}
				handleSubmit={handleSubmit}
				buttonText={"Create Task"}
			/>
		</FormWrapper>
	)
}

export default CreateTask
