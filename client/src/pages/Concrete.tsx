import '../assets/styles/ServiceSections.css';
import { ServicePage } from '../components/ServicePage';
import { concreteImageData } from '../data/concreteImages';

export default function Concrete() {
	const services1 = [
		'Footings',
		'Driveways',
		'Aprons',
		'Floating Garage Slabs',
	];
	const services2 = ['Floors', 'Patios', 'Sidewalks', 'Steps'];

	return (
		<ServicePage
			title='Concrete Work'
			subText='We are able to do the following concrete projects:'
			services1={services1}
			services2={services2}
			imageData={concreteImageData}
		/>
	);
}
