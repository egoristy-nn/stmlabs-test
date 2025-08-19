import { Box } from "@mui/material"
import CustomFilter from "../components/filter/CustomFilter"
import CustomTable from "../components/table/CustomTable"
import { useState, useMemo } from "react"

const HomePage = ({ users }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Фильтрация пользователей
  const filteredUsers = useMemo(() => {
    if (!searchQuery.trim()) return users;
    
    const query = searchQuery.toLowerCase().trim();
    return users.filter(user => {
      const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
      const email = user.email.toLowerCase();
      const location = `${user.location.city} ${user.location.country}`.toLowerCase();
      const phone = user.phone.toLowerCase();
      
      return fullName.includes(query) || 
             email.includes(query) || 
             location.includes(query) || 
             phone.includes(query);
    });
  }, [users, searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div style={{background: '#f2f2f2', minHeight: '100vh', padding: '20px'}}>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={8}>
        <CustomFilter onSearch={handleSearch} />
        <CustomTable users={filteredUsers} />
      </Box>
    </div>
  );
}

export default HomePage;