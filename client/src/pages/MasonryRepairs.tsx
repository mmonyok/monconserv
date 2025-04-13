import '../assets/styles/ServiceSections.css';
import { ServicePage } from '../components/ServicePage';
import { masonryRepairsImagesData } from '../data/masonryRepairs';

export default function MasonryRepairs() {
	return (
		<ServicePage
			title='Masonry Repairs'
			subText='We are able to repair the following:'
			imageData={masonryRepairsImagesData}
		/>
	);
}
