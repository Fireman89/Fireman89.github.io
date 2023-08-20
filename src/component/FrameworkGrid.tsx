import { Paper, Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

const frameworkList = ['Spring', 'React', 'Node.js', 'Next.js', 'AngularJS', 'MySQL', 
    'Unix', 'Windows', 'AWS EC2', 'S3', 'CodePipeline', 'C/C++', 'Java SE', 
    'x86 Assembly', 'Python', 'HTML5', 'CSS', 'JavaScript', 'TypeScript', 
    'Cucumber', 'Agile', 'DevOps', 'Docker', 'Scrum', 'Git', 
    'Jira', 'CI/CD', 'Networking', 'TCP/IP', 'RESTful APIs',
    'C#', '.NET'
]

const FrameworkGrid: React.FC = () => {
    const frameworks = frameworkList.sort();
    return (
        <Grid container spacing={1} justifyContent={"center"}>
            {frameworks.map(f =>
                <Grid>
                    <Paper component={Stack} justifyContent="center" sx={{ textAlign: "center", height: "50px", width: "100px", fontSize: "15px", color: "lightblue", backgroundColor: "#1A2027"}}>
                        {f}
                    </Paper>
                </Grid>
            )}
        </Grid>
    );
}

export default FrameworkGrid;