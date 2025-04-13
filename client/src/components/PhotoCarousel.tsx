import { Carousel, Image } from 'react-bootstrap';
import '../assets/styles/Carousel.css';
import { CarouselData } from '../utils/types';

interface PhotoCarouselProps {
	data: CarouselData[];
}

export const PhotoCarousel = ({ data }: PhotoCarouselProps) => {
	return (
		<Carousel variant='dark' className='mb-3' id='carousel'>
			{data.map((data) => (
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
};
