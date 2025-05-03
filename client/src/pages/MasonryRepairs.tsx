import '../assets/styles/ServiceSections.css';
import { ServicePage } from '../components/ServicePage';
import { masonryRepairImagesData } from '../data/masonryRepairImages';

export default function MasonryRepairs() {
	const services1 = ['Concrete', 'Brick', 'Blocks'];
	const services2 = ['Stone', 'Foundation Coatings'];

	return (
		<ServicePage
			title='Masonry Repairs'
			subText='We are able to repair the following:'
			imageData={masonryRepairImagesData}
			services1={services1}
			services2={services2}
		/>
	);
}
