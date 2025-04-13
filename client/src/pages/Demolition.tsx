import '../assets/styles/ServiceSections.css';
import { ServicePage } from '../components/ServicePage';
import { demolitionImageData } from '../data/demolitionImages';

export default function Demolish() {
	return (
		<ServicePage
			title='Demolition'
			subText='We are able to demolish your existing concrete structures, haul away
						the materials, and replace as needed.'
			imageData={demolitionImageData}
		/>
	);
}
