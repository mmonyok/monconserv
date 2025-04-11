import React from 'react';
import NavBar from './NavBar';

interface HeaderProps {
	children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
	return (
		<header className='contentContainer'>
			<NavBar />
			{children}
		</header>
	);
}
