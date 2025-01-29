import React from 'react';
import { Button, Form, InputGroup, Modal } from 'react-bootstrap';
import '../assets/styles/Forms.css';
// Simplifies form validation
import { Formik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
	name: Yup.string().required('*Name is Required.'),
	email: Yup.string().email('Invalid Email').required('*Email is Required.'),
	phone: Yup.string().notRequired(),
	address: Yup.string().required('*City is Required'),
	content: Yup.string().required('*Brief Description is Required.'),
});

export default function Contact(props) {
	const formatPhoneNumber = (value) => {
		// Remove any non-numeric characters
		let phoneNumber = value.replace(/\D/g, '');

		if (phoneNumber.length <= 3) {
			return phoneNumber;
		} else if (phoneNumber.length <= 6) {
			return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
		} else {
			return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
				3,
				6
			)}-${phoneNumber.slice(6, 10)}`;
		}
	};

	return (
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contact-form'
			centered
			className='text ps-0 myModals'
		>
			<Modal.Header className='modalHead' closeButton>
				<Modal.Title className='fontBold'>Contact Options</Modal.Title>
			</Modal.Header>
			<Modal.Body className='modalBody'>
				<h5 className='ms-5' id='contactEmail'>
					Email: {''}
					<a
						className='contactLink fontLight'
						href='mailto:joemonyok@outlook.com'
					>
						<i className='far fa-envelope me-2 contactIcons'></i>
						joemonyok@outlook.com
					</a>
					<p className='fs-6'>(Please whitelist email)</p>
				</h5>
				<h5 className='ms-5' id='contactPhone'>
					Office: {''}
					<a className='contactLink fontLight' href='tel:9524923671'>
						<i className='fas fa-mobile-alt contactIcons' id='phoneIcon'></i>
						952-492-3671
					</a>
				</h5>
				<hr />
				<p className='text-center font'>
					When leaving a voicemail, please include the best time to call you
					back.
					<br />
					OR
					<br />
					Fill out the contact form below, and we will get back to you as soon
					as possible.
				</p>
				<hr />
				<Formik
					validationSchema={schema}
					onSubmit={console.log}
					initialValues={{
						name: '',
						email: '',
						phone: '',
						address: '',
						content: '',
					}}
				>
					{({
						handleChange,
						handleBlur,
						values,
						setFieldValue,
						isValid,
						errors,
						formGroups = [
							{
								controlId: 'formBasicName',
								label: 'Name:',
								textId: 'inputIconName',
								icon: 'far fa-user',
								as: 'input',
								type: 'name',
								text: 'Enter First & Last Name',
								aria: 'inputIconName',
								name: 'name',
								value: values.name,
								isInvalid: !!errors.name,
								// isValid: touched.name && !errors.name,
								feedback: errors.name,
							},
							{
								controlId: 'formBasicEmail',
								label: 'Email:',
								textId: 'inputIconEmail',
								icon: 'far fa-envelope',
								as: 'input',
								type: 'email',
								text: 'Enter Email',
								aria: 'inputIconEmail',
								name: 'email',
								value: values.email,
								isInvalid: !!errors.email,
								// isValid: touched.email && !errors.email,
								feedback: errors.email,
							},
							{
								controlId: 'formBasicPhone',
								label: 'Phone Number:',
								textId: 'inputIconPhone',
								icon: 'fas fa-mobile-alt',
								as: 'input',
								type: 'phone',
								text: 'Ex. 999-999-9999',
								aria: 'inputIconPhone',
								name: 'phone',
								value: values.phone,
								isInvalid: !!errors.phone,
								// isValid: touched.phone && !errors.phone,
								feedback: errors.phone,
								onChange: (e) =>
									setFieldValue('phone', formatPhoneNumber(e.target.value)),
							},
							{
								controlId: 'formBasicAddress',
								label: 'Address:',
								textId: 'inputIconAddress',
								icon: 'fas fa-location-dot',
								as: 'input',
								type: 'address',
								text: 'Include at least your City',
								aria: 'inputIconAddress',
								name: 'address',
								value: values.address,
								isInvalid: !!errors.address,
								// isValid: touched.address && !errors.address,
								feedback: errors.address,
							},
							{
								controlId: 'formBasicContent',
								label: 'Brief Description of Project:',
								textId: 'inputIconContent',
								icon: 'fas fa-paragraph',
								as: 'textarea',
								type: 'content',
								text: "Example: I have a 20' X 60' asphalt driveway that I would like replaced with concrete.",
								aria: 'inputIconContent',
								name: 'content',
								value: values.content,
								isInvalid: !!errors.content,
								// isValid: touched.content && !errors.content,
								feedback: errors.content,
							},
						],
					}) => (
						<Form
							noValidate
							// Email handling site
							action='https://formsubmit.co/7b0edf42ad712fc66e27ebc89cafaa09'
							method='POST'
						>
							{/* controls for customizing the email response */}
							<input
								type='hidden'
								name='_subject'
								value='New Client Message from MCS Website!'
							/>
							<input
								type='hidden'
								name='_autoresponse'
								value='Thank you for contacting Monyok Construction Services! We will get back to you as soon as possible.'
							/>
							<input type='hidden' name='_template' value='basic' />
							<input type='hidden' name='_next' value={window.location.href} />

							{formGroups.map((item) => (
								<Form.Group className='mb-3' controlId={item.controlId}>
									<Form.Label className='fontBold mb-0'>
										{item.label}
									</Form.Label>
									<InputGroup hasValidation>
										<InputGroup.Text className='iconWrap' id={item.textId}>
											<i className={`formIcons ${item.icon}`}></i>
										</InputGroup.Text>
										<Form.Control
											className='fontLight'
											rows={4}
											as={item.as}
											type={item.type}
											placeholder={item.text}
											aria-describedby={item.aria}
											name={item.name}
											value={item.value}
											onChange={item.onChange || handleChange}
											onBlur={handleBlur}
											isInvalid={item.isInvalid}
											isValid={item.isValid}
										/>
										<Form.Control.Feedback type='invalid'>
											{item.feedback}
										</Form.Control.Feedback>
										<Form.Control.Feedback type='valid'>
											Looks Good!
										</Form.Control.Feedback>
									</InputGroup>
								</Form.Group>
							))}
							<hr />
							<div className='text-center font'>
								<p>
									You will receive a confirmation email with your entered
									details upon submission of this form.
									<br />
									If you don't receive confirmation within 5 minutes, check your
									spam filter.
								</p>
								<Button
									id='contactBtn'
									/* user is unable to submit form until required fields are filled */ disabled={
										!isValid
									}
									type='submit'
								>
									Submit
								</Button>
							</div>
						</Form>
					)}
				</Formik>
			</Modal.Body>
		</Modal>
	);
}
