import {Stack, TextField, InputAdornment,  IconButton, Box, Button, Typography} from '@mui/material';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import magicLink from './images/magic_link.png';

const LogInComponent = ({name, setName, email, setEmail, handleSignUpClick, nameTextFieldFocus, emailTextFieldFocus, submitButtonText}) => {
    return (

        <Stack spacing={'12px'} sx={{width: '100%'}}>
        <TextField
                label="Display Name"
                type='text'
                onChange={(e) => setName(e.target.value)}
                value={name}
                id="text-field-name"
                InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                        {nameTextFieldFocus &&
                         <IconButton id="clear-name-icon-name"  sx={{p: 0}}>
                            <CancelRoundedIcon sx={{ color: '#222' }}/>
                         </IconButton>                           
                         }
                    </InputAdornment>
                  ),
                  sx : {borderRadius: '10px', border: '1px', borderColor: '#222'}
                 }}              
                 />                
              
              <TextField
                label="Email address"
                type='email'
                onChange={ e => setEmail(e.target.value)}
                value={email}
                id="text-field-email"
                InputProps={{
                  endAdornment: (
                  <InputAdornment position="end">
                      {emailTextFieldFocus &&
                       <IconButton id="clear-name-icon-email" sx={{p: 0}}>
                          <CancelRoundedIcon sx={{ color: '#222' }}/>
                       </IconButton>                         
                       }
                  </InputAdornment>
                ),
                sx :
                 {borderRadius: '10px', border: '1px', borderColor: '#222'}
               }}                   
                />   
          
          <Button
                variant="text"
                className='btn'
                style={{fontSize: '28px', color: '#FFF' }}
                sx={{ mr: 2, backgroundColor: '#222', borderRadius: '24px', height: '48px', ':hover': {
                  bgcolor: '#666'

                }}}
                startIcon={<Box component='img' alt="magic link icon" src={magicLink} width='28px' height='28px' sx={{ml: 1}}></Box>}
                onClick={handleSignUpClick}
                >
                  <Typography component='div' noWrap >{submitButtonText}</Typography>              
              </Button>
        </Stack>
    );
}
 
export default LogInComponent;