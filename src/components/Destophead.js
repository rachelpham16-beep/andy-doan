import React from "react";
import { useOverrides, Override, SocialMedia } from "@quarkly/components";
import { LinkBox, Box, Image, Link, Strong, Span, Hr } from "@quarkly/widgets";
import Logo from "./Logo";
import QuarklycommunityKitMobileSidePanel from "./QuarklycommunityKitMobileSidePanel";
import { FiAlignRight } from "react-icons/fi";
const defaultProps = {
	"min-width": "100px",
	"min-height": "100px",
	"width": "100%",
	"display": "flex",
	"align-items": "flex-start",
	"flex-direction": "row",
	"justify-content": "flex-start",
	"bigPhone-align-items": "flex-start",
	"bigPhone-display": "flex",
	"bigPhone-flex-direction": "row",
	"bigPhone-justify-content": "flex-end",
	"bigPhone-flex": "0 0 auto",
	"bigPhone-height": "100%",
	"bigPhone-width": "100%",
	"smallPhone-min-height": 0,
	"smallPhone-min-width": 0,
	"smallPhone-width": "57%",
	"smallPhone-height": "100%",
	"smallPhone-justify-content": "flex-end",
	"smallPhone-display": "flex",
	"smallPhone-flex": "0 1 auto",
	"smallPhone-margin": "10px 10px 0px 0px",
	"smallPhone-align-self": "flex-start",
	"smallPhone-align-items": "flex-start",
	"smallPhone-flex-direction": "row",
	"phone-width": "100%",
	"phone-height": "60px",
	"phone-margin": "0 0 0px 0px",
	"phone-align-content": "flex-start",
	"phone-display": "flex",
	"phone-padding": "0px 0px 5px 0px",
	"desktop-height": "100px",
	"desktop-min-height": 0,
	"desktop-align-items": "center",
	"quarkly-title": "page headers"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"sm-display": "flex",
			"sm-width": "75%",
			"sm-align-items": "center",
			"sm-flex-direction": "row",
			"sm-justify-content": "center",
			"sm-box-sizing": "border-box",
			"width": "100%",
			"align-items": "center",
			"display": "flex",
			"flex-direction": "row",
			"bigPhone-width": "100%",
			"bigPhone-align-items": "flex-start",
			"bigPhone-display": "flex",
			"bigPhone-flex-direction": "row",
			"bigPhone-justify-content": "flex-end",
			"smallPhone-height": "auto",
			"smallPhone-min-height": 0,
			"smallPhone-min-width": 0,
			"smallPhone-align-items": "center",
			"smallPhone-display": "flex",
			"smallPhone-flex-direction": "row",
			"smallPhone-justify-content": "flex-end",
			"smallPhone-margin": "20px 0px 0px 10px",
			"smallPhone-width": "100%",
			"phone-display": "flex",
			"phone-align-content": "start",
			"phone-width": "60%",
			"phone-justify-items": "start",
			"phone-justify-content": "start",
			"phone-height": "auto",
			"phone-align-items": "flex-start",
			"phone-margin": "10px 0px 0px 10px",
			"phone-min-height": 0,
			"phone-min-width": 0,
			"phone-flex-direction": "row",
			"phone-flex": "0 0 auto",
			"phone-max-height": "60px",
			"desktop-width": "30%",
			"desktop-justify-content": "flex-start",
			"desktop-align-items": "center",
			"desktop-height": "100px",
			"desktop-max-height": "none",
			"desktop-margin": "15px 0px 0px 10px",
			"desktop-align-self": "flex-end",
			"desktop-padding": "0 0px 0px 0px"
		}
	},
	"linkBox": {
		"kind": "LinkBox",
		"props": {
			"phone-min-height": 0,
			"phone-height": "auto",
			"phone-width": "50%",
			"phone-justify-content": "flex-start",
			"phone-align-items": "flex-start",
			"phone-flex": "0 0 auto",
			"phone-max-height": "60px",
			"phone-link-href": "/index",
			"href": "/index",
			"pointer-events": "auto",
			"desktop-height": "100%",
			"desktop-align-self": "center",
			"desktop-max-height": "none",
			"desktop-margin": "10px 0px 0px 0px",
			"desktop-justify-content": "center"
		}
	},
	"logo": {
		"kind": "Logo",
		"props": {
			"smallPhone-min-width": 0,
			"smallPhone-min-height": 0,
			"smallPhone-display": "flex",
			"smallPhone-width": "70%",
			"smallPhone-height": "70%",
			"phone-justify-content": "flex-start",
			"phone-align-items": "flex-start",
			"phone-align-content": "flex-start",
			"phone-align-self": "start",
			"phone-justify-self": "start",
			"pointer-events": "auto",
			"phone-min-height": 0
		}
	},
	"logoOverride": {
		"kind": "Override",
		"props": {
			"slot": "box",
			"smallPhone-display": "flex",
			"smallPhone-justify-content": "flex-end",
			"smallPhone-align-items": "flex-start",
			"smallPhone-flex-direction": "row",
			"smallPhone-width": "100%",
			"smallPhone-height": "100%",
			"smallPhone-min-height": 0,
			"smallPhone-min-width": 0,
			"phone-align-items": "start",
			"phone-justify-items": "start",
			"phone-width": "100% border-box",
			"phone-align-self": "flex-start",
			"phone-align-content": "start",
			"phone-justify-content": "start",
			"desktop-width": "30%"
		}
	},
	"logoOverride1": {
		"kind": "Override",
		"props": {
			"slot": "image",
			"object-fit": "contain",
			"smallPhone-width": "50%",
			"smallPhone-height": "50%",
			"smallPhone-align-self": "center",
			"smallPhone-display": "flex",
			"src": "https://uploads.quarkly.io/68d745af90a2bb0024b9041d/images/andylogowhite.png?v=2025-09-28T04:07:18.616Z",
			"smallPhone-overflow-x": "visible",
			"smallPhone-overflow-y": "visible",
			"phone-justify-content": "flex-start",
			"phone-justify-self": "start",
			"phone-width": "170%",
			"phone-align-self": "start",
			"phone-height": "100%",
			"phone-align-items": "flex-start",
			"phone-align-content": "flex-start",
			"pointer-events": "auto",
			"phone-display": "flex"
		}
	},
	"quarklycommunityKitMobileSidePanel": {
		"kind": "QuarklycommunityKitMobileSidePanel",
		"props": {
			"breakpoint": "md",
			"menuPosition": "full",
			"tablet-display": "flex",
			"tablet-height": "auto",
			"tablet-width": "50%",
			"tablet-flex-direction": "row",
			"desktop-flex": "0 1 auto",
			"desktop-flex-direction": "row",
			"desktop-display": "flex",
			"desktop-width": "70%",
			"desktop-height": "100px",
			"desktop-align-items": "center",
			"desktop-margin": "0px 20px 0px 0px",
			"desktop-align-content": "center",
			"desktop-max-height": "none",
			"desktop-justify-content": "flex-end"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride": {
		"kind": "Override",
		"props": {
			"slot": "Button Text",
			"phone-display": "none"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride1": {
		"kind": "Override",
		"props": {
			"slot": "Content",
			"desktop-padding": "0px 0px 0 16px",
			"desktop-height": "100px",
			"phone-background": "#000000",
			"desktop-flex-direction": "row"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride2": {
		"kind": "Override",
		"props": {
			"slot": "Children",
			"desktop-height": "100px",
			"desktop-display": "flex",
			"desktop-justify-content": "flex-end"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride3": {
		"kind": "Override",
		"props": {
			"slot": "Cross",
			"phone-color": "#ffffff",
			"tablet-display": "block",
			"desktop-display": "none"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride4": {
		"kind": "Override",
		"props": {
			"slot": "Content :closed",
			"tablet-background": "rgba(0, 0, 0, 0)",
			"desktop-flex-direction": "row",
			"desktop-justify-content": "flex-end",
			"desktop-padding": "0px 0 24px 16px"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride5": {
		"kind": "Override",
		"props": {
			"slot": "Wrapper",
			"desktop-flex-direction": "row",
			"desktop-align-items": "flex-start",
			"desktop-justify-content": "center",
			"desktop-display": "flex"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride6": {
		"kind": "Override",
		"props": {
			"slot": "Wrapper :closed",
			"desktop-flex-direction": "row"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride7": {
		"kind": "Override",
		"props": {
			"slot": "Children :closed",
			"desktop-height": "100px",
			"desktop-align-items": "center"
		}
	},
	"quarklycommunityKitMobileSidePanelOverride8": {
		"kind": "Override",
		"props": {
			"slot": "Button Icon",
			"size": "15px",
			"category": "fi",
			"icon": FiAlignRight,
			"color": "#ffffff",
			"phone-margin": "15px 10px 0px 0px"
		}
	},
	"linkBox1": {
		"kind": "LinkBox",
		"props": {
			"phone-width": "20%",
			"href": "/index",
			"phone-margin": "0px 0px 40px 0px",
			"tablet-width": "10%",
			"desktop-display": "none"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/68d745af90a2bb0024b9041d/images/andylogowhite.png?v=2025-09-28T04:07:18.616Z",
			"display": "block",
			"phone-src": "https://uploads.quarkly.io/68d745af90a2bb0024b9041d/images/andylogowhite.png?v=2025-09-28T04:07:18.616Z",
			"phone-width": "100%"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "/music",
			"color": "#000000",
			"phone-font": "200 12px --fontFamily-googleAzeretMono",
			"phone-color": "#ffffff",
			"phone-text-transform": "uppercase",
			"phone-text-decoration-line": "initial",
			"phone-margin": "5px 0px 15px 5px",
			"phone-display": "flex",
			"phone-href": "/music",
			"desktop-margin": "5px 15px 0 5px",
			"desktop-color": "#ffffff",
			"desktop-font": "100 14px \"Azeret Mono\", monospace",
			"desktop-hover-color": "--dark",
			"desktop-hover-background": "--color-light",
			"children": <Span
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
		}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"href": "/portraits",
			"color": "#000000",
			"phone-font": "200 12px --fontFamily-googleAzeretMono",
			"phone-color": "#ffffff",
			"phone-text-transform": "uppercase",
			"phone-text-decoration-line": "initial",
			"phone-margin": "5px 0px 15px 5px",
			"phone-display": "flex",
			"desktop-margin": "5px 15px 0 5px",
			"desktop-color": "#ffffff",
			"desktop-font": "100 12px \"Azeret Mono\", monospace",
			"desktop-hover-background": "--color-light",
			"children": <Strong
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
		}
	},
	"link2": {
		"kind": "Link",
		"props": {
			"href": "/sports",
			"color": "#000000",
			"phone-font": "200 12px --fontFamily-googleAzeretMono",
			"phone-color": "#ffffff",
			"phone-text-transform": "uppercase",
			"phone-text-decoration-line": "initial",
			"phone-margin": "5px 0px 15px 5px",
			"phone-display": "flex",
			"desktop-margin": "5px 15px 0 5px",
			"desktop-color": "#ffffff",
			"desktop-font": "100 14px \"Azeret Mono\", monospace",
			"desktop-hover-background": "--color-light",
			"children": <Strong
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
		}
	},
	"link3": {
		"kind": "Link",
		"props": {
			"href": "/bts",
			"color": "#000000",
			"phone-font": "200 12px --fontFamily-googleAzeretMono",
			"phone-color": "#ffffff",
			"phone-text-transform": "uppercase",
			"phone-text-decoration-line": "initial",
			"phone-margin": "5px 0px 15px 5px",
			"phone-display": "flex",
			"desktop-margin": "5px 15px 0 5px",
			"desktop-color": "#ffffff",
			"desktop-hover-background": "--color-light",
			"children": <Strong desktop-font="100 12px &quot;Azeret Mono&quot;, monospace">
				bts
			</Strong>
		}
	},
	"link4": {
		"kind": "Link",
		"props": {
			"href": "/film",
			"color": "#000000",
			"phone-font": "200 12px --fontFamily-googleAzeretMono",
			"phone-color": "#ffffff",
			"phone-text-transform": "uppercase",
			"phone-text-decoration-line": "initial",
			"phone-margin": "5px 0px 15px 5px",
			"phone-display": "flex",
			"desktop-margin": "5px 15px 0 5px",
			"desktop-color": "#fafafa",
			"desktop-hover-background": "--color-light",
			"children": <Strong
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
		}
	},
	"link5": {
		"kind": "Link",
		"props": {
			"href": "/landscape",
			"color": "#000000",
			"phone-font": "200 12px --fontFamily-googleAzeretMono",
			"phone-color": "#ffffff",
			"phone-text-transform": "uppercase",
			"phone-text-decoration-line": "initial",
			"phone-margin": "5px 0px 15px 5px",
			"phone-display": "flex",
			"desktop-margin": "5px 15px 0 5px",
			"desktop-color": "#ffffff",
			"desktop-hover-background": "--color-light",
			"children": <Strong
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
		}
	},
	"link6": {
		"kind": "Link",
		"props": {
			"href": "/automotive",
			"color": "#000000",
			"phone-font": "200 12px --fontFamily-googleAzeretMono",
			"phone-color": "#ffffff",
			"phone-text-transform": "uppercase",
			"phone-text-decoration-line": "initial",
			"phone-margin": "5px 0px 15px 5px",
			"phone-display": "flex",
			"desktop-margin": "5px 15px 0 5px",
			"desktop-color": "#ffffff",
			"desktop-hover-background": "--color-lightD1",
			"children": <Strong
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
		}
	},
	"hr": {
		"kind": "Hr",
		"props": {
			"min-height": "10px",
			"min-width": "100%",
			"margin": "0px 0px 0px 0px",
			"desktop-display": "none"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"phone-height": "50px",
			"phone-min-height": 0,
			"tablet-height": "500px",
			"tablet-min-height": 0,
			"desktop-display": "none"
		}
	},
	"link7": {
		"kind": "Link",
		"props": {
			"href": "/contact",
			"color": "#000000",
			"phone-font": "200 12px --fontFamily-googleAzeretMono",
			"phone-color": "#ffffff",
			"phone-text-transform": "uppercase",
			"phone-text-decoration-line": "initial",
			"phone-margin": "5px 0px 15px 5px",
			"phone-display": "flex",
			"desktop-margin": "5px 15px 0 5px",
			"desktop-color": "#ffffff",
			"desktop-hover-color": "--dark",
			"desktop-hover-background": "--color-light",
			"desktop-padding": "10px 0px 10px 0px",
			"children": <Strong
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
		}
	},
	"link8": {
		"kind": "Link",
		"props": {
			"href": "/contact",
			"color": "#000000",
			"phone-font": "200 12px --fontFamily-googleAzeretMono",
			"phone-color": "#000000",
			"phone-text-transform": "uppercase",
			"phone-text-decoration-line": "initial",
			"phone-margin": "5px 0px 5px 5px",
			"phone-display": "flex",
			"phone-background": "#ffffff",
			"phone-width": "28%",
			"phone-padding": "5px 10px 5px 10px",
			"phone-text-align": "left",
			"tablet-width": "13%",
			"tablet-margin": "0 0px 15px 5px",
			"desktop-padding": "10px 10px 10px 10px",
			"desktop-margin": "5px 0px 0 0",
			"desktop-text-align": "center",
			"desktop-background": "rgba(255, 255, 255, 0.82)",
			"desktop-color": "#000000",
			"desktop-justify-content": "center",
			"desktop-align-items": "flex-start",
			"desktop-hover-color": "#000000",
			"desktop-hover-background": "rgba(255, 255, 255, 0.82)",
			"desktop-width": "auto",
			"children": <Strong
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
		}
	},
	"hr1": {
		"kind": "Hr",
		"props": {
			"min-height": "10px",
			"min-width": "100%",
			"margin": "0px 0px 0px 0px",
			"desktop-display": "none"
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"phone-height": "50px",
			"phone-min-height": 0,
			"tablet-height": "500px",
			"desktop-display": "none"
		}
	},
	"socialMedia": {
		"kind": "SocialMedia",
		"props": {
			"phone-justify-content": "flex-start",
			"instagram": "https://www.instagram.com/andydoanut/",
			"linked-in": "https://www.linkedin.com/in/andydoanut/",
			"desktop-display": "none"
		}
	},
	"socialMediaOverride": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"border-radius": "50%",
			"color": "--grey",
			"hover-color": "--light",
			"background": "transparent",
			"hover-background": "transparent",
			"margin": "0 8px",
			"desktop-display": "none"
		}
	}
};

const Destophead = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Box {...override("box")}>
			<LinkBox {...override("linkBox")}>
				<Logo {...override("logo")}>
					<Override {...override("logoOverride")} />
					<Override {...override("logoOverride1")} />
				</Logo>
			</LinkBox>
		</Box>
		<QuarklycommunityKitMobileSidePanel {...override("quarklycommunityKitMobileSidePanel")}>
			<Override {...override("quarklycommunityKitMobileSidePanelOverride")} />
			<Override {...override("quarklycommunityKitMobileSidePanelOverride1")} />
			<Override {...override("quarklycommunityKitMobileSidePanelOverride2")} />
			<Override {...override("quarklycommunityKitMobileSidePanelOverride3")} />
			<Override {...override("quarklycommunityKitMobileSidePanelOverride4")} />
			<Override {...override("quarklycommunityKitMobileSidePanelOverride5")} />
			<Override {...override("quarklycommunityKitMobileSidePanelOverride6")} />
			<Override {...override("quarklycommunityKitMobileSidePanelOverride7")} />
			<Override {...override("quarklycommunityKitMobileSidePanelOverride8")} />
			<LinkBox {...override("linkBox1")}>
				<Image {...override("image")} />
			</LinkBox>
			<Link {...override("link")} />
			<Link {...override("link1")} />
			<Link {...override("link2")} />
			<Link {...override("link3")} />
			<Link {...override("link4")} />
			<Link {...override("link5")} />
			<Link {...override("link6")} />
			<Hr {...override("hr")} />
			<Box {...override("box1")} />
			<Link {...override("link7")} />
			<Link {...override("link8")} />
			<Hr {...override("hr1")} />
			<Box {...override("box2")} />
			<SocialMedia {...override("socialMedia")}>
				<Override {...override("socialMediaOverride")} />
			</SocialMedia>
		</QuarklycommunityKitMobileSidePanel>
		{children}
	</Box>;
};

Object.assign(Destophead, { ...Box,
	defaultProps,
	overrides
});
export default Destophead;