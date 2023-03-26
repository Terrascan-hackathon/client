import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const TimeSelector = () => {

    const [date, setDate] = React.useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(date);
    }



    return (
        /* ------------------------ TIME SELECTOR COMPONENT ------------------------ */
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                width: '100%',
                height: '100%'

            }}
            noValidate
            autoComplete="off"

        >
            <TextField id="date" label="Date" variant="outlined" type="date" onChange={(e) => setDate(e.target.value)} />
            <Button variant="contained" onClick={(e) => handleSubmit(e)}>SUBMIT </Button>
        </Box>
    )
}

export default TimeSelector;