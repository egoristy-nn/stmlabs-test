import { Box } from "@mui/material"
import CustomFilter from "../components/filter/CustomFilter"
import CustomLoader from "../components/loader/CustomLoader"
import CustomTable from "../components/table/CustomTable"

const HomePage = () => {
    return (
        <div backgroundColor={'#f2f2f2'} height={'100vh'} textAlign={'center'}>
            <Box margin={'20px'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={8}>
                <CustomFilter />
                <CustomTable />
            </Box>
        </div>
    )
}

export default HomePage