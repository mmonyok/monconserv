import { VStack } from '@chakra-ui/react';
import { Container, Image } from 'react-bootstrap';
import logo from '../assets/images/monconserv.png';
import '../assets/styles/Home.css';
import ServiceMain from '../components/ServiceMain';

export default function Home(props) {
	const currentYear = new Date().getFullYear();
	const yearsInBusiness = currentYear - 1995;

	return (
		<Container className='font text'>
			<VStack className='text-center'>
				<Image fluid src={logo}></Image>
				<hr />
				<h1 className='fontBold'>Welcome!</h1>
				<p>
					We are a family owned Concrete and Masonry business serving the local
					area for <span className='blueSpan fontBold'>{yearsInBusiness}</span>{' '}
					years.
				</p>
				<p>
					Take a look around to find out a little bit more about us and what we
					can do for you.
				</p>
			</VStack>
			<div className='mt-5'>
				<h2 className='fontBold'>
					WHAT WE <span className='blueSpan'>DO</span>
				</h2>
				<p className='text-center mb-5'>
					From block foundations and footings for house foundations to chimney
					repair. We have you covered for all your concrete and masonry needs.
				</p>
				<ServiceMain />
			</div>
		</Container>
	);
}
