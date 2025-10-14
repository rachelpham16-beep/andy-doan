import React from "react";
import { Box } from "@quarkly/widgets";

const EmbedStyle = () => {
	return <Box>
		            
		<style>
			{`
                .collage {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 16px;
                }

                .collage img {
                    width: 100%;
                    height: auto;
                    display: block;
                    object-fit: cover;
                }

                @media (max-width: 1024px) {
                    .collage {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 600px) {
                    .collage {
                        grid-template-columns: 1fr;
                    }
                }
            `}
		</style>
		        
	</Box>;
};

export default EmbedStyle;