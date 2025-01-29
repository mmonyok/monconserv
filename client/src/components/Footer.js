import React from 'react';
import '../assets/styles/Footer.css';

const links = [
	{
		name: 'Facebook',
		class: '',
		icon: 'fab fa-facebook-square',
		website: 'https://www.facebook.com/MonyokConstructionServices',
	},
];

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='text-center py-3'>
			<ul className='d-inline-flex'>
				{links.map((link, a, b, c) => (
					<li key={a} className={`links ${link.class}`}>
						<a
							className='text font'
							key={b}
							href={link.website}
							target='_blank'
							rel='noreferrer'
						>
							<i className={`linkIcon me-2 ${link.icon} fa-2x`}></i>
							{link.name}
						</a>
					</li>
				))}
			</ul>
			<h5 className='fontBold text'>
				<i className='far fa-copyright'></i> <sup>{currentYear}</sup> Monyok
				Construction Services
			</h5>
		</footer>
	);
}

export default Footer;
