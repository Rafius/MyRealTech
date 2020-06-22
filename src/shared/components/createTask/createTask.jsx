import React, { useState } from "react"
import { FormWrapper } from "../form/form.styled"
import { Form } from "../../components"
import { insertData, guidGenerator } from "../../db/utils"
import { getUserId } from "../../services/auth"

const CreateTask = () => {
	const [data, setData] = useState({
		title: "",
		description: "",
		date: "",
		visibility: ""
	})

	const { title, description, date, visibility } = data

	const handleSubmit = () => {
		console.log(data)
		const newTask = {
			...data,
			author_uid: getUserId(),
			visibility: data.visibility || "private",
			id: guidGenerator(),
			date: new Date().getTime()
		}
		insertData("tasks", { ...newTask })
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
			description: "Private by default",
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
