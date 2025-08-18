import { Box } from "@mui/material"
import CustomFilter from "../components/filter/CustomFilter"
import CustomTable from "../components/table/CustomTable"

const HomePage = () => {
    return (
        <div style={{background: '#f2f2f2', height: '100vh', textAlign: 'center', paddingTop: '20px'}}>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={8}>
                <CustomFilter />
                <CustomTable />
            </Box>
        </div>
    )
}

export default HomePage