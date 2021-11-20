import React, { useState } from 'react'
import {
	Formulario,
	Label,
	ContainerTerms,
	ContainerCenterButton,
	MyButton,
	SuccesMessage,
	ErrorMessage,
} from './elements/Formularios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import InputComponent from './components/InputComponent'

const App = () => {
	/* Create state for each Input */
	const [user, setUser] = useState({ value: '', valid: null })
	const [name, setName] = useState({ value: '', valid: null })
	const [password, setPassword] = useState({ value: '', valid: null })
	const [password2, setPassword2] = useState({ value: '', valid: null })
	const [email, setEmail] = useState({ value: '', valid: null })
	const [phone, setPhone] = useState({ value: '', valid: null })
	const [terms, setTerms] = useState(false)
	const [validForm, setValidForm] = useState(null)

	/* Variables for Regular expression */
	const expressions = {
		regUser: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		regName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		regPassword: /^.{4,12}$/, // 4 a 12 digitos.
		regEmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		regPhone: /^\d{7,14}$/, // 7 a 14 numeros.
	}

	/* Function that validates if the passwords are the same */
	const validatePassword2 = () => {
		if (password.value.length > 0) {
			if (password.value !== password2.value) {
				// console.log('Las contraseñas no son iguales')
				setPassword2((prevState) => {
					return { ...prevState, valid: 'false' }
				})
			} else {
				// console.log('Las contraseñas son iguales')
				setPassword2((prevState) => {
					return { ...prevState, valid: 'true' }
				})
			}
		}
	}

	/* Validates if the terms and conditios checkbox is true or false */
	const onChangeTerms = (e) => {
		setTerms(e.target.checked)
	}

	/* Function to verify the form is ok */
	const onSubmit = (e) => {
		e.preventDefault()
		if (
			user.valid === 'true' &&
			name.valid === 'true' &&
			password.valid === 'true' &&
			password2.valid === 'true' &&
			email.valid === 'true' &&
			phone.valid === 'true' &&
			terms
		) {
			setValidForm(true)
			setUser({ value: '', valid: null })
			setName({ value: '', valid: null })
			setPassword({ value: '', valid: null })
			setPassword2({ value: '', valid: null })
			setEmail({ value: '', valid: null })
			setPhone({ value: '', valid: null })
			setTerms(false)
		} else {
			setValidForm(false)
		}
	}

	return (
		<main>
			<Formulario action="" onSubmit={onSubmit}>
				{/* User Input*/}
				<InputComponent
					label="Usuario"
					type="text"
					placeholder="Escribe tu usuario. Ej: john123"
					name="user"
					legendError="El usuario tiene que ser de 4 a 16 digitos y solo puede contener numeros, letras y guion bajo."
					reg={expressions.regUser}
					state={user}
					changeState={setUser}
				/>
				{/* Name Input */}
				<InputComponent
					label="Nombre"
					type="text"
					placeholder="Escribe tu Nombre. Ej: john"
					name="name"
					legendError="El nombre solo puede contener letras y espacios."
					reg={expressions.regName}
					state={name}
					changeState={setName}
				/>
				{/* Password Input */}
				<InputComponent
					label="Contraseña"
					type="password"
					placeholder="Escribe una contraseña."
					name="password1"
					legendError="La contraseña tiene que ser de 4 a 12 digitos."
					reg={expressions.regPassword}
					state={password}
					changeState={setPassword}
				/>
				{/* Password2 Input */}
				<InputComponent
					label="Repetir Contraseña"
					type="password"
					placeholder="repite la contraseña."
					name="password2"
					legendError="Ambas contraseñas deben ser iguales."
					state={password2}
					changeState={setPassword2}
					/* Validation password 2 */
					validatePassword={validatePassword2}
				/>
				{/* Email Input */}
				<InputComponent
					label="Correo"
					type="email"
					placeholder="Escribe tu correo ej: correo@correo.com."
					name="email"
					legendError="El correo solo puede contener letras, numeros, puntos, giuones y guion bajo."
					reg={expressions.regEmail}
					state={email}
					changeState={setEmail}
				/>
				{/* Phone Input */}
				<InputComponent
					label="Teléfono"
					type="text"
					placeholder="Escribe tu telefono ej: 3424532."
					name="phone"
					legendError="El teléfono solo puede contener números y el maximo es de 13 caracteres"
					reg={expressions.regPhone}
					state={phone}
					changeState={setPhone}
				/>

				{/* terms and conditions */}
				<ContainerTerms>
					<Label>
						<input
							type="checkbox"
							name="terms"
							id="terms"
							checked={terms}
							onChange={onChangeTerms}
						/>
						Acepto los Terminos y Condiciones
					</Label>
				</ContainerTerms>
				{/* Hide message */}
				{validForm === false && (
					<ErrorMessage>
						<p>
							<FontAwesomeIcon icon={faExclamationTriangle} />
							<b>Error:</b>Por favor rellene el formulario correctamente.
						</p>
					</ErrorMessage>
				)}
				{/* Button Submit */}
				<ContainerCenterButton>
					<MyButton type="submit">Enviar</MyButton>
					{validForm === true && (
						<SuccesMessage>El formulario se envio Exitosamente!</SuccesMessage>
					)}
				</ContainerCenterButton>
			</Formulario>
		</main>
	)
}

export default App
