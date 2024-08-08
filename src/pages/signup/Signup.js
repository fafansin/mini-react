import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';  
import FormControl from '@mui/material/FormControl';  

const Signup = () => {
  return (
  <Box p={2} sx={{display:'flex', justifyContent:"center", height:"100vh", alignItems:'center'}}>
    <Paper elevation={3} >
      <Box p={2}>
        <Typography 
          align="center" 
          variant="h3"           
          component="span">
            SignUp <Typography variant="h3" component="h1" display="inline" color="primary">Chat</Typography></Typography>
        <Box 
          sx={{
            '& .MuiTextField-root': { my: 1}, 
            display:'flex', 
            flexDirection: 'column'}} 
          component="form" 
          noValidate autoComplete="off"
          mt={1}>

            <TextField required id="fullname" label="Full Name" defaultValue="juan dela cruz" size="small"/>
            <TextField required id="username" label="User Name" defaultValue="juandelacruz" size="small"/>
            <TextField required id="password" type="password" label="Password" size="small"/>
            <TextField required id="confirmPassword" type="confirmPassword" label="Confirm Password" size="small"/>

            <FormControl size="small">
              <FormLabel id="radioLabel">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="radioLabel"
                defaultValue="male"
                name="radio-buttons-group"
              >
                <Box sx={{display:"flex"}}>
                  <FormControlLabel value="male" control={<Radio size="small" />} label="Male" />
                  <FormControlLabel value="female" control={<Radio size="small" />} label="Female" />
                </Box>
                
                
              </RadioGroup>
            </FormControl>

            <Link href="#" variant="caption" mt={1} underline="hover">Already have an account?</Link>
            
            <Button variant="contained" >Login</Button>
            
        </Box>
      </Box>
    </Paper>
  </Box>
  )
}

export default Signup