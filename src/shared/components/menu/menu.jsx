import React from "react"
import { MenuWrapper, MenuItem } from "./menu.styled"
import data from "./data.json"

const Menu = () => (
	<MenuWrapper>
		{data.map(({ index, name, route }) => (
			<MenuItem key={index} to={route}>
				{name}
			</MenuItem>
		))}
	</MenuWrapper>
)
export default Menu
