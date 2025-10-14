import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "background": "#000000",
        "overflow-x": "hidden",
        "width": "100%",
        "height": "auto"
    },
    "index": {
        "background": "#000000",
        "overflow-x": "hidden",
        "width": "100%",
        "height": "auto"
    },
    "music": {
        "background": "#000000",
        "overflow-x": "hidden",
        "width": "100%",
        "height": "auto"
    },
    "portraits": {
        "background": "#000000",
        "overflow-x": "visible",
        "width": "100%",
        "height": "auto",
        "display": "flex",
        "overflow-y": "visible"
    },
    "sports": {
        "background": "#000000",
        "overflow-x": "hidden",
        "width": "100%",
        "height": "auto"
    },
    "bts": {
        "background": "#000000",
        "overflow-x": "hidden",
        "width": "100%",
        "height": "auto"
    },
    "film": {
        "background": "#000000",
        "overflow-x": "hidden",
        "width": "100%",
        "height": "auto"
    },
    "landscape": {
        "background": "#000000",
        "overflow-x": "hidden",
        "width": "100%",
        "height": "auto"
    },
    "automotive": {
        "background": "#000000",
        "overflow-x": "hidden",
        "width": "100%",
        "height": "auto"
    },
    "contact": {
        "background": "#000000",
        "overflow-x": "hidden",
        "width": "100%",
        "height": "auto"
    }
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
