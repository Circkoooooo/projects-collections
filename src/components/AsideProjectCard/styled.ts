import styled from "styled-components"

export const ProjectCardStyled = styled.div`
	font-size: 24px;
	font-weight: bold;
	text-align: center;
	height: min-content;
	background-color: #fff;
	margin: 10px;
	padding: 10px 0;

	position: relative;
	cursor: pointer;

	&::before {
		content: " ";
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}

	&:hover {
		&::before {
			border: 1px solid blue;
		}
	}
`
