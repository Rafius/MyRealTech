import React from "react"
import { Header } from "../../shared/components"
import { DashBoardWrapper } from "./dashboard.styled"

const Dashboard = ({ children }) => (
	<DashBoardWrapper>
		<Header />
		{children}
	</DashBoardWrapper>
)

export default Dashboard
