import { Stack, Typography } from "@mui/material";
import DataBlock from "./DataBlock";
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
const tmoYears = 'Nov 2022 - Pres.'

const hclDescription =
`
Contract worker for client companies' technological and needs. 
Developed full stack capstone application on 10-person capstone team. 
Currently assisting T-Mobile as a client.
`
const hclYears = 'Jul 2022 - Pres.';
const cfbhImage = 'https://portfolio-app.s3.us-east-2.amazonaws.com/CFBH+Demo.gif';

const Data: React.FC = () => {
    return(
        <Stack direction="column" spacing={2} sx={{ width: "900px", margin: "auto", textAlign: "left"}}>
            <Typography sx={{ color: "lightblue", fontSize: "24px", fontFamily: "Courier New" }}>
                FEATURED
            </Typography>
            <DataBlock 
                title="CFBHistory"
                icon={cfbhIcon}
                description={cfbhDescription}
                link={cfbhLink}
                projectLink={cfbhProjectLink}
                fwLogos={[aws, react, spring, mysql]}
                blockImage={cfbhImage}
            />
            <Typography sx={{ color: "lightblue", fontSize: "24px", fontFamily: "Courier New" }}>
                CURRENT JOB
            </Typography>
            <DataBlock
                title="T-Mobile"
                description={tmoDescription}
                years={tmoYears}
            />
            <DataBlock
                title="HCLTech"
                description={hclDescription}
                years={hclYears}
            />            
            <Typography sx={{ color: "lightblue", fontSize: "24px", fontFamily: "Courier New" }}>
                EDUCATION
            </Typography>
            <DataBlock
                title="Baylor University"
                description="Bachelor of Science - Computer Science (GPA: 3.31)"
                years="Aug 2018 - May 2022"
            />            
            <Typography sx={{ color: "lightblue", fontSize: "24px", fontFamily: "Courier New" }}>
                SKILLS
            </Typography>
            <FrameworkGrid/>
            <Footer/>
        </Stack>
    );
}

export default Data;