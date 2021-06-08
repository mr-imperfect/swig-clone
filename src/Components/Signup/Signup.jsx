import React, { useState,useContext } from 'react';
import {useHistory} from 'react-router-dom'
import './Signup.css'
function Signup() {
    const history=useHistory()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

      
   
    
    const passwordshow=()=>{
        
            let showhide=document.querySelector('#showhide');
            let passwordshoworhideopen=document.querySelector('#passwordshoworhideopen')
            let passwordshoworhideclose=document.querySelector('#passwordshoworhideclose')
showhide.type="text"
passwordshoworhideclose.classList.remove('fa-eye-slash')
        passwordshoworhideopen.classList.add('enable')
        
        
        
    }
    const passwordhide=()=>{
        let showhide=document.querySelector('#showhide');  
        let passwordshoworhideopen=document.querySelector('#passwordshoworhideopen')
        let passwordshoworhideclose=document.querySelector('#passwordshoworhideclose')
showhide.type="password"
passwordshoworhideclose.classList.add('fa-eye-slash')
    passwordshoworhideopen.classList.remove('enable')
    

    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        history.push('/login')
    }

   
    return (
        
        <div className="signup">


            <form action="" onSubmit={handlesubmit}>

        <div className="signup-image">

            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAilBMVEX/////hwL/hAD/gAD/ggD/hQD/fQD/fAD/1Lf/9e7/iAD/2sL//fv/5tX/+/j/u4v/tH7/38r/pmH/8ej/eAD/wZb/6dv/yaX/4s//olr/xp//z6//nU7/sHf/ihH/kjD/qWj/rXD/jSH/m0j/vY//t4T/lDb/oFT/lz//1rz/7eH/0LH/jB7/mEP97P5xAAAJ2ElEQVR4nO2da2PiKhCGNRDQqtGoqRrrtVqrdf//39sAuYAmhthEGsjz4ZxtvSy8y2UyzAytVkODCUzmHX9E8ZbuxVHdnD+L0ztuMAIAhgCA8HrVmahu19+j6+0xgO07IEDWaKC6dX+K8wmnCBULhq5+V3UT/wpDAKxsqZheeHxR3cy/wCxt9t1j4Z3xo8u9Ahmp2Ogaqm6tUpwTkpWKANbvqlusDjd3rboFH1S3WRUHXFAqMri+zTRUF9KrFY8FDdwW+xupTTAF7Kpu+6tx1kWXq4RpT3XrX4vzZj+tlWlq9a+/0SqYiXPVPXghm+fnIAOZs8ovnl3bE2xTLIjDUzaDiPWtuhevwX3CFr0HHFX34xU4v5+DFCPMrW1JYrXbqntSPYNSJiEBeKr7Ujmb31lYPFh3b+BMfie0YY41Zo1V96Zi5K1R+OXtcpTFepumvvTAsj9aueMQrlT3p1LWslq1wZm8P0dbpLo/VeLKu9wBNaPy3rRU3aMKWcgvWYC6YXLeZG9U96g6ugVsLDYN896F9D3uKWA3tEGHfCLvXVDfo8RxATeWnFgaz8Mirhkm1lve27Cufq33IsfPkmKxpU1DiixZsmLBkepeVcSuiOddUqy2rovWvyIOB1mxgOpeVUR+z58QC2nqpykWXiQrlp4Bp90qxLKnetoOl/LFstBe07PpQaHjwlwLHgKEt5pKReL8iov1eRcbaNsWTSfYr5b6PkQ/J1b3MN4AjCgYYwSv36ftYenq7U9uPTcNGU53MpnouZBn8cwCbyxOMbGMCli7p9g01NWdIMmmiFjWQnVz1VLEUUoMzvW+DS2R6+b7czHyzwNNnwgThmXEzxA7KzC08N7TW69OCRF/CRBvdbYmJoW2Qwm5ND4Ia7VKC2OLQBqPrWIrvARQ48BSv/ShpXGoZKGzMCmw6i5VSOkjS2exCh2GyQBV96hCyrW0AgtV5zyLIjFHMlg71T2qks/yArsJYKa6Q1VS8jzU2oQv6NPKRef1PWBVpvVgbVV3p1oGZdqlWgcrE/YliqVt2F+EfI5FLvaX6s5UjVOeqaW34UApkDiQg/azsNXqlTUPdd8LKfLJTo9BJiRJl2bFq+7ISyjHeoD6p0gTeqUYptpnSId8l+B7oJmuJjApwdYyJ3DE//1EXKvuw+vY/nZH1P4Zmmc1hTAJkYH8D5S8Vc1W3YGX8u4dV+PxYrEYj7e71Wp0HHMEv7YfOr4MeCwsxOiRWpq7SAvzKHulGVg39B+IZdBWKMeD4GbDw75TeCDWXnXblNEfzIJ98d+1/Xbdb753XnTDR/aahQwNkXePG0zuQ4nsKpLFhDc01ytTLPtTdauV4LRRmn1gT4lDIVMszatmZTHP0INWOMoSS/OiWZn0M7wPD8UCfdXNVkTGSQ9NcsoQCxlrNmQc5j8YWfY/1W1WR3q8FiDlB9LFwgZfHfaeumpliwWMvR2FkOpbeDCyVLdXKd1pEbGMKD79gGGKg5lGP6Y8G8Kt6taqJm1kkeedNBeN6rYqJ6WWPg1vv1/NsN7htlKkFIi39qN7HzzQt3KkPE7asVjKJtm4RwlysQ9TPQtlFUbmahmzzVGefK1MuTpGgnlupAgwJMBIhrwrU7ChbvdUUnfEBFO9oxn0Hk1E29yzr3QeZUCZ7MRK55qpFTIpFkuOS9ZEhLpfr/MMGSlQduNrSOMz9awHNAtWGqn2g+nO0UxS7AcDrpp7lt2t/QBNSQ14hvXtOaL+KYXP0xWXLVPyc55E8MhjY1JOnoQ7GkNNTHIe8T2kUOuqPOUQpYxpfLNViXSYWrDZCGUYkWXL0MjR4nzA5ilHnvW08blLc/lR3YKGhoaGhoaGhoaGhoaGhoaG+uMsVx8fo9gp5fr+zIuirJxtlFYy8A8Hj8V9ON5xOLw5zekNF6fxyk9xAw688WmxG/7E6dKHoed5caD8+3Hke7U59x9iAG0bon0YATPDEMBp+MMRR2fywbtgmAvQI/W0hLtODgBAi9yihuybtOjOGpFXSAmI6JKiPSAfj7z2X8FPqC5RXV6UMmGjUCDiVQ9rZfZB5F8ntXCjM5w5eQd3j/3kjTubxkL87QeXkAE2TKABOeSAYXKPS95Ql5uxJknCZRSJdiQRHyz5xgdR8PHWSsrRDUSxLkgIephyntONEDwCtuy3Y5gI9GXXKPrmQBoO23agBd6yX9G7nNg19eRFNmFQOykmLYrVZ4IABBGpKRIpQjjRl4LfAwRI+lj4eRrbxf4RaCoQN0j/NqdAJXgI/o9gvMS/RX1Z0l6NWqxscFxtlF4yHddbozkEttUJFvD3FQLc8tOhcxB5wUR2Zgiu4yXej8/PqMx+1Z0sC1J/gJS4crxk3aC3ZpJ/blaGmgRrn7hZyGp5R2KxWNx1+OkZf4zPPh1ukJev5C/oky8g5fR9UKeBRdeiNhTjsemhPOhFBc6DoUWr6MedmvNi0dvqUvNW6XROHzZUJDRnA6s+ISWsLDewPX5DIsMN7ujiSycSnY9WPMEGvFjkHsT0csBLYbaKkK+1xnNQszCJMH4PYi5RlyoI43oqYPlh8/XoBLHIVIVk+PQHc7dHiAxTsquyovmXc6/XCV45xwPwTL4bfrHxVR8mIAzSBu24K6yiEV2xrnb0n2SMCNOQzjWi42QKGNNw5pFr7Oju0Noj9gpK8nqiUVuzejXd78hOQnEU+ymKcof9yEiCycgTFngcixUNxOg+UTJB2W1qkTLtZMpFORq1i5PofTG5kovG3dAkDwz5KJeCi5QRTId2NA3vxCL1C9g9fXHJHy5jjGUt1vFuizl7LMGxJRQqhPpRmi9/b45glJLtlEpCpyHkxKIrHzVk6QS9EYuaD9xgrgc+bS8VILkojlW1oN1egtsNXhCLSkLv8xi487kHE7HoBYn0h3c3WPuBKBZ7qqrTVhhMwTZgPSAzBcQ704WNNBqtDZI/MsQHafrO6JNEx/gOZLryoejBD9+I9QPqNgs/EXlmc7sXjz7cJuUYyEUf4TP0Ed7cEdoTxDqy+bQ4T7qTOZmUsVgD+pAO9rP34BX6EMqLNQN1u6/hg257ALGympwFSboSOgbIdBLq34vPhq0vtlQHX4KoGZLcJ3pgaz4kr8BbO8GvnVgTwLlX+HUpeMCJR8gKckt/K1yzuMxC0RHDe1xGYn0RyItF/jmS/bcWJI47GwnVak9WnO3cxeLaQsXiq80scJJ9aAlf43GVYC204auu/NRPrFZriIibF+CN6BA+TxOX53YqmI4uNRL43wy2CNBvAWgsRpg6Xpt+f/AXnMRXlsG3oPpVE+55w8PPXXS2nzxaO2JtGecneNC79TO4s+HxsEwr2HNZDkcjr3frOu7P5+65ZmZWQ0PrPxAwepD9Jn7iAAAAAElFTkSuQmCC" alt="" />

        </div>
        <div className="signupcommon signup-heading">
           <h3>Sign Up</h3>
        </div>
        <div className="signupcommon signup-username">
            <input type="text" name="username" value={username} required onChange={(e)=>setUsername(e.target.value)} />
            <label htmlFor="">Username</label>


        </div>
        <div className="signupcommon signup-gmail" >
            <input type="email" name="gmail" value={email} required onChange={(e)=>setEmail(e.target.value)} />
            <label htmlFor="">Gmail</label>

        </div>
        <div className="signupcommon signup-password">
     
           
           <input type="password" id="showhide" value={password} name="password" required onChange={(e)=>setPassword(e.target.value)}/                       >
           <label htmlFor="">Password</label>
             <i id="passwordshoworhideopen" class="fas fa-eye" onClick={passwordhide}></i>
             <i id="passwordshoworhideclose" class="fas fa-eye-slash" onClick={passwordshow}></i>
        

        </div>
        <div className="signup-button">
            <button>Signup</button>
        </div>
        <div className="signup-alreadyaccount">
            <a href="">Already have an account?LogIn</a>
        </div>
            </form>
            
        </div>
    )
}

export default Signup
