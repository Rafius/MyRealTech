import styled from "styled-components"

export const Wrapper = styled.div`
	display: flex;
	background-color: #ffffff;
	align-items: center;
	justify-content: flex-end;
`

export const P = styled.p`
	font-size: 16px;
	margin-right: ${props => props.marginRight && "10px"};
`

export const Img = styled.img`
	margin: 20px;
	transform: ${props => (props.flip ? "rotate(90deg)" : "rotate(270deg)")};
	cursor: pointer;
`
