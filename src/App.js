import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { useEffect, useState } from 'react';
import { getUsers } from './api/Api';
import CustomLoader from './components/loader/CustomLoader';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
        async function fetchCharacters () {
            try {
                const data = await getUsers();
                setUsers(data.results);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }

        fetchCharacters();
    }, []);

    console.log(users);

    if (loading) return (
        <CustomLoader />
    );

    if (error) throw error;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage loading={loading} users={users}/>} />
      </Routes>
    </Router>
  );
}

export default App;
