import React from "react";
import { useOverrides } from "@quarkly/components";
import { Button, LinkBox } from "@quarkly/widgets";
const defaultProps = {
	"href": "/music",
	"phone-href": "/music",
	"desktop-background": "rgba(255, 255, 255, 0.85)",
	"desktop-height": "40px",
	"desktop-width": "120px",
	"desktop-border-radius": "4px",
	"desktop-opacity": "2",
	"desktop-border-color": "rgba(0, 0, 0, 0)",
	"desktop-cursor": "auto",
	"desktop-hover-background": "rgba(88, 109, 142, 0.76)",
	"desktop-hover-color": "#ebebeb"
};
const overrides = {
	"button": {
		"kind": "Button",
		"props": {
			"phone-background": "rgba(0, 119, 204, 0)",
			"phone-font": "normal 300 5px/1.5 --fontFamily-googleAzeretMono",
			"phone-border-color": "rgba(255, 255, 255, 0.37)",
			"phone-border-width": "0.5px",
			"phone-border-style": "solid",
			"phone-padding": "4px 10px 4px 10px",
			"phone-border-radius": "0px",
			"phone-color": "rgba(247, 251, 255, 0.72)",
			"tablet-font": "300 10px/100% \"Azeret Mono\", monospace",
			"tablet-margin": "5px 0px 5px 0px",
			"tablet-padding": "10px 15px 10px 15px",
			"background": "rgba(0, 119, 204, 0)",
			"href": "/music",
			"desktop-color": "#010101",
			"desktop-font": "normal 200 12px/1 \"Azeret Mono\", monospace",
			"desktop-padding": "10px 15px 10px 15px",
			"desktop-text-align": "center",
			"desktop-border-color": "rgba(255, 255, 255, 0)",
			"desktop-hover-color": "#ffffff"
		}
	}
};

const Buttonshomepage = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <LinkBox {...rest}>
		<Button {...override("button")}>
			MUSIC ›
		</Button>
		{children}
	</LinkBox>;
};

Object.assign(Buttonshomepage, { ...LinkBox,
	defaultProps,
	overrides
});
export default Buttonshomepage;