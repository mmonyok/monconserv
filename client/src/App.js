import { useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/Layout';
import ServiceLayout from './components/ServiceLayout';
import AboutUs from './pages/AboutUs';
import FAQs from './pages/FAQs';
import Home from './pages/Home';
import Reviews from './pages/Reviews';
import Services from './pages/Services';
// These are our service pages.
import { Box, useDisclosure } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import './assets/styles/App.css';
import { WelcomeModal } from './components/WelcomeModal';
import { Paths } from './config/paths';
import Block from './pages/Block';
import Brick from './pages/Brick';
import Concrete from './pages/Concrete';
import Demolition from './pages/Demolition';
import Excavation from './pages/Excavation';

const App = () => {
	const { isOpen: isOpen, onOpen: onOpen, onClose: onClose } = useDisclosure();

	useEffect(() => {
		onOpen();
	}, []);

	const renderRoutes = () => {
		return (
			<>
				<Route element={<Layout />} />
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
			</>
		);
	};
	return (
		<Box id='website'>
			<Header>
				<Routes>{renderRoutes()}</Routes>
			</Header>
			<Footer />
			<WelcomeModal isOpen={isOpen} onClose={onClose} />
		</Box>
	);
};

export default App;
