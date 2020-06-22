import React from "react"
import {
	FormWrapper,
	FieldWrapper,
	Label,
	Input,
	Button,
	Description
} from "./form.styled"

const Form = ({ fields, buttonText, handleSubmit }) => (
	<FormWrapper>
		{fields.map(
			({ id, label, type, value, onChange, modelName, description }) => (
				<FieldWrapper key={id}>
					<Label>{label}</Label>
					{description && <Description>{description}</Description>}
					<Input
						autoFocus
						type={type}
						value={value}
						onChange={e => onChange(modelName, e.target.value)}
					/>
				</FieldWrapper>
			)
		)}

		<Button type="submit" onClick={handleSubmit}>
			{buttonText}
		</Button>
	</FormWrapper>
)

export default Form
