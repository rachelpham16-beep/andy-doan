import React from "react";
import theme from "theme";
import { Theme, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"portraits"} />
		<Helmet>
			<title>
				ANDY DOAN | PHOTOGRAPHY
			</title>
			<meta name={"description"} content={"PHOTOGRAPHY PORTFOLIO"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/68d745af90a2bb0024b9041d/images/logo.png?v=2025-10-03T14:17:11.831Z"} type={"image/x-icon"} />
		</Helmet>
		<Components.Destophead />
		<Box
			min-width="100px"
			min-height="100px"
			phone-display="flex"
			phone-width="100%"
			phone-height="auto"
			phone-min-height={0}
			phone-min-width={0}
		>
			<Components.QuarklycommunityKitGallery
				galleryItemNumbProp="12"
				columnsCountProp="1"
				borderWidthProp="2"
				aspectRatioProp="auto"
				imagesMinWidthProp="none"
				phone-display="block"
				phone-width="33%"
			>
				<Override slot="Item 0" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036268/IMG_3103_pyn5xj.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036268/IMG_3103_pyn5xj.jpg" />
				<Override slot="Item 1" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759037263/IMG_5631_Original_2_t5wyvm.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759037263/IMG_5631_Original_2_t5wyvm.jpg" />
				<Override slot="Item 2" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036191/40BF9E5F-CD2F-401D-8189-566BCB3A1318_i7tqxl.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036191/40BF9E5F-CD2F-401D-8189-566BCB3A1318_i7tqxl.jpg" />
				<Override slot="Item 3" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036175/IMG_3535_qan4oh.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1760216119/373A0623_1_req1jg.jpg" fullSrcSet="https://res.cloudinary.com/dgan17f48/image/upload/v1760216119/373A0623_1_req1jg.jpg" />
				<Override slot="Item 4" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036231/IMG_4194_e5ikkt.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036231/IMG_4194_e5ikkt.jpg" />
				<Override slot="Item 5" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759037263/IMG_8001_mg8muc.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759037263/IMG_8001_mg8muc.jpg" />
				<Override slot="Item 6" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036270/IMG_4192_2_rzbhn6.jpg" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036270/IMG_4192_2_rzbhn6.jpg" />
				<Override slot="Item 7" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036201/IMG_0263_2_dm5aao.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036201/IMG_0263_2_dm5aao.jpg" />
				<Override slot="Item 8" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036200/IMG_1177_w93syg.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036200/IMG_1177_w93syg.jpg" />
				<Override slot="Item 9" fullSrcSet="https://res.cloudinary.com/dgan17f48/image/upload/v1759036184/IMG_2714_dww1lb.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036184/IMG_2714_dww1lb.jpg" />
				<Override slot="Item 10" fullSrcSet="https://res.cloudinary.com/dgan17f48/image/upload/v1759036183/IMG_9222_n8krrh.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036183/IMG_9222_n8krrh.jpg" />
				<Override slot="Item 11" fullSrcSet="https://res.cloudinary.com/dgan17f48/image/upload/v1759036175/IMG_3535_qan4oh.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036175/IMG_3535_qan4oh.jpg" columsNumb="1" />
			</Components.QuarklycommunityKitGallery>
			<Components.QuarklycommunityKitGallery
				phone-display="block"
				phone-width="33%"
				galleryItemNumbProp="12"
				columnsCountProp="1"
				borderWidthProp="2"
				imagesMaxWidthProp="none"
				phone-margin="0px 0px 0px 2px"
			>
				<Override slot="Item 0" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759037262/IMG_5463-2_zyj1ba.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759037262/IMG_5463-2_zyj1ba.jpg" previewObjectFit="cover" />
				<Override slot="Item 1" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036232/IMG_0293_grbipt.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036232/IMG_0293_grbipt.jpg" />
				<Override slot="Item 2" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036191/IMG_7992_3_w81g0c.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036191/IMG_7992_3_w81g0c.jpg" />
				<Override slot="Item 3" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036197/IMG_4201_lpdmro.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036197/IMG_4201_lpdmro.jpg" />
				<Override slot="Item 4" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036234/IMG_2184_bzucfb.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036234/IMG_2184_bzucfb.jpg" />
				<Override slot="Item 5" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759037266/IMG_8109_bdmyqy.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759037266/IMG_8109_bdmyqy.jpg" />
				<Override slot="Item 6" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036269/IMG_0435_2_o5b6ga.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036269/IMG_0435_2_o5b6ga.jpg" />
				<Override slot="Item 7" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036230/IMG_1018_2_agnajn.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036230/IMG_1018_2_agnajn.jpg" />
				<Override slot="Item 8" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036198/502a9391_efgkpv.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036198/502a9391_efgkpv.jpg" />
				<Override slot="Item 9" fullSrcSet="https://res.cloudinary.com/dgan17f48/image/upload/v1759036189/FB42AF9F-1CAA-45EC-B9E3-6CA451586307-2141-0000014444408EC5_bkbgml.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036189/FB42AF9F-1CAA-45EC-B9E3-6CA451586307-2141-0000014444408EC5_bkbgml.jpg" />
				<Override slot="Item 10" fullSrcSet="https://res.cloudinary.com/dgan17f48/image/upload/v1759036179/IMG_3053_e41kdj.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036179/IMG_3053_e41kdj.jpg" />
				<Override slot="Item 11" fullSrcSet="https://res.cloudinary.com/dgan17f48/image/upload/v1759036192/IMG_0884_nim1pt.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036192/IMG_0884_nim1pt.jpg" />
			</Components.QuarklycommunityKitGallery>
			<Components.QuarklycommunityKitGallery
				phone-width="33%"
				phone-display="block"
				borderWidthProp="2"
				columnsCountProp="1"
				galleryItemNumbProp="12"
				phone-margin="0px 0px 0px 2px"
			>
				<Override slot="Item 0" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1760214142/373A0668_m7xy1x.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1760214142/373A0668_m7xy1x.jpg" />
				<Override slot="Item 1" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036200/IMG_1361_fn9d4r.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036200/IMG_1361_fn9d4r.jpg" />
				<Override slot="Item 2" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036198/DSCF4507_2_fzcfbk.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036198/DSCF4507_2_fzcfbk.jpg" />
				<Override slot="Item 3" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036202/IMG_3005_phqgb8.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036202/IMG_3005_phqgb8.jpg" />
				<Override slot="Item 4" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036268/DSCF4529_but0zq.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036268/DSCF4529_but0zq.jpg" />
				<Override slot="Item 5" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1760213356/373A0881_2_yrgdt9.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1760213356/373A0881_2_yrgdt9.jpg" />
				<Override slot="Item 6" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036267/IMG_0153_ypdgmw.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036267/IMG_0153_ypdgmw.jpg" />
				<Override slot="Item 7" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036237/IMG_3704_xfam8f.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036237/IMG_3704_xfam8f.jpg" />
				<Override slot="Item 8" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036192/IMG_0884_nim1pt.jpg" fullSrcSet="https://res.cloudinary.com/dgan17f48/image/upload/v1760216164/grsg_3_yllivj.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1760216164/grsg_3_yllivj.jpg" />
				<Override slot="Item 9" fullSrcSet="https://res.cloudinary.com/dgan17f48/image/upload/v1759036188/IMG_1964_jaf4gf.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036188/IMG_1964_jaf4gf.jpg" />
				<Override slot="Item 10" fullSrcSet="https://res.cloudinary.com/dgan17f48/image/upload/v1759036178/IMG_7430_q51ejf.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036178/IMG_7430_q51ejf.jpg" />
				<Override slot="Item 11" fullSrcSet="https://res.cloudinary.com/dgan17f48/image/upload/v1759036176/DSCF4533_yyr2tg.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036176/DSCF4533_yyr2tg.jpg" />
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