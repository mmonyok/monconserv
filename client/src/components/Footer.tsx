import '../assets/styles/Footer.css';

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='text-center py-3'>
			<ul className='d-inline-flex'>
				<li key='facbook-link' className={`links`}>
					<a
						className='text font'
						key='facbook-link'
						href='https://www.facebook.com/MonyokConstructionServices'
						target='_blank'
						rel='noreferrer'
					>
						<i className={`linkIcon me-2 fab fa-facebook-square fa-2x`}></i>
						Facebook
					</a>
				</li>
			</ul>
			<h5 className='fontBold text'>
				<i className='far fa-copyright'></i> <sup>{currentYear}</sup> Monyok
				Construction Services
			</h5>
		</footer>
	);
}

export default Footer;
