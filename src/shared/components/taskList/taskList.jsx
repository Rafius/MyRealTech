import React, { useEffect, useState } from "react"
import { getData } from "../../db/utils"
import { TaskListWrapper } from "./taskList.styled"
import Task from "./task"
import Pagination from "../pagination"

const TaskList = ({ isPrivate }) => {
	const [tasks, setTasks] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [size, setSize] = useState(10)
	const [currentTasks, setCurrentTasks] = useState([])

	useEffect(() => {
		const unsubscribe = getData("tasks", setTasks, isPrivate)
		return () => {
			unsubscribe()
		}
	}, [isPrivate])

	useEffect(() => {
		const chunkArray = () => {
			const tempArray = []
			for (let index = 0; index < tasks?.length; index += size) {
				tempArray.push(tasks.slice(index, index + size))
			}
			setCurrentTasks(tempArray[currentPage - 1])
		}
		chunkArray()
	}, [tasks, size, currentPage])

	useEffect(() => {
		setCurrentPage(1)
	}, [tasks, size])

	return (
		<TaskListWrapper>
			<Task tasks={currentTasks} />
			<Pagination
				size={size}
				setSize={setSize}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				paginationCount={tasks?.length}
			/>
		</TaskListWrapper>
	)
}

export default TaskList
