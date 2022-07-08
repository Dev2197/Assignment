import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import './search.css'
import { useState } from 'react';
export const Searchbar = ({setWord})=>{
    const [text,setText] = useState("")

    const clearInput = ()=>{
        setText("");
        setWord("");
    }
    return(
        <div className="search">
            <div className="searchInput">
                <input type="text" placeholder="Search for a contact" value={text}
                onChange={(e)=>{setWord(e.target.value);
                setText(e.target.value)}}/>
                <div className="searchIcon">
                    {text.length===0 ? <SearchIcon />:<CloseIcon className='clearBtn' onClick={clearInput}/>}
                </div>
            </div>
        </div>
    )
}