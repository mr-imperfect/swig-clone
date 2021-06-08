import React, { useEffect,useState } from 'react'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'
import axios from 'axios'
import Slider from '../../Components/Slider/Slider'
import Preloader from '../../Components/Preloader/Preloader'
function Home() {
    const [item,setItem]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(() => {

        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=c').then((response)=>{
            console.log(response.data.meals);
            setItem(response.data.meals)
            setLoading(false)
        })

        
    }, [])
    return (
        <div className="home">

            <Header/>
           { !loading?<Hero state={item}/> :<Preloader/>}
       
            
        </div>
    )
}

export default Home
