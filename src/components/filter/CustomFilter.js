import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from 'react';

const CustomFilter = () => {
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleReset = () => {
        setValue('');
    };

    return (
        <Box display={'flex'} gap={1}>
            <TextField value={value} onChange={handleChange} id="outlined-basic" variant="outlined" />
            <Button onClick={handleReset} variant="contained">Сбросить</Button>
        </Box>
    );
};
export default CustomFilter;