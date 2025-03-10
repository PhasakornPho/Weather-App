import React from "react";

type Props = {
	className?: string;
};

const SvgContact = (props: Props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 512 512'
			className={`p-[5%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${props.className}`}
		>
			<path d='M96 0C60.7 0 32 28.7 32 64v384c0 35.3 28.7 64 64 64h288c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zm112 288h64c44.2 0 80 35.8 80 80 0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16 0-44.2 35.8-80 80-80zm-32-96a64 64 0 11128 0 64 64 0 11-128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zm-16 112c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16v-64c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16v-64z' />
		</svg>
	);
};

export default SvgContact;
