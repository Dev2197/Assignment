import { useState } from 'react';
import './App.css';
import { BasicUserCards } from './components/BasicUserCard';
import { Searchbar } from './components/Search';
import { useDebounce } from 'use-debounce';
import { DetailsUserCard } from './components/DetailsUserCard';
function App() {

  const [word,setWord] = useState("")
  const [value] = useDebounce(word, 1000);
  const [user,setUser] = useState("")
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  // console.log(word)
  return (
    <div className="App">
        <h1>Rick and Morty Search</h1>

        {/* Search Bar */}
        <Searchbar setWord={setWord}/>

        {/* Basic User Cards */}

        <BasicUserCards value={value} setUser={setUser} handleOpen={handleOpen}/>

        <DetailsUserCard user={user} open={open} setOpen={setOpen}/>
    </div>
  );
}

export default App;
