import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Text, Box, Button } from "@quarkly/widgets";
import QuarklycommunityKitGallery from "./QuarklycommunityKitGallery";
const defaultProps = {
	"min-width": "100px",
	"min-height": "100px",
	"phone-display": "grid",
	"phone-width": "100%",
	"phone-height": "auto",
	"phone-align-items": "flex-start",
	"quarkly-title": "music grid"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"background": "#000000",
			"height": "10px",
			"min-height": "30px",
			"display": "flex",
			"align-items": "flex-end",
			"justify-content": "center",
			"flex-direction": "row",
			"bigPhone-font": "16px ",
			"bigPhone-width": "100%",
			"bigPhone-min-height": "10px",
			"smallPhone-width": "100%",
			"smallPhone-min-width": 0,
			"smallPhone-min-height": 0,
			"phone-width": "100%",
			"phone-height": "AUTO"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"smallPhone-width": "33%",
			"smallPhone-height": "100%",
			"smallPhone-min-width": 0,
			"smallPhone-min-height": 0,
			"smallPhone-display": "flex",
			"smallPhone-margin": "0px 2px 0px 2px",
			"phone-width": "33%",
			"phone-height": "auto",
			"phone-min-width": 0,
			"phone-min-height": 0
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"smallPhone-min-width": 0,
			"smallPhone-min-height": 0,
			"smallPhone-width": "50%",
			"smallPhone-height": "100%",
			"smallPhone-display": "grid",
			"smallPhone-justify-content": "flex-start",
			"smallPhone-flex-direction": "row",
			"smallPhone-align-content": "end",
			"smallPhone-margin": "0px 0px 0px 2px",
			"phone-width": "50%",
			"phone-height": "auto",
			"phone-min-width": 0,
			"phone-min-height": 0
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"smallPhone-width": "100%",
			"smallPhone-height": "100%",
			"smallPhone-font": "50 5px --fontFamily-googleAzeretMono",
			"smallPhone-text-transform": "uppercase",
			"smallPhone-color": "#ffffff",
			"smallPhone-display": "block",
			"children": "LIL WAYNE"
		}
	},
	"box3": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"smallPhone-min-width": 0,
			"smallPhone-min-height": 0,
			"smallPhone-width": "50%",
			"smallPhone-height": "100%",
			"smallPhone-display": "grid",
			"smallPhone-justify-items": "end",
			"phone-width": "50%",
			"phone-height": "auto",
			"phone-min-width": 0,
			"phone-min-height": 0
		}
	},
	"box4": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"smallPhone-min-width": 0,
			"smallPhone-min-height": 0,
			"smallPhone-width": "50%",
			"smallPhone-height": "100%",
			"smallPhone-display": "grid",
			"smallPhone-flex-direction": "row",
			"smallPhone-align-content": "end",
			"smallPhone-justify-items": "end"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"smallPhone-width": "100%",
			"smallPhone-height": "100%",
			"smallPhone-font": "50 5px --fontFamily-googleAzeretMono",
			"smallPhone-text-transform": "uppercase",
			"smallPhone-color": "#ffffff",
			"smallPhone-display": "block",
			"smallPhone-text-align": "right",
			"children": "2024"
		}
	},
	"box5": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"smallPhone-width": "33%",
			"smallPhone-height": "100%",
			"smallPhone-min-width": 0,
			"smallPhone-min-height": 0,
			"smallPhone-display": "flex",
			"smallPhone-margin": "0px 2px 0px 2px",
			"phone-width": "33%",
			"phone-height": "auto",
			"phone-min-width": 0,
			"phone-min-height": 0
		}
	},
	"box6": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"smallPhone-min-width": 0,
			"smallPhone-min-height": 0,
			"smallPhone-width": "50%",
			"smallPhone-height": "100%",
			"smallPhone-display": "grid",
			"smallPhone-justify-content": "flex-start",
			"smallPhone-flex-direction": "row",
			"smallPhone-align-content": "end",
			"phone-width": "50%",
			"phone-min-width": 0,
			"phone-min-height": 0,
			"phone-height": "auto"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"smallPhone-width": "100%",
			"smallPhone-height": "100%",
			"smallPhone-font": "50 5px --fontFamily-googleAzeretMono",
			"smallPhone-text-transform": "uppercase",
			"smallPhone-color": "#ffffff",
			"smallPhone-display": "block",
			"children": "YG"
		}
	},
	"box7": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"smallPhone-min-width": 0,
			"smallPhone-min-height": 0,
			"smallPhone-width": "50%",
			"smallPhone-height": "100%",
			"smallPhone-display": "grid",
			"smallPhone-justify-items": "end",
			"phone-width": "50%",
			"phone-height": "auto",
			"phone-min-width": 0,
			"phone-min-height": 0
		}
	},
	"box8": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"smallPhone-min-width": 0,
			"smallPhone-min-height": 0,
			"smallPhone-width": "50%",
			"smallPhone-height": "100%",
			"smallPhone-display": "grid",
			"smallPhone-justify-content": "end",
			"smallPhone-flex-direction": "row",
			"smallPhone-align-content": "end",
			"smallPhone-text-align": "right"
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"smallPhone-width": "100%",
			"smallPhone-height": "100%",
			"smallPhone-font": "50 5px --fontFamily-googleAzeretMono",
			"smallPhone-text-transform": "uppercase",
			"smallPhone-color": "#ffffff",
			"smallPhone-display": "block",
			"smallPhone-justify-self": "end",
			"smallPhone-text-align": "right",
			"children": "2024"
		}
	},
	"box9": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"smallPhone-width": "33%",
			"smallPhone-height": "100%",
			"smallPhone-min-width": 0,
			"smallPhone-min-height": 0,
			"smallPhone-display": "flex",
			"smallPhone-margin": "0px 2px 0px 2px",
			"phone-width": "33%",
			"phone-height": "auto",
			"phone-min-width": 0,
			"phone-min-height": 0
		}
	},
	"box10": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"smallPhone-min-width": 0,
			"smallPhone-min-height": 0,
			"smallPhone-width": "50%",
			"smallPhone-height": "100%",
			"smallPhone-display": "grid",
			"smallPhone-justify-content": "flex-start",
			"smallPhone-flex-direction": "row",
			"smallPhone-align-content": "end",
			"phone-width": "50%",
			"phone-height": "auto",
			"phone-min-width": 0,
			"phone-min-height": 0
		}
	},
	"text4": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"smallPhone-width": "100%",
			"smallPhone-height": "100%",
			"smallPhone-font": "50 5px --fontFamily-googleAzeretMono",
			"smallPhone-text-transform": "uppercase",
			"smallPhone-color": "#ffffff",
			"smallPhone-display": "block",
			"children": "GUNNA"
		}
	},
	"box11": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"smallPhone-min-width": 0,
			"smallPhone-min-height": 0,
			"smallPhone-width": "50%",
			"smallPhone-height": "100%",
			"smallPhone-display": "grid",
			"smallPhone-justify-items": "end",
			"phone-width": "50%",
			"phone-height": "auto",
			"phone-min-width": 0,
			"phone-min-height": 0
		}
	},
	"box12": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"smallPhone-min-width": 0,
			"smallPhone-min-height": 0,
			"smallPhone-width": "50%",
			"smallPhone-height": "100%",
			"smallPhone-display": "grid",
			"smallPhone-flex-direction": "row",
			"smallPhone-align-content": "end",
			"smallPhone-justify-items": "end"
		}
	},
	"text5": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"smallPhone-width": "100%",
			"smallPhone-height": "100%",
			"smallPhone-font": "50 5px --fontFamily-googleAzeretMono",
			"smallPhone-text-transform": "uppercase",
			"smallPhone-color": "#ffffff",
			"smallPhone-display": "block",
			"smallPhone-text-align": "right",
			"children": "2024"
		}
	},
	"quarklycommunityKitGallery": {
		"kind": "QuarklycommunityKitGallery",
		"props": {
			"bigPhone-display": "flex",
			"galleryItemNumbProp": "3",
			"columnsCountProp": "3",
			"borderWidthProp": "3",
			"loaderFormatProp": "all",
			"phone-width": "100%",
			"phone-height": "auto",
			"phone-grid-column": "auto",
			"phone-grid-row": "auto",
			"phone-grid-area": "auto / auto"
		}
	},
	"quarklycommunityKitGalleryOverride": {
		"kind": "Override",
		"props": {
			"slot": "Item 0",
			"fullSrc": "https://res.cloudinary.com/dgan17f48/image/upload/v1759036041/373A0799_vrbozx.jpg",
			"previewSrc": "https://res.cloudinary.com/dgan17f48/image/upload/v1759036041/373A0799_vrbozx.jpg",
			"fullObjectFit": "cover",
			"fullLoading": "eager",
			"previewObjectFit": "cover",
			"previewLoading": "eager",
			"showFullImage": false,
			"phone-width": "100%",
			"phone-height": "auto"
		}
	},
	"quarklycommunityKitGalleryOverride1": {
		"kind": "Override",
		"props": {
			"slot": "Item 1",
			"previewSrc": "https://res.cloudinary.com/dgan17f48/image/upload/v1759036065/IMG_0755_nzbooo.jpg",
			"fullSrc": "https://res.cloudinary.com/dgan17f48/image/upload/v1759036065/IMG_0755_nzbooo.jpg",
			"showFullImage": false,
			"phone-width": "100%",
			"phone-height": "auto"
		}
	},
	"quarklycommunityKitGalleryOverride2": {
		"kind": "Override",
		"props": {
			"slot": "Item 2",
			"previewSrc": "https://res.cloudinary.com/dgan17f48/image/upload/v1759036060/music8_lbkmie.jpg",
			"fullSrc": "https://res.cloudinary.com/dgan17f48/image/upload/v1759036060/music8_lbkmie.jpg",
			"showFullImage": false,
			"phone-width": "100%",
			"phone-height": "auto"
		}
	},
	"box13": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"phone-width": "100%",
			"phone-height": "auto",
			"phone-display": "flex",
			"phone-min-height": 0,
			"phone-margin": "0px 0px 5px 0px"
		}
	},
	"box14": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"smallPhone-width": "100%",
			"smallPhone-min-width": 0,
			"smallPhone-min-height": 0,
			"smallPhone-display": "flex",
			"smallPhone-margin": "0px 0px 0px 0px",
			"smallPhone-height": "10px",
			"phone-width": "33%",
			"phone-min-width": 0,
			"phone-min-height": 0,
			"phone-height": "auto"
		}
	},
	"box15": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"smallPhone-min-width": 0,
			"smallPhone-min-height": 0,
			"smallPhone-width": "50%",
			"smallPhone-height": "100%",
			"smallPhone-display": "grid",
			"smallPhone-justify-content": "flex-start",
			"smallPhone-flex-direction": "row",
			"smallPhone-align-content": "end",
			"smallPhone-margin": "0px 0px 0px 2px",
			"phone-width": "50%",
			"phone-height": "auto",
			"phone-min-width": 0,
			"phone-min-height": 0
		}
	},
	"text6": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"smallPhone-width": "100%",
			"smallPhone-height": "100%",
			"smallPhone-font": "50 5px --fontFamily-googleAzeretMono",
			"smallPhone-text-transform": "uppercase",
			"smallPhone-color": "#ffffff",
			"smallPhone-display": "block",
			"children": <>
				one music fest{"\n\n"}
			</>
		}
	},
	"box16": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"smallPhone-min-width": 0,
			"smallPhone-min-height": 0,
			"smallPhone-width": "50%",
			"smallPhone-height": "100%",
			"smallPhone-display": "grid",
			"smallPhone-justify-items": "end",
			"smallPhone-margin": "0px 2px 0px 0px",
			"phone-width": "50%",
			"phone-height": "auto",
			"phone-min-width": 0,
			"phone-min-height": 0
		}
	},
	"box17": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"smallPhone-min-width": 0,
			"smallPhone-min-height": 0,
			"smallPhone-width": "50%",
			"smallPhone-height": "100%",
			"smallPhone-display": "grid",
			"smallPhone-justify-content": "end",
			"smallPhone-flex-direction": "row",
			"smallPhone-align-content": "end",
			"smallPhone-text-align": "right"
		}
	},
	"text7": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"smallPhone-width": "100%",
			"smallPhone-height": "100%",
			"smallPhone-font": "50 5px --fontFamily-googleAzeretMono",
			"smallPhone-text-transform": "uppercase",
			"smallPhone-color": "#ffffff",
			"smallPhone-display": "block",
			"smallPhone-justify-self": "end",
			"smallPhone-text-align": "right",
			"children": "atl"
		}
	},
	"box18": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"smallPhone-width": "100%",
			"smallPhone-min-width": 0,
			"smallPhone-min-height": 0,
			"smallPhone-display": "flex",
			"smallPhone-height": "10px",
			"phone-width": "33%",
			"phone-height": "auto",
			"phone-min-height": 0,
			"phone-min-width": 0
		}
	},
	"box19": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"smallPhone-min-width": 0,
			"smallPhone-min-height": 0,
			"smallPhone-width": "50%",
			"smallPhone-height": "100%",
			"smallPhone-display": "grid",
			"smallPhone-justify-content": "flex-start",
			"smallPhone-flex-direction": "row",
			"smallPhone-align-content": "end",
			"smallPhone-margin": "0px 0px 0px 2px",
			"phone-width": "50%",
			"phone-height": "auto",
			"phone-min-width": 0,
			"phone-min-height": 0
		}
	},
	"text8": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"smallPhone-width": "100%",
			"smallPhone-height": "100%",
			"smallPhone-font": "50 5px --fontFamily-googleAzeretMono",
			"smallPhone-text-transform": "uppercase",
			"smallPhone-color": "#ffffff",
			"smallPhone-display": "block",
			"children": "lollapalooza"
		}
	},
	"box20": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"smallPhone-min-width": 0,
			"smallPhone-min-height": 0,
			"smallPhone-width": "50%",
			"smallPhone-height": "100%",
			"smallPhone-display": "grid",
			"smallPhone-justify-items": "end",
			"smallPhone-margin": "0px 2px 0px 0px",
			"phone-width": "50%",
			"phone-height": "auto",
			"phone-min-width": 0,
			"phone-min-height": 0,
			"phone-display": "grid"
		}
	},
	"box21": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"smallPhone-min-width": 0,
			"smallPhone-min-height": 0,
			"smallPhone-width": "50%",
			"smallPhone-height": "100%",
			"smallPhone-display": "grid",
			"smallPhone-justify-content": "end",
			"smallPhone-flex-direction": "row",
			"smallPhone-align-content": "end",
			"smallPhone-text-align": "right"
		}
	},
	"text9": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"smallPhone-width": "100%",
			"smallPhone-height": "100%",
			"smallPhone-font": "50 5px --fontFamily-googleAzeretMono",
			"smallPhone-text-transform": "uppercase",
			"smallPhone-color": "#ffffff",
			"smallPhone-display": "block",
			"smallPhone-justify-self": "end",
			"smallPhone-text-align": "right",
			"children": "la"
		}
	},
	"box22": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"smallPhone-width": "100%",
			"smallPhone-min-width": 0,
			"smallPhone-min-height": 0,
			"smallPhone-display": "flex",
			"smallPhone-height": "10px",
			"phone-width": "33%",
			"phone-height": "auto",
			"phone-min-width": 0,
			"phone-min-height": 0
		}
	},
	"box23": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"smallPhone-min-width": 0,
			"smallPhone-min-height": 0,
			"smallPhone-width": "50%",
			"smallPhone-height": "100%",
			"smallPhone-display": "grid",
			"smallPhone-justify-content": "flex-start",
			"smallPhone-flex-direction": "row",
			"smallPhone-align-content": "end",
			"smallPhone-margin": "0px 0px 0px 2px",
			"phone-width": "50%",
			"phone-height": "auto",
			"phone-min-width": 0,
			"phone-min-height": 0
		}
	},
	"text10": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"smallPhone-width": "100%",
			"smallPhone-height": "100%",
			"smallPhone-font": "50 5px --fontFamily-googleAzeretMono",
			"smallPhone-text-transform": "uppercase",
			"smallPhone-color": "#ffffff",
			"smallPhone-display": "block",
			"smallPhone-margin": "0px 0px 0px 2px",
			"children": "twogetherland"
		}
	},
	"box24": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"smallPhone-min-width": 0,
			"smallPhone-min-height": 0,
			"smallPhone-width": "50%",
			"smallPhone-height": "100%",
			"smallPhone-display": "grid",
			"smallPhone-justify-items": "end",
			"smallPhone-margin": "0px 2px 0px 0px",
			"phone-width": "50%",
			"phone-height": "auto",
			"phone-min-width": 0,
			"phone-min-height": 0
		}
	},
	"box25": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"smallPhone-min-width": 0,
			"smallPhone-min-height": 0,
			"smallPhone-width": "50%",
			"smallPhone-height": "100%",
			"smallPhone-display": "grid",
			"smallPhone-justify-content": "end",
			"smallPhone-flex-direction": "row",
			"smallPhone-align-content": "end",
			"smallPhone-text-align": "right"
		}
	},
	"text11": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"smallPhone-width": "100%",
			"smallPhone-height": "100%",
			"smallPhone-font": "50 5px --fontFamily-googleAzeretMono",
			"smallPhone-text-transform": "uppercase",
			"smallPhone-color": "#ffffff",
			"smallPhone-display": "block",
			"smallPhone-justify-self": "end",
			"smallPhone-text-align": "right",
			"children": "dal"
		}
	},
	"box26": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"phone-width": "100%",
			"phone-height": "auto",
			"phone-display": "flex",
			"phone-align-items": "flex-start",
			"phone-justify-content": "center",
			"phone-align-content": "flex-start",
			"phone-min-height": 0,
			"phone-margin": "0px 0px 0px 0px",
			"phone-min-width": 0
		}
	}
};

const Gridstructure = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Box {...override("box")}>
			<Box {...override("box1")}>
				<Box {...override("box2")}>
					<Text {...override("text")} />
				</Box>
				<Box {...override("box3")}>
					<Box {...override("box4")}>
						<Text {...override("text1")} />
					</Box>
				</Box>
			</Box>
			<Box {...override("box5")}>
				<Box {...override("box6")}>
					<Text {...override("text2")} />
				</Box>
				<Box {...override("box7")}>
					<Box {...override("box8")}>
						<Text {...override("text3")} />
					</Box>
				</Box>
			</Box>
			<Box {...override("box9")}>
				<Box {...override("box10")}>
					<Text {...override("text4")} />
				</Box>
				<Box {...override("box11")}>
					<Box {...override("box12")}>
						<Text {...override("text5")} />
					</Box>
				</Box>
			</Box>
		</Box>
		<QuarklycommunityKitGallery {...override("quarklycommunityKitGallery")}>
			<Override {...override("quarklycommunityKitGalleryOverride")} />
			<Override {...override("quarklycommunityKitGalleryOverride1")} />
			<Override {...override("quarklycommunityKitGalleryOverride2")} />
		</QuarklycommunityKitGallery>
		<Box {...override("box13")}>
			<Box {...override("box14")}>
				<Box {...override("box15")}>
					<Text {...override("text6")} />
				</Box>
				<Box {...override("box16")}>
					<Box {...override("box17")}>
						<Text {...override("text7")} />
					</Box>
				</Box>
			</Box>
			<Box {...override("box18")}>
				<Box {...override("box19")}>
					<Text {...override("text8")} />
				</Box>
				<Box {...override("box20")}>
					<Box {...override("box21")}>
						<Text {...override("text9")} />
					</Box>
				</Box>
			</Box>
			<Box {...override("box22")}>
				<Box {...override("box23")}>
					<Text {...override("text10")} />
				</Box>
				<Box {...override("box24")}>
					<Box {...override("box25")}>
						<Text {...override("text11")} />
					</Box>
				</Box>
			</Box>
		</Box>
		<Box {...override("box26")}></Box>
		{children}
	</Box>;
};

Object.assign(Gridstructure, { ...Box,
	defaultProps,
	overrides
});
export default Gridstructure;