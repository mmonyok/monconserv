import '../assets/styles/ServiceSections.css';
import { ServicePage } from '../components/ServicePage';
import { blockImageData } from '../data/blockImages';

export default function Block() {
	const services1 = ['House Additions', 'Garage Foundation', 'Block Wall'];
	const services2 = [
		'Rotten Block Replacement',
		'Tuck-Point Block Wall',
		'Window Wells',
		'Retaining Walls',
	];

	return (
		<ServicePage
			title='Block Work'
			subText='We are able to do the following block projects:'
			services1={services1}
			services2={services2}
			imageData={blockImageData}
		/>
	);
}
