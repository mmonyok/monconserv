import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function Layout() {
	return (
		<>
			<Header>
				<Outlet />
			</Header>
			<Footer />
		</>
	);
}

export default Layout;
