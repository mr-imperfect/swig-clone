

import './Hero.css'
function Hero(props) {

   
    return (
        <div className="hero">
            <h1>Special dishes</h1>

            <div className="hero-card">
                
                    {props.state.map((val,key)=>{
                        let i=14
                       while(key<i){
                        return(<div className="hero-asset">
                        <img src={val.strMealThumb} alt="" />
                        <h3>{val.strMeal}</h3>
                        </div>
                    )
                       }
                    })}
               
                <div className="hero-title">

                </div>
            
            </div>
            
        </div>
    )
}

export default Hero
