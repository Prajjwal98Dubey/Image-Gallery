
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardImage from './CardImage';


function App() {
  // const[isloading,setIsLoading]=useState(false)
  // useEffect(()=>{
  //   setInterval(() => {
  //     setIsLoading(!isloading)
  //   }, 3000);
  // },[isloading]) 
  const [images,setImages]=useState([])
  const[isloading,setIsLoading]=useState(true)
  const[term,setTerm]=useState('')
   useEffect(()=>{
    axios.get(`https://pixabay.com/api/?key=28938531-6c07c6d96dfd051812823a8f6&q=${term}&image_type=photo&pretty=true`)
    .then(res=>{
     setImages(res.data.hits)
     setIsLoading(false);
    })
   },[term])
  return (
       <>
    <nav>
      <div className="title">Image Gallery</div>
    </nav>
    <div className="searchd">
      <input className='searched' type="text" value={term} onChange={(e)=>{setTerm(e.target.value)}}/>
    </div>
        { isloading === false && images.length===0 &&<center><h1>No Result found for this search!!!</h1></center>}
         {isloading ? (<div className='load-image'><img src="https://static.videezy.com/system/resources/thumbnails/000/014/052/original/loading-circle-bars.jpg" alt="loader"/></div>):(<div className="container">
          <div className="grid">
            {images.map(img=>(
              <CardImage key={img.id} img={img}/>
            ))}
         </div>
         </div> )}

       
       </>
  );
}

export default App;
