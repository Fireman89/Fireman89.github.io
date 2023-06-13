import { Stack, Typography } from "@mui/material";
import DataBlock from "./DataBlock";
import cfbhIcon from '../image/cfbhicon.png'
import FrameworkGrid from "./FrameworkGrid";
import Footer from "./Footer";

const cfbhDescription = 
`
Programmed and maintained AWS-hosted application for 100+ hours over 2 months. 
Allows browsing of college football team records, schedules, and logos via intuitive, React-based UI. 
Hosted via EC2 instances and S3 buckets, CI/CD via CodePipeline, CodeBuild, CodeDeploy, and GitHub. 
Utilizes Python web scraper; React, Spring, and MySQL frameworks; and PM2, Nginx server technologies.
(All logos belong to the NCAA and their respective schools. Used under Fair Use for educational purposes.)
`
const cfbhLink = 'http://cfbhistory.net';
const cfbhProjectLink = 'https://github.com/Fireman89/cfbh-public';

const tmoDescription = 
`
Thoroughly tested and debugged RESTful APIs for migrating Digital Order system. 
Ensured consistency between API requests across redundant system environments. 
Developed Slack Bot integrated with GitLab, allowing quick deletion of old, merged branches.
`
const tmoYears = 'Nov 2022 - Pres'

const hclDescription =
`
Contract worker for client companies' technological and needs. 
Developed full stack capstone application on 10-person capstone team. 
Currently assisting T-Mobile as a client.
`
const hclYears = 'Jul 2022 - Pres'

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
            <Typography sx={{ color: "lightblue", fontSize: "24px", fontFamily: "Courier New" }}>
                OTHER WORK
            </Typography>
            <DataBlock
                title="Baylor Intramurals Official"
                description="Managed five major intramural sports, 
                    including flag football and basketball, as referee. 
                    Communicated with other referees to ensure games were officiated correctly and on-time. 
                    Refined analysis skills and patience in a fast-paced work environment."
                years="Jan 2020 - May 2022"
            />
            <DataBlock
                title="Shipt Retail Shopper"
                description="Delivered and coordinated over 200 retail orders with customers. 
                    Ensured high customer satisfaction through speedy delivery and multitasking."
                years=""
            />
            <DataBlock
                title="Subway Sandwich Artist"
                description="Coordinated with coworkers and management to sell sandwiches and maintain the restaurant. 
                    Developed communication and teamwork skills in a fast-paced work environment."
                years="May 2019 - Aug 2019"
            />
            <Footer/>
        </Stack>
    );
}

export default Data;