import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import './assets/styles/App.css';
import Layout from './components/Layout';
import ServiceLayout from './components/ServiceLayout';
import { Paths } from './config/paths';
import AboutUs from './pages/AboutUs';
import Block from './pages/Block';
import Brick from './pages/Brick';
import Concrete from './pages/Concrete';
import Demolition from './pages/Demolition';
import Excavation from './pages/Excavation';
import FAQs from './pages/FAQs';
import Home from './pages/Home';
import Reviews from './pages/Reviews';
import Services from './pages/Services';

const App = () => {
	// when bringing back welcome modal, fix why it opens every time you click around on main page within service layout links
	// const { isOpen: isOpen, onOpen: onOpen, onClose: onClose } = useDisclosure();

	/* useEffect(() => {
		onOpen();
	}, []); */

	/* <WelcomeModal isOpen={isOpen} onClose={onClose} /> */

	return (
		<Box id='website'>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<Home />} />
					<Route path={Paths.HOME} element={<Home />} />
					<Route path='about_us' element={<AboutUs />} />
					<Route path='services' element={<ServiceLayout />}>
						<Route index element={<Services />} />
						<Route path='concrete' element={<Concrete />} />
						<Route path='block' element={<Block />} />
						<Route path='brick' element={<Brick />} />
						<Route path='excavation' element={<Excavation />} />
						<Route path='demolition' element={<Demolition />} />
					</Route>
					<Route path='reviews' element={<Reviews />} />
					<Route path='faqs' element={<FAQs />} />
					<Route path='*' element={<Home />} />
				</Route>
			</Routes>
		</Box>
	);
};

export default App;
