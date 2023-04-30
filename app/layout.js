'use client';
import './globals.css';
import { NavBar } from '../components/navbar';
import Head from './head';

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Head />
			<body className=" bg-gray-900" id="home">
				<div className="md:flex hidden md:sticky md:top-0 md:z-50">
					<NavBar />
				</div>
				{children}
			</body>
		</html>
	)
}