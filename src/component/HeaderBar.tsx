import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material";
import linkedin from '../image/linkedin.png'

const HeaderBar: React.FC = () => {
    return (
    <div>
    <AppBar position="static"  sx={{ backgroundColor: "black" }}>
        <Toolbar style={{ margin: '0 auto', width: '90%' }} sx={{ justifyContent: "space-between" }}>
            <Box>
                <a href="https://www.linkedin.com/in/samuel-hobbs-bu/" style={{color: "white", textDecoration: "none"}} target="_blank" rel="noopener noreferrer">
                    {/* <img src={linkedin} alt="linkedin" width="30" height="30"/>  */}
                    LinkedIn
                </a>
            </Box>
            {/* <Stack direction="row" spacing={3}>
                <Typography>
                    About
                </Typography>
                <Typography>
                    Projects
                </Typography>
                <Typography>
                    Photos
                </Typography>
            </Stack> */}
        </Toolbar>
        
    </AppBar>

    </div>
    );
}

export default HeaderBar;