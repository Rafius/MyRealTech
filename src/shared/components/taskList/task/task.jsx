import React from "react"
import { deleteData } from "../../../db/utils"
import {
	TaskWrapper,
	TaskStyle,
	TaskDescription,
	TaskName
} from "./task.styled"
import { getUserId } from "../../../services/auth"

const Task = ({ tasks }) => {
	const handleRemove = id => {
		deleteData("tasks", "id", id)
	}

	const isUserData = authorUid => authorUid === getUserId()

	return (
		<TaskWrapper>
			{tasks &&
				tasks.map(
					({ id, description, taskName, date, author_uid: authorUid }) => (
						<TaskStyle key={id}>
							<TaskDescription>Description: {description}</TaskDescription>
							<TaskName>TaskName: {taskName}</TaskName>
							<TaskName>id: {id}</TaskName>
							<TaskName>Date: {date}</TaskName>
							{isUserData(authorUid) && (
								<button onClick={() => handleRemove(id)}> Remove Task</button>
							)}
						</TaskStyle>
					)
				)}
		</TaskWrapper>
	)
}
export default Task
