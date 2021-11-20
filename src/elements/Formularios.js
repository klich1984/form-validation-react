import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const colors = {
	borde: '#0075ff',
	error: '#bb2929',
	success: '#1ed12d',
}

const Formulario = styled.form`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;

	@media (max-width: 800px) {
		grid-template-columns: 1fr;
	}
`
const Label = styled.label`
	display: block;
	font-weight: 700;
	padding: 10px;
	min-height: 40px;
	cursor: pointer;

	${(props) =>
		props.valid === 'false' &&
		css`
			color: ${colors.error};
		`}
`

const GroupInput = styled.div`
	position: relative;
	z-index: 90;
`

const Input = styled.input`
	width: 100%;
	background: #fff;
	border-radius: 5px;
	height: 45px;
	line-height: 45px;
	padding: 0 40px 0 10px;
	transition: 0.3s ease all;
	border: 3px solid transparent;

	&:focus {
		border: 3px solid ${colors.borde};
		outline: none;
		box-shadow: 3px 0px 30px rgba(163, 163, 163, 04);
	}

	${(props) =>
		props.valid === 'true' &&
		css`
			border: 3px solid transparent;
		`}

	${(props) =>
		props.valid === 'false' &&
		css`
			border: 3px solid ${colors.error} !important;
		`}
`

const ErrorLegend = styled.p`
	font-size: 12px;
	margin-bottom: 0;
	color: ${colors.error};
	display: none;

	${(props) =>
		props.valid === 'true' &&
		css`
			display: none;
		`}

	${(props) =>
		props.valid === 'false' &&
		css`
			display: block;
		`}
`
const ValidationIcon = styled(FontAwesomeIcon)`
	position: absolute;
	right: 10px;
	bottom: 14px;
	z-index: 199;
	font-size: 16px;
	opacity: 0;

	${(props) =>
		props.valid === 'true' &&
		css`
			opacity: 1;
			color: ${colors.success};
		`}

	${(props) =>
		props.valid === 'false' &&
		css`
			opacity: 1;
			color: ${colors.error};
		`}
`

const ContainerTerms = styled.div`
	grid-column: span 2;

	input {
		margin: 10px;
	}

	@media (max-width: 800px) {
		grid-column: span 1;
	}
`

const ContainerCenterButton = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	grid-column: span 2;

	@media (max-width: 800px) {
		grid-column: span 1;
	}
`

const MyButton = styled.button`
	height: 45px;
	line-height: 45px;
	width: 30%;
	background: #000;
	color: #fff;
	font-weight: bold;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: 0.3s ease all;

	&:hover {
		box-shadow: 3px, 0px, 30px, rgba(163, 163, 163, 1);
	}
`

const SuccesMessage = styled.p`
	font-size: 14px;
	width: 70%;
	height: 45px;
	text-align: center;
	line-height: 45px;
	color: #000;
	font-weight: bold;
	border-radius: 5px;
	background-color: ${colors.success};
`

const ErrorMessage = styled.div`
	height: 45px;
	line-height: 45px;
	background: #f66060;
	padding: 0 15px;
	border-radius: 5px;
	grid-column: span 2;

	p {
		margin: 0;
	}
	b {
		margin-left: 10px;
	}
`

export {
	Formulario,
	Label,
	GroupInput,
	Input,
	ErrorLegend,
	ValidationIcon,
	ContainerTerms,
	ContainerCenterButton,
	MyButton,
	SuccesMessage,
	ErrorMessage,
}
