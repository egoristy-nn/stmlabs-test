import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(
  name,
  picture,
  location,
  email,
  phone,
  registrationDate
) {
  return { name, picture, location, email, phone, registrationDate };
}

const rows = [
    createData('Egor', 'picture', 'location', 'email', 'phone', 'registrationDate'),
    createData('Egor', 'picture', 'location', 'email', 'phone', 'registrationDate'),
    createData('Egor', 'picture', 'location', 'email', 'phone', 'registrationDate'),
]

const CustomTable = () => {
  return (
    <TableContainer >
      <Table>
        <TableHead sx={{ backgroundColor: '#f2f2f2'}}>
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
          {rows.map((user) => (
            <TableRow
              key={user.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align='center'>
                {user.name}
              </TableCell>
              <TableCell align='center'>{user.picture}</TableCell>
              <TableCell align='center'>{user.location}</TableCell>
              <TableCell align='center'>{user.email}</TableCell>
              <TableCell align='center'>{user.phone}</TableCell>
              <TableCell align='center'>{user.registrationDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomTable