import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
// All of our icons
import excavationIcon from '../assets/images/icons/bobcat.png';
import brickIcon from '../assets/images/icons/brick.png';
import blockIcon from '../assets/images/icons/concreteBlock.png';
import concreteIcon from '../assets/images/icons/concreteMixer.png';
import constructionIcon from '../assets/images/icons/constructionMan.png';
import demolitionIcon from '../assets/images/icons/jackhammer.png';
import repairIcon from '../assets/images/icons/repairs.png';
import '../assets/styles/ServiceLayout.css';

const sidebarNavs = [
	{
		name: 'Main',
		href: '/services',
		src: constructionIcon,
		key: '20',
	},
	{
		name: 'Concrete',
		href: 'concrete',
		src: concreteIcon,
		key: '21',
	},
	{
		name: 'Block',
		href: 'block',
		src: blockIcon,
		key: '22',
	},
	{
		name: 'Brick',
		href: 'brick',
		src: brickIcon,
		key: '23',
	},
	{
		name: 'Demolition',
		href: 'demolition',
		src: demolitionIcon,
		key: '25',
	},
	{
		name: 'Excavation',
		href: 'excavation',
		src: excavationIcon,
		key: '24',
	},
	{
		name: 'Masonry Repairs',
		href: 'repairs',
		src: repairIcon,
		key: '26',
	},
];

function ServiceLayout() {
	return (
		<Container fluid id='serviceLayout'>
			<Navbar className='justify-content-center' id='navWrapper'>
				<Nav defaultActiveKey='/services' id='sidebar'>
					{sidebarNavs.map((nav, m) => (
						<Nav.Link
							as={Link}
							className='sideNavLink text-center'
							to={nav.href}
							eventKey={nav.key}
						>
							<Image fluid src={nav.src} className='sidebarIcons mx-auto' />
							<p className='text fontBold m-0 sidebarLinks'>{nav.name}</p>
						</Nav.Link>
					))}
				</Nav>
			</Navbar>
			<Outlet />
		</Container>
	);
}

export default ServiceLayout;
