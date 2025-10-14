import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box } from "@quarkly/widgets";
import Buttonshomepage from "./Buttonshomepage";
const defaultProps = {
	"min-width": "100px",
	"min-height": "100px",
	"phone-width": "100%",
	"phone-height": "auto",
	"phone-display": "grid",
	"phone-align-items": "center",
	"phone-justify-items": "center",
	"phone-justify-content": "center",
	"phone-align-content": "start",
	"phone-min-height": 0,
	"tablet-margin": "5px 0px 5px 0px",
	"desktop-height": "75px",
	"desktop-align-content": "center"
};
const overrides = {
	"buttonshomepage": {
		"kind": "Buttonshomepage",
		"props": {}
	}
};

const Sectionforbutton = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Buttonshomepage {...override("buttonshomepage")} />
		{children}
	</Box>;
};

Object.assign(Sectionforbutton, { ...Box,
	defaultProps,
	overrides
});
export default Sectionforbutton;