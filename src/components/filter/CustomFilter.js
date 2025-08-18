import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const CustomFilter = () => {
    return (
        <Box display={'flex'} gap={1}>
            <TextField id="outlined-basic" variant="outlined" />
            <Button variant="contained">Сбросить</Button>
        </Box>
    );
};
export default CustomFilter;