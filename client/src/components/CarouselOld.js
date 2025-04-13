import { Carousel, Image } from 'react-bootstrap';
import '../assets/styles/Carousel.css';

export default function CarouselOld({ serviceData }) {
	return (
		<Carousel variant='dark' className='mb-3' id='carousel'>
			{serviceData.map((data) => (
				<Carousel.Item className='carouselItem' interval={300000}>
					<Image rounded fluid className='carouselImage' src={data.image} />
					<Carousel.Caption className='text font'>
						<h4 className='mt-1'>{data.title}</h4>
						<p>{data.caption}</p>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
}
