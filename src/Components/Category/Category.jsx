import React,{useState,useEffect} from 'react'
import './Category.css'
import axios from 'axios'
import Preloader from '../Preloader/Preloader'
import Preloader2 from '../Preloader2/Preloader2'
function Category() {
    const [category,setCategory]=useState([])
    const [categorywise,setCategorywise]=useState([])
    const [loading,setLoading]=useState(true)
    const [cat,setCat]=useState()
    const [active,setActive]=useState("")
    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then((response)=>{
            console.log('category',response.data.categories);
            setCategory(response.data.categories)
            setLoading(false)
        })
       
    }, [])
    
    const showCategoryWise=(category)=>{

        setActive(category)
        setCat(true)
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=c').then((response)=>{
            console.log(response.data.meals);
           let res= response.data.meals.filter((cat)=>{
           
               
            
                return cat.strCategory===category
               
            }).map((item)=>{

                return (
                    <div className="categorized-assets">
                        <img src={item.strMealThumb} alt="" />
                        <h4>{item.strMeal}</h4>
                    </div>
                )

                

            })

            if(res.length===0){
                alert("no item found...Please choose another category")
                setCategorywise([])
            }else{
                setCategorywise(res)
            }

            
            
            setCat(false)
            
            

      
        })



        console.log(active);

    }
    return (
        <div className="category">
            <h2>choose a category</h2>
            <div className="categories">
            {
                !loading? 
                category.map((cat)=>{
                    return(
                        <li className={cat.strCategory===active && "active"} onClick={()=>showCategoryWise(cat.strCategory)}>{cat.strCategory}</li>
                    )
                }):<Preloader/>
        
            }
            </div>
            <div className="cat">
                {
                    !cat? 
                categorywise
                    : 
                 <Preloader2/> 
                }
       
            </div>
            
        </div>
    )
}

export default Category
