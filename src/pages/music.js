import React from "react";
import theme from "theme";
import { Theme, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"music"} />
		<Helmet>
			<title>
				andy doan
			</title>
			<meta name={"description"} content={"photography portfolio"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/68d745af90a2bb0024b9041d/images/logo.png?v=2025-10-03T14:17:11.831Z"} type={"image/x-icon"} />
		</Helmet>
		<Components.EmbedStyle />
		<Components.Collage />
		<Components.Collage />
		<Components.Collage />
		<Components.Collage />
		<Components.EmbedStyle />
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
				phone-width="33%"
				galleryItemNumbProp="19"
				columnsCountProp="1"
				borderWidthProp="2"
				phone-margin="0px 2px 0px 0px"
			>
				<Override slot="Item 0" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036065/6D3A5278_fwkpqm.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036065/6D3A5278_fwkpqm.jpg" />
				<Override slot="Item 1" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036060/music8_lbkmie.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036060/music8_lbkmie.jpg" />
				<Override slot="Item 2" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036174/373A7570_pk7h4t.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036174/373A7570_pk7h4t.jpg" stretchFull />
				<Override slot="Item 3" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036065/IMG_0755_nzbooo.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036065/IMG_0755_nzbooo.jpg" />
				<Override slot="Item 5" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036041/373A0799_vrbozx.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036041/373A0799_vrbozx.jpg" />
				<Override slot="Item 6" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036034/IMG_3220_2_jow6y2.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036034/IMG_3220_2_jow6y2.jpg" />
				<Override slot="Item 7" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036033/music3_ouwb9c.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036033/music3_ouwb9c.jpg" />
				<Override slot="Item 8" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036041/6D3A2848_yqdt0x.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036041/6D3A2848_yqdt0x.jpg" />
				<Override slot="Item 9" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036052/FB3C22D9-87EE-4A8A-835B-657144542538_koqawi.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036052/FB3C22D9-87EE-4A8A-835B-657144542538_koqawi.jpg" />
				<Override slot="Item 10" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036053/078A0665_xxu4bp.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036053/078A0665_xxu4bp.jpg" />
				<Override slot="Item 11" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036173/IMG_4268_vxxnwr.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036173/IMG_4268_vxxnwr.jpg" />
				<Override slot="Item 12" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036174/373A7570_pk7h4t.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036174/373A7570_pk7h4t.jpg" />
				<Override slot="Item 13" fullSrcSet="https://res.cloudinary.com/dgan17f48/image/upload/v1759036149/EDA1098D-AA5B-4669-B0CD-8179A8D1D16F_d9trm1.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036149/EDA1098D-AA5B-4669-B0CD-8179A8D1D16F_d9trm1.jpg" />
				<Override slot="Item 14" fullSrcSet="https://res.cloudinary.com/dgan17f48/image/upload/v1759036066/IMG_2397_l2pkrs.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036066/IMG_2397_l2pkrs.jpg" />
				<Override slot="Item 15" fullSrcSet="https://res.cloudinary.com/dgan17f48/image/upload/v1759036043/6D3A5101_vqfqxf.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036043/6D3A5101_vqfqxf.jpg" />
				<Override slot="Item 16" fullSrcSet="https://res.cloudinary.com/dgan17f48/image/upload/v1759036040/6D3A5466_ekobwr.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036040/6D3A5466_ekobwr.jpg" />
				<Override slot="Item 17" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036031/music10_xdou3n.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036031/music10_xdou3n.jpg" />
				<Override slot="Item 18" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036061/Photo_Oct_26_2024_9_21_29_AM_ldknno.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036061/Photo_Oct_26_2024_9_21_29_AM_ldknno.jpg" />
				<Override slot="Item 4" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036172/B76EC05C-C8D2-4FCE-86CF-55A1EC8012A7_ukwdsf.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036172/B76EC05C-C8D2-4FCE-86CF-55A1EC8012A7_ukwdsf.jpg" />
			</Components.QuarklycommunityKitGallery>
			<Components.QuarklycommunityKitGallery phone-width="33%" galleryItemNumbProp="18" columnsCountProp="1" borderWidthProp="2">
				<Override slot="Item 0" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036064/BFD0F09D-C6BE-4692-9583-F98EC2B528A8_arxpzs.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036064/BFD0F09D-C6BE-4692-9583-F98EC2B528A8_arxpzs.jpg" stretchFull />
				<Override slot="Item 1" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036035/music2_dkwiaw.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036035/music2_dkwiaw.jpg" stretchFull={false} />
				<Override slot="Item 2" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036061/6D3A3378_jn8fit.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036061/6D3A3378_jn8fit.jpg" />
				<Override slot="Item 3" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036058/078A4402_2_uphgb0.jpg" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036058/078A4402_2_uphgb0.jpg" />
				<Override slot="Item 4" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036063/6A5DD5B6-5A7F-4925-832B-6F94897B0B28_t67mze.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036063/6A5DD5B6-5A7F-4925-832B-6F94897B0B28_t67mze.jpg" />
				<Override slot="Item 5" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036051/IMG_2738_fqr6zj.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036051/IMG_2738_fqr6zj.jpg" />
				<Override slot="Item 6" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036031/music1_jm3qqx.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036031/music1_jm3qqx.jpg" />
				<Override slot="Item 7" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036046/IMG_8400_wqqoxq.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036046/IMG_8400_wqqoxq.jpg" />
				<Override slot="Item 8" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036045/IMG_3525_er8ttd.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036045/IMG_3525_er8ttd.jpg" />
				<Override slot="Item 9" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036052/IMG_0885_l24reh.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036052/IMG_0885_l24reh.jpg" />
				<Override slot="Item 10" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036175/502A7898_rsc2xx.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036175/502A7898_rsc2xx.jpg" />
				<Override slot="Item 12" fullSrcSet="https://res.cloudinary.com/dgan17f48/image/upload/v1759036164/6D3A5340-Enhanced-NR_afocwc.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036164/6D3A5340-Enhanced-NR_afocwc.jpg" />
				<Override slot="Item 13" fullSrcSet="https://res.cloudinary.com/dgan17f48/image/upload/v1759036057/6D3A4074_akfjrt.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036057/6D3A4074_akfjrt.jpg" />
				<Override slot="Item 14" fullSrcSet="https://res.cloudinary.com/dgan17f48/image/upload/v1759036054/IMG_0263_2_odjiwh.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036054/IMG_0263_2_odjiwh.jpg" />
				<Override slot="Item 15" fullSrcSet="https://res.cloudinary.com/dgan17f48/image/upload/v1759036046/NIC_2382-2_ofcs9n.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036046/NIC_2382-2_ofcs9n.jpg" />
				<Override slot="Item 16" fullSrcSet="https://res.cloudinary.com/dgan17f48/image/upload/v1759036039/music7_x6ehu3.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036039/music7_x6ehu3.jpg" />
				<Override slot="Item 17" fullSrcSet="https://res.cloudinary.com/dgan17f48/image/upload/v1759036036/music6_znn76h.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036036/music6_znn76h.jpg" />
				<Override slot="Item 11" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036171/Canon_EOS_R_6720x4480_001703_dxey69.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036171/Canon_EOS_R_6720x4480_001703_dxey69.jpg" />
			</Components.QuarklycommunityKitGallery>
			<Components.QuarklycommunityKitGallery
				phone-width="33%"
				galleryItemNumbProp="18"
				columnsCountProp="1"
				borderWidthProp="2"
				phone-margin="0px 0px 0px 2px"
			>
				<Override slot="Item 0" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036062/IMG_4325_bo7m26.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036062/IMG_4325_bo7m26.jpg" stretchFull />
				<Override slot="Item 1" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036163/IMG_9177_yidh9r.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036163/IMG_9177_yidh9r.jpg" stretchFull={false} />
				<Override slot="Item 3" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036044/music4_mt6kqq.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036044/music4_mt6kqq.jpg" />
				<Override slot="Item 4" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036055/078A2333-2_kuc93w.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036055/078A2333-2_kuc93w.jpg" />
				<Override slot="Item 5" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036030/IMG_9717-2_xyd41z.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036030/IMG_9717-2_xyd41z.jpg" />
				<Override slot="Item 6" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036037/IMG_9803_yyah5c.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036037/IMG_9803_yyah5c.jpg" />
				<Override slot="Item 7" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036036/IMG_4099_ct2wnr.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036036/IMG_4099_ct2wnr.jpg" />
				<Override slot="Item 8" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036051/Canon_EOS_R_6720x4480_001540_q1rjxq.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036051/Canon_EOS_R_6720x4480_001540_q1rjxq.jpg" />
				<Override slot="Item 9" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036056/IMG_4544_o3r6q3.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036056/IMG_4544_o3r6q3.jpg" />
				<Override slot="Item 10" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036060/6D3A5051_c9ux0t.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036060/6D3A5051_c9ux0t.jpg" />
				<Override slot="Item 11" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036171/IMG_4320_pkxkrj.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036171/IMG_4320_pkxkrj.jpg" />
				<Override slot="Item 12" fullSrcSet="https://res.cloudinary.com/dgan17f48/image/upload/v1759036151/502A9653_rt4qnx.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036151/502A9653_rt4qnx.jpg" />
				<Override slot="Item 14" fullSrcSet="https://res.cloudinary.com/dgan17f48/image/upload/v1759036049/IMG_0977-2_vn45yn.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036049/IMG_0977-2_vn45yn.jpg" />
				<Override slot="Item 15" fullSrcSet="https://res.cloudinary.com/dgan17f48/image/upload/v1759036048/6D3A3049_ydv0y2.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036048/6D3A3049_ydv0y2.jpg" />
				<Override slot="Item 16" fullSrcSet="https://res.cloudinary.com/dgan17f48/image/upload/v1759036039/IMG_4315_ei31vq.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036039/IMG_4315_ei31vq.jpg" />
				<Override slot="Item 17" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036174/6D3A4995_myts9g.jpg" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036174/6D3A4995_myts9g.jpg" />
				<Override slot="Item 2" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036174/6D3A4995_myts9g.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036174/6D3A4995_myts9g.jpg" />
				<Override slot="Item 13" fullSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036054/IMG_1886_2_ptxfug.jpg" previewSrc="https://res.cloudinary.com/dgan17f48/image/upload/v1759036054/IMG_1886_2_ptxfug.jpg" />
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