import { ChakraProvider } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<BrowserRouter>
		<ChakraProvider>
			<App />
		</ChakraProvider>
	</BrowserRouter>
);
