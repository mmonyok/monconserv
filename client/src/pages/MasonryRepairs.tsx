import '../assets/styles/ServiceSections.css';
import { ServicePage } from '../components/ServicePage';
import { masonryRepairImagesData } from '../data/masonryRepairImages';

export default function MasonryRepairs() {
	return (
		<ServicePage
			title='Masonry Repairs'
			subText='We are able to repair the following:'
			imageData={masonryRepairImagesData}
		/>
	);
}
