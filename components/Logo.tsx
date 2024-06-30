import React from "react";
import Image from "next/image";
import logoImage from "@/public/logo/Logo.png";

type Props = {};

const Logo = (props: Props) => {
	return (
		<div className='bg-[rgb(60,68,82)] w-[68%] aspect-square rounded-[0.8vw] p-[0.2vw] flex justify-center items-center'>
			<Image
				src={logoImage}
				alt='Logo'
				priority={true}
			/>
		</div>
	);
};

export default Logo;
