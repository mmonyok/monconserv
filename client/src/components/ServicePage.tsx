import { Container, ListGroup } from 'react-bootstrap';
import { CarouselData } from '../utils/types';
import { PhotoCarousel } from './PhotoCarousel';

interface ServicePageProps {
	title: string;
	subText: string;
	services1: string[];
	services2: string[];
	imageData: CarouselData[];
}

export const ServicePage = ({
	title,
	subText,
	services1,
	services2,
	imageData,
}: ServicePageProps) => {
	return (
		<Container className='serviceContainer text'>
			<section className='serviceSection text-center'>
				<h1 className='fontBold mb-3 serviceTitle'>{title}</h1>
				<div className='serviceSubText text-start font'>
					<h4>{subText}</h4>
				</div>
				<Container fluid className='listContainer justify-content-center'>
					<ListGroup
						variant='flush'
						horizontal='sm'
						className='my-auto  text-center fontBold me-2 listGroup'
						id='groupC'
					>
						{services1.map((item) => (
							<ListGroup.Item className='listItem text'>{item}</ListGroup.Item>
						))}
					</ListGroup>
					<ListGroup
						variant='flush'
						horizontal='sm'
						className='ms-2 fontBold text-center my-auto listGroup'
						id='groupD'
					>
						{services2.map((item) => (
							<ListGroup.Item className='listItem text'>{item}</ListGroup.Item>
						))}
					</ListGroup>
				</Container>
				<hr className='hr' />
				<Container className='mt-3'>
					<PhotoCarousel data={imageData} />
				</Container>
			</section>
		</Container>
	);
};
