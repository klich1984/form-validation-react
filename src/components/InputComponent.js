import React from 'react'
import {
	GroupInput,
	ErrorLegend,
	ValidationIcon,
	Label,
	Input,
} from '../elements/Formularios'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const InputComponent = ({
	label,
	type,
	placeholder,
	name,
	legendError,
	reg,
	state,
	changeState,
	validatePassword
}) => {
	/* Change the state by the new value entered in the inputy */
	const onChange = (e) => {
		changeState({ ...state, value: e.target.value })
	}

	/* Validations */
	const validatios = () => {
		if (reg) {
			// Code if there is Regular expression
			if (reg.test(state.value)) {
				// console.log('Input correcto')
				// valid must be string to be used in style component since it does not receive boolean values
				changeState({ ...state, valid: 'true' })
			} else {
				// console.log('Input Incorrecto')
				changeState({ ...state, valid: 'false' })
			}
		}
		if (validatePassword) validatePassword()
	}

	return (
		<div>
			<Label htmlFor={name} valid={state.valid}>
				{label}
			</Label>
			<GroupInput>
				<div>
					<Input
						type={type}
						placeholder={placeholder}
						id={name}
						value={state.value}
						onChange={onChange}
						onKeyUp={validatios}
						onBlur={validatios}
						valid={state.valid}
					/>
					<ValidationIcon
						icon={
							state.valid === 'true'
								? faCheckCircle
								: faTimesCircle
							}
						valid={state.valid}
					/>
				</div>
			</GroupInput>
			<ErrorLegend valid={state.valid}>{legendError}</ErrorLegend>
		</div>
	)
}

export default InputComponent
