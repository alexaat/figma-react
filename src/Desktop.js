import { Stack, Box, AppBar, Toolbar, Typography, TextField, Button, Link, DialogContent, Dialog} from "@mui/material";
import MenuButton from './MenuButton.js'
import logo from './images/logo.jpeg';
import phones from './images/phones.png';
import magicLink from './images/magic_link.png';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

import {useState} from 'react';

const Desktop = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [open, setOpen] = useState(false);

    const handleSignUpClick = e => {
      console.log('')
      setOpen(true);
    }

    return (

      <>
      <Stack direction='column'>
          <AppBar position="static"  elevation={0} style={{ background: '#FFFFFF'}}>
            <Toolbar sx={{ justifyContent: "space-between"}}>
               
                  <Box component="img" alt="logo" src={logo} sx={{ height: '96px'}}></Box>
                  <Stack direction="row">
                    <MenuButton title="Join Firesides"/>
                    <MenuButton title="Partner with us"/>
                    <MenuButton title="Team"/>
                    <MenuButton title="Blog"/>
                    <Box sx={{borderLeft: 4, borderColor: '#eee', pl: 2}}>
                      <MenuButton title="Log In" color='white'/>
                      <MenuButton title="Create Account" color='black'/>
                    </Box>
                  </Stack>
            </Toolbar>
          </AppBar>

          <Stack direction='row' sx={{width: '100%', height: '100vh'}}>
            <Box sx={{borderRight: 4, borderColor: '#eee', height: '80%', width: '50%', display: "flex", justifyContent: 'center', alignItems: 'center'}}>
              <Box component='img' alt='phones' src={phones} width='400px' height='530px'></Box>
            </Box>
            <Box sx={{height: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'center', pl: '96px', pr: '256px' }}>
              <Typography variant="h2" gutterBottom>Land the dream job by showing your soft skills credentials</Typography>
              <Typography variant="h3"> Create your free talent wallet</Typography>
              
              <Stack spacing={2} sx={{mt: '36px', width:"60%"}} >
                <TextField label="Display Name" type='text' onChange={(e) => setName(e.target.value)}></TextField>
                <TextField label="Email address" type='email' onChange={(e) => setEmail(e.target.value)}></TextField>
                <Button
                 variant="text"
                 className='btn'
                 style={{ fontFamily: 'Roboto', fontSize: '28px', color: '#FFF' }}             
                 sx={{mr: 2, backgroundColor: '#222', borderRadius: '26px', height: '52px'}}
                 startIcon={<Box component='img' alt="magic link icon" src={magicLink} width='36px' height='36px'
                ></Box>}

                onClick={handleSignUpClick}
                 >Sign up with email</Button>
                
                <Typography variant="body1">Already have an account? <Link to='#'>Log in</Link></Typography>

              </Stack>           
            </Box>
          </Stack>




      </Stack>

    <Dialog open={open} sx={{m: 0, p: 0}}>
    <DialogContent sx={{width: '500px', height: '500px'}}>
      <Stack spacing={2} alignItems='center' justifyContent='center' height='100%'>
      <CheckCircleRoundedIcon sx={{width: '96px', height: '96px'}}/>
      <Typography variant='h5'>Thank you for signing up, {name}!</Typography>
      <Typography variant='h5'>Your magic link has been sent to your email.</Typography>
    </Stack>

    
    </DialogContent>
    </Dialog>

   </>
      );
}
 
export default Desktop;