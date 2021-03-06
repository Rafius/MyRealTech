import styled from "styled-components"
import { Link } from "react-router-dom"

export const MenuWrapper = styled.div`
	display: flex;
	flex-direction: row;

	@media only screen and (max-width: 425px) {
		flex-direction: column;
	}
`

export const MenuItem = styled(Link)`
	margin: 0 20px;
	text-decoration: none;
	color: #0060b6;
	cursor: pointer;

	&:hover {
		color: #00a0c6;
	}

	@media only screen and (max-width: 425px) {
		margin: 10px;
	}
`
