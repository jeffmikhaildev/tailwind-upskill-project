import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

	const toggleNavbar = () => {
		setMobileDrawerOpen(!mobileDrawerOpen);
	};

	return (
		<nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 text-neutral-400">
			<div className="container px-4 mx-auto relative text-sm">
				<div className="flex justify-between items-center">
					<Link
						to="/"
						className="flex items-center flex-shrink-0">
						<img
							className="h-10 w-10 mr-2"
							src={logo}
							alt="logo"
						/>
						<span className="text-xl tracking-tight font-bold">TailwindDemo</span>
					</Link>

					<ul className="hidden lg:flex ml-14 space-x-12">
						{navItems.map((item, index) => (
							<li key={index}>
								<a
									href={item.href}
									className="hover:text-orange-500 transition-colors">
									{item.label}
								</a>
							</li>
						))}
					</ul>

					<div className="hidden lg:flex justify-center space-x-12 items-center">
						<Link
							to="/signin"
							className="py-2 px-3 border rounded-md transition-all duration-300 hover:bg-neutral-800 hover:text-white hover:scale-105">
							Sign In
						</Link>
						<Link
							to="/create-account"
							className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md transition-all duration-300 hover:from-orange-600 hover:to-red-700 hover:scale-105">
							Create an account
						</Link>
					</div>

					<div className="lg:hidden md:flex flex-col justify-end">
						<button onClick={toggleNavbar}>{mobileDrawerOpen ? <X /> : <Menu />}</button>
					</div>
				</div>

				{/* Mobile View */}
				{mobileDrawerOpen && (
					<div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
						<ul>
							{navItems.map((item, index) => (
								<li
									key={index}
									className="py-4">
									<a
										href={item.href}
										onClick={() => setMobileDrawerOpen(false)}
										className="hover:text-orange-500 transition-colors">
										{item.label}
									</a>
								</li>
							))}
						</ul>

						<div className="flex space-x-6 mt-2">
							<a
								href="#"
								onClick={() => setMobileDrawerOpen(false)}
								className="py-2 px-3 border  rounded-md transition-all duration-300 hover:bg-neutral-800 hover:text-white hover:scale-105">
								Sign In
							</a>
							<a
								href="#"
								onClick={() => setMobileDrawerOpen(false)}
								className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md transition-all duration-300 hover:from-orange-600 hover:to-red-700 hover:scale-105">
								Create an account
							</a>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
