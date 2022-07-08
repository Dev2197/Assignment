import { useEffect, useState } from "react"
import axios from "axios";
import Avatar from '@mui/material/Avatar';
import './BasicUserCards.css'
import InfiniteScroll from 'react-infinite-scroll-component';



export const BasicUserCards = ({value,setUser,handleOpen})=>{
    const [data,setData] = useState([])
    
    const [page,setPage] = useState(`https://rickandmortyapi.com/api/character/?name=${value}&page=1`)
    const [noMore,setNoMore] = useState(true)
    
    //console.log(data)
    // console.log("Page",page,)
    // console.log("value",value)

    const getData = ()=>{
        axios.get(page)
       .then(function (response) {
          // handle success
        //   console.log(response.data);
          setData([...data,...response.data.results])
          setPage(response.data.info.next)
        })
        .catch(function (error) {
          // handle error
        //   console.log(error);
        setNoMore(false)
        })
    }

    const fetchMoreData = ()=>{
      getData();
    }

    
    useEffect(()=>{
        const getUserData = ()=>{
            axios.get(page)
           .then(function (response) {
              // handle success
            //   console.log(response.data);
              setData([...data,...response.data.results])
              setPage(response.data.info.next)
            })
            .catch(function (error) {
              // handle error
              // console.log(error);
            setNoMore(false)
            })
        }

        getUserData()
    },[page])

    useEffect(()=>{
      const getUserData = ()=>{
            axios.get(`https://rickandmortyapi.com/api/character/?name=${value}&page=1`)
           .then(function (response) {
              // handle success
            //   console.log(response.data);
              setData(response.data.results)
              setPage(response.data.info.next)
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            setNoMore(false)
            })
        }
        getUserData()
    },[value])

    return(
        <div className="userCards">

         <InfiniteScroll
           dataLength={data.length}
           next={fetchMoreData}
           hasMore={noMore}
           loader={<h4>Loading...</h4>}
           endMessage={
            <b style={{marginBottom:"20px"}}>End of list</b>
           }
           >
            {/* .filter(user=>user.name.toLowerCase().includes(value.toLowerCase())) */}
            {data.map((e,i)=>(
                <div className="userCard" key={i} onClick={()=>{ setUser(e);
                   handleOpen()
                  }}>
                    <div className="userName">
                      <Avatar alt="Remy Sharp" src={e.image} />
                      <p>{e.name}</p>
                    </div>
                    <div className="userStatus">
                       <div className="dot" style={{backgroundColor:e.status==="Alive"?"#00FF00":"grey"}}></div>
                       <p>{e.status}-{e.species}</p>
                    </div>
                </div>
            ))}
           </InfiniteScroll>
            
        </div>
    )
}