import '../assets/styles/ServiceSections.css';
import { ServicePage } from '../components/ServicePage';
import { brickImageData } from '../data/brickImages';

export default function Brick() {
	const services1 = [
		'Chimney Repair',
		'Fireplace Repair',
		'General Brick Repair',
		'Tuck-Point Brick Repair',
	];
	const services2 = ['Paver Patios', 'Glass Block Windows', 'Brick Veneer'];

	return (
		<ServicePage
			title='Brick Repair'
			subText='We are able to do the following brick repair projects:'
			services1={services1}
			services2={services2}
			imageData={brickImageData}
		/>
	);
}
