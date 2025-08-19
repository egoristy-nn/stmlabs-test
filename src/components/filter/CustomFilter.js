import { Box, Button, TextField } from '@mui/material';
import React from 'react';

const CustomFilter = ({onSearch}) => {
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        onSearch(event.target.value);
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