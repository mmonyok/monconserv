import { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';

export default function FormError() {
	const [showContact, setShowContact] = useState(false);

	return (
		<Container className='text-center mt-5'>
			<h1 className='fontBold text'>
				<span className='blueSpan'>Oops!</span> Something Went Wrong
			</h1>
			<hr />
			<p className='font text fs-5'>
				Your message could not be sent due to a submission error.
				<br />
				Please try again or reach out to us directly.
			</p>
			<div className='d-flex justify-content-center gap-3 mt-4'>
				<Button
					variant='primary'
					className='fontBold'
					onClick={() => setShowContact(true)}
				>
					Try Again
				</Button>
				<Link to='/'>
					<Button variant='outline-secondary' className='fontBold'>
						Go Home
					</Button>
				</Link>
			</div>
			<hr />
			<p className='font text'>
				You can also reach us directly at{' '}
				<a className='fontLight' href='mailto:joemonyok@outlook.com'>
					joemonyok@outlook.com
				</a>{' '}
				or call{' '}
				<a className='fontLight' href='tel:9524923671'>
					952-492-3671
				</a>
				.
			</p>
			<Contact show={showContact} onHide={() => setShowContact(false)} />
		</Container>
	);
}
