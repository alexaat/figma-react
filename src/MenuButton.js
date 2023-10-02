import { Button, Typography } from '@mui/material';
const MenuButton = ({ title, color }) => {

    if (color === 'black') {
        return (
            <Button
                className='btn'
                variant='text'
                style={{ fontSize: '1.4vw', color: '#FFF' }}
                sx={{ mr: 2, backgroundColor: '#222', borderRadius: '26px', height: '52px' }}
            >
                {title}
            </Button>

        )
    }

    if (color === 'white') {
        return (
            <Button
                className='btn'
                variant='text'
                style={{fontSize: '1.4vw', color: '#222' }}
                sx={{ mr: 2, borderColor: '#222', borderRadius: '26px', border: 1, height: '52px' }}
            >
                {title}
            </Button>

        )
    }

    return (
        <Button
            className='btn'
            variant='text'
            style={{ fontSize: '1.4vw', color: '#222' }}
            sx={{ mr: 2 }}
        >
            {title}
        </Button>

    );
}

export default MenuButton;