import { Typography, Container, Stack } from '@mui/material';
import React from 'react';
import format from 'date-fns/format';


const currDate = format(new Date(), 'EEEE, LLLL dd, yyyy');

const Header = () => {
    return (
        <div style={{ backgroundColor: '#040404' }}>
            <Container maxWidth='lg' sx={{ padding: '10px' }}>

                <Stack direction='row' alignItems='center' gap={1} justifyContent='center'>
                    <Typography variant='h5' align='center' sx={{ color: '#f4ae04', fontWeight: 'bold' }}>
                        NASA:
                    </Typography>
                    <Typography variant='h5' align='center' sx={{ color: '#2596be', fontWeight: 'bold' }}>
                        Picture of the Day
                    </Typography>
                </Stack>
                <Typography variant='h5' align='center' sx={{ color: '#2596be', fontWeight: 'bold' }}>
                    {currDate}
                </Typography>
            </Container>
        </div>
    )
}

export default Header
