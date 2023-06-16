import { Box, Paper, Stack, Typography } from "@mui/material";
import githubIcon from '../image/github-mark-white.svg'

interface Props {
    title: string;
    icon?: string;
    description?: string;
    link?: string;
    projectLink?: string;
    fwLogos?: string[];
    years?: string;
}

const DataBlock: React.FC<Props> = ({ title, icon, description, link, projectLink, fwLogos, years }) => {
    return (
    <Stack direction="column" spacing={1}>
        <Stack direction="row" spacing={2} sx={{ height: "45px", justifyContent: "space-between", alignItems: "center" }}>
            {icon ?
                <Box sx={{ display: "flex"}}>
                    <img src={icon} alt="icon" style={{ maxHeight: "40px" }}/> 
                </Box> : ''
            }
            <Box sx={{ height: "32px" }}>
                {title}
            </Box>            
            <hr style={{ flexGrow: 1, justifyContent: "center", height: "1px", backgroundColor: "white" }}/>              
            {link ?
                (         
                <Box sx={{ height: "26px", fontSize: "20px"}}> 
                    <a href={link} style={{color: "white", textDecoration: "none"}} target="_blank" rel="noopener noreferrer">
                        {link}
                    </a>          
                </Box>) : ''
            }          
            {projectLink ? 
                (<Box sx={{}}>
                    <a href={projectLink} target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="github" style={{ maxHeight: "30px" }}/>
                </a>          
                </Box>) : ''
            }                         
            {years ?
                (
                <Box sx={{ height: "26px", fontSize: "20px"}}>    
                    {years}   
                </Box>
                ) : ''
            }
        </Stack>
        <Typography sx={{ textAlign: "justify" }}>
            {description}
        </Typography>
        <br></br>
        <Stack direction="row" spacing={1} justifyContent="center">
        {fwLogos ? (
            fwLogos.map(fwl => (
                <Paper component={Box} display="flex" justifyContent="center" alignItems="center" sx={{ height: "80px", width: "120px", backgroundColor: "#1A2027"}}>
                    <img src={fwl} alt="fwlogo" style={{ maxHeight: "40px", maxWidth: "100px" }}/>
                </Paper>
            ))
            ) : ''
        }
        </Stack>
    </Stack>
    );
}

export default DataBlock;