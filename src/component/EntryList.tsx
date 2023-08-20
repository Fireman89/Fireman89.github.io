import { Box, Paper, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import EntryHeader from "./EntryHeader";
import cfbhIcon from '../image/cfbhicon.png'
import FrameworkGrid from "./FrameworkGrid";
import Footer from "./Footer";

import aws from "../image/aws.svg"
import mysql from "../image/mysql.svg"
import python from "../image/python.svg"
import react from "../image/react.svg"
import spring from "../image/spring.svg"

const cfbhDescription = 
`
Want to browse college football seasons and quickly pull up each school's games and logos?
I first built a Python scraper to save every NCAA season, game, and team  
to a MySQL database and 
scraped high-resoultion team logos to upload  
to an S3 bucket. Then, I built an AWS-hosted full-stack application with a React-based UI and Spring-based backend.
This new site allows you to select any season, showing every team and conference from that 
year with their logo at the time. You can then hover over the team's record and pull up all their games, 
opponents, and scores that season. All logos are owned by the schools and are used under Fair Use.
`
const cfbhLink = 'http://cfbhistory.net';
const cfbhProjectLink = 'https://github.com/Fireman89/cfbh-public';

const tmoDescription = 
`
Last year, T-Mobile commissioned us to help migrate their Digital Orders system from TIBCO 
to Spring. To help with this, I coordinated with other developers 
to ensure that API calls were consistent across both environments via Cucumber- & Java-based testing applications, 
Postman, and local development apps. The provided feedback sped up the migration process as the main development team 
could focus on the fixing inconsistencies between each. Additional contract work included a Python script allowing 
quick, customizable deletion of old GitLab branches and a Slack bot with similar functionality.
`
const tmoYears = 'Oct - Dec \'22'

const hclDescription =
`
Contract worker for client companies' technological and needs. 
Developed full stack capstone application on 10-person capstone team. 
Currently assisting Merck as a client. Previously worked with T-Mobile.
`
const hclYears = 'Jul \'22 - Pres.';
const cfbhImage = 'https://portfolio-app.s3.us-east-2.amazonaws.com/CFBH+Demo.gif';

const EntryList: React.FC = () => {
    return(
        <Stack direction="column" padding={1} paddingLeft={2} paddingRight={2} spacing={1} sx={{ maxWidth: "900px", margin: "auto", textAlign: "left" }}>
            <Typography sx={{ color: "lightblue", fontSize: "24px", fontFamily: "Courier New" }}>
                FEATURED
            </Typography>
            <Stack direction="column" spacing={1}>
                <EntryHeader 
                    title="CFBHistory"
                    icon={cfbhIcon}
                    link={cfbhLink}
                    projectLink={cfbhProjectLink}
                />
                <Typography sx={{ fontSize: "16px" }}>
                    {cfbhDescription}
                </Typography>
                <br/>
                <Grid container paddingBottom={1} spacing={1} justifyContent="center">
                    {[aws, react, spring, mysql].map(fwl => (
                        <Grid>
                        <Paper component={Box} display="flex" justifyContent="center" alignItems="center"
                            sx={{ height: "80px", width: "120px", backgroundColor: "#1A2027"}}>
                            <img src={fwl} alt="fwlogo" style={{ maxHeight: "40px", maxWidth: "100px" }}/>
                        </Paper>
                        </Grid>
                    ))}
                </Grid>
                <img src={cfbhImage} alt="blockImage"/>
            </Stack>
                        
            <Typography sx={{ color: "lightblue", fontSize: "24px", fontFamily: "Courier New" }}>
                EXPERIENCE
            </Typography>
            
            <EntryHeader
                title="T-Mobile"
                years={tmoYears}
            />            
            <Typography sx={{ fontSize: "16px" }}>
                {tmoDescription}
            </Typography>
            
            <EntryHeader
                title="HCLTech"
                years={hclYears}
            />        
            <Typography sx={{ fontSize: "16px" }}>
                {hclDescription}
            </Typography>
                      
            <br/>
            <Typography sx={{ color: "lightblue", fontSize: "24px", fontFamily: "Courier New" }}>
                EDUCATION
            </Typography>
            <EntryHeader
                title="Baylor University"
                years="Aug '18 - May '22"
            />
            <Typography sx={{ fontSize: "16px" }}>
                {"Bachelor of Science - Computer Science (GPA: 3.31)"}
            </Typography>

            <Typography sx={{ color: "lightblue", fontSize: "24px", fontFamily: "Courier New" }}>
                SKILLS
            </Typography>
            <FrameworkGrid/>
            <Footer/>
        </Stack>
    );
}

export default EntryList;