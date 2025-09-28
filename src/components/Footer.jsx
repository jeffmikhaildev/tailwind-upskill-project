import { Facebook, Twitter, Instagram, Github, Linkedin } from "lucide-react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="mt-20 border-t border-neutral-700/80 bg-neutral-900 text-neutral-400">
			<div className="container mx-auto px-4 py-10">
				{/* Top Section */}
				<div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
					{/* Logo + Text */}
					<Link
						to="/"
						className="flex items-center space-x-3">
						<img
							src={logo}
							alt="logo"
							className="h-10 w-10"
						/>
						<span className="text-xl font-semibold">TailwindDemo</span>
					</Link>

					{/* Nav Links */}
					<ul className="flex flex-wrap justify-center gap-6 text-sm">
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

					{/* Social Icons */}
					<div className="flex space-x-6">
						<a
							href="https://www.facebook.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-orange-500 hover:scale-110 transition-all duration-200">
							<Facebook size={20} />
						</a>
						<a
							href="https://twitter.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-orange-500  hover:scale-110 transition-all duration-200">
							<Twitter size={20} />
						</a>
						<a
							href="https://www.instagram.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-orange-500  hover:scale-110 transition-all duration-200">
							<Instagram size={20} />
						</a>
						<a
							href="https://github.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-orange-500  hover:scale-110 transition-all duration-200">
							<Github size={20} />
						</a>
						<a
							href="https://www.linkedin.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-orange-500  hover:scale-110 transition-all duration-200">
							<Linkedin size={20} />
						</a>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="mt-10 text-center text-sm text-neutral-500">© {new Date().getFullYear()} jeffmikhail. All rights reserved.</div>
			</div>
		</footer>
	);
};

export default Footer;
