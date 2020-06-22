import React from "react"
import { deleteData } from "../../../db/utils"
import { TaskWrapper, TaskStyle, TaskDescription } from "./task.styled"
import { getUserId } from "../../../services/auth"

const isUserData = authorUid => authorUid === getUserId()
const getDate = date => new Date(date).toISOString().slice(11, -5)

const Task = ({ tasks }) => {
	const handleRemove = id => {
		deleteData("tasks", "id", id)
	}

	return (
		<TaskWrapper>
			{tasks &&
				tasks.map(({ id, description, title, date, author_uid: authorUid }) => (
					<TaskStyle key={id}>
						<TaskDescription>Title: {title}</TaskDescription>
						<TaskDescription>Description: {description}</TaskDescription>
						<TaskDescription>Date: {getDate(date)}</TaskDescription>
						{isUserData(authorUid) && (
							<button onClick={() => handleRemove(id)}> Remove Task</button>
						)}
					</TaskStyle>
				))}
		</TaskWrapper>
	)
}
export default Task
