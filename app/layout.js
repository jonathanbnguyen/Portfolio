'use client';
import './globals.css';
import { NavBar } from '../components/navbar';

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<title>Jonathan Nguyen</title>
				<meta name="description" content="Portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/jlogo.png" />
			</head>
			<body className=" bg-gray-900" id="home">
				<div className="md:flex hidden md:sticky md:top-0 md:z-50">
					<NavBar />
				</div>
				{children}
			</body>
		</html>
	)
}