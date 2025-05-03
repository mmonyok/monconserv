import { Col, Container, Figure, Row } from 'react-bootstrap';
import '../assets/styles/ServiceMain.css';

// Main images
import block from '../assets/images/block.jpg';
import brick from '../assets/images/brick.jpg';
import cement from '../assets/images/cement.jpg';
import demolition from '../assets/images/demolition.jpg';
import excavation from '../assets/images/excavation.jpg';
import repairs from '../assets/images/repairs.jpg';

const images = [
	{
		title: 'Concrete Work',
		src: cement,
		href: '/services/concrete',
	},
	{
		title: 'Block Work',
		src: block,
		href: '/services/block',
	},
	{
		title: 'Brick Repair',
		src: brick,
		href: '/services/brick',
	},
	{
		title: 'Demolition',
		src: demolition,
		href: '/services/demolition',
	},
	{
		title: 'Excavation',
		src: excavation,
		href: '/services/excavation',
	},
	{
		title: 'Masonry Repairs',
		src: repairs,
		href: '/services/repairs',
	},
];

export default function ServiceMain() {
	return (
		<Container>
			<Row id='mainWrapper' xs={1} sm={2} xl={3}>
				{images.map((image, index) => (
					<Col key={index} className='mb-4 d-flex justify-content-center'>
						<a href={image.href} className='text-decoration-none'>
							<Figure>
								<div className='imageWrapper'>
									<Figure.Image rounded src={image.src} />
									<Figure.Caption className='pe-2 caption text-center'>
										{image.title}
									</Figure.Caption>
								</div>
							</Figure>
						</a>
					</Col>
				))}
			</Row>
		</Container>
	);
}
