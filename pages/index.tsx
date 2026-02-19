import Head from "next/head";
import React, { Suspense, useState, useEffect } from "react";

const Greeting = React.lazy(() => import("../components/sections/Greeting"));
const Intro = React.lazy(() => import("../components/sections/Intro"));
const Experience = React.lazy(
	() => import("../components/sections/Experience"),
);
const Tech = React.lazy(() => import("../components/sections/Tech"));
const Contact = React.lazy(() => import("../components/sections/Contact"));
const Projects = React.lazy(() => import("../components/sections/Projects"));
const PageNav = React.lazy(() => import("../components/sections/PageNav"));

const GuardedLazyComponentToSSR = () => {
	const [isFront, setIsFront] = useState(false);

	useEffect(() => {
		process.nextTick(() => {
			if (globalThis.window ?? false) {
				setIsFront(true);
			}
		});
	}, []);

	if (!isFront) return null;

	return (
		<Suspense
			fallback={
				<div className="relative w-screen h-screen overflow-hidden flex flex-col items-center justify-center">
					<p className="text-center text-indigo-700 uppercase tracking-wide text-sm">
						Loading
						<br /> Resume
					</p>
				</div>
			}
		>
			<main id="pageWrap" className="relative pb-12">
				<div className="fixed top-0 left-0 flex w-full opacity-10 backdrop">
					<svg
						id="visual"
						viewBox="0 0 900 600"
						xmlns="http://www.w3.org/2000/svg"
						className="text-indigo-600 transform rotate-180"
					>
						<path
							d="M0 366L30 369.5C60 373 120 380 180 394.3C240 408.7 300 430.3 360 451.8C420 473.3 480 494.7 540 486.7C600 478.7 660 441.3 720 428C780 414.7 840 425.3 870 430.7L900 436L900 601L870 601C840 601 780 601 720 601C660 601 600 601 540 601C480 601 420 601 360 601C300 601 240 601 180 601C120 601 60 601 30 601L0 601Z"
							fill="currentColor"
							strokeLinecap="round"
							strokeLinejoin="miter"
						></path>
					</svg>
				</div>
				{/* Header */}
				<header id="greeting" className="relative">
					<Greeting />
					<Intro />
				</header>

				<section id="projects" className="relative">
					<Projects />
				</section>
				<section id="experience" className="relative">
					<Experience />
				</section>
				<section id="tech" className="relative">
					<Tech />{" "}
				</section>
				<section id="contact" className="relative">
					<Contact />
				</section>

				{/* Footer */}
				<footer className="relative block">
					<div className="mx-auto prose-sm prose">
						<p className="text-center">All material &copy; Kyle Rodgers 2022</p>
					</div>
				</footer>
			</main>
			<PageNav />
		</Suspense>
	);
};

export default function Home() {
	return (
		<>
			<Head>
				<title>Kyle Rodgers | Frontend Web Enthusiast</title>

				<meta
					data-n-head="ssr"
					data-hid="description"
					name="description"
					content="I have a passion for creating dynamic user experiences on the web for local entrepreneurs and small businesses."
				></meta>
				<meta
					data-n-head="ssr"
					property="og:title"
					content="A Fort Wayne based Web Developer | Kyle Rodgers"
				></meta>
				<meta data-n-head="ssr" property="og:type" content="website"></meta>
				<meta
					data-n-head="ssr"
					property="og:url"
					content="https://krresume.netlify.app"
				></meta>
				<meta
					data-n-head="ssr"
					property="og:image"
					content="https://kylerodgers.me/images/4k-wallpaper-conifers-desktop-wallpaper-1920x1080.jpg"
				></meta>
				<meta
					data-n-head="ssr"
					property="og:description"
					content="I have a passion for creating dynamic user experiences on the web."
				></meta>
				<meta data-n-head="ssr" name="twitter:card" content="summary"></meta>
				<meta
					data-n-head="ssr"
					name="twitter:site"
					content="https://krresume.netlify.app"
				></meta>
				<meta
					data-n-head="ssr"
					name="twitter:title"
					content="A Fort Wayne based Web Developer | Kyle Rodgers"
				></meta>
				<meta
					data-n-head="ssr"
					name="twitter:description"
					content="I have a passion for creating dynamic user experiences on the web."
				></meta>
				<meta
					data-n-head="ssr"
					name="twitter:creator"
					content="@kyle_rits"
				></meta>
				<meta
					data-n-head="ssr"
					name="twitter:image:src"
					content="https://kylerodgers.me/images/4k-wallpaper-conifers-desktop-wallpaper-1920x1080.jpg"
				></meta>
				<meta
					data-n-head="ssr"
					name="msapplication-TileColor"
					content="#6b9686"
				></meta>
				<meta data-n-head="ssr" name="theme-color" content="#edf6f8"></meta>
				<meta data-n-head="ssr" data-hid="charset" charSet="utf-8"></meta>
				<meta
					data-n-head="ssr"
					data-hid="mobile-web-app-capable"
					name="mobile-web-app-capable"
					content="yes"
				></meta>
				<meta
					data-n-head="ssr"
					data-hid="apple-mobile-web-app-title"
					name="apple-mobile-web-app-title"
					content="Kyle Rodgers | Resume"
				></meta>

				<link
					data-n-head="ssr"
					rel="icon"
					type="image/x-icon"
					href="/favicon.ico"
				></link>
				<link
					data-n-head="ssr"
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicons/apple-touch-icon.png"
				></link>
				<link
					data-n-head="ssr"
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicons/favicon-32x32.png"
				></link>
				<link
					data-n-head="ssr"
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicons/favicon-16x16.png"
				></link>
				<link
					data-n-head="ssr"
					rel="mask-icon"
					href="/favicons/safari-pinned-tab.svg"
					color="#6b9686"
				></link>

				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Cabin:400,500,600,700&display=swap"
				/>
				<link
					rel="preload"
					href="/fonts/EBGaramond/EBGaramond-VariableFont_wght.ttf"
					as="font"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href="/fonts/EBGaramond/EBGaramond-Italic-VariableFont_wght.ttf"
					as="font"
					crossOrigin=""
				/>
			</Head>
			<GuardedLazyComponentToSSR />
		</>
	);
}
