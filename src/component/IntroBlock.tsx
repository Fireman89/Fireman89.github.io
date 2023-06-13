import { Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import selfpic from '../image/selfpic-cropped.jpg';

const IntroBlock: React.FC = () => {
    return (
    <div>
    <Grid container spacing={2} direction="column" sx={{ width: "750px", margin: "auto"}}>
        <Grid container xs={9} spacing={4} sx={{ justifyContent: "space-between", marginTop: 1 }}>
            <Grid container xs={9} direction="row" sx={{position: "relative" }}>
                <Grid sx={{ margin: "auto" }}>
                    <Typography sx={{ fontFamily: "Courier New", fontSize: "72px", whiteSpace: "nowrap"}}>
                        Sam Hobbs
                    </Typography>
                    <Typography sx={{ fontFamily: "Courier New", fontSize: "24px", color: "#39ff14"}}>
                        Let's Write the Future
                    </Typography>
                </Grid>
            </Grid>
            <Grid xs={3}>                
                <img src={selfpic} alt="self" style={{ maxHeight: "400px"}}/>
            </Grid>
        </Grid>
        <Grid sx={{ width: "600px", margin: "auto"}}>            
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