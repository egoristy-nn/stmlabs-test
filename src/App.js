import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { useEffect, useState } from 'react';
import { getUsers } from './api/Api';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //       async function fetchUsers () {
  //           try {
  //               const data = await getUsers();
  //               setUsers(data);
  //               setLoading(false);
  //           } catch (error) {
  //               setError(error);
  //               setLoading(false);
  //           }
  //       }
        
  //       fetchUsers();
  //   }, []);

  //   console.log(users);

  //   if (loading) return (
  //     <HomePage users={[]}/>
  //   );

  //   if (error) throw error;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
