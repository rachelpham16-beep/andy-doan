import React from "react";
import theme from "theme";
import { Theme, Image, LinkBox, Strong, Span, Link, Hr, Box, Section, Text, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { FiAlignRight } from "react-icons/fi";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				ANDY DOAN | PHOTOGRAPHY
			</title>
			<meta name={"description"} content={"PHOTOGRAPHY PORTFOLIO"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/68d745af90a2bb0024b9041d/images/logo.png?v=2025-10-03T14:17:11.831Z"} type={"image/x-icon"} />
		</Helmet>
		<Section
			sm-padding="8px 0 8px 0"
			quarkly-title="Header-5"
			height="650px"
			phone-height="300px"
			tablet-background="rgba(255, 255, 255, 0) url(https://uploads.quarkly.io/68d745af90a2bb0024b9041d/images/24_Original.JPG?v=2025-09-27T02:14:54.476Z) 50% 100%/cover"
			overflow-x="hidden"
			display="grid"
			background="rgba(255, 255, 255, 0) url(https://uploads.quarkly.io/68d745af90a2bb0024b9041d/images/24_Original.JPG?v=2025-09-27T02:14:54.476Z) 50% 70% /cover repeat scroll"
			min-height="650px"
			tablet-height="550px"
			desktop-height="750px"
			desktop-min-height="850px"
			phone-min-height={0}
			desktop-margin="0 0 0 0"
			desktop-display="flex"
			desktop-background="linear-gradient(180deg,rgba(25, 30, 34, 0.63) 0%,transparent 52.4%) 0 0 no-repeat,rgba(255, 255, 255, 0) url(https://uploads.quarkly.io/68d745af90a2bb0024b9041d/images/24_Original.JPG?v=2025-09-27T02:14:54.476Z) 50% 60%/cover repeat scroll"
			phone-background="rgba(255, 255, 255, 0) url(https://res.cloudinary.com/dgan17f48/image/upload/v1760290941/24_Original_nyvily.jpg) 50% 80%/cover no-repeat scroll"
			phone-padding="0 0 0 0"
			desktop-overflow-x="hidden"
			phone-flex-direction="column"
			phone-overflow-x="visible"
			phone-justify-content="flex-start"
			tablet-display="flex"
			tablet-overflow-x="visible"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				justify-content="space-between"
				width="97%"
				height="25px"
				align-self="flex-start"
				desktop-height="auto"
				desktop-width="100%"
				desktop-max-width="none"
				desktop-margin="15px 0 0px 0"
				phone-min-width="none"
				phone-width="100%"
				phone-min-height="none"
				phone-justify-content="space-between"
				phone-justify-self="auto"
				tablet-justify-self="center"
				tablet-min-width={0}
				tablet-min-height={0}
				tablet-width="100%"
				tablet-height="100%"
				tablet-flex-direction="row-reverse"
				tablet-grid-area="auto / auto"
				tablet-flex="0 0 auto"
			/>
			<Box
				display="flex"
				padding="0 0 12px 0"
				align-items="flex-start"
				flex-direction="row"
				width="30%"
				sm-width="50%"
				sm-align-items="center"
				sm-flex-direction="row"
				sm-justify-content="flex-start"
				md-width="50%"
				lg-width="70%"
				md-justify-content="flex-start"
				height="50px"
				align-self="flex-start"
				tablet-margin="0px 0px 0px 5px"
				phone-margin="0px 0px 0px 15px"
				desktop-justify-content="flex-start"
				desktop-margin="0px 0px 0px 25px"
				desktop-width="100%"
				phone-width="90%"
				phone-padding="0 0 0 0"
				tablet-justify-content="flex-start"
				tablet-width="100%"
				tablet-flex-direction="row"
				phone-height="100%"
				phone-min-height={0}
				phone-min-width={0}
			>
				<LinkBox
					flex-direction="row"
					href="/index"
					display="flex"
					grid-gap="12px"
					phone-margin="60px 0px 0px 5px"
					tablet-margin="10px 0px 0px 20px"
					desktop-width="35%"
					desktop-justify-content="flex-start"
					desktop-margin="0px 20px 0px 10px"
					phone-width="75%"
					phone-align-items="flex-start"
					phone-justify-content="flex-start"
				>
					<Image
						src="https://res.cloudinary.com/dgan17f48/image/upload/v1759035897/logo_y7l4nm.png"
						display="block"
						width="75px"
						height="75px"
						desktop-display="flex"
						desktop-justify-content="flex-start"
						phone-width="60px"
						desktop-width="125px"
						desktop-height="125px"
						phone-height="60px"
						tablet-width="100px"
						tablet-height="100px"
						tablet-margin="10px 0px 0px 0px"
					/>
				</LinkBox>
				<Components.QuarklycommunityKitMobileSidePanel
					breakpoint="md"
					menuPosition="full"
					tablet-display="flex"
					tablet-height="auto"
					tablet-width="50%"
					tablet-flex-direction="row"
					desktop-flex="0 0 auto"
					desktop-flex-direction="row"
					desktop-width="60%"
					desktop-height="auto"
					desktop-align-items="flex-start"
					desktop-margin="20px 10px 0px 0px"
					onloadShow={false}
					phone-flex="0 0 auto"
					phone-width="115%"
					phone-justify-content="flex-end"
					tablet-align-items="flex-end"
					tablet-align-content="flex-end"
					tablet-margin="10px 20px 0px 0px"
					phone-margin="10px 5px 0px 0px"
					phone-padding="0px 0px 0px 25px"
				>
					<Override slot="Button Text" phone-display="none" />
					<Override
						slot="Content"
						phone-background="#000000"
						desktop-justify-content="flex-end"
						desktop-flex-direction="row"
						desktop-align-items="flex-start"
						desktop-align-content="flex-start"
						desktop-height="auto"
						desktop-width="100%"
						desktop-align-self="flex-start"
						desktop-padding="0 16px 24px 16px"
					/>
					<Override
						slot="Children"
						phone-height="500px"
						tablet-display="flex"
						tablet-flex-direction="column"
						tablet-width="100%"
						desktop-flex-direction="row"
						desktop-justify-content="flex-end"
						desktop-align-content="flex-start"
						desktop-height="auto"
						desktop-align-items="center"
						desktop-align-self="flex-start"
					/>
					<Override slot="Cross" phone-color="#ffffff" tablet-display="block" desktop-display="none" />
					<Override
						slot="Content :closed"
						tablet-background="rgba(0, 0, 0, 0)"
						desktop-flex-direction="row"
						desktop-justify-content="flex-end"
						desktop-padding="0px 0 24px 16px"
					/>
					<Override
						slot="Wrapper"
						desktop-flex-direction="row"
						desktop-align-items="flex-start"
						desktop-justify-content="flex-end"
						desktop-width="100%"
					/>
					<Override slot="Wrapper :closed" desktop-flex-direction="row" desktop-width="100%" />
					<Override
						slot="Children :closed"
						desktop-flex-direction="row"
						desktop-height="auto"
						desktop-width="100%"
						desktop-align-self="center"
					/>
					<Override
						slot="Button Icon"
						category="fi"
						icon={FiAlignRight}
						size="19px"
						phone-margin="15px 10px 0px 0px"
						phone-size="15"
						phone-justify-content="flex-end"
					/>
					<Override
						slot="Button"
						phone-margin="5px 0 0px 0px"
						phone-position="relative"
						phone-display="flex"
						phone-justify-content="flex-end"
						desktop-display="none"
					/>
					<Override slot="Children :open" phone-display="grid" phone-height="auto" />
					<Override slot="Button :closed" tablet-width="50%" />
					<LinkBox
						phone-width="20%"
						href="/index"
						phone-margin="0px 0px 40px 0px"
						tablet-width="10%"
						desktop-display="none"
					>
						<Image
							src="https://uploads.quarkly.io/68d745af90a2bb0024b9041d/images/andylogowhite.png?v=2025-09-28T04:07:18.616Z"
							display="block"
							phone-src="https://uploads.quarkly.io/68d745af90a2bb0024b9041d/images/andylogowhite.png?v=2025-09-28T04:07:18.616Z"
							phone-width="100%"
							srcSet="https://smartuploads.quarkly.io/68d745af90a2bb0024b9041d/images/andylogowhite.png?v=2025-09-28T04%3A07%3A18.616Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/68d745af90a2bb0024b9041d/images/andylogowhite.png?v=2025-09-28T04%3A07%3A18.616Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/68d745af90a2bb0024b9041d/images/andylogowhite.png?v=2025-09-28T04%3A07%3A18.616Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/68d745af90a2bb0024b9041d/images/andylogowhite.png?v=2025-09-28T04%3A07%3A18.616Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/68d745af90a2bb0024b9041d/images/andylogowhite.png?v=2025-09-28T04%3A07%3A18.616Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/68d745af90a2bb0024b9041d/images/andylogowhite.png?v=2025-09-28T04%3A07%3A18.616Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/68d745af90a2bb0024b9041d/images/andylogowhite.png?v=2025-09-28T04%3A07%3A18.616Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(min-width: 0px) 100vw,(min-width: 768px) 100vw,(min-width: 1200px) 100vw,100vw"
						/>
					</LinkBox>
					<Link
						href="/music"
						color="#000000"
						phone-font="200 12px --fontFamily-googleAzeretMono"
						phone-color="#ffffff"
						phone-text-transform="uppercase"
						phone-text-decoration-line="initial"
						phone-margin="5px 0px 15px 5px"
						phone-display="flex"
						phone-href="/music"
						desktop-margin="5px 15px 0 5px"
						desktop-color="#000000"
						desktop-font="100 14px &quot;Azeret Mono&quot;, monospace"
						desktop-hover-color="--dark"
						desktop-hover-background="--color-light"
					>
						<Span
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							desktop-font="100 14px &quot;Azeret Mono&quot;, monospace"
						>
							<Span
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								<Strong desktop-font="100 12px &quot;Azeret Mono&quot;, monospace">
									music
								</Strong>
							</Span>
						</Span>
					</Link>
					<Link
						href="/portraits"
						color="#000000"
						phone-font="200 12px --fontFamily-googleAzeretMono"
						phone-color="#ffffff"
						phone-text-transform="uppercase"
						phone-text-decoration-line="initial"
						phone-margin="5px 0px 15px 5px"
						phone-display="flex"
						desktop-margin="5px 15px 0 5px"
						desktop-color="#000000"
						desktop-font="100 12px &quot;Azeret Mono&quot;, monospace"
						desktop-hover-background="--color-light"
					>
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							desktop-font="100 12px &quot;Azeret Mono&quot;, monospace"
						>
							portraits
						</Strong>
					</Link>
					<Link
						href="/sports"
						color="#000000"
						phone-font="200 12px --fontFamily-googleAzeretMono"
						phone-color="#ffffff"
						phone-text-transform="uppercase"
						phone-text-decoration-line="initial"
						phone-margin="5px 0px 15px 5px"
						phone-display="flex"
						desktop-margin="5px 15px 0 5px"
						desktop-color="#000000"
						desktop-font="100 14px &quot;Azeret Mono&quot;, monospace"
						desktop-hover-background="--color-light"
					>
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							desktop-font="100 12px &quot;Azeret Mono&quot;, monospace"
						>
							sports
						</Strong>
					</Link>
					<Link
						href="/bts"
						color="#000000"
						phone-font="200 12px --fontFamily-googleAzeretMono"
						phone-color="#ffffff"
						phone-text-transform="uppercase"
						phone-text-decoration-line="initial"
						phone-margin="5px 0px 15px 5px"
						phone-display="flex"
						desktop-margin="5px 15px 0 5px"
						desktop-color="#000000"
						desktop-hover-background="--color-light"
					>
						<Strong desktop-font="100 12px &quot;Azeret Mono&quot;, monospace">
							bts
						</Strong>
					</Link>
					<Link
						href="/film"
						color="#000000"
						phone-font="200 12px --fontFamily-googleAzeretMono"
						phone-color="#ffffff"
						phone-text-transform="uppercase"
						phone-text-decoration-line="initial"
						phone-margin="5px 0px 15px 5px"
						phone-display="flex"
						desktop-margin="5px 15px 0 5px"
						desktop-color="#000000"
						desktop-hover-background="--color-light"
					>
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							desktop-font="100 12px &quot;Azeret Mono&quot;, monospace"
						>
							film
						</Strong>
					</Link>
					<Link
						href="/landscape"
						color="#000000"
						phone-font="200 12px --fontFamily-googleAzeretMono"
						phone-color="#ffffff"
						phone-text-transform="uppercase"
						phone-text-decoration-line="initial"
						phone-margin="5px 0px 15px 5px"
						phone-display="flex"
						desktop-margin="5px 15px 0 5px"
						desktop-color="#000000"
						desktop-hover-background="--color-light"
					>
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							desktop-font="100 12px &quot;Azeret Mono&quot;, monospace"
						>
							landscape
						</Strong>
					</Link>
					<Link
						href="/automotive"
						color="#000000"
						phone-font="200 12px --fontFamily-googleAzeretMono"
						phone-color="#ffffff"
						phone-text-transform="uppercase"
						phone-text-decoration-line="initial"
						phone-margin="5px 0px 15px 5px"
						phone-display="flex"
						desktop-margin="5px 15px 0 5px"
						desktop-color="#000000"
						desktop-hover-background="--color-lightD1"
					>
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							desktop-font="100 12px &quot;Azeret Mono&quot;, monospace"
						>
							automotive
						</Strong>
					</Link>
					<Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" desktop-display="none" />
					<Link
						href="/contact"
						color="#000000"
						phone-font="200 12px --fontFamily-googleAzeretMono"
						phone-color="#ffffff"
						phone-text-transform="uppercase"
						phone-text-decoration-line="initial"
						phone-margin="5px 0px 15px 5px"
						phone-display="flex"
						desktop-margin="5px 15px 0 5px"
						desktop-color="--darkL2"
						desktop-hover-color="--dark"
						desktop-hover-background="--color-light"
						desktop-padding="10px 0px 10px 0px"
					>
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							desktop-font="100 12px &quot;Azeret Mono&quot;, monospace"
						>
							<Strong>
								contact
							</Strong>
						</Strong>
					</Link>
					<Link
						href="/contact"
						color="#000000"
						phone-font="200 12px --fontFamily-googleAzeretMono"
						phone-color="#000000"
						phone-text-transform="uppercase"
						phone-text-decoration-line="initial"
						phone-margin="5px 0px 5px 5px"
						phone-display="flex"
						phone-background="#ffffff"
						phone-width="28%"
						phone-padding="5px 10px 5px 10px"
						tablet-width="13%"
						tablet-margin="0 0px 15px 5px"
						desktop-padding="10px 10px 10px 10px"
						desktop-margin="0px 0px 0 0"
						desktop-text-align="center"
						desktop-background="rgba(0, 0, 0, 0.82)"
						desktop-color="#ffffff"
						desktop-justify-content="center"
						desktop-align-items="flex-start"
						desktop-hover-color="#ffffff"
						desktop-hover-background="--color-grey"
						desktop-width="auto"
						desktop-border-radius="4px"
						phone-height="auto"
						phone-flex="0 0 auto"
						phone-justify-self="start"
						phone-text-align="center"
					>
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							phone-text-align="right"
							desktop-text-align="center"
						>
							book a shoot
						</Strong>
					</Link>
					<SocialMedia
						phone-justify-content="flex-start"
						instagram="https://www.instagram.com/andydoanut/"
						linked-in="https://www.linkedin.com/in/andydoanut/"
						desktop-display="none"
						phone-margin="40px 0px 0px 0px"
						phone-justify-self="start"
						phone-display="flex"
						phone-width="50%"
						phone-align-self="start"
						phone-align-items="flex-start"
						phone-align-content="flex-start"
					>
						<Override
							slot="link"
							border-radius="50%"
							color="--grey"
							hover-color="--light"
							background="transparent"
							hover-background="transparent"
							margin="0 8px"
							desktop-display="none"
						/>
					</SocialMedia>
				</Components.QuarklycommunityKitMobileSidePanel>
			</Box>
		</Section>
		<Box
			min-width="100px"
			min-height="100px"
			phone-width="100%"
			phone-height="auto"
			phone-align-items="flex-start"
			quarkly-title="music grid"
			tablet-display="block"
			tablet-margin="5px 0px 0px 0px"
			phone-display="none"
		>
			<Override
				slot="button"
				phone-type="link"
				phone-href="/portfolio/music"
				phone-color="rgba(255, 255, 255, 0.85)"
				phone-hover-color="#000000"
				phone-font="normal 100 5px/1.5 --fontFamily-googleAzeretMono"
				phone-min-height={0}
				phone-min-width={0}
			/>
			<Box
				min-width="100px"
				background="#000000"
				height="10px"
				min-height="30px"
				display="flex"
				align-items="flex-end"
				justify-content="center"
				flex-direction="row"
				bigPhone-font="16px "
				bigPhone-width="100%"
				bigPhone-min-height="10px"
				smallPhone-width="100%"
				smallPhone-min-width={0}
				smallPhone-min-height={0}
				phone-width="100%"
				phone-height="AUTO"
				tablet-margin="0px 0px 2px 0px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="33%"
					smallPhone-height="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 2px 0px 2px"
					phone-width="33%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					tablet-width="25%"
					tablet-margin="0px 0 0px 0"
					desktop-font="14px --fontFamily-googleAzeretMono"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						tablet-width="50%"
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							desktop-font="100 14px --fontFamily-googleAzeretMono"
						>
							<Strong desktop-font="--desktop">
								LIL WAYNE
							</Strong>
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						tablet-width="45%"
						desktop-width="48%"
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-justify-items="end"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
								desktop-font="--desktop"
							>
								<Strong desktop-font="--desktop">
									2024
								</Strong>
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="33%"
					smallPhone-height="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 2px 0px 2px"
					phone-width="33%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					tablet-width="25%"
					desktop-font="14px --fontFamily-googleAzeretMono"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						phone-width="50%"
						phone-min-width={0}
						phone-min-height={0}
						phone-height="auto"
						tablet-margin="0px 0px 0px 2px"
						tablet-width="50%"
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							desktop-font="--desktop"
						>
							<Strong desktop-font="--desktop">
								YG
							</Strong>
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						tablet-margin="0px 2px 0px 0px"
						tablet-width="45%"
						desktop-width="48%"
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							>
								<Strong desktop-font="--desktop">
									2024
								</Strong>
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="33%"
					smallPhone-height="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 2px 0px 2px"
					phone-width="33%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					tablet-width="25%"
					tablet-margin="0px 0 0px 2px"
					desktop-font="14px --fontFamily-googleAzeretMono"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						tablet-width="50%"
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							<Strong desktop-font="--desktop">
								GUNNA
							</Strong>
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						tablet-margin="0px 0 0px 0px"
						tablet-width="45%"
						desktop-width="48%"
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-justify-items="end"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							>
								<Strong desktop-font="--desktop">
									2024
								</Strong>
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="33%"
					smallPhone-height="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 2px 0px 2px"
					phone-width="33%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					tablet-width="25%"
					tablet-margin="0px 2px 0px 0"
					desktop-font="14px --fontFamily-googleAzeretMono"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						tablet-margin="0px 0px 0px 2px"
						tablet-width="50%"
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							desktop-font="--desktop"
						>
							<Strong desktop-font="--desktop">
								kodak black
							</Strong>
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						tablet-width="45%"
						desktop-width="48%"
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-justify-items="end"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							>
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									user-select="auto"
									pointer-events="auto"
									desktop-font="--desktop"
								>
									2023
								</Strong>
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
			<Components.QuarklycommunityKitGallery
				bigPhone-display="flex"
				galleryItemNumbProp="4"
				columnsCountProp="4"
				borderWidthProp="4"
				loaderFormatProp="all"
				phone-width="100%"
				phone-height="auto"
				phone-grid-column="auto"
				phone-grid-row="auto"
				phone-grid-area="auto / auto"
				tablet-height="85% "
				tablet-width="100%"
			>
				<Override
					slot="Item 0"
					fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036041/373A0799_vrbozx.jpg"
					previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036041/373A0799_vrbozx.jpg"
					fullObjectFit="cover"
					fullLoading="eager"
					previewObjectFit="cover"
					previewLoading="eager"
					showFullImage={false}
					phone-width="100%"
					phone-height="auto"
				/>
				<Override
					slot="Item 1"
					previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036065/IMG_0755_nzbooo.jpg"
					fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036065/IMG_0755_nzbooo.jpg"
					showFullImage={false}
					phone-width="100%"
					phone-height="auto"
					previewLoading="eager"
				/>
				<Override
					slot="Item 2"
					previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036060/music8_lbkmie.jpg"
					fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036060/music8_lbkmie.jpg"
					showFullImage={false}
					phone-width="100%"
					phone-height="auto"
					previewLoading="eager"
				/>
				<Override
					slot="Item 3"
					fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036033/6D3A3239_x4gbwv.jpg"
					previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036033/6D3A3239_x4gbwv.jpg"
					previewObjectPosition="43%"
					previewLoading="eager"
					previewObjectFit="cover"
					stretchFull={false}
				/>
			</Components.QuarklycommunityKitGallery>
			<Box
				min-width="100px"
				min-height="100px"
				phone-width="100%"
				phone-height="auto"
				phone-display="flex"
				phone-min-height={0}
				phone-margin="0px 0px 5px 0px"
				tablet-margin="2px 0px 5px 0px"
				desktop-margin="2px 0px 10px 0px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 0px 0px 0px"
					smallPhone-height="10px"
					phone-width="33%"
					phone-min-width={0}
					phone-min-height={0}
					phone-height="auto"
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							<Strong desktop-font="10px ">
								one music fest
							</Strong>
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						smallPhone-margin="0px 2px 0px 0px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						tablet-margin="0px 0 0px 0px"
						tablet-width="45%"
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							>
								<Strong>
									ATL
								</Strong>
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-height="10px"
					phone-width="33%"
					phone-height="auto"
					phone-min-height={0}
					phone-min-width={0}
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							<Strong>
								lollapalooza
							</Strong>
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						smallPhone-margin="0px 2px 0px 0px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						phone-display="grid"
						tablet-margin="0px 0 0px 0px"
						tablet-width="45%"
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							>
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									user-select="auto"
									pointer-events="auto"
								>
									CHI
								</Strong>
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-height="10px"
					phone-width="33%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							smallPhone-margin="0px 0px 0px 2px"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							<Strong>
								twogetherland
							</Strong>
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						smallPhone-margin="0px 2px 0px 0px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						tablet-margin="0px 0 0px 0px"
						tablet-width="45%"
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							>
								<Strong>
									dal
								</Strong>
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-height="10px"
					phone-width="33%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							smallPhone-margin="0px 0px 0px 2px"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								ROLLING LOUD
							</Strong>
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						smallPhone-margin="0px 2px 0px 0px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						tablet-margin="0px 0 0px 0px"
						tablet-width="45%"
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							>
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									user-select="auto"
									pointer-events="auto"
								>
									LA
								</Strong>
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				phone-width="100%"
				phone-height="auto"
				phone-display="flex"
				phone-align-items="flex-start"
				phone-justify-content="center"
				phone-align-content="flex-start"
				phone-min-height={0}
				phone-margin="0px 0px 0px 0px"
				phone-min-width={0}
			/>
		</Box>
		<Box
			min-width="100px"
			min-height="100px"
			phone-display="grid"
			phone-width="100%"
			phone-height="100%"
			phone-align-items="flex-start"
			quarkly-title="music grid"
			tablet-display="none"
			phone-min-height={0}
			phone-min-width={0}
			phone-grid-template-rows="auto"
		>
			<Override
				slot="button"
				phone-type="link"
				phone-href="/portfolio/music"
				phone-color="rgba(255, 255, 255, 0.85)"
				phone-hover-color="#000000"
				phone-font="normal 100 5px/1.5 --fontFamily-googleAzeretMono"
				phone-min-height={0}
				phone-min-width={0}
			/>
			<Box
				min-width="100px"
				background="#000000"
				height="10px"
				min-height="30px"
				display="flex"
				align-items="flex-end"
				justify-content="center"
				flex-direction="row"
				bigPhone-font="16px "
				bigPhone-width="100%"
				bigPhone-min-height="10px"
				smallPhone-width="100%"
				smallPhone-min-width={0}
				smallPhone-min-height={0}
				phone-width="100%"
				phone-height="AUTO"
				phone-margin="5px 0px 0px 0px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="33%"
					smallPhone-height="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 2px 0px 2px"
					phone-width="33%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
						>
							LIL WAYNE
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-justify-items="end"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							>
								2024
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="33%"
					smallPhone-height="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 2px 0px 2px"
					phone-width="33%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						phone-width="50%"
						phone-min-width={0}
						phone-min-height={0}
						phone-height="auto"
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							YG
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
							>
								2024
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="33%"
					smallPhone-height="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 2px 0px 2px"
					phone-width="33%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
						>
							GUNNA
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-justify-items="end"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-text-align="right"
							>
								2024
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
			<Components.QuarklycommunityKitGallery
				bigPhone-display="flex"
				galleryItemNumbProp="3"
				columnsCountProp="3"
				borderWidthProp="2"
				loaderFormatProp="all"
				phone-width="100%"
				phone-height="auto"
				phone-grid-column="auto"
				phone-grid-row="auto"
				phone-grid-area="auto / auto"
			>
				<Override
					slot="Item 0"
					fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036041/373A0799_vrbozx.jpg"
					previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036041/373A0799_vrbozx.jpg"
					fullObjectFit="cover"
					fullLoading="eager"
					previewObjectFit="cover"
					previewLoading="eager"
					showFullImage={false}
					phone-width="100%"
					phone-height="auto"
					phone-position="static"
				/>
				<Override
					slot="Item 1"
					previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036065/IMG_0755_nzbooo.jpg"
					fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036065/IMG_0755_nzbooo.jpg"
					showFullImage={false}
					phone-width="100%"
					phone-height="auto"
					previewLoading="eager"
					phone-position="static"
				/>
				<Override
					slot="Item 2"
					previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036060/music8_lbkmie.jpg"
					fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036060/music8_lbkmie.jpg"
					showFullImage={false}
					phone-width="100%"
					phone-height="auto"
					previewLoading="eager"
					phone-grid-column="auto"
					phone-grid-row="auto"
					phone-grid-area="auto / auto"
					phone-position="static"
				/>
				<Override
					slot="Item 3"
					fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036033/6D3A3239_x4gbwv.jpg"
					previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036033/6D3A3239_x4gbwv.jpg"
					previewObjectPosition="43%"
					previewLoading="eager"
				/>
			</Components.QuarklycommunityKitGallery>
			<Box
				min-width="100px"
				min-height="100px"
				phone-width="100%"
				phone-height="auto"
				phone-display="flex"
				phone-min-height={0}
				phone-margin="2px 0px 5px 0px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 0px 0px 0px"
					smallPhone-height="10px"
					phone-width="33%"
					phone-min-width={0}
					phone-min-height={0}
					phone-height="auto"
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
						>
							one music fest
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						smallPhone-margin="0px 2px 0px 0px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
							>
								atl
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-height="10px"
					phone-width="33%"
					phone-height="auto"
					phone-min-height={0}
					phone-min-width={0}
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
						>
							lollapalooza
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						smallPhone-margin="0px 2px 0px 0px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						phone-display="grid"
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
							>
								la
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-height="10px"
					phone-width="33%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							smallPhone-margin="0px 0px 0px 2px"
						>
							twogetherland
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						smallPhone-margin="0px 2px 0px 0px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
							>
								dal
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				phone-width="100%"
				phone-height="auto"
				phone-display="flex"
				phone-align-items="flex-start"
				phone-justify-content="center"
				phone-align-content="flex-start"
				phone-min-height={0}
				phone-margin="0px 0px 0px 0px"
				phone-min-width={0}
			/>
		</Box>
		<Components.Sectionforbutton desktop-height="50px">
			<Override slot="buttonshomepage">
				<Override slot="button" phone-margin="5px 0px 5px 0px" />
			</Override>
		</Components.Sectionforbutton>
		<Components.Gridstructure
			phone-width="100%"
			phone-height="100%"
			phone-min-height={0}
			phone-min-width={0}
			quarkly-title="Gridstructurephone"
			tablet-display="none"
			phone-display="grid"
			phone-grid-template-rows="auto"
		>
			<Override
				slot="quarklycommunityKitGalleryOverride"
				fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036279/IMG_4207_fpnkqa.jpg"
				previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036279/IMG_4207_fpnkqa.jpg"
				previewObjectFit="cover"
				fullLoading="eager"
				phone-position="static"
				phone-grid-column="auto"
				phone-grid-row="auto"
				phone-grid-area="auto / auto"
			/>
			<Override
				slot="quarklycommunityKitGalleryOverride1"
				previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036280/IMG_4202_pia2e6.jpg"
				fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036280/IMG_4202_pia2e6.jpg"
				phone-grid-column="span 2"
				phone-grid-row="auto"
				phone-grid-area="auto / span 2"
				previewObjectFit="cover"
				columsNumb="2"
				rowsNumb="1"
				previewObjectPosition="100% 90%"
				fullLoading="eager"
				phone-position="static"
			/>
			<Override
				slot="quarklycommunityKitGalleryOverride2"
				fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036276/IMG_4163-2_eagzge.jpg"
				previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036276/IMG_4163-2_eagzge.jpg"
				phone-grid-area="auto / auto"
				phone-grid-row="auto"
				fullLoading="eager"
				phone-position="static"
			/>
			<Override
				slot="quarklycommunityKitGallery"
				galleryItemNumbProp="3"
				columnsCountProp="4"
				borderWidthProp="2"
				autoFillInProp
				loaderFormatProp="all"
				phone-grid-column="auto"
				phone-grid-row="auto"
				phone-grid-area="auto / auto"
				phone-width="100%"
				phone-height="auto"
			/>
			<Override
				slot="box1"
				phone-width="25%"
				phone-justify-content="flex-start"
				phone-text-align="left"
				phone-display="flex"
			/>
			<Override slot="box" phone-justify-self="start" phone-margin="5px 0px 0px 0px" />
			<Override slot="box5" phone-width="50%" phone-display="flex" />
			<Override slot="box9" phone-width="25%" phone-display="flex" />
			<Override slot="box14" phone-width="25%" phone-height="a" />
			<Override slot="box18" phone-width="50%" phone-height="auto" />
			<Override slot="box22" phone-width="25%" phone-height="auto" />
			<Override slot="button" phone-type="link" phone-href="/portfolio/sports" />
			<Override slot="box26" />
			<Override slot="text6">
				eagle stadium
			</Override>
			<Override slot="text">
				Eagles vs panthers
			</Override>
			<Override slot="box3" phone-width="30%" />
			<Override slot="box2" phone-width="70%" />
			<Override slot="box16" phone-width="30%" />
			<Override slot="box15" phone-width="70%" />
			<Override slot="text7">
				dal
			</Override>
			<Override slot="text8">
				JOHN CLARK STADIUM
			</Override>
			<Override slot="text9">
				dal
			</Override>
			<Override slot="text10">
				Tom Kimbrough STADIUM
			</Override>
			<Override slot="box24" phone-width="20%" />
			<Override slot="box23" phone-width="80%" />
			<Override slot="text4">
				golden girls
			</Override>
			<Override slot="text5">
				2018
			</Override>
			<Override slot="text2">
				plano vs mustangs
			</Override>
			<Override slot="text3">
				2017
			</Override>
			<Override slot="text1">
				2019
			</Override>
			<Override slot="box13" phone-margin="0px 0px 5px 0px" />
		</Components.Gridstructure>
		<Box
			min-width="100px"
			min-height="100px"
			phone-width="100%"
			phone-height="auto"
			phone-align-items="flex-start"
			quarkly-title="Gridstructuredesktop"
			phone-min-height={0}
			phone-min-width={0}
			tablet-display="block"
			tablet-margin="10px 0px 0px 0px"
			phone-display="none"
		>
			<Override slot="button" phone-type="link" phone-href="/portfolio/sports" />
			<Box
				min-width="100px"
				background="#000000"
				height="10px"
				min-height="30px"
				display="flex"
				align-items="flex-end"
				justify-content="center"
				flex-direction="row"
				bigPhone-font="16px "
				bigPhone-width="100%"
				bigPhone-min-height="10px"
				smallPhone-width="100%"
				smallPhone-min-width={0}
				smallPhone-min-height={0}
				phone-width="100%"
				phone-height="AUTO"
				phone-justify-self="start"
				phone-margin="5px 0px 0px 0px"
				tablet-margin="5px 0px 2px 0px"
				desktop-margin="10px 0px 2px 0px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="33%"
					smallPhone-height="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 2px 0px 2px"
					phone-width="25%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					phone-justify-content="flex-start"
					phone-text-align="left"
					phone-display="flex"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						tablet-width="70%"
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							<Strong>
								Eagles vs panthers
							</Strong>
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						tablet-width="30%"
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-justify-items="end"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							>
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									user-select="auto"
									pointer-events="auto"
								>
									2019
								</Strong>
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="33%"
					smallPhone-height="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 2px 0px 2px"
					phone-width="50%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					phone-display="flex"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						phone-width="50%"
						phone-min-width={0}
						phone-min-height={0}
						phone-height="auto"
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								plano vs mustangs
							</Strong>
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							>
								<Strong>
									2017
								</Strong>
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="33%"
					smallPhone-height="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 2px 0px 2px"
					phone-width="25%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					phone-display="flex"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							<Strong>
								GOLDEN GIRLS
							</Strong>
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-justify-items="end"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							>
								<Strong>
									2018
								</Strong>
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
			<Components.QuarklycommunityKitGallery
				bigPhone-display="flex"
				galleryItemNumbProp="3"
				columnsCountProp="4"
				borderWidthProp="2"
				loaderFormatProp="all"
				phone-width="100%"
				phone-height="auto"
				phone-grid-column="auto"
				phone-grid-row="auto"
				phone-grid-area="auto / auto"
				autoFillInProp
				tablet-border-width="1px"
			>
				<Override
					slot="Item 0"
					fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036279/IMG_4207_fpnkqa.jpg"
					previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036279/IMG_4207_fpnkqa.jpg"
					fullObjectFit="cover"
					fullLoading="eager"
					previewObjectFit="cover"
					previewLoading="eager"
					showFullImage={false}
					phone-width="100%"
					phone-height="auto"
				/>
				<Override
					slot="Item 1"
					previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036280/IMG_4202_pia2e6.jpg"
					fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036280/IMG_4202_pia2e6.jpg"
					showFullImage={false}
					phone-width="100%"
					phone-height="auto"
					phone-grid-column="span 2"
					phone-grid-row="auto"
					phone-grid-area="auto / span 2"
					previewObjectFit="cover"
					columsNumb="2"
					rowsNumb="1"
					previewObjectPosition="100% 90%"
					fullLoading="eager"
				/>
				<Override
					slot="Item 2"
					previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036276/IMG_4163-2_eagzge.jpg"
					fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036276/IMG_4163-2_eagzge.jpg"
					showFullImage={false}
					phone-width="100%"
					phone-height="auto"
					phone-grid-column="inherit"
					phone-grid-area="auto / auto"
					phone-grid-row="auto"
					fullLoading="eager"
				/>
			</Components.QuarklycommunityKitGallery>
			<Box
				min-width="100px"
				min-height="100px"
				phone-width="100%"
				phone-height="auto"
				phone-display="flex"
				phone-min-height={0}
				phone-margin="0px 0px 5px 0px"
				tablet-margin="2px 0px 5px 0px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 0px 0px 0px"
					smallPhone-height="10px"
					phone-width="25%"
					phone-min-width={0}
					phone-min-height={0}
					phone-height="a"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							eagle stadium
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						smallPhone-margin="0px 2px 0px 0px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							>
								DAL
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-height="10px"
					phone-width="50%"
					phone-height="auto"
					phone-min-height={0}
					phone-min-width={0}
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							JOHN CLARK STADIUM
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						smallPhone-margin="0px 2px 0px 0px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						phone-display="grid"
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							>
								DAL
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-height="10px"
					phone-width="25%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						tablet-width="80%"
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							smallPhone-margin="0px 0px 0px 2px"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							Tom Kimbrough STADIUM
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						smallPhone-margin="0px 2px 0px 0px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						tablet-width="20%"
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							>
								DAL
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				phone-width="100%"
				phone-height="auto"
				phone-display="flex"
				phone-align-items="flex-start"
				phone-justify-content="center"
				phone-align-content="flex-start"
				phone-min-height={0}
				phone-margin="0px 0px 0px 0px"
				phone-min-width={0}
			/>
		</Box>
		<Box
			min-width="100px"
			min-height="100px"
			phone-width="100%"
			phone-height="auto"
			phone-display="grid"
			phone-align-items="center"
			phone-justify-items="center"
			phone-justify-content="center"
			phone-align-content="start"
			phone-min-height={0}
			tablet-margin="5px 0px 5px 0px"
			desktop-height="50px"
			desktop-align-content="center"
		>
			<LinkBox
				href="/sports"
				phone-href="/music"
				desktop-background="rgba(255, 255, 255, 0.85)"
				desktop-height="40px"
				desktop-width="120px"
				desktop-border-radius="4px"
				desktop-opacity="2"
				desktop-border-color="rgba(0, 0, 0, 0)"
				desktop-cursor="auto"
				desktop-hover-background="rgba(88, 109, 142, 0.76)"
				desktop-hover-color="#ebebeb"
				desktop-href="/sports"
			>
				<Button
					phone-background="rgba(0, 119, 204, 0)"
					phone-font="normal 300 5px/1.5 --fontFamily-googleAzeretMono"
					phone-border-color="rgba(255, 255, 255, 0.37)"
					phone-border-width="0.5px"
					phone-border-style="solid"
					phone-padding="4px 10px 4px 10px"
					phone-border-radius="0px"
					phone-color="rgba(247, 251, 255, 0.72)"
					tablet-font="300 10px/100% &quot;Azeret Mono&quot;, monospace"
					tablet-margin="5px 0px 5px 0px"
					tablet-padding="10px 15px 10px 15px"
					background="rgba(0, 119, 204, 0)"
					href="/music"
					desktop-color="#010101"
					desktop-font="normal 200 12px/1 &quot;Azeret Mono&quot;, monospace"
					desktop-padding="10px 15px 10px 15px"
					desktop-text-align="center"
					desktop-border-color="rgba(255, 255, 255, 0)"
					desktop-hover-color="#ffffff"
				>
					SPORTS ›
				</Button>
			</LinkBox>
		</Box>
		<Box
			min-width="100px"
			min-height="100px"
			phone-width="100%"
			phone-height="auto"
			phone-align-items="flex-start"
			quarkly-title="music grid"
			tablet-display="block"
			phone-display="none"
		>
			<Override
				slot="button"
				phone-type="link"
				phone-href="/portfolio/music"
				phone-color="rgba(255, 255, 255, 0.85)"
				phone-hover-color="#000000"
				phone-font="normal 100 5px/1.5 --fontFamily-googleAzeretMono"
				phone-min-height={0}
				phone-min-width={0}
			/>
			<Box
				min-width="100px"
				background="#000000"
				height="10px"
				min-height="30px"
				display="flex"
				align-items="flex-end"
				justify-content="center"
				flex-direction="row"
				bigPhone-font="16px "
				bigPhone-width="100%"
				bigPhone-min-height="10px"
				smallPhone-width="100%"
				smallPhone-min-width={0}
				smallPhone-min-height={0}
				phone-width="100%"
				phone-height="AUTO"
				tablet-margin="10px 0px 0px 0px"
				desktop-margin="10px 0px 2px 0px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="33%"
					smallPhone-height="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 2px 0px 2px"
					phone-width="33%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					tablet-width="25%"
					tablet-margin="0px 2px 0px 0"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						tablet-width="70%"
						tablet-margin="0px 0px 0px 2px"
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							LANDSCAPE
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						tablet-width="30%"
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-justify-items="end"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							>
								2021
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="33%"
					smallPhone-height="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 2px 0px 2px"
					phone-width="33%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						phone-width="50%"
						phone-min-width={0}
						phone-min-height={0}
						phone-height="auto"
						tablet-width="70%"
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							CREATIVE
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						tablet-width="30%"
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							>
								2021
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="33%"
					smallPhone-height="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 2px 0px 2px"
					phone-width="33%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							BRAND
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-justify-items="end"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							>
								2018
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="33%"
					smallPhone-height="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 2px 0px 2px"
					phone-width="33%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					tablet-width="25%"
					tablet-margin="0px 2px 0px 0"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						tablet-width="70%"
						tablet-margin="0px 0px 0px 2px"
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							WEDDING
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						tablet-width="30%"
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-justify-items="end"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							>
								2025
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
			<Components.QuarklycommunityKitGallery
				bigPhone-display="flex"
				galleryItemNumbProp="4"
				columnsCountProp="4"
				borderWidthProp="2"
				loaderFormatProp="all"
				phone-width="100%"
				phone-height="auto"
				phone-grid-column="auto"
				phone-grid-row="auto"
				phone-grid-area="auto / auto"
				phone-display="flex"
			>
				<Override
					slot="Item 0"
					fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759037262/IMG_5463-2_zyj1ba.jpg"
					previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759037262/IMG_5463-2_zyj1ba.jpg"
					fullObjectFit="cover"
					fullLoading="eager"
					previewObjectFit="cover"
					previewLoading="eager"
					showFullImage={false}
					phone-width="100%"
					phone-height="auto"
				/>
				<Override
					slot="Item 1"
					previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036186/1548141916426_xecqzy.jpg"
					fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036186/1548141916426_xecqzy.jpg"
					showFullImage={false}
					phone-width="100%"
					phone-height="auto"
					previewLoading="eager"
				/>
				<Override
					slot="Item 2"
					previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036231/IMG_4194_e5ikkt.jpg"
					fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036231/IMG_4194_e5ikkt.jpg"
					showFullImage={false}
					phone-width="100%"
					phone-height="auto"
					previewLoading="eager"
				/>
				<Override
					slot="Item 3"
					fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1760214142/373A0668_m7xy1x.jpg"
					previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1760214142/373A0668_m7xy1x.jpg"
					previewObjectPosition="43%"
					previewLoading="eager"
				/>
			</Components.QuarklycommunityKitGallery>
			<Box
				min-width="100px"
				min-height="100px"
				phone-width="100%"
				phone-height="auto"
				phone-display="flex"
				phone-min-height={0}
				phone-margin="0px 0px 5px 0px"
				tablet-margin="2px 0px 5px 0px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 0px 0px 0px"
					smallPhone-height="10px"
					phone-width="33%"
					phone-min-width={0}
					phone-min-height={0}
					phone-height="auto"
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						tablet-width="70%"
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								GARDEN OF THE GODS
							</Strong>
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						smallPhone-margin="0px 2px 0px 0px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						tablet-width="30%"
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							>
								<Strong>
									COS
								</Strong>
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-height="10px"
					phone-width="33%"
					phone-height="auto"
					phone-min-height={0}
					phone-min-width={0}
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							<Strong>
								ARCADE
							</Strong>
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						smallPhone-margin="0px 2px 0px 0px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						phone-display="grid"
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							>
								<Strong>
									DAL
								</Strong>
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-height="10px"
					phone-width="33%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						tablet-width="70%"
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							smallPhone-margin="0px 0px 0px 2px"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							<Strong>
								GRAFFITTI FALLAS
							</Strong>
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						smallPhone-margin="0px 2px 0px 0px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						tablet-width="30%"
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							>
								<Strong>
									LA
								</Strong>
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-height="10px"
					phone-width="33%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						tablet-width="70%"
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							smallPhone-margin="0px 0px 0px 2px"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							<Strong>
								ROCKWALL COURTHOUSE
							</Strong>
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						smallPhone-margin="0px 2px 0px 0px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						tablet-width="30%"
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							>
								<Strong>
									dal
								</Strong>
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				phone-width="100%"
				phone-height="auto"
				phone-display="flex"
				phone-align-items="flex-start"
				phone-justify-content="center"
				phone-align-content="flex-start"
				phone-min-height={0}
				phone-margin="0px 0px 0px 0px"
				phone-min-width={0}
			/>
		</Box>
		<Box
			min-width="100px"
			min-height="100px"
			phone-width="100%"
			phone-height="auto"
			phone-align-items="flex-start"
			quarkly-title="music grid"
			tablet-display="none"
			phone-min-width={0}
			phone-min-height={0}
			phone-display="grid"
		>
			<Override
				slot="button"
				phone-type="link"
				phone-href="/portfolio/music"
				phone-color="rgba(255, 255, 255, 0.85)"
				phone-hover-color="#000000"
				phone-font="normal 100 5px/1.5 --fontFamily-googleAzeretMono"
				phone-min-height={0}
				phone-min-width={0}
			/>
			<Box
				min-width="100px"
				min-height="100px"
				phone-width="100%"
				phone-height="auto"
				phone-display="flex"
				phone-align-items="flex-start"
				phone-justify-content="center"
				phone-align-content="flex-start"
				phone-min-height={0}
				phone-margin="0px 0px 0px 0px"
				phone-min-width={0}
			/>
		</Box>
		<Box
			min-width="100px"
			min-height="100px"
			phone-width="100%"
			phone-height="auto"
			phone-align-items="flex-start"
			quarkly-title="music grid"
			tablet-display="none"
			phone-min-height={0}
			phone-min-width={0}
			phone-display="grid"
			phone-grid-template-rows="auto"
			phone-margin="5px 0px 0px 0px"
		>
			<Override
				slot="button"
				phone-type="link"
				phone-href="/portfolio/music"
				phone-color="rgba(255, 255, 255, 0.85)"
				phone-hover-color="#000000"
				phone-font="normal 100 5px/1.5 --fontFamily-googleAzeretMono"
				phone-min-height={0}
				phone-min-width={0}
			/>
			<Box
				min-width="100px"
				background="#000000"
				height="10px"
				min-height="30px"
				display="flex"
				align-items="flex-end"
				justify-content="center"
				flex-direction="row"
				bigPhone-font="16px "
				bigPhone-width="100%"
				bigPhone-min-height="10px"
				smallPhone-width="100%"
				smallPhone-min-width={0}
				smallPhone-min-height={0}
				phone-width="100%"
				phone-height="AUTO"
				tablet-margin="5px 0px 0px 0px"
				phone-margin="5px 0px 0px 0px"
				phone-min-width={0}
			>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="33%"
					smallPhone-height="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 2px 0px 2px"
					phone-width="33%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
						>
							landscape
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-justify-items="end"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-text-align="right"
							>
								2021
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="33%"
					smallPhone-height="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 2px 0px 2px"
					phone-width="33%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						phone-width="50%"
						phone-min-width={0}
						phone-min-height={0}
						phone-height="auto"
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
						>
							brand
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
							>
								2018
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="33%"
					smallPhone-height="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 2px 0px 2px"
					phone-width="33%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
						>
							wedding
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-justify-items="end"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-text-align="right"
							>
								2025
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				phone-width="100%"
				phone-height="auto"
				phone-display="flex"
				phone-align-items="flex-start"
				phone-justify-content="center"
				phone-align-content="flex-start"
				phone-min-height={0}
				phone-margin="0px 0px 0px 0px"
				phone-min-width={0}
			/>
		</Box>
		<Components.QuarklycommunityKitGallery
			columnsCountProp="3"
			galleryItemNumbProp="3"
			borderWidthProp="2"
			phone-width="100%"
			phone-display="grid"
			desktop-display="none"
			tablet-display="none"
			phone-height="100%"
		>
			<Override slot="Item 0" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759037262/IMG_5463-2_zyj1ba.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759037262/IMG_5463-2_zyj1ba.jpg" phone-width="100%" />
			<Override slot="Item 1" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036231/IMG_4194_e5ikkt.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036231/IMG_4194_e5ikkt.jpg" phone-width="100%" />
			<Override
				slot="Item 2"
				fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1760214141/373A0881_2_u651zx.jpg"
				previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1760214141/373A0881_2_u651zx.jpg"
				phone-width="100%"
				previewObjectPosition="10%"
			/>
		</Components.QuarklycommunityKitGallery>
		<Box
			min-width="100px"
			min-height="100px"
			phone-width="100%"
			phone-height="auto"
			phone-display="flex"
			phone-min-height={0}
			phone-margin="2px 0px 10px 0px"
			phone-min-width={0}
			tablet-display="none"
		>
			<Box
				min-width="100px"
				min-height="100px"
				smallPhone-width="100%"
				smallPhone-min-width={0}
				smallPhone-min-height={0}
				smallPhone-display="flex"
				smallPhone-margin="0px 0px 0px 0px"
				smallPhone-height="10px"
				phone-width="33%"
				phone-min-width={0}
				phone-min-height={0}
				phone-height="auto"
				tablet-width="25%"
			>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-width="50%"
					smallPhone-height="100%"
					smallPhone-display="grid"
					smallPhone-justify-content="flex-start"
					smallPhone-flex-direction="row"
					smallPhone-align-content="end"
					smallPhone-margin="0px 0px 0px 2px"
					phone-width="70%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
				>
					<Text
						margin="0px 0px 0px 0px"
						smallPhone-width="100%"
						smallPhone-height="100%"
						smallPhone-font="50 5px --fontFamily-googleAzeretMono"
						smallPhone-text-transform="uppercase"
						smallPhone-color="#ffffff"
						smallPhone-display="block"
					>
						GARDEN OF THE GODS
					</Text>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-width="50%"
					smallPhone-height="100%"
					smallPhone-display="grid"
					smallPhone-justify-items="end"
					smallPhone-margin="0px 2px 0px 0px"
					phone-width="30%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="end"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-text-align="right"
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							smallPhone-justify-self="end"
							smallPhone-text-align="right"
						>
							cos
						</Text>
					</Box>
				</Box>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				smallPhone-width="100%"
				smallPhone-min-width={0}
				smallPhone-min-height={0}
				smallPhone-display="flex"
				smallPhone-height="10px"
				phone-width="33%"
				phone-height="auto"
				phone-min-height={0}
				phone-min-width={0}
				tablet-width="25%"
			>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-width="50%"
					smallPhone-height="100%"
					smallPhone-display="grid"
					smallPhone-justify-content="flex-start"
					smallPhone-flex-direction="row"
					smallPhone-align-content="end"
					smallPhone-margin="0px 0px 0px 2px"
					phone-width="50%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
				>
					<Text
						margin="0px 0px 0px 0px"
						smallPhone-width="100%"
						smallPhone-height="100%"
						smallPhone-font="50 5px --fontFamily-googleAzeretMono"
						smallPhone-text-transform="uppercase"
						smallPhone-color="#ffffff"
						smallPhone-display="block"
					>
						graffitti fallas
					</Text>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-width="50%"
					smallPhone-height="100%"
					smallPhone-display="grid"
					smallPhone-justify-items="end"
					smallPhone-margin="0px 2px 0px 0px"
					phone-width="50%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					phone-display="grid"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="end"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-text-align="right"
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							smallPhone-justify-self="end"
							smallPhone-text-align="right"
						>
							la
						</Text>
					</Box>
				</Box>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				smallPhone-width="100%"
				smallPhone-min-width={0}
				smallPhone-min-height={0}
				smallPhone-display="flex"
				smallPhone-height="10px"
				phone-width="33%"
				phone-height="auto"
				phone-min-width={0}
				phone-min-height={0}
				tablet-width="25%"
			>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-width="50%"
					smallPhone-height="100%"
					smallPhone-display="grid"
					smallPhone-justify-content="flex-start"
					smallPhone-flex-direction="row"
					smallPhone-align-content="end"
					smallPhone-margin="0px 0px 0px 2px"
					phone-width="70%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
				>
					<Text
						margin="0px 0px 0px 0px"
						smallPhone-width="100%"
						smallPhone-height="100%"
						smallPhone-font="50 5px --fontFamily-googleAzeretMono"
						smallPhone-text-transform="uppercase"
						smallPhone-color="#ffffff"
						smallPhone-display="block"
						smallPhone-margin="0px 0px 0px 2px"
					>
						rockwall courthouse
					</Text>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-width="50%"
					smallPhone-height="100%"
					smallPhone-display="grid"
					smallPhone-justify-items="end"
					smallPhone-margin="0px 2px 0px 0px"
					phone-width="30%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="end"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-text-align="right"
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							smallPhone-justify-self="end"
							smallPhone-text-align="right"
						>
							dal
						</Text>
					</Box>
				</Box>
			</Box>
		</Box>
		<Box
			min-width="100px"
			min-height="100px"
			phone-width="100%"
			phone-height="auto"
			phone-display="grid"
			phone-align-items="center"
			phone-justify-items="center"
			phone-justify-content="center"
			phone-align-content="start"
			phone-min-height={0}
			tablet-margin="5px 0px 5px 0px"
			desktop-height="50px"
			desktop-align-content="center"
			phone-min-width={0}
			desktop-margin="5px 0px 5px 0px"
		>
			<LinkBox
				href="/portraits"
				phone-href="/music"
				desktop-background="rgba(255, 255, 255, 0.85)"
				desktop-height="40px"
				desktop-width="120px"
				desktop-border-radius="4px"
				desktop-opacity="2"
				desktop-border-color="rgba(0, 0, 0, 0)"
				desktop-cursor="auto"
				desktop-hover-background="rgba(88, 109, 142, 0.76)"
				desktop-hover-color="#ebebeb"
				desktop-href="/portraits"
			>
				<Button
					phone-background="rgba(0, 119, 204, 0)"
					phone-font="normal 300 5px/1.5 --fontFamily-googleAzeretMono"
					phone-border-color="rgba(255, 255, 255, 0.37)"
					phone-border-width="0.5px"
					phone-border-style="solid"
					phone-padding="4px 10px 4px 10px"
					phone-border-radius="0px"
					phone-color="rgba(247, 251, 255, 0.72)"
					tablet-font="300 10px/100% &quot;Azeret Mono&quot;, monospace"
					tablet-margin="5px 0px 5px 0px"
					tablet-padding="10px 15px 10px 15px"
					background="rgba(0, 119, 204, 0)"
					href="/portraits"
					desktop-color="#010101"
					desktop-font="normal 200 12px/1 &quot;Azeret Mono&quot;, monospace"
					desktop-padding="10px 15px 10px 15px"
					desktop-text-align="center"
					desktop-border-color="rgba(255, 255, 255, 0)"
					desktop-hover-color="#ffffff"
					type="button"
					desktop-type="link"
				>
					PORTRAITS ›
				</Button>
			</LinkBox>
		</Box>
		<Box
			min-width="100px"
			min-height="100px"
			phone-display="grid"
			phone-width="100%"
			phone-height="100%"
			phone-align-items="start"
			quarkly-title="Gridstructurephone"
			phone-min-height={0}
			phone-min-width={0}
			tablet-display="none"
			phone-grid-template-rows="auto"
		>
			<Override slot="button" phone-type="link" phone-href="/portfolio/sports" />
			<Box
				min-width="100px"
				background="#000000"
				height="10px"
				min-height="30px"
				display="flex"
				align-items="flex-end"
				justify-content="center"
				flex-direction="row"
				bigPhone-font="16px "
				bigPhone-width="100%"
				bigPhone-min-height="10px"
				smallPhone-width="100%"
				smallPhone-min-width={0}
				smallPhone-min-height={0}
				phone-width="100%"
				phone-height="AUTO"
				phone-justify-self="start"
				phone-margin="10px 0px 0px 0px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="33%"
					smallPhone-height="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 2px 0px 2px"
					phone-width="25%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					phone-justify-content="flex-start"
					phone-text-align="left"
					phone-display="flex"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
						>
							don toliver
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-justify-items="end"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-text-align="right"
							>
								2021
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="33%"
					smallPhone-height="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 2px 0px 2px"
					phone-width="50%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					phone-display="flex"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						phone-width="50%"
						phone-min-width={0}
						phone-min-height={0}
						phone-height="auto"
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
						>
							mt fuji
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
							>
								2024
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="33%"
					smallPhone-height="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 2px 0px 2px"
					phone-width="25%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					phone-display="flex"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
						>
							GUNNA
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-justify-items="end"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-text-align="right"
							>
								2021
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
			<Components.QuarklycommunityKitGallery
				bigPhone-display="flex"
				galleryItemNumbProp="3"
				columnsCountProp="4"
				borderWidthProp="2"
				loaderFormatProp="all"
				phone-width="100%"
				phone-height="100%"
				phone-grid-column="auto"
				phone-grid-row="auto"
				phone-grid-area="auto / auto"
				autoFillInProp
				phone-min-width={0}
				phone-min-height={0}
			>
				<Override
					slot="Item 0"
					fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036005/26_ndyhqs.jpg"
					previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036005/26_ndyhqs.jpg"
					fullObjectFit="cover"
					fullLoading="eager"
					previewObjectFit="cover"
					previewLoading="eager"
					showFullImage={false}
					phone-width="100%"
					phone-height="auto"
					phone-position="static"
				/>
				<Override
					slot="Item 1"
					previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036009/IMG_1706_pgbrjk.jpg"
					fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036009/IMG_1706_pgbrjk.jpg"
					showFullImage={false}
					phone-width="100%"
					phone-height="auto"
					phone-grid-column="span 2"
					phone-grid-row="auto"
					phone-grid-area="auto / span 2"
					columsNumb="2"
					rowsNumb="1"
					phone-position="static"
				/>
				<Override
					slot="Item 2"
					previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036011/7_zpxpc5.jpg"
					fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036011/7_zpxpc5.jpg"
					showFullImage={false}
					phone-width="100%"
					phone-height="auto"
					phone-grid-column="inherit"
					phone-grid-area="auto / auto"
					phone-grid-row="auto"
					phone-position="static"
				/>
			</Components.QuarklycommunityKitGallery>
			<Box
				min-width="100px"
				min-height="100px"
				phone-width="100%"
				phone-height="auto"
				phone-display="flex"
				phone-min-height={0}
				phone-margin="0px 0px 0 0px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 0px 0px 0px"
					smallPhone-height="10px"
					phone-width="25%"
					phone-min-width={0}
					phone-min-height={0}
					phone-height="a"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="60%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
						>
							houston
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						smallPhone-margin="0px 2px 0px 0px"
						phone-width="40%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
							>
								tx
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-height="10px"
					phone-width="50%"
					phone-height="auto"
					phone-min-height={0}
					phone-min-width={0}
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
						>
							mount fuji
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						smallPhone-margin="0px 2px 0px 0px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						phone-display="grid"
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
							>
								japan
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-height="10px"
					phone-width="25%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							smallPhone-margin="0px 0px 0px 2px"
						>
							houston
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						smallPhone-margin="0px 2px 0px 0px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
							>
								tx
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
		<Components.Gridstructure
			phone-width="100%"
			phone-height="auto"
			phone-min-height={0}
			phone-min-width={0}
			quarkly-title="Gridstructuredeaktop"
			phone-display="none"
			tablet-display="block"
		>
			<Override slot="quarklycommunityKitGalleryOverride" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036005/26_ndyhqs.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036005/26_ndyhqs.jpg" />
			<Override
				slot="quarklycommunityKitGalleryOverride1"
				previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036009/IMG_1706_pgbrjk.jpg"
				fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036009/IMG_1706_pgbrjk.jpg"
				phone-grid-column="span 2"
				phone-grid-row="auto"
				phone-grid-area="auto / span 2"
				columsNumb="2"
				rowsNumb="1"
			/>
			<Override
				slot="quarklycommunityKitGalleryOverride2"
				fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036011/7_zpxpc5.jpg"
				previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036011/7_zpxpc5.jpg"
				phone-grid-column="inherit"
				phone-grid-area="auto / auto"
				phone-grid-row="auto"
			/>
			<Override
				slot="quarklycommunityKitGallery"
				galleryItemNumbProp="3"
				columnsCountProp="4"
				borderWidthProp="2"
				autoFillInProp
				loaderFormatProp="all"
				phone-grid-column="auto"
				phone-grid-row="auto"
				phone-grid-area="auto / auto"
				phone-width="100%"
				phone-height="auto"
			/>
			<Override
				slot="box1"
				phone-width="25%"
				phone-justify-content="flex-start"
				phone-text-align="left"
				phone-display="flex"
			/>
			<Override
				slot="box"
				phone-justify-self="start"
				phone-margin="5px 0px 0px 0px"
				tablet-margin="10px 0px 0px 0px"
				desktop-margin="10px 0px 2px 0px"
			/>
			<Override slot="box5" phone-width="50%" phone-display="flex" />
			<Override slot="box9" phone-width="25%" phone-display="flex" />
			<Override slot="box14" phone-width="25%" phone-height="a" />
			<Override slot="box18" phone-width="50%" phone-height="auto" />
			<Override slot="box22" phone-width="25%" phone-height="auto" />
			<Override slot="button" phone-type="link" phone-href="/portfolio/sports" />
			<Override slot="box26" />
			<Override slot="text" tablet-font="100 10px &quot;Azeret Mono&quot;, monospace">
				DON TOLIVER
			</Override>
			<Override slot="text1" tablet-font="100 10px &quot;Azeret Mono&quot;, monospace">
				2021
			</Override>
			<Override slot="text2" tablet-font="100 10px &quot;Azeret Mono&quot;, monospace">
				MT FUJI
			</Override>
			<Override slot="text3" tablet-font="100 10px &quot;Azeret Mono&quot;, monospace" />
			<Override slot="text4" tablet-font="100 10px &quot;Azeret Mono&quot;, monospace" />
			<Override slot="text5" tablet-font="100 10px &quot;Azeret Mono&quot;, monospace">
				2021
			</Override>
			<Override slot="text6" tablet-font="100 10px &quot;Azeret Mono&quot;, monospace">
				<Strong>
					HOUSTON
				</Strong>
			</Override>
			<Override slot="text7" tablet-font="100 10px &quot;Azeret Mono&quot;, monospace">
				<Strong>
					TX
				</Strong>
			</Override>
			<Override slot="text8" tablet-font="100 10px &quot;Azeret Mono&quot;, monospace">
				<Strong>
					MOUNT FUJI
				</Strong>
			</Override>
			<Override slot="text9" tablet-font="100 10px &quot;Azeret Mono&quot;, monospace">
				<Strong>
					JAPAN
				</Strong>
			</Override>
			<Override slot="text10" tablet-font="100 10px &quot;Azeret Mono&quot;, monospace">
				<Strong>
					HOUSTON
				</Strong>
			</Override>
			<Override slot="text11" tablet-font="100 10px &quot;Azeret Mono&quot;, monospace">
				<Strong>
					TX
				</Strong>
			</Override>
			<Override slot="box13" tablet-margin="2px 0px 5px 0px" />
		</Components.Gridstructure>
		<Box
			min-width="100px"
			min-height="100px"
			phone-display="grid"
			phone-width="100%"
			phone-height="100%"
			phone-align-items="center"
			phone-justify-items="center"
			phone-min-height={0}
			phone-min-width={0}
			tablet-margin="5px 0px 5px 0px"
			tablet-width="100%"
			desktop-margin="5px 0px 5px 0px"
			desktop-min-width={0}
			desktop-min-height={0}
			tablet-min-height={0}
			desktop-height="50px"
		>
			<LinkBox
				href="/film"
				phone-min-height={0}
				phone-min-width={0}
				phone-align-content="center"
				phone-margin="0 0px 0 0px"
				phone-height="22px"
				tablet-height="40px"
				tablet-width="120px"
				desktop-background="rgba(255, 255, 255, 0.85)"
				desktop-border-radius="4px"
				desktop-height="40px"
				desktop-hover-background="rgba(88, 109, 142, 0.76)"
				desktop-hover-color="#ffffff"
				desktop-href="/film"
			>
				<Button
					phone-background="rgba(0, 119, 204, 0)"
					phone-font="normal 300 5px/1.5 &quot;Azeret Mono&quot;, monospace"
					phone-padding="4px 10px 4px 10px"
					phone-border-width="0.5px"
					phone-border-style="solid"
					phone-border-color="rgba(255, 255, 255, 0.37)"
					phone-border-radius="0px"
					phone-type="link"
					phone-href="/film"
					href="/film"
					type="button"
					phone-color="rgba(247, 251, 255, 0.72)"
					tablet-font="normal 300 10px/100% &quot;Azeret Mono&quot;, monospace"
					tablet-margin="5px 0px 5px 0px"
					tablet-padding="10px 15px 10px 15px"
					tablet-background="rgba(0, 119, 204, 0)"
					desktop-background="rgba(255, 255, 255, 0)"
					desktop-border-radius={0}
					desktop-color="#000000"
					desktop-font="normal 200 12px/1 &quot;Azeret Mono&quot;, monospace"
					desktop-padding="10px 15px 10px 15px"
					desktop-type="link"
					desktop-border-color="rgba(255, 255, 255, 0)"
					desktop-margin="5px 0px 5px 0px"
					desktop-hover-color="#ffffff"
				>
					FILM ›
				</Button>
			</LinkBox>
		</Box>
		<Box
			min-width="100px"
			min-height="100px"
			phone-width="100%"
			phone-height="100%"
			phone-align-items="flex-start"
			quarkly-title="music grid"
			tablet-display="none"
			phone-min-height={0}
			phone-min-width={0}
			phone-display="grid"
			phone-grid-template-rows="auto"
		>
			<Override
				slot="button"
				phone-type="link"
				phone-href="/portfolio/music"
				phone-color="rgba(255, 255, 255, 0.85)"
				phone-hover-color="#000000"
				phone-font="normal 100 5px/1.5 --fontFamily-googleAzeretMono"
				phone-min-height={0}
				phone-min-width={0}
			/>
			<Box
				min-width="100px"
				min-height="100px"
				phone-height="auto"
				phone-align-items="flex-start"
				quarkly-title="music grid"
				tablet-display="none"
				phone-width="100%"
				phone-min-width={0}
				phone-min-height={0}
				phone-display="grid"
				phone-overflow-x="hidden"
				phone-margin="5px 0px 2px 0px"
			>
				<Override
					slot="button"
					phone-type="link"
					phone-href="/portfolio/music"
					phone-color="rgba(255, 255, 255, 0.85)"
					phone-hover-color="#000000"
					phone-font="normal 100 5px/1.5 --fontFamily-googleAzeretMono"
					phone-min-height={0}
					phone-min-width={0}
				/>
				<Box
					min-width="100px"
					background="#000000"
					height="10px"
					min-height="30px"
					display="flex"
					align-items="flex-end"
					justify-content="center"
					flex-direction="row"
					bigPhone-font="16px "
					bigPhone-width="100%"
					bigPhone-min-height="10px"
					smallPhone-width="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					phone-width="100%"
					phone-height="AUTO"
					tablet-margin="5px 0px 0px 0px"
					phone-margin="0 0px 0px 0px"
					phone-min-width={0}
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-width="33%"
						smallPhone-height="100%"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-display="flex"
						smallPhone-margin="0px 2px 0px 2px"
						phone-width="33%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						tablet-width="25%"
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="flex-start"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-margin="0px 0px 0px 2px"
							phone-width="50%"
							phone-height="auto"
							phone-min-width={0}
							phone-min-height={0}
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
							>
								montana 700
							</Text>
						</Box>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-items="end"
							phone-width="50%"
							phone-height="auto"
							phone-min-width={0}
							phone-min-height={0}
						>
							<Box
								min-width="100px"
								min-height="100px"
								smallPhone-min-width={0}
								smallPhone-min-height={0}
								smallPhone-width="50%"
								smallPhone-height="100%"
								smallPhone-display="grid"
								smallPhone-flex-direction="row"
								smallPhone-align-content="end"
								smallPhone-justify-items="end"
							>
								<Text
									margin="0px 0px 0px 0px"
									smallPhone-width="100%"
									smallPhone-height="100%"
									smallPhone-font="50 5px --fontFamily-googleAzeretMono"
									smallPhone-text-transform="uppercase"
									smallPhone-color="#ffffff"
									smallPhone-display="block"
									smallPhone-text-align="right"
								>
									2024
								</Text>
							</Box>
						</Box>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-width="33%"
						smallPhone-height="100%"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-display="flex"
						smallPhone-margin="0px 2px 0px 2px"
						phone-width="33%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						tablet-width="25%"
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="flex-start"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							phone-width="70%"
							phone-min-width={0}
							phone-min-height={0}
							phone-height="auto"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
							>
								music video bts
							</Text>
						</Box>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-items="end"
							phone-width="30%"
							phone-height="auto"
							phone-min-width={0}
							phone-min-height={0}
						>
							<Box
								min-width="100px"
								min-height="100px"
								smallPhone-min-width={0}
								smallPhone-min-height={0}
								smallPhone-width="50%"
								smallPhone-height="100%"
								smallPhone-display="grid"
								smallPhone-justify-content="end"
								smallPhone-flex-direction="row"
								smallPhone-align-content="end"
								smallPhone-text-align="right"
							>
								<Text
									margin="0px 0px 0px 0px"
									smallPhone-width="100%"
									smallPhone-height="100%"
									smallPhone-font="50 5px --fontFamily-googleAzeretMono"
									smallPhone-text-transform="uppercase"
									smallPhone-color="#ffffff"
									smallPhone-display="block"
									smallPhone-justify-self="end"
									smallPhone-text-align="right"
								>
									2024
								</Text>
							</Box>
						</Box>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-width="33%"
						smallPhone-height="100%"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-display="flex"
						smallPhone-margin="0px 2px 0px 2px"
						phone-width="33%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						tablet-width="25%"
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="flex-start"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							phone-width="50%"
							phone-height="auto"
							phone-min-width={0}
							phone-min-height={0}
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
							>
								bts
							</Text>
						</Box>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-items="end"
							phone-width="50%"
							phone-height="auto"
							phone-min-width={0}
							phone-min-height={0}
						>
							<Box
								min-width="100px"
								min-height="100px"
								smallPhone-min-width={0}
								smallPhone-min-height={0}
								smallPhone-width="50%"
								smallPhone-height="100%"
								smallPhone-display="grid"
								smallPhone-flex-direction="row"
								smallPhone-align-content="end"
								smallPhone-justify-items="end"
							>
								<Text
									margin="0px 0px 0px 0px"
									smallPhone-width="100%"
									smallPhone-height="100%"
									smallPhone-font="50 5px --fontFamily-googleAzeretMono"
									smallPhone-text-transform="uppercase"
									smallPhone-color="#ffffff"
									smallPhone-display="block"
									smallPhone-text-align="right"
								>
									2024
								</Text>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
			<Components.QuarklycommunityKitGallery
				columnsCountProp="3"
				galleryItemNumbProp="3"
				phone-display="grid"
				borderWidthProp="2"
				phone-width="100%"
			>
				<Override slot="Item 0" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035976/IMG_1772_wuibun.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035976/IMG_1772_wuibun.jpg" phone-width="100%" />
				<Override slot="Item 1" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035974/IMG_1169_ghpzhl.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035974/IMG_1169_ghpzhl.jpg" phone-width="100%" />
				<Override
					slot="Item 2"
					fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035974/IMG_9057_hoej9r.jpg"
					previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035974/IMG_9057_hoej9r.jpg"
					phone-width="100%"
					previewObjectPosition="10%"
				/>
			</Components.QuarklycommunityKitGallery>
			<Box
				min-width="100px"
				min-height="100px"
				phone-width="100%"
				phone-height="auto"
				phone-display="flex"
				phone-min-height={0}
				phone-margin="2px 0px 5px 0px"
				phone-min-width={0}
			>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 0px 0px 0px"
					smallPhone-height="10px"
					phone-width="33%"
					phone-min-width={0}
					phone-min-height={0}
					phone-height="auto"
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
						>
							south dallas
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						smallPhone-margin="0px 2px 0px 0px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
							>
								dal
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 0px 0px 0px"
					smallPhone-height="10px"
					phone-width="33%"
					phone-min-width={0}
					phone-min-height={0}
					phone-height="auto"
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
						>
							south dallas
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						smallPhone-margin="0px 2px 0px 0px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
							>
								dal
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 0px 0px 0px"
					smallPhone-height="10px"
					phone-width="33%"
					phone-min-width={0}
					phone-min-height={0}
					phone-height="auto"
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
						>
							south dallas
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						smallPhone-margin="0px 2px 0px 0px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
							>
								dal
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
		<Box
			min-width="100px"
			min-height="100px"
			phone-display="none"
			phone-width="100%"
			phone-height="auto"
			phone-align-items="flex-start"
			quarkly-title="music grid desktop"
			tablet-display="block"
			phone-min-height={0}
			phone-min-width={0}
		>
			<Override
				slot="button"
				phone-type="link"
				phone-href="/portfolio/music"
				phone-color="rgba(255, 255, 255, 0.85)"
				phone-hover-color="#000000"
				phone-font="normal 100 5px/1.5 --fontFamily-googleAzeretMono"
				phone-min-height={0}
				phone-min-width={0}
			/>
			<Box
				min-width="100px"
				background="#000000"
				height="10px"
				min-height="30px"
				display="flex"
				align-items="flex-end"
				justify-content="center"
				flex-direction="row"
				bigPhone-font="16px "
				bigPhone-width="100%"
				bigPhone-min-height="10px"
				smallPhone-width="100%"
				smallPhone-min-width={0}
				smallPhone-min-height={0}
				phone-width="100%"
				phone-height="AUTO"
				tablet-margin="10px 0px 2px 0px"
				desktop-margin="10px 0px 2px 0px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="33%"
					smallPhone-height="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 2px 0px 2px"
					phone-width="33%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							montana 700
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-justify-items="end"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							>
								2024
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="33%"
					smallPhone-height="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 2px 0px 2px"
					phone-width="33%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						phone-width="50%"
						phone-min-width={0}
						phone-min-height={0}
						phone-height="auto"
						tablet-width="70%"
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							music video bts
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						tablet-width="30%"
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							>
								2024
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="33%"
					smallPhone-height="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 2px 0px 2px"
					phone-width="33%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							bts
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-justify-items="end"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							>
								2024
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="33%"
					smallPhone-height="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 2px 0px 2px"
					phone-width="33%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						tablet-width="70%"
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							montana 700 cover
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						tablet-width="30%"
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-justify-items="end"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							>
								2024
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
			<Components.QuarklycommunityKitGallery
				bigPhone-display="flex"
				galleryItemNumbProp="4"
				columnsCountProp="4"
				borderWidthProp="2"
				loaderFormatProp="all"
				phone-width="100%"
				phone-height="auto"
				phone-grid-column="auto"
				phone-grid-row="auto"
				phone-grid-area="auto / auto"
			>
				<Override
					slot="Item 0"
					fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035976/IMG_1772_wuibun.jpg"
					previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035976/IMG_1772_wuibun.jpg"
					fullObjectFit="cover"
					fullLoading="eager"
					previewObjectFit="cover"
					previewLoading="eager"
					showFullImage={false}
					phone-width="100%"
					phone-height="auto"
				/>
				<Override
					slot="Item 1"
					previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035974/IMG_1169_ghpzhl.jpg"
					fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035974/IMG_1169_ghpzhl.jpg"
					showFullImage={false}
					phone-width="100%"
					phone-height="auto"
					previewLoading="eager"
				/>
				<Override
					slot="Item 2"
					previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759037258/IMG_1245_kz6pwe.jpg"
					fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759037258/IMG_1245_kz6pwe.jpg"
					showFullImage={false}
					phone-width="100%"
					phone-height="auto"
					previewLoading="eager"
				/>
				<Override
					slot="Item 3"
					fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035974/IMG_9057_hoej9r.jpg"
					previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035974/IMG_9057_hoej9r.jpg"
					previewObjectPosition="10%"
					previewLoading="eager"
					stretchFull
				/>
			</Components.QuarklycommunityKitGallery>
			<Box
				min-width="100px"
				min-height="100px"
				phone-width="100%"
				phone-height="auto"
				phone-display="flex"
				phone-min-height={0}
				phone-margin="0px 0px 5px 0px"
				tablet-margin="2px 0px 5px 0px"
				desktop-margin="2px 0px 10px 0px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 0px 0px 0px"
					smallPhone-height="10px"
					phone-width="33%"
					phone-min-width={0}
					phone-min-height={0}
					phone-height="auto"
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							south dallas
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						smallPhone-margin="0px 2px 0px 0px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							>
								dal
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-height="10px"
					phone-width="33%"
					phone-height="auto"
					phone-min-height={0}
					phone-min-width={0}
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							south dallas
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						smallPhone-margin="0px 2px 0px 0px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						phone-display="grid"
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							>
								dal
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-height="10px"
					phone-width="33%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							smallPhone-margin="0px 0px 0px 2px"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							south dallas
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						smallPhone-margin="0px 2px 0px 0px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							>
								dal
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-height="10px"
					phone-width="33%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							smallPhone-margin="0px 0px 0px 2px"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							south dallas
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						smallPhone-margin="0px 2px 0px 0px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							>
								dal
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				phone-width="100%"
				phone-height="auto"
				phone-display="flex"
				phone-align-items="flex-start"
				phone-justify-content="center"
				phone-align-content="flex-start"
				phone-min-height={0}
				phone-margin="0px 0px 0px 0px"
				phone-min-width={0}
			/>
		</Box>
		<Box
			min-width="100px"
			min-height="100px"
			phone-width="100%"
			phone-height="100%"
			phone-display="grid"
			phone-align-items="end"
			phone-justify-items="center"
			phone-justify-content="center"
			phone-align-content="end"
			phone-min-height={0}
			tablet-margin="5px 0px 5px 0px"
			desktop-align-content="center"
			phone-min-width={0}
			desktop-height="50px"
		>
			<LinkBox
				href="/bts"
				phone-href="/music"
				desktop-background="rgba(255, 255, 255, 0.85)"
				desktop-height="40px"
				desktop-width="120px"
				desktop-border-radius="4px"
				desktop-opacity="2"
				desktop-border-color="rgba(0, 0, 0, 0)"
				desktop-cursor="auto"
				desktop-hover-background="rgba(88, 109, 142, 0.76)"
				desktop-hover-color="#ebebeb"
				desktop-href="/bts"
				phone-margin="0px 0px 1px 0px"
				phone-align-content="flex-end"
				phone-justify-content="center"
				phone-min-width={0}
				phone-min-height={0}
			>
				<Button
					phone-background="rgba(0, 119, 204, 0)"
					phone-font="normal 300 5px/1.5 --fontFamily-googleAzeretMono"
					phone-border-color="rgba(255, 255, 255, 0.37)"
					phone-border-width="0.5px"
					phone-border-style="solid"
					phone-padding="4px 10px 3px 10px"
					phone-border-radius="0px"
					phone-color="rgba(247, 251, 255, 0.72)"
					tablet-font="300 10px/100% &quot;Azeret Mono&quot;, monospace"
					tablet-margin="5px 0px 5px 0px"
					tablet-padding="10px 15px 10px 15px"
					background="rgba(0, 119, 204, 0)"
					href="/portraits"
					desktop-color="#010101"
					desktop-font="normal 200 12px/1 &quot;Azeret Mono&quot;, monospace"
					desktop-padding="10px 15px 10px 15px"
					desktop-text-align="center"
					desktop-border-color="rgba(255, 255, 255, 0)"
					desktop-hover-color="#ffffff"
					type="button"
					desktop-type="link"
					phone-margin="5px 0px 4px 0px"
					phone-display="grid"
					phone-grid-template-rows="auto"
					phone-align-items="end"
				>
					BTS ›
				</Button>
			</LinkBox>
		</Box>
		<Components.Gridstructure
			phone-width="100%"
			phone-height="100%"
			phone-min-height={0}
			phone-min-width={0}
			quarkly-title="Gridstructurephone"
			tablet-display="none"
			phone-display="grid"
		>
			<Override slot="quarklycommunityKitGalleryOverride" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036016/8467FEA4-41AC-4C8F-825B-2770FA94352B-2141-000001446CF2E77F_tuioeo.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036016/8467FEA4-41AC-4C8F-825B-2770FA94352B-2141-000001446CF2E77F_tuioeo.jpg" previewObjectPosition="10%" />
			<Override
				slot="quarklycommunityKitGalleryOverride1"
				previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036020/1517371042354_fko8ox.jpg"
				fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036020/1517371042354_fko8ox.jpg"
				phone-grid-column="span 2"
				phone-grid-row="auto"
				phone-grid-area="auto / span 2"
				columsNumb="2"
				rowsNumb="1"
			/>
			<Override
				slot="quarklycommunityKitGalleryOverride2"
				fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036022/IMG_4984_ua190h.jpg"
				previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036022/IMG_4984_ua190h.jpg"
				phone-grid-column="inherit"
				phone-grid-area="auto / auto"
				phone-grid-row="auto"
				previewObjectPosition="80%"
			/>
			<Override
				slot="quarklycommunityKitGallery"
				galleryItemNumbProp="3"
				columnsCountProp="4"
				borderWidthProp="2"
				autoFillInProp
				loaderFormatProp="all"
				phone-grid-column="auto"
				phone-grid-row="auto"
				phone-grid-area="auto / auto"
				phone-width="100%"
				phone-height="auto"
				phone-min-height={0}
				phone-min-width={0}
			/>
			<Override
				slot="box1"
				phone-width="25%"
				phone-justify-content="flex-start"
				phone-text-align="left"
				phone-display="flex"
			/>
			<Override slot="box" phone-justify-self="start" phone-margin="5px 0px 0px 0px" />
			<Override slot="box5" phone-width="50%" phone-display="flex" />
			<Override slot="box9" phone-width="25%" phone-display="flex" />
			<Override slot="box14" phone-width="25%" phone-height="a" />
			<Override slot="box18" phone-width="50%" phone-height="auto" />
			<Override slot="box22" phone-width="25%" phone-height="auto" />
			<Override slot="button" phone-type="link" phone-href="/portfolio/sports" />
			<Override slot="box26" />
			<Override slot="box16" phone-width="40%" />
			<Override slot="text">
				skyline
			</Override>
			<Override slot="text1">
				2022
			</Override>
			<Override slot="text2">
				full moon
			</Override>
			<Override slot="text3">
				2022
			</Override>
			<Override slot="text4">
				kailua
			</Override>
			<Override slot="text5">
				2018
			</Override>
			<Override slot="text10">
				sunset beach
			</Override>
			<Override slot="text11">
				hi
			</Override>
			<Override slot="text8">
				dallas
			</Override>
			<Override slot="text9">
				tx
			</Override>
			<Override slot="text6">
				downtown
			</Override>
			<Override slot="text7">
				chi
			</Override>
			<Override slot="box15" phone-width="60%" />
		</Components.Gridstructure>
		<Components.Gridstructure
			phone-width="100%"
			phone-height="auto"
			phone-min-height={0}
			phone-min-width={0}
			phone-display="none"
			tablet-display="block"
		>
			<Override slot="quarklycommunityKitGalleryOverride" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036016/8467FEA4-41AC-4C8F-825B-2770FA94352B-2141-000001446CF2E77F_tuioeo.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036016/8467FEA4-41AC-4C8F-825B-2770FA94352B-2141-000001446CF2E77F_tuioeo.jpg" previewObjectPosition="10%" />
			<Override
				slot="quarklycommunityKitGalleryOverride1"
				previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036020/1517371042354_fko8ox.jpg"
				fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036020/1517371042354_fko8ox.jpg"
				phone-grid-column="span 2"
				phone-grid-row="auto"
				phone-grid-area="auto / span 2"
				columsNumb="2"
				rowsNumb="1"
			/>
			<Override
				slot="quarklycommunityKitGalleryOverride2"
				fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036022/IMG_4984_ua190h.jpg"
				previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036022/IMG_4984_ua190h.jpg"
				phone-grid-column="inherit"
				phone-grid-area="auto / auto"
				phone-grid-row="auto"
				previewObjectPosition="80%"
			/>
			<Override
				slot="quarklycommunityKitGallery"
				galleryItemNumbProp="3"
				columnsCountProp="4"
				borderWidthProp="2"
				autoFillInProp
				loaderFormatProp="all"
				phone-grid-column="auto"
				phone-grid-row="auto"
				phone-grid-area="auto / auto"
				phone-width="100%"
				phone-height="auto"
			/>
			<Override
				slot="box1"
				phone-width="25%"
				phone-justify-content="flex-start"
				phone-text-align="left"
				phone-display="flex"
			/>
			<Override
				slot="box"
				phone-justify-self="start"
				phone-margin="5px 0px 0px 0px"
				tablet-margin="10px 0px 2px 0px"
				desktop-margin="10px 0px 2px 0px"
			/>
			<Override slot="box5" phone-width="50%" phone-display="flex" />
			<Override slot="box9" phone-width="25%" phone-display="flex" />
			<Override slot="box14" phone-width="25%" phone-height="a" />
			<Override slot="box18" phone-width="50%" phone-height="auto" />
			<Override slot="box22" phone-width="25%" phone-height="auto" />
			<Override slot="button" phone-type="link" phone-href="/portfolio/sports" />
			<Override slot="box26" />
			<Override slot="text" tablet-font="100 10px &quot;Azeret Mono&quot;, monospace">
				skyline
			</Override>
			<Override slot="text1" tablet-font="100 10px &quot;Azeret Mono&quot;, monospace">
				2022
			</Override>
			<Override slot="text2" tablet-font="100 10px &quot;Azeret Mono&quot;, monospace">
				full moon
			</Override>
			<Override slot="text3" tablet-font="100 10px &quot;Azeret Mono&quot;, monospace">
				2022
			</Override>
			<Override slot="text4" tablet-font="100 10px &quot;Azeret Mono&quot;, monospace">
				hawaii
			</Override>
			<Override slot="text5" tablet-font="100 10px &quot;Azeret Mono&quot;, monospace">
				2018
			</Override>
			<Override slot="text6" tablet-font="100 10px &quot;Azeret Mono&quot;, monospace">
				downtown chicago
			</Override>
			<Override slot="text7" tablet-font="100 10px &quot;Azeret Mono&quot;, monospace">
				chi
			</Override>
			<Override slot="text8" tablet-font="100 10px &quot;Azeret Mono&quot;, monospace">
				dallas
			</Override>
			<Override slot="text9" tablet-font="100 10px &quot;Azeret Mono&quot;, monospace">
				tx
			</Override>
			<Override slot="text10" tablet-font="100 10px &quot;Azeret Mono&quot;, monospace">
				sunset beach
			</Override>
			<Override slot="text11" tablet-font="100 10px &quot;Azeret Mono&quot;, monospace">
				kailua
			</Override>
			<Override slot="box13" tablet-margin="2px 0px 5px 0px" desktop-margin="2px 0px 10px 0px" />
			<Override slot="box16" tablet-width="40%" />
			<Override slot="box15" tablet-width="60%" />
		</Components.Gridstructure>
		<Box
			min-width="100px"
			min-height="100px"
			phone-width="100%"
			phone-height="auto"
			phone-display="grid"
			phone-align-items="center"
			phone-justify-items="center"
			phone-justify-content="center"
			phone-align-content="start"
			phone-min-height={0}
			tablet-margin="5px 0px 5px 0px"
			desktop-align-content="start"
			desktop-margin="5px 0px 5px 0px"
			desktop-align-items="start"
			desktop-height="50px"
		>
			<LinkBox
				href="/landscape"
				phone-href="/music"
				desktop-background="rgba(255, 255, 255, 0.85)"
				desktop-width="120px"
				desktop-border-radius="4px"
				desktop-opacity="2"
				desktop-border-color="rgba(0, 0, 0, 0)"
				desktop-cursor="auto"
				desktop-hover-background="rgba(88, 109, 142, 0.76)"
				desktop-hover-color="#ebebeb"
				desktop-href="/landscape"
				desktop-justify-content="center"
			>
				<Button
					phone-background="rgba(0, 119, 204, 0)"
					phone-font="normal 300 5px/1.5 --fontFamily-googleAzeretMono"
					phone-border-color="rgba(255, 255, 255, 0.37)"
					phone-border-width="0.5px"
					phone-border-style="solid"
					phone-padding="4px 10px 4px 10px"
					phone-border-radius="0px"
					phone-color="rgba(247, 251, 255, 0.72)"
					tablet-font="300 10px/100% &quot;Azeret Mono&quot;, monospace"
					tablet-margin="5px 0px 5px 0px"
					tablet-padding="10px 15px 10px 15px"
					background="rgba(0, 119, 204, 0)"
					href="/landscape"
					desktop-color="#010101"
					desktop-font="normal 200 12px/1 &quot;Azeret Mono&quot;, monospace"
					desktop-padding="10px 15px 10px 15px"
					desktop-text-align="center"
					desktop-border-color="rgba(255, 255, 255, 0)"
					desktop-hover-color="#ffffff"
					type="button"
					desktop-type="link"
					desktop-margin="5px 0px 5px 0px"
				>
					LANDSCAPE ›
				</Button>
			</LinkBox>
		</Box>
		<Components.Gridstructure
			phone-width="100%"
			phone-height="100%"
			tablet-display="none"
			phone-min-width={0}
			phone-min-height={0}
			phone-display="grid"
			phone-grid-template-rows="auto"
		>
			<Override
				slot="button"
				phone-type="link"
				phone-href="/portfolio/music"
				phone-color="rgba(255, 255, 255, 0.85)"
				phone-hover-color="#000000"
				phone-font="normal 100 5px/1.5 --fontFamily-googleAzeretMono"
				phone-min-height={0}
				phone-min-width={0}
			>
				music ›
			</Override>
			<Override slot="box" phone-width="100%" phone-height="auto" phone-margin="10px 0px 0px 0px" />
			<Override
				slot="quarklycommunityKitGallery"
				galleryItemNumbProp="3"
				columnsCountProp="3"
				borderWidthProp="2"
				phone-grid-column="auto"
				phone-grid-row="auto"
				phone-grid-area="auto / auto"
				phone-width="100%"
				phone-height="auto"
				loaderFormatProp="all"
				phone-min-height={0}
				phone-min-width={0}
			/>
			<Override slot="quarklycommunityKitGalleryOverride" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035911/DSCF9300_zt6yza.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035911/DSCF9300_zt6yza.jpg" />
			<Override
				slot="quarklycommunityKitGalleryOverride1"
				fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035911/8C535AE1-B158-4991-99B8-1DBA8C98D6B8-35583-0000128B41A33327_mmz8wh.jpg"
				previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035911/8C535AE1-B158-4991-99B8-1DBA8C98D6B8-35583-0000128B41A33327_mmz8wh.jpg"
				fullObjectFit="cover"
				previewObjectFit="cover"
				columsNumb="1"
				rowsNumb="1"
			/>
			<Override
				slot="quarklycommunityKitGalleryOverride2"
				fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035911/DSCF7159_2_ovs7re.jpg"
				previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035911/DSCF7159_2_ovs7re.jpg"
				previewLoading="eager"
				previewObjectPosition="7% "
				previewObjectFit="cover"
			/>
			<Override slot="text4">
				audi
			</Override>
			<Override slot="text10">
				osaka
			</Override>
			<Override slot="text11">
				japan
			</Override>
			<Override slot="text2">
				bmw
			</Override>
			<Override slot="text3" />
			<Override slot="text8">
				chicago
			</Override>
			<Override slot="text9">
				il
			</Override>
			<Override slot="text">
				classic
			</Override>
			<Override slot="text1" />
			<Override slot="text6">
				dallas
			</Override>
			<Override slot="text7">
				tx
			</Override>
			<Override slot="text5" />
			<Override slot="box13" phone-margin="2px 0px 5px 0px" />
		</Components.Gridstructure>
		<Box
			min-width="100px"
			min-height="100px"
			phone-display="none"
			phone-width="100%"
			phone-height="auto"
			phone-align-items="flex-start"
			quarkly-title="music grid"
			tablet-display="block"
			desktop-min-height={0}
		>
			<Override
				slot="button"
				phone-type="link"
				phone-href="/portfolio/music"
				phone-color="rgba(255, 255, 255, 0.85)"
				phone-hover-color="#000000"
				phone-font="normal 100 5px/1.5 --fontFamily-googleAzeretMono"
				phone-min-height={0}
				phone-min-width={0}
			/>
			<Box
				min-width="100px"
				background="#000000"
				height="10px"
				min-height="30px"
				display="flex"
				align-items="flex-end"
				justify-content="center"
				flex-direction="row"
				bigPhone-font="16px "
				bigPhone-width="100%"
				bigPhone-min-height="10px"
				smallPhone-width="100%"
				smallPhone-min-width={0}
				smallPhone-min-height={0}
				phone-width="100%"
				phone-height="AUTO"
				tablet-margin="10px 0px 2px 0px"
				desktop-margin="10px 0px 2px 0px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="33%"
					smallPhone-height="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 2px 0px 2px"
					phone-width="33%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							classic
						</Text>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="33%"
					smallPhone-height="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 2px 0px 2px"
					phone-width="33%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						phone-width="50%"
						phone-min-width={0}
						phone-min-height={0}
						phone-height="auto"
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							bmw
						</Text>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="33%"
					smallPhone-height="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 2px 0px 2px"
					phone-width="33%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							audi
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-justify-items="end"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							/>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="33%"
					smallPhone-height="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 2px 0px 2px"
					phone-width="33%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							subaru
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-justify-items="end"
						/>
					</Box>
				</Box>
			</Box>
			<Components.QuarklycommunityKitGallery
				bigPhone-display="flex"
				galleryItemNumbProp="4"
				columnsCountProp="4"
				borderWidthProp="2"
				loaderFormatProp="all"
				phone-width="100%"
				phone-height="auto"
				phone-grid-column="auto"
				phone-grid-row="auto"
				phone-grid-area="auto / auto"
			>
				<Override
					slot="Item 0"
					fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035911/DSCF9300_zt6yza.jpg"
					previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035911/DSCF9300_zt6yza.jpg"
					fullObjectFit="cover"
					fullLoading="eager"
					previewObjectFit="cover"
					previewLoading="eager"
					showFullImage={false}
					phone-width="100%"
					phone-height="auto"
				/>
				<Override
					slot="Item 1"
					previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035911/8C535AE1-B158-4991-99B8-1DBA8C98D6B8-35583-0000128B41A33327_mmz8wh.jpg"
					fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035911/8C535AE1-B158-4991-99B8-1DBA8C98D6B8-35583-0000128B41A33327_mmz8wh.jpg"
					showFullImage={false}
					phone-width="100%"
					phone-height="auto"
					previewLoading="eager"
				/>
				<Override
					slot="Item 2"
					previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035911/DSCF7159_2_ovs7re.jpg"
					fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035911/DSCF7159_2_ovs7re.jpg"
					showFullImage={false}
					phone-width="100%"
					phone-height="auto"
					previewLoading="eager"
				/>
				<Override
					slot="Item 3"
					fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035911/DSCF0483_Original_dpkbga.jpg"
					previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035911/DSCF0483_Original_dpkbga.jpg"
					previewObjectPosition="10%"
					previewLoading="eager"
					stretchFull
				/>
			</Components.QuarklycommunityKitGallery>
			<Box
				min-width="100px"
				min-height="100px"
				phone-width="100%"
				phone-height="auto"
				phone-display="flex"
				phone-min-height={0}
				phone-margin="0px 0px 5px 0px"
				desktop-margin="0px 0px 10px 0px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-margin="0px 0px 0px 0px"
					smallPhone-height="10px"
					phone-width="33%"
					phone-min-width={0}
					phone-min-height={0}
					phone-height="auto"
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							dallas
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						smallPhone-margin="0px 2px 0px 0px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							>
								tx
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-height="10px"
					phone-width="33%"
					phone-height="auto"
					phone-min-height={0}
					phone-min-width={0}
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							chicago
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						smallPhone-margin="0px 2px 0px 0px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
						phone-display="grid"
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							>
								il
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-height="10px"
					phone-width="33%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					tablet-width="25%"
					tablet-margin="2px 0px 0px 0px"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							smallPhone-margin="0px 0px 0px 2px"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							osaka
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						smallPhone-margin="0px 2px 0px 0px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							>
								japan
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					smallPhone-width="100%"
					smallPhone-min-width={0}
					smallPhone-min-height={0}
					smallPhone-display="flex"
					smallPhone-height="10px"
					phone-width="33%"
					phone-height="auto"
					phone-min-width={0}
					phone-min-height={0}
					tablet-width="25%"
				>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-content="flex-start"
						smallPhone-flex-direction="row"
						smallPhone-align-content="end"
						smallPhone-margin="0px 0px 0px 2px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Text
							margin="0px 0px 0px 0px"
							smallPhone-width="100%"
							smallPhone-height="100%"
							smallPhone-font="50 5px --fontFamily-googleAzeretMono"
							smallPhone-text-transform="uppercase"
							smallPhone-color="#ffffff"
							smallPhone-display="block"
							smallPhone-margin="0px 0px 0px 2px"
							tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
						>
							corona
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						smallPhone-min-width={0}
						smallPhone-min-height={0}
						smallPhone-width="50%"
						smallPhone-height="100%"
						smallPhone-display="grid"
						smallPhone-justify-items="end"
						smallPhone-margin="0px 2px 0px 0px"
						phone-width="50%"
						phone-height="auto"
						phone-min-width={0}
						phone-min-height={0}
					>
						<Box
							min-width="100px"
							min-height="100px"
							smallPhone-min-width={0}
							smallPhone-min-height={0}
							smallPhone-width="50%"
							smallPhone-height="100%"
							smallPhone-display="grid"
							smallPhone-justify-content="end"
							smallPhone-flex-direction="row"
							smallPhone-align-content="end"
							smallPhone-text-align="right"
						>
							<Text
								margin="0px 0px 0px 0px"
								smallPhone-width="100%"
								smallPhone-height="100%"
								smallPhone-font="50 5px --fontFamily-googleAzeretMono"
								smallPhone-text-transform="uppercase"
								smallPhone-color="#ffffff"
								smallPhone-display="block"
								smallPhone-justify-self="end"
								smallPhone-text-align="right"
								tablet-font="100 10px &quot;Azeret Mono&quot;, monospace"
							>
								ca
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				phone-width="100%"
				phone-height="auto"
				phone-display="flex"
				phone-align-items="flex-start"
				phone-justify-content="center"
				phone-align-content="flex-start"
				phone-min-height={0}
				phone-margin="0px 0px 0px 0px"
				phone-min-width={0}
			/>
		</Box>
		<Box
			min-width="100px"
			min-height="100px"
			phone-width="100%"
			phone-height="auto"
			phone-display="flex"
			phone-align-items="center"
			phone-justify-items="center"
			phone-justify-content="center"
			phone-align-content="start"
			phone-min-height={0}
			tablet-margin="5px 0px 5px 0px"
			desktop-align-content="center"
			phone-flex-direction="column"
			desktop-height="50px"
		>
			<LinkBox
				href="/automotive"
				phone-href="/music"
				desktop-background="rgba(255, 255, 255, 0.85)"
				desktop-height="40px"
				desktop-width="120px"
				desktop-border-radius="4px"
				desktop-opacity="2"
				desktop-border-color="rgba(0, 0, 0, 0)"
				desktop-cursor="auto"
				desktop-hover-background="rgba(88, 109, 142, 0.76)"
				desktop-hover-color="#ebebeb"
				desktop-href="/automotive"
			>
				<Button
					phone-background="rgba(0, 119, 204, 0)"
					phone-font="normal 300 5px/1.5 --fontFamily-googleAzeretMono"
					phone-border-color="rgba(255, 255, 255, 0.37)"
					phone-border-width="0.5px"
					phone-border-style="solid"
					phone-padding="4px 9px 4px 10px"
					phone-border-radius="0px"
					phone-color="rgba(247, 251, 255, 0.72)"
					tablet-font="300 10px/100% &quot;Azeret Mono&quot;, monospace"
					tablet-margin="5px 0px 5px 0px"
					tablet-padding="10px 15px 10px 15px"
					background="rgba(0, 119, 204, 0)"
					href="/automotive"
					desktop-color="#010101"
					desktop-font="normal 200 12px/1 &quot;Azeret Mono&quot;, monospace"
					desktop-padding="10px 15px 10px 15px"
					desktop-text-align="center"
					desktop-border-color="rgba(255, 255, 255, 0)"
					desktop-hover-color="#ffffff"
					type="button"
					desktop-type="link"
					desktop-width="127px"
				>
					AUTOMOTIVE ›
				</Button>
			</LinkBox>
		</Box>
		<Box
			min-width="100px"
			min-height="100px"
			tablet-display="block"
			tablet-width="100%"
			tablet-align-items="center"
		>
			<Text
				margin="0px 0px 0px 0px"
				font="normal normal normal 90px/1.2 &quot;Azeret Mono&quot;, monospace"
				color="--light"
				sm-font="normal 700 52px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				text-align="center"
				text-transform="uppercase"
				bigPhone-text-align="center"
				bigPhone-font="normal small-caps normal 32px/1.2 &quot;Azeret Mono&quot;, monospace"
				bigPhone-padding="0px 0px 10px 0px"
				phone-font="normal normal 400 30px/1.2 &quot;Azeret Mono&quot;, monospace"
				phone-margin="30px 0px 0px 0px"
				tablet-padding="0px 0px 0 0px"
				tablet-width="100%"
				tablet-align-self="center"
				tablet-text-align="center"
				tablet-margin="50px 50px 0px 10px"
				tablet-font="normal normal 300 35px/1.2 &quot;Azeret Mono&quot;, monospace"
			>
				clients
			</Text>
			<Components.QuarklycommunityKitMarquee
				phone-max-height="50%"
				phone-height="100px"
				tablet-width="100%"
				tablet-height="max-content"
				speed="50"
			>
				<Override slot="Container" phone-height="100%" tablet-width="100%" tablet-height="100%" />
				<Image
					src="https://res.cloudinary.com/dgan17f48/image/upload/v1759087927/7_izc6vp.png"
					display="block"
					object-fit="contain"
					phone-height="100%"
					tablet-width="50%"
				/>
				<Image
					src="https://res.cloudinary.com/dgan17f48/image/upload/v1759087925/6_r3ejcw.png"
					display="block"
					object-fit="contain"
					phone-height="100%"
					tablet-width="50%"
				/>
				<Image
					src="https://res.cloudinary.com/dgan17f48/image/upload/v1759087924/5_xsc5wy.png"
					display="block"
					object-fit="contain"
					phone-height="100%"
					tablet-width="50%"
				/>
				<Image
					src="https://res.cloudinary.com/dgan17f48/image/upload/v1759087903/4_ucq9y6.png"
					display="block"
					object-fit="contain"
					phone-height="100%"
					tablet-width="50%"
				/>
				<Image
					src="https://res.cloudinary.com/dgan17f48/image/upload/v1759087902/3_qjj91h.png"
					display="block"
					object-fit="contain"
					phone-height="100%"
					tablet-width="50%"
				/>
				<Image
					src="https://res.cloudinary.com/dgan17f48/image/upload/v1759087900/2_sk7ra6.png"
					display="block"
					object-fit="contain"
					phone-height="100%"
					tablet-width="50%"
				/>
				<Image
					src="https://res.cloudinary.com/dgan17f48/image/upload/v1759087899/1_ipb3sn.png"
					display="block"
					object-fit="contain"
					phone-height="100%"
					tablet-width="50%"
				/>
			</Components.QuarklycommunityKitMarquee>
		</Box>
		<Section
			background="--color-dark"
			padding="60px 0"
			sm-padding="40px 0"
			phone-height="10px"
			phone-align-items="center"
			phone-background="#000000"
		>
			<SocialMedia instagram="https://www.instagram.com/andydoanut/" linked-in="https://www.linkedin.com/in/andydoanut/">
				<Override
					slot="link"
					border-radius="50%"
					color="--grey"
					hover-color="--light"
					background="transparent"
					hover-background="transparent"
					margin="0 8px"
					phone-width="20px"
					phone-height="20px"
					phone-href="instagram.com/andydoanut/"
					phone-target="_blank"
					href="instagram.com/andydoanut/"
				/>
			</SocialMedia>
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