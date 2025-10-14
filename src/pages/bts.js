import React from "react";
import theme from "theme";
import { Theme, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"bts"} />
		<Helmet>
			<title>
				andy doan
			</title>
			<meta name={"description"} content={"photography portfolio"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/68d745af90a2bb0024b9041d/images/logo.png?v=2025-10-03T14:17:11.831Z"} type={"image/x-icon"} />
		</Helmet>
		<Components.Destophead />
		<Box min-width="100px" min-height="100px" phone-display="flex">
			<Components.QuarklycommunityKitGallery
				desktop-width="33%"
				phone-width="33%"
				galleryItemNumbProp="4"
				columnsCountProp="1"
				borderWidthProp="2"
				phone-margin="0px 2px 0px 0px"
			>
				<Override slot="Item 0" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035976/IMG_1772_wuibun.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035976/IMG_1772_wuibun.jpg" />
				<Override slot="Item 1" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759037258/IMG_1245_kz6pwe.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759037258/IMG_1245_kz6pwe.jpg" />
				<Override slot="Item 2" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035977/IMG_0948_gnqeqj.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035977/IMG_0948_gnqeqj.jpg" />
				<Override slot="Item 3" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035974/IMG_1053_3_dcseqf.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035974/IMG_1053_3_dcseqf.jpg" />
			</Components.QuarklycommunityKitGallery>
			<Components.QuarklycommunityKitGallery
				desktop-width="33%"
				phone-width="33%"
				galleryItemNumbProp="5"
				columnsCountProp="1"
				borderWidthProp="2"
			>
				<Override slot="Item 0" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035976/IMG_1366_x6dpea.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035976/IMG_1366_x6dpea.jpg" />
				<Override slot="Item 1" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759037260/IMG_1781_jykaij.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759037260/IMG_1781_jykaij.jpg" />
				<Override slot="Item 2" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035975/IMG_1769_tawdlg.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035975/IMG_1769_tawdlg.jpg" />
				<Override slot="Item 3" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035974/IMG_9057_hoej9r.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035974/IMG_9057_hoej9r.jpg" />
				<Override slot="Item 4" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035973/IMG_1093_mx3ddq.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035973/IMG_1093_mx3ddq.jpg" />
			</Components.QuarklycommunityKitGallery>
			<Components.QuarklycommunityKitGallery
				desktop-width="33%"
				phone-width="33%"
				galleryItemNumbProp="4"
				columnsCountProp="1"
				borderWidthProp="2"
				phone-margin="0px 0px 0px 2px"
			>
				<Override slot="Item 0" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759037261/IMG_1797_uorkdp.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759037261/IMG_1797_uorkdp.jpg" />
				<Override slot="Item 1" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759037259/IMG_1280_lyibzp.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759037259/IMG_1280_lyibzp.jpg" />
				<Override slot="Item 2" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035974/IMG_1169_ghpzhl.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035974/IMG_1169_ghpzhl.jpg" />
				<Override slot="Item 3" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035973/IMG_0895_buzpuc.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035973/IMG_0895_buzpuc.jpg" />
			</Components.QuarklycommunityKitGallery>
		</Box>
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