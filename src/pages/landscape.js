import React from "react";
import theme from "theme";
import { Theme, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"landscape"} />
		<Helmet>
			<title>
				andy doan
			</title>
			<meta name={"description"} content={"photography portfolio"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/68d745af90a2bb0024b9041d/images/logo.png?v=2025-10-03T14:17:11.831Z"} type={"image/x-icon"} />
		</Helmet>
		<Components.Destophead />
		<Box
			min-width="100px"
			min-height="100px"
			phone-width="100%"
			phone-height="auto"
			phone-display="flex"
		>
			<Components.QuarklycommunityKitGallery
				phone-width="33%"
				phone-height="auto"
				galleryItemNumbProp="6"
				columnsCountProp="1"
				borderWidthProp="2"
				phone-margin="0px 2px 0px 0px"
			>
				<Override slot="Item 0" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759037256/DSCF0252_ulmhew.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759037256/DSCF0252_ulmhew.jpg" />
				<Override slot="Item 1" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036026/DSCF4410-2_pu6zlp.jpg" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036026/DSCF4410-2_pu6zlp.jpg" />
				<Override slot="Item 2" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036025/CCC571EB-FB7F-4597-A0F7-BDBD5860CF07-2141-0000014493E8C00E_2_yjn6kr.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036025/CCC571EB-FB7F-4597-A0F7-BDBD5860CF07-2141-0000014493E8C00E_2_yjn6kr.jpg" />
				<Override slot="Item 4" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036023/IMG_3144_pdw16c.jpg" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036023/IMG_3144_pdw16c.jpg" />
				<Override slot="Item 5" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036020/DSCF0209_w2oqkh.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036020/DSCF0209_w2oqkh.jpg" />
				<Override slot="Item 3" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036017/AA08F7E2-AF0F-4B00-8E88-07E7B35C5AAD-2141-0000014451DC5684_ns4va4.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036017/AA08F7E2-AF0F-4B00-8E88-07E7B35C5AAD-2141-0000014451DC5684_ns4va4.jpg" />
			</Components.QuarklycommunityKitGallery>
			<Components.QuarklycommunityKitGallery
				phone-width="33%"
				phone-height="auto"
				columnsCountProp="1"
				galleryItemNumbProp="7"
				borderWidthProp="2"
			>
				<Override slot="Item 0" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036028/IMG_5922_vb2v6x.jpg" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036028/IMG_5922_vb2v6x.jpg" />
				<Override slot="Item 1" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036028/DSCF4400_wssyxv.jpg" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036028/DSCF4400_wssyxv.jpg" />
				<Override slot="Item 2" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036025/IMG_5884_qfl9vj.jpg" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036025/IMG_5884_qfl9vj.jpg" />
				<Override slot="Item 3" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036016/IMG_5420_lkc3dp.jpg" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036016/IMG_5420_lkc3dp.jpg" />
				<Override slot="Item 4" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036021/IMG_5197_xtslbv.jpg" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036021/IMG_5197_xtslbv.jpg" />
				<Override slot="Item 5" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036020/1517371042354_fko8ox.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036020/1517371042354_fko8ox.jpg" />
				<Override slot="Item 6" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036016/8467FEA4-41AC-4C8F-825B-2770FA94352B-2141-000001446CF2E77F_tuioeo.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036016/8467FEA4-41AC-4C8F-825B-2770FA94352B-2141-000001446CF2E77F_tuioeo.jpg" />
			</Components.QuarklycommunityKitGallery>
			<Components.QuarklycommunityKitGallery
				phone-width="33%"
				phone-height="auto"
				galleryItemNumbProp="7"
				columnsCountProp="1"
				borderWidthProp="2"
				phone-margin="0px 0px 0px 2px"
			>
				<Override slot="Item 0" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036029/IMG_5941_wlluuk.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036029/IMG_5941_wlluuk.jpg" />
				<Override slot="Item 1" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036027/IMG_5908_xbbpyr.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036027/IMG_5908_xbbpyr.jpg" />
				<Override slot="Item 2" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036026/DSCF4439_vkni6s.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036026/DSCF4439_vkni6s.jpg" />
				<Override slot="Item 3" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036024/IMG_5902_a1zelo.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036024/IMG_5902_a1zelo.jpg" />
				<Override slot="Item 4" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036023/IMG_5901_uevrmr.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036023/IMG_5901_uevrmr.jpg" />
				<Override slot="Item 5" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036019/DSCF0237_qei55t.jpg" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036019/DSCF0237_qei55t.jpg" />
				<Override slot="Item 6" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036018/IMG_4933_xfj9eu.jpg" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036018/IMG_4933_xfj9eu.jpg" />
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