import React from "react"
import { deleteData } from "../../../db/utils"
import { TaskWrapper, TaskStyle, TaskItem } from "./task.styled"
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
						<TaskItem>Title: {title}</TaskItem>
						<TaskItem>Description: {description}</TaskItem>
						<TaskItem>Date: {getDate(date)}</TaskItem>
						{isUserData(authorUid) && (
							<button onClick={() => handleRemove(id)}> Remove Task</button>
						)}
					</TaskStyle>
				))}
		</TaskWrapper>
	)
}
export default Task
