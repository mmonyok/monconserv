import '../assets/styles/ServiceSections.css';
import { ServicePage } from '../components/ServicePage';
import { excavationImagesData } from '../data/excavationImages';

export default function Excavate() {
	return (
		<ServicePage
			title='Excavation'
			subText='We will excavate for any small projects and can recommend
						sub-contractors for any larger ones.'
			imageData={excavationImagesData}
		/>
	);
}
