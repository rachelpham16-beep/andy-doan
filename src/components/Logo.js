import React from "react";
import { useOverrides } from "@quarkly/components";
import { Image, Box } from "@quarkly/widgets";
const defaultProps = {
	"min-width": "100px",
	"min-height": "100px",
	"sm-width": "25%",
	"sm-display": "flex",
	"sm-justify-items": "end",
	"sm-align-items": "flex-start",
	"sm-flex-direction": "row",
	"sm-justify-content": "flex-start"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"sm-width": "25%",
			"sm-display": "grid",
			"sm-justify-items": "start"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/68d745af90a2bb0024b9041d/images/andylogowhite.png?v=2025-09-28T04:07:18.616Z",
			"display": "flex",
			"width": "120px",
			"flex": "0 0 auto",
			"order": "0",
			"height": "100px",
			"justify-content": "flex-start",
			"sm-width": "40px",
			"sm-margin": "0px 0px 0px 0px",
			"sm-align-self": "flex-start",
			"sm-justify-content": "center",
			"sm-align-items": "center",
			"sm-text-align": "center"
		}
	}
};

const Logo = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Box {...override("box")}>
			<Image {...override("image")} />
		</Box>
		{children}
	</Box>;
};

Object.assign(Logo, { ...Box,
	defaultProps,
	overrides
});
export default Logo;