"use client";
import Image from "next/image";
import Link from "next/link";

// Import Logo Image
import logoImage from "@/public/logo/Logo.png";

// Import react hook
import { usePathname } from "next/navigation";

// Import framer-motion
import { motion } from "framer-motion";
import SvgSelection from "./svg/nav-svg/SvgSelection";

type Props = {};

const links = [
	{ path: "/", name: "Weather" },
	// { path: "/aqi", name: "AQI" },
	{ path: "/cities/name (a-z)", name: "Cities" },
	{ path: "/map", name: "Map" },
	// { path: "/contact", name: "Contact" },
];

const Nav = (props: Props) => {
	const currentPath = usePathname();

	return (
		// Max Width 100px , Max height 900px
		<nav className='bg-[rgb(33,42,59)] h-[100%] w-[6%] rounded-[var(--nav-rounded)] py-[1%] flex flex-col justify-start items-center gap-y-[10%]'>
			{/* Logo */}
			<div className='bg-[rgb(60,68,82)] w-[68%] aspect-square rounded-[var(--nav-logo-rounded)] p-[0.2vw] flex justify-center items-center'>
				<Image
					src={logoImage}
					alt='Logo'
					priority={true}
				/>
			</div>

			{/* Menu */}
			<div className='flex-1 w-[100%] h-[60%] flex flex-col items-center justify-start gap-y-[10px] roboto-bold'>
				{links.map((link, index) => {
					return (
						<Link
							key={index}
							href={link.path}
							className={`capitalize group flex flex-col items-center justify-center w-[68%] h-[12%] gap-y-[2%] `}
						>
							<div
								className={`w-full h-[70%] relative aspect-square rounded-[var(--nav-item-rounded)] `}
							>
								{(currentPath.includes(link.name.toLowerCase()) ||
									(link.name === "Weather" && currentPath === "/")) && (
									<motion.div
										transition={{
											type: "spring",
											bounce: 0.25,
											duration: 0.5,
										}}
										layoutId='underline'
										className={`bg-[var(--nav-item-bg-selected)] w-full h-full rounded-[var(--nav-item-rounded)]`}
									></motion.div>
								)}
								<SvgSelection
									svgName={link.name}
									svgStyle={`fill-[var(--nav-svg-fill)] w-[60%] aspect-square group-hover:fill-[var(--nav-svg-fill-hover)] ${
										(currentPath.includes(link.name.toLowerCase()) ||
											(link.name === "Weather" && currentPath === "/")) &&
										"fill-[var(--nav-svg-fill-selected)]"
									}`}
								/>
							</div>
							<div className='w-[110%] h-[25%] flex justify-center items-center'>
								<p
									className={`text-[95%] text-[var(--nav-text)] group-hover:text-[var(--nav-text-hover)] ${
										(currentPath.includes(link.name.toLowerCase()) ||
											(link.name === "Weather" && currentPath === "/")) &&
										"text-[var(--nav-text-selected)]"
									} `}
								>
									{link.name}
								</p>
							</div>
						</Link>
					);
				})}
			</div>
		</nav>
	);
};

export default Nav;
