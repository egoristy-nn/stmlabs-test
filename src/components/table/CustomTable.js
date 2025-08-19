import { Tooltip, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const CustomTable = ({ users }) => {
  if (users.length === 0) {
    return (
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        height="200px"
      >
        <Typography variant="h6" color="textSecondary">
          No users found matching your search
        </Typography>
      </Box>
    );
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }} align='center'>Name</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align='center'>Picture</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align='center'>Location</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align='center'>Email</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align='center'>Phone</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align='center'>Registration date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.login.uuid}
              sx={{ 
                '&:last-child td, &:last-child th': { border: 0 },
                '&:hover': { backgroundColor: '#fafafa' }
              }}
            >
              <TableCell component="th" scope="row" align='center'>
                {`${user.name.title} ${user.name.first} ${user.name.last}`}
              </TableCell>
              <TableCell align='center'>
                <Tooltip
                  title={
                    <Box
                      component="img"
                      src={user.picture.large}
                      alt={`${user.name.first} ${user.name.last}`}
                      sx={{
                        width: 150,
                        height: 150,
                        borderRadius: '8px',
                        objectFit: 'cover'
                      }}
                    />
                  }
                  arrow
                  placement="top"
                  componentsProps={{
                    tooltip: {
                      sx: {
                        backgroundColor: 'transparent',
                        padding: 0,
                        boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                      }
                    }
                  }}
                >
                  <img 
                    src={user.picture.thumbnail} 
                    alt={`${user.name.first} ${user.name.last}`}
                    style={{ 
                      borderRadius: '50%', 
                      width: '50px', 
                      height: '50px',
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                    }}
                  />
                </Tooltip>
              </TableCell>
              <TableCell align='center'>
                {`${user.location.city}, ${user.location.country}`}
              </TableCell>
              <TableCell align='center'>{user.email}</TableCell>
              <TableCell align='center'>{user.phone}</TableCell>
              <TableCell align='center'>
                {new Date(user.registered.date).toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomTable;