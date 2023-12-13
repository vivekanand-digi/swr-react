import axios from 'axios';
import UsersComponent from './UsersComponent';
import { SWRConfig } from 'swr';


function App() {
  const fetcher = (url) => axios.get(url).then(response => response.data)
  return (
    <SWRConfig value={{
      fetcher: fetcher,
    }}>
 <UsersComponent />
 </SWRConfig>
  );
}

export default App;
