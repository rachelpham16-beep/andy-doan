import React from "react";
import theme from "theme";
import { Theme, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"automotive"} />
		<Helmet>
			<title>
				andy doan
			</title>
			<meta name={"description"} content={"photography portfolio"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/68d745af90a2bb0024b9041d/images/logo.png?v=2025-10-03T14:17:11.831Z"} type={"image/x-icon"} />
		</Helmet>
		<Components.Destophead />
		<Box min-width="100px" min-height="100px" phone-display="flex" phone-width="100%">
			<Components.QuarklycommunityKitGallery
				phone-width="33%"
				columnsCountProp="1"
				galleryItemNumbProp="3"
				borderWidthProp="2"
				phone-margin="0px 2px 0px 0px"
			>
				<Override slot="Item 0" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759037257/DSCF9279_eqaugt.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759037257/DSCF9279_eqaugt.jpg" />
				<Override slot="Item 1" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035911/DSCF0473_Original_kzzpyr.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035911/DSCF0473_Original_kzzpyr.jpg" />
				<Override slot="Item 2" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035911/DSCF0423_Original_zdrgjc.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035911/DSCF0423_Original_zdrgjc.jpg" />
			</Components.QuarklycommunityKitGallery>
			<Components.QuarklycommunityKitGallery phone-width="33%" galleryItemNumbProp="2" columnsCountProp="1" borderWidthProp="2">
				<Override slot="Item 0" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035911/DSCF9300_zt6yza.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035911/DSCF9300_zt6yza.jpg" />
				<Override slot="Item 1" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035911/DSCF0483_Original_dpkbga.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035911/DSCF0483_Original_dpkbga.jpg" />
			</Components.QuarklycommunityKitGallery>
			<Components.QuarklycommunityKitGallery
				phone-width="33%"
				galleryItemNumbProp="3"
				columnsCountProp="1"
				borderWidthProp="2"
				phone-margin="0px 0px 0px 2px"
			>
				<Override slot="Item 0" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035911/DSCF7159_2_ovs7re.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035911/DSCF7159_2_ovs7re.jpg" />
				<Override slot="Item 1" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035911/8C535AE1-B158-4991-99B8-1DBA8C98D6B8-35583-0000128B41A33327_mmz8wh.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035911/8C535AE1-B158-4991-99B8-1DBA8C98D6B8-35583-0000128B41A33327_mmz8wh.jpg" />
				<Override slot="Item 2" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035910/DSCF9279_zgj21r.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035910/DSCF9279_zgj21r.jpg" />
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