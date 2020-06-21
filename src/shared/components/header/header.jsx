import React from "react"
import { useHistory } from "react-router-dom"
import { userLogout } from "../../../shared/db/utils"
import Menu from "../menu"
import { HeaderWrapper, ButtonWrapper, ButtonStyle } from "./header.styled"

const Header = () => {
	const history = useHistory()
	const logOut = () => {
		userLogout()
		history.push("/login")
	}

	return (
		<HeaderWrapper>
			<Menu />
			<ButtonWrapper>
				<ButtonStyle onClick={logOut}>Logout</ButtonStyle>
			</ButtonWrapper>
		</HeaderWrapper>
	)
}

export default Header
