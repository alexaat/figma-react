import { Stack, Box, AppBar, Toolbar, Typography } from "@mui/material";
import MenuButton from './MenuButton.js'
import logo from './images/logo.jpeg';

const Desktop = () => {
    return (
      <Stack direction='column'>
          <AppBar position="static"  elevation={0} style={{ background: '#FFFFFF'}}>
            <Toolbar sx={{ justifyContent: "space-between"}}>
               
                  <Box component="img" alt="logo" src={logo} sx={{ height: '96px'}}></Box>
                  <Box>
                    <MenuButton title="Join Firesides"/>
                    <MenuButton title="Partner with us"/>
                    <MenuButton title="Team"/>
                    <MenuButton title="Blog"/>

                    <MenuButton title="Log In" color='white'/>
                    <MenuButton title="Create Account" color='black'/>

                    


                  </Box>
   
               
              
            </Toolbar>
          </AppBar>        
      </Stack>
      );
}
 
export default Desktop;