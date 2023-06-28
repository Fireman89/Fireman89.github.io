import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import selfpic from '../image/selfpic-cropped.jpg';
import useWindowSize from "../hook/useWindowSize";

const IntroBlock: React.FC = () => {
    const windowSize = useWindowSize();
    const isWide = windowSize[1] > 700;
    
    return (
    <div>
    <Grid container spacing={2} direction="column" alignItems="center" sx={{ maxWidth: "800px", margin: "auto"}}>
        <Grid container 
            direction={isWide ? "row" : "column-reverse"}
            justifyContent="space-between"
            alignContent="center"
            alignItems="center"
            marginTop={1}
            >
            <Grid container direction="row" sx={{ position: "relative" }}>
                <Grid sx={{ margin: "auto" }}>
                    <Typography fontSize={isWide ? "72px" : "60px"} sx={{ fontFamily: "Courier New", whiteSpace: "nowrap"}}>
                        Sam Hobbs
                    </Typography>
                    <Typography sx={{ fontFamily: "Courier New", fontSize: "24px", color: "#39ff14"}}>
                        Let's Write the Future
                    </Typography>
                </Grid>
            </Grid>
            <Grid maxWidth="200px">
                <img src={selfpic} alt="self" style={{ maxWidth: "200px" }}/>
            </Grid>
        </Grid>
        <Grid sx={{ maxWidth: "600px", margin: "auto" }}>            
            <Typography sx={{ fontFamily: "Courier New"}}>
                Software Developer with 3+ years managing projects.
                Experienced in several frameworks and cloud technologies.
            </Typography>
        </Grid>
    </Grid>
    </div>
    );
}

export default IntroBlock;