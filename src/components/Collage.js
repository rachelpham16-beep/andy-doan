import React from "react";
import { Box } from "@quarkly/widgets";

const EmbedCSS = () => {
	return <Box>
		            
		<style>
			                
			{`
                /* Container for your collage */
                .collage {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr); /* 3 columns */
                    gap: 5px; /* space between images */
                }

                /* Make images flow naturally in their grid cells */
                .collage img {
                    width: 100%;
                    height: auto;
                    display: block;
                    object-fit: cover;
                }

                /* Responsive adjustments */
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

export default EmbedCSS;