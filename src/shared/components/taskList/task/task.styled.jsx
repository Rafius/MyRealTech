import styled from "styled-components"

export const TaskWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`

export const TaskStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex: 1;
	margin: 20px;
	border: 1px solid #d1d5da;
	border-radius: 6px;
	padding: 20px;
	background-color: white;
	max-width: 250px;
	min-width: 250px;
`

export const TaskItem = styled.p`
	margin: 10px 0;
`
