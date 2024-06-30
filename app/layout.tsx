export const runtime = "edge";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-toggle/ThemeProvider";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import { TempUnitProvider } from "@/components/temp-unit-toggle/TempUnitProvider";

// User Components

import FavoriteCities from "@/components/weather/FavoriteCities";
import PopularCities from "@/components/weather/PopularCities";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Weather",
	description: "Worldwide Weather",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
		>
			<body className={`${inter.className} flex justify-center items-center h-screen py-10`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='light'
				>
					<div className='relative main-background-dark flex justify-center items-center rounded-3xl w-11/12 h-[98%] max-w-[1500px] max-h-[950px] p-[1%] '>
						{/* 2xl:h-[950px] 2xl:w-[1500px] xl:h-[760px] xl:w-[1200px] h-[602px] w-[950px] */}
						<Nav />
						<div className='flex-1 h-[100%] w-[90%] pl-[2%] flex flex-col items-start justify-start'>
							<TempUnitProvider>
								<Header />
								<div className='w-[100%] h-[80%] flex-1 flex justify-center items-center'>
									<div className='w-[100%] h-[100%] pt-[1%]'>
										<div className='h-[100%] w-[100%] flex justify-between gap-x-[2%]'>
											<main className='h-[100%] w-[70%] flex flex-col gap-y-[2%]'>
												{children}
											</main>

											{/* Popular and favorite cities */}
											<aside className='h-[100%] w-[28%] flex flex-col justify-start items-center gap-y-[2%]'>
												<div className='w-[100%] h-[28%] flex justify-center items-center rounded-[1.2vw] bg-[rgba(0,0,0,0.2)]'>
													<FavoriteCities />
												</div>
												<div className='w-[100%] h-[70%] flex justify-center items-center rounded-[1.2vw] bg-[rgba(33,42,59,1)]'>
													<PopularCities />
												</div>
											</aside>
										</div>
									</div>
								</div>
							</TempUnitProvider>
						</div>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
