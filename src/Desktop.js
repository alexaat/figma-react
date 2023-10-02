import { Stack, Box, AppBar, Toolbar, Typography, TextField, Button, Link, DialogContent, Dialog } from "@mui/material";
import MenuButton from './MenuButton.js'
import logo from './images/logo.jpeg';
import phones from './images/phones.png';
import magicLink from './images/magic_link.png';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import useWindowSize from "./useWindowSize.js";

import { useState } from 'react';

const Desktop = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);
 

  console.log(name)

  const handleSignUpClick = e => {
    if(name){
      setOpen(true);
      setTimeout(()=> {
        setName('');
        setEmail('');
        setOpen(false);
      }      
    , 3000);
    }

  }
  const size = useWindowSize();
  return (
    <>

      {size.width > 768 &&
        <Stack direction='column' className='main'>
          <AppBar position="static" elevation={0} style={{ background: '#FFFFFF' }}>
            <Toolbar sx={{ justifyContent: "space-between" }} >

              <Box component="img" alt="logo" src={logo} sx={{ height: '96px' }}></Box>
              <Stack direction="row">
                <MenuButton title="Join Firesides" />
                <MenuButton title="Partner with us" />
                <MenuButton title="Team" />
                <MenuButton title="Blog" />
                <Box sx={{ borderLeft: 4, borderColor: '#eee', pl: 2 }}>
                  <MenuButton title="Log In" color='white' />
                  <MenuButton title="Create Account" color='black' />
                </Box>
              </Stack>
            </Toolbar>
          </AppBar>

          <Stack direction='row' sx={{ width: '100%', height: '100vh' }}>


            <Box sx={{ borderRight: 4, borderColor: '#eee', height: '80%', width: '100%', display: "flex", justifyContent: 'center', alignItems: 'center' }}>
              <Box component='img' alt='phones' src={phones} width='20vw'></Box>
            </Box>

            <Box sx={{ height: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'center', pl: '96px', pr: '256px' }}>

              <Box>
                <Typography component='div' gutterBottom sx={{fontSize: '3vw'}}>Land the dream job by showing your soft skills credentials</Typography>
                <Typography component='div' sx={{fontSize: '2vw'}}> Create your free talent wallet</Typography>
              </Box>

              <Stack spacing={2} sx={{ mt: '36px', width: "60%" }} >
                <TextField label="Display Name" type='text' onChange={(e) => setName(e.target.value)} value={name}></TextField>
                <TextField label="Email address" type='email' onChange={(e) => setEmail(e.target.value)} value={email}></TextField>
                <Button
                  variant="text"
                  className='btn'
                  style={{fontSize: '1vw', color: '#FFF' }}
                  sx={{ mr: 2, backgroundColor: '#222', borderRadius: '26px', height: '52px', ':hover': {
                    bgcolor: '#666'

                  } }}
                  startIcon={<Box component='img' alt="magic link icon" src={magicLink} width='1vw' height='1vw'></Box>}
                  onClick={handleSignUpClick}
                  >

                  Sign up with email
                </Button>
                <Box sx={{width: '100%', textAlign: 'center'}}>
                <Typography variant="body1" sx={{fontSize: '0.9vw'}}>Already have an account? <Link to='#' color='#222' sx={{':hover': {
                    cursor: 'pointer'
                  }}}>Log in</Link></Typography>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      }


      {size.width <= 768 &&
        <Stack width='100%' height='100vh' sx={{boxSizing: 'border-box', justifyContent:'flex-end', px: 1, pb:1}}>
          <Stack spacing={1} sx={{width: '100%'}}>
            <TextField label="Display Name" type='text' onChange={(e) => setName(e.target.value)}></TextField>
            <TextField label="Email address" type='email' onChange={(e) => setEmail(e.target.value)}></TextField>
            
            <Button
                  variant="text"
                  className='btn'
                  style={{fontSize: '2vw', color: '#FFF' }}
                  sx={{ mr: 2, backgroundColor: '#222', borderRadius: '26px', height: '52px', ':hover': {
                    bgcolor: '#666'

                  } }}
                  startIcon={<Box component='img' alt="magic link icon" src={magicLink} width='2vw' height='2vw'></Box>}
                  onClick={handleSignUpClick}
                  >
                  Continue with Magic Link
                </Button>
          </Stack>

        </Stack>
      }

      <Dialog open={open}  sx={{m: 0, p: 0, }} fullWidth PaperProps={{ sx: { height: 350 }}}>
        <DialogContent>
          <Stack spacing={2} alignItems='center' justifyContent='center' height='100%' width='100%'>
            <CheckCircleRoundedIcon sx={{ width: '8vw', height: '8vw'}} />          
            <Typography component='div' sx={{fontSize: '22xp'}}>Thank you for signing up, {name}!</Typography>
            <Typography component='div' sx={{fontSize: '18px'}}>Your magic link has been sent to your email.</Typography>           
          </Stack>
        </DialogContent>
      </Dialog>

    </>
  );
}

export default Desktop;