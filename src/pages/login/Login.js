import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const Login = () => {
  return (
  <Box p={2} sx={{display:'flex', justifyContent:"center", height:"100vh", alignItems:'center'}}>
    <Paper elevation={3} >
      <Box p={2} maxWidth="sm">
        <Typography align="center" variant="h3" component="span">Login <Typography variant="h3" component="h1" display="inline" color="primary">Chat</Typography></Typography>
        <Box 
          sx={{'& .MuiTextField-root': { my: 1}, display:'flex', flexDirection: 'column', alignItems:'flex-start'}} 
          component="form" 
          noValidate autoComplete="off" >
            <TextField required id="username" label="User Name" size="small"/>
            <TextField required id="password" type="password" label="Password" size="small"/>

            <Link href="#" variant="caption" mt={1} underline="hover">Forgot Password?</Link>
            <Link href="#" variant="caption" mb={2} underline="hover">Create Account</Link>
            
            <Button variant="contained" >Login</Button>
            
        </Box>
      </Box>
    </Paper>
  </Box>
  )
}

export default Login