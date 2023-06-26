'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import clsx from "clsx";

export function Navbar() {
	const [scrollPosition, setScrollPosition] = useState(0);
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			setScrollPosition(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		const href = e.currentTarget.getAttribute("href");
		const element = document.querySelector<HTMLDivElement>(href || '#top');
		if (!element) return;
		element.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	}

	const navLinks = [
		{ name: "About", href: "#about" },
		{ name: "Registration", href: "#registration" },
		{ name: "Teams", href: "#teams" },
		{ name: "Schedule", href: "#schedule" },
	]

	const navClasses = clsx(
		"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center transition-all duration-300 ease-in-out",
		scrollPosition > 100 ? "py-2" : "py-5",
	);

	return (
		<nav className="font-bold bg-blue-950 text-white sticky top-0 z-50 shadow-lg">
			<div className={navClasses}>
				<a className="flex title-font font-medium items-center text-white mb-4 md:mb-0" href="#top">
					<Image
						src="/img/logo-white.png"
						alt="Beach Slam Logo"
						width={150}
						height={150}
					/>
				</a>
				<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
					{navLinks.map((link) => (
						<a
							onClick={handleLinkClick}
							key={link.name}
							href={link.href}
							className="mr-5 hover:text-blue-500 px-3 py-2 rounded-md"
						>
							{link.name}
						</a>
					))}
				</nav>
			</div>
		</nav>
	)
}