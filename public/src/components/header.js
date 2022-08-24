import { Typography,Box } from "@mui/material";
import Create from "./input";
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const Header = () => {
    return (
        <Box display="flex" justifyContent="space-between" backgroundColor='#222' padding='10px'>
            <Box display='flex'>
                <TaskAltIcon style={{color: '#7ab530', marginTop:'auto',marginBottom: 'auto',marginRight: '5px' }}/>
                <Typography variant="h5"  fontWeight='bold' style={{color: '#7ab530'}}>Employee <span style={{color: '#fff'}}>Taskz</span></Typography>
            </Box>
            <Create />
        </Box>
      );
}
 
export default Header;
