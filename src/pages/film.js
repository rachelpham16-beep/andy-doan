import React from "react";
import theme from "theme";
import { Theme, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"film"} />
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
			phone-display="flex"
			phone-width="100%"
			desktop-width="100%"
		>
			<Components.QuarklycommunityKitGallery
				phone-width="33%"
				columnsCountProp="1"
				galleryItemNumbProp="13"
				borderWidthProp="2"
				phone-margin="0px 2px 0px 0px"
				desktop-width="33%"
			>
				<Override slot="Item 0" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759037258/DSCF9289_e0o5xs.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759037258/DSCF9289_e0o5xs.jpg" />
				<Override slot="Item 1" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036012/7_2_ubrxtn.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036012/7_2_ubrxtn.jpg" />
				<Override slot="Item 2" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036010/IMG_4911_hhykpe.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036010/IMG_4911_hhykpe.jpg" />
				<Override slot="Item 3" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036009/IMG_1706_pgbrjk.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036009/IMG_1706_pgbrjk.jpg" />
				<Override slot="Item 4" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036005/IMG_2849_tmmahi.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036005/IMG_2849_tmmahi.jpg" />
				<Override slot="Item 5" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036005/26_ndyhqs.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036005/26_ndyhqs.jpg" />
				<Override slot="Item 6" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036003/DSCF9536_zmqixg.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036003/DSCF9536_zmqixg.jpg" />
				<Override slot="Item 7" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035999/11_yfv8ed.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035999/11_yfv8ed.jpg" />
				<Override slot="Item 8" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035997/4_Original_v3f8xi.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035997/4_Original_v3f8xi.jpg" />
				<Override slot="Item 9" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035995/IMG_8549_yf5ifq.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035995/IMG_8549_yf5ifq.jpg" />
				<Override slot="Item 10" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035993/17_q6vmsv.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035993/17_q6vmsv.jpg" />
				<Override slot="Item 11" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035989/IMG_2836_titbd8.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035989/IMG_2836_titbd8.jpg" />
				<Override slot="Item 12" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035992/IMG_2853_kjdcbg.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035992/IMG_2853_kjdcbg.jpg" />
			</Components.QuarklycommunityKitGallery>
			<Components.QuarklycommunityKitGallery
				phone-width="33%"
				galleryItemNumbProp="14"
				columnsCountProp="1"
				borderWidthProp="2"
				desktop-width="33%"
			>
				<Override slot="Item 0" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036012/3_iszklr.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036012/3_iszklr.jpg" />
				<Override slot="Item 1" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036015/IMG_2829_hmiz40.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036015/IMG_2829_hmiz40.jpg" />
				<Override slot="Item 2" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036010/5_oruqdf.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036010/5_oruqdf.jpg" />
				<Override slot="Item 3" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036001/2638C7DE-CB66-4FDC-BB36-C8A174DE8910-9570-0000015A7D80AC40_uyxyga.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036001/2638C7DE-CB66-4FDC-BB36-C8A174DE8910-9570-0000015A7D80AC40_uyxyga.jpg" />
				<Override slot="Item 4" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036007/21_3_gjoub0.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036007/21_3_gjoub0.jpg" />
				<Override slot="Item 5" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036006/18_javfgf.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036006/18_javfgf.jpg" />
				<Override slot="Item 6" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036002/IMG_3364_xocjap.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036002/IMG_3364_xocjap.jpg" />
				<Override slot="Item 7" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036001/25_3_wleanf.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036001/25_3_wleanf.jpg" />
				<Override slot="Item 8" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035999/13_ntgfro.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035999/13_ntgfro.jpg" />
				<Override slot="Item 9" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035996/DSCF9300_ylbyb0.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035996/DSCF9300_ylbyb0.jpg" />
				<Override slot="Item 10" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035994/16_Original_vb0eks.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035994/16_Original_vb0eks.jpg" />
				<Override slot="Item 11" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035991/9_2_b1lxfj.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035991/9_2_b1lxfj.jpg" />
				<Override slot="Item 12" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035990/IMG_8263_jtnmbp.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035990/IMG_8263_jtnmbp.jpg" />
				<Override slot="Item 13" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036013/IMG_9028_tc3epn.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036013/IMG_9028_tc3epn.jpg" />
			</Components.QuarklycommunityKitGallery>
			<Components.QuarklycommunityKitGallery
				phone-width="33%"
				galleryItemNumbProp="14"
				columnsCountProp="1"
				borderWidthProp="2"
				phone-margin="0px 0px 0px 2px"
				desktop-width="33%"
				desktop-padding="0px 0px 0px 0"
			>
				<Override slot="Item 0" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036014/0D01B2F8-6565-48C6-BC9C-7446360B2841-69372-00000A32DBE1EBD0_pdzht5.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036014/0D01B2F8-6565-48C6-BC9C-7446360B2841-69372-00000A32DBE1EBD0_pdzht5.jpg" />
				<Override slot="Item 1" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036011/7_zpxpc5.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036011/7_zpxpc5.jpg" />
				<Override slot="Item 2" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036008/IMG_1712_vokwkn.jpg" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036008/IMG_1712_vokwkn.jpg" />
				<Override slot="Item 3" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036008/5_3_i33534.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036008/5_3_i33534.jpg" />
				<Override slot="Item 4" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036007/4_o7qm4x.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036007/4_o7qm4x.jpg" />
				<Override slot="Item 5" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036004/7_Original_b7msyl.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036004/7_Original_b7msyl.jpg" />
				<Override slot="Item 6" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036002/IMG_2848_p7irkj.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036002/IMG_2848_p7irkj.jpg" />
				<Override slot="Item 7" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036001/59B629E6-6E21-4245-ADCD-3A6224852FCD_nlu29q.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036001/59B629E6-6E21-4245-ADCD-3A6224852FCD_nlu29q.jpg" />
				<Override slot="Item 8" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035998/IMG_5900_kprsyz.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035998/IMG_5900_kprsyz.jpg" />
				<Override slot="Item 9" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035997/12_gizjre.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035997/12_gizjre.jpg" />
				<Override slot="Item 10" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035994/400A61B5-973A-4B3A-A4EC-F157D1A00CD9-69372-00000A31D5364633_2_p9n2sn.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035994/400A61B5-973A-4B3A-A4EC-F157D1A00CD9-69372-00000A31D5364633_2_p9n2sn.jpg" />
				<Override slot="Item 11" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035992/IMG_2853_kjdcbg.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035992/IMG_2853_kjdcbg.jpg" />
				<Override slot="Item 12" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035991/9_di66lf.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759035991/9_di66lf.jpg" />
				<Override slot="Item 13" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036014/22_2_lpq3su.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036014/22_2_lpq3su.jpg" />
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