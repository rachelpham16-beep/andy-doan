import React from "react";
import theme from "theme";
import { Theme, Text, Icon, Link, Box, Section, Input, Strong, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Formspree } from "@quarkly/components";
import * as Components from "components";
import { BsPhone, BsEnvelope, BsMap } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"contact"} />
		<Helmet>
			<title>
				ANDY DOAN | PHOTOGRAPHY
			</title>
			<meta name={"description"} content={"PHOTOGRAPHY PORTFOLIO"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/68d745af90a2bb0024b9041d/images/logo.png?v=2025-10-03T14:17:11.831Z"} type={"image/x-icon"} />
		</Helmet>
		<Components.Destophead />
		<Section
			padding="80px 0 90px 0"
			quarkly-title="Contacts-5"
			phone-align-content="flex-start"
			phone-align-items="flex-start"
			phone-flex-direction="column"
			phone-justify-content="flex-start"
			phone-padding="20px 0 20px 0"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				phone-height="100%"
				phone-align-self="flex-start"
				phone-justify-content="flex-start"
				phone-align-content="flex-start"
				phone-display="flex"
				phone-flex-direction="column"
			/>
			<Text
				lg-padding="0px 0px 0px 0px"
				sm-font="normal 700 36px/1.2 --fontFamily-sans"
				margin="0px 0px 18px 0px"
				font="normal 600 42px/1.2 --fontFamily-sans"
				color="#561dc6"
				text-align="center"
				padding="0px 0 0px 0px"
				lg-width="100%"
				lg-margin="0px 0px 25px 0px"
				phone-font="normal 600 42px/1.2 --fontFamily-googleAzeretMono"
				phone-text-transform="uppercase"
				phone-color="#ffffff"
			>
				Contact
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="grid"
				grid-template-columns="repeat(4, 1fr)"
				grid-gap="16px 24px"
				margin="0px 0px 80px 0px"
				md-margin="0px 0px 50px 0px"
				lg-grid-template-columns="repeat(2, 1fr)"
				sm-grid-template-columns="1fr"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="center"
					padding="36px 20px 20px 20px"
					border-width="1px"
					border-style="solid"
					border-color="--color-lightD2"
					border-radius="4px"
				>
					<Icon
						category="bs"
						icon={BsPhone}
						size="36px"
						margin="0px 0px 20px 0px"
						color="#561dc6"
						phone-color="#ffffff"
					/>
					<Text
						margin="0px 0px 15px 0px"
						font="normal 500 24px/1.2 --fontFamily-sansHelvetica"
						text-align="center"
						color="#561dc6"
						md-margin="0px 0px 20px 0px"
						phone-font="normal 500 24px/1.2 --fontFamily-googleAzeretMono"
						phone-text-transform="uppercase"
						phone-color="#ffffff"
					>
						Phone
					</Text>
					<Link
						href="tel:+9877654321223"
						color="#47474d"
						text-decoration-line="initial"
						font="normal 300 18px/1.5 --fontFamily-sansHelvetica"
						display="block"
						text-align="center"
						margin="0px 0px 15px 0px"
						phone-font="normal 300 12px/1.5 --fontFamily-googleAzeretMono"
					>
						1235466748
					</Link>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="center"
					padding="36px 20px 20px 20px"
					border-width="1px"
					border-style="solid"
					border-color="--color-lightD2"
					border-radius="4px"
				>
					<Icon
						category="bs"
						icon={BsEnvelope}
						size="36px"
						margin="0px 0px 20px 0px"
						color="#561dc6"
						phone-color="#ffffff"
					/>
					<Text
						margin="0px 0px 15px 0px"
						font="normal 500 24px/1.2 --fontFamily-sansHelvetica"
						text-align="center"
						color="#561dc6"
						md-margin="0px 0px 20px 0px"
						phone-text-transform="uppercase"
						phone-color="#fdfdfd"
					>
						E-mail
					</Text>
					<Link
						href="mailto:info@yourdomain.com"
						color="#47474d"
						text-decoration-line="initial"
						font="normal 300 18px/1.5 --fontFamily-sansHelvetica"
						display="block"
						margin="0px 0px 15px 0px"
						text-align="center"
						phone-color="#616164"
						phone-font="normal 300 12px/1.5 --fontFamily-googleAzeretMono"
						phone-href="mailto:info@andydoanut.com"
					>
						info@andydoanut.com
					</Link>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="center"
					padding="36px 20px 20px 20px"
					border-width="1px"
					border-style="solid"
					border-color="--color-lightD2"
					border-radius="4px"
				>
					<Icon
						category="fi"
						icon={FiInstagram}
						size="36px"
						margin="0px 0px 20px 0px"
						color="#561dc6"
						phone-color="#ffffff"
					/>
					<Text
						margin="0px 0px 15px 0px"
						font="normal 500 24px/1.2 --fontFamily-sansHelvetica"
						text-align="center"
						color="#561dc6"
						md-margin="0px 0px 20px 0px"
						phone-color="#ffffff"
					>
						PORTFOLIO
					</Text>
					<Link
						href="mailto:info@yourdomain.com"
						color="#47474d"
						text-decoration-line="initial"
						font="normal 300 18px/1.5 --fontFamily-sansHelvetica"
						display="block"
						margin="0px 0px 15px 0px"
						text-align="center"
						phone-font="normal 300 12px/1.5 --fontFamily-googleAzeretMono"
					>
						instagram.com/andydoanut/
					</Link>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="center"
					padding="36px 20px 20px 20px"
					border-width="1px"
					border-style="solid"
					border-color="--color-lightD2"
					border-radius="4px"
				>
					<Icon
						category="bs"
						icon={BsMap}
						size="36px"
						margin="0px 0px 20px 0px"
						color="#561dc6"
						phone-color="#fdfdfd"
					/>
					<Text
						margin="0px 0px 15px 0px"
						font="normal 500 24px/1.2 --fontFamily-sansHelvetica"
						text-align="center"
						color="#561dc6"
						md-margin="0px 0px 20px 0px"
						phone-color="#ffffff"
						phone-text-transform="uppercase"
						phone-font="normal 500 24px/1.2 --fontFamily-googleAzeretMono"
					>
						Location
					</Text>
					<Text
						margin="0px 0px 20px 0px"
						color="#47474d"
						font="normal 300 18px/1.5 --fontFamily-sansHelvetica"
						text-align="center"
						border-color="#b8acac"
						md-margin="0px 0px 15px 0px"
						phone-font="normal 300 12px/1.5 --fontFamily-googleAzeretMono"
					>
						Dallas, Texas
					</Text>
				</Box>
			</Box>
		</Section>
		<Section
			background="--color-light"
			color="--dark"
			padding="64px 0 64px 0"
			phone-background="#000000"
			phone-padding="10px 0 64px 0"
			desktop-justify-content="center"
			desktop-align-items="center"
			desktop-align-content="center"
			desktop-text-align="left"
			margin="0 0 0 0"
		>
			<Override
				slot="SectionContent"
				phone-width="100%"
				phone-padding="0px 20px 0px 20px"
				desktop-justify-content="center"
				desktop-align-items="center"
				desktop-align-content="center"
			/>
			<Box
				margin="-16px -16px -16px -16px"
				display="flex"
				flex-wrap="wrap"
				desktop-align-items="flex-start"
				desktop-justify-content="center"
			>
				<Box padding="16px 16px 16px 16px" width="50%" lg-width="100%" phone-padding="16px 16px 7px 16px">
					<Box phone-text-align="left" phone-display="flex" phone-justify-content="center" phone-align-items="center">
						<Text
							font="--base"
							color="--grey"
							letter-spacing="1px"
							text-transform="uppercase"
							margin="0"
							phone-font="normal 600 42px/1.5 &quot;Azeret Mono&quot;, monospace"
							phone-text-align="center"
							phone-align-self="flex-start"
							phone-display="flex"
							phone-justify-content="center"
							phone-align-items="center"
						>
							BOOKINGS
						</Text>
					</Box>
				</Box>
				<Box
					width="50%"
					padding="8px 8px 8px 8px"
					lg-width="100%"
					phone-padding="0 8px 8px 8px"
					phone-margin="0px 15px 0px 15px"
				>
					<Box phone-display="flex" phone-align-items="center" phone-justify-content="center">
						<Formspree
							endpoint="xeqpgrlv"
							phone-width="80%"
							phone-align-items="center"
							phone-display="flex"
							phone-justify-content="center"
							phone-align-content="center"
						>
							<Box
								gap="16px"
								display="grid"
								flex-direction="row"
								flex-wrap="wrap"
								grid-template-columns="repeat(2, 1fr)"
								grid-gap="16px"
							>
								<Box sm-width="100%" display="flex" flex-direction="column">
									<Text font="--base" margin="0 0 4px 0" phone-color="#ffffff" phone-font="normal 100 12px/1.5 &quot;Azeret Mono&quot;, monospace">
										NAME
									</Text>
									<Input
										width="100%"
										name="name"
										type="text"
										required
										phone-height="20px"
									/>
								</Box>
								<Box sm-width="100%" display="flex" flex-direction="column">
									<Text
										font="--base"
										margin="0 0 4px 0"
										phone-color="#ffffff"
										phone-font="normal 100 12px/1.5 &quot;Azeret Mono&quot;, monospace"
										phone-text-transform="uppercase"
									>
										Email
									</Text>
									<Input
										width="100%"
										type="email"
										name="email"
										required
										phone-height="20px"
									/>
								</Box>
								<Box display="flex" flex-direction="column" grid-column="1 / span 2">
									<Text
										font="--base"
										margin="0 0 4px 0"
										phone-color="#ffffff"
										phone-font="normal 100 12px/1.5 &quot;Azeret Mono&quot;, monospace"
										phone-text-transform="uppercase"
									>
										Message
									</Text>
									<Input
										as="textarea"
										rows="4"
										width="100%"
										name="message"
										required
										phone-height="50px"
									/>
								</Box>
								<Box display="flex" flex-direction="column" align-items="flex-start" grid-column="1 / span 2">
									<Button
										phone-text-transform="uppercase"
										phone-font="normal 200 10px/1.5 &quot;Azeret Mono&quot;, monospace"
										phone-background="--color-grey"
										phone-height="30px"
										phone-align-self="flex-start"
									>
										<Strong>
											Send
										</Strong>
									</Button>
								</Box>
							</Box>
						</Formspree>
					</Box>
				</Box>
			</Box>
		</Section>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"68d9ab7506f43833892242d4"}>
				{".collage {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-rows: 10px; /* controls row height unit */\n  grid-gap: 16px;\n}\n\n.collage img {\n  width: 100%;\n  display: block;\n  object-fit: cover;\n  /* This line makes the image take up space based on its aspect ratio */\n  grid-row: span var(--rows, 1);\n}\n"}
			</style>
			<style place={"endOfHead"} rawKey={"68daaf1b3055d4365d7039d5"}>
				{"<style>\n/* base: hide nested ULs */\n.nav-menu ul ul {\n  opacity: 0;\n  transform: translateY(-20px);\n  pointer-events: none;\n  visibility: hidden;\n  transition: opacity .18s ease, transform .18s ease, visibility .18s;\n  position: absolute;\ntop: 100%;   \n  left: 0;\n  background: #fff;\n  box-shadow: 0 6px 18px rgba(0,0,0,.08);\n  padding: 8px 0;\n  margin: 0;\n  min-width: 180px;\n  z-index: 999;\n  list-style: none;\n}\n\n/* style submenu items */\n.nav-menu ul ul li {\n  padding: 8px 16px;\n  white-space: nowrap;\n}\n\n/* visible state (applied by JS or :hover) */\n.nav-menu ul ul.show {\n  opacity: 1;\n  transform: translateY(0);\n  pointer-events: auto;\n  visibility: visible;\n}\n\n/* ensure li parent is positioned for absolute child */\n.nav-menu li {\n  position: relative;\n}\n\n/* small pointer-target improvement for mobile */\n.nav-menu .has-submenu > a::after {\n  content: \" ▾\";\n  font-size: .9em;\n  margin-left: 6px;\n  opacity: .7;\n}\n</style>\n"}
			</style>
			<script place={"endOfHead"} rawKey={"68daaf776f50fbf79dacc9c3"}>
				{"<script>\ndocument.addEventListener('DOMContentLoaded', function () {\n  const menu = document.querySelector('.nav-menu');\n  if (!menu) return;\n\n  // find all <li> that contain a nested <ul> (submenu)\n  const parents = Array.from(menu.querySelectorAll('li')).filter(li => li.querySelector('ul'));\n\n  parents.forEach(li => {\n    const submenu = li.querySelector('ul');\n\n    // add helper class for visuals\n    li.classList.add('has-submenu');\n\n    // ensure submenu is hidden initially (in case CSS wasn't applied)\n    submenu.classList.remove('show');\n\n    // SHOW/HIDE on hover (desktop)\n    li.addEventListener('mouseenter', () => {\n      submenu.classList.add('show');\n    });\n    li.addEventListener('mouseleave', () => {\n      submenu.classList.remove('show');\n    });\n\n    // TOGGLE on click (mobile/touch) — prevent immediate navigation when toggling\n    const link = li.querySelector('a');\n    if (link) {\n      link.addEventListener('click', function (e) {\n        // on small screens toggle instead of following link\n        if (window.innerWidth <= 900) {\n          // If submenu already visible allow navigation, otherwise toggle and block navigation\n          if (!submenu.classList.contains('show')) {\n            e.preventDefault();\n            submenu.classList.add('show');\n          } else {\n            // let the link work if submenu already open (optional)\n            // or toggle closed: submenu.classList.remove('show');\n          }\n        }\n      });\n    }\n  });\n\n  // optional: close submenu when clicking outside\n  document.addEventListener('click', (e) => {\n    if (!menu.contains(e.target)) {\n      parents.forEach(li => li.querySelector('ul').classList.remove('show'));\n    }\n  });\n});\n</script>\n"}
			</script>
		</RawHtml>
	</Theme>;
});