import '../../css/login.css'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div>
           <section>
                <div className="container">
             
                <div className="user signupBx">
                <div className="imgBx">
                        <img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg" alt="" />
                        </div>
                    <div className="formBx">
                    <form action="" >
                    <h2>Sign In</h2>
                        <input type="text" name="" placeholder="Username" />
                        <input type="password" name="" placeholder="Password" />
                        <Link to='/dashboard'><input type="submit" name="" value="Login" /></Link>
                        <p className="signup">
                        Dont have an account ?
                        <Link to="/signup">Sign Up.</Link>
                        </p>
                    </form>
                    </div>
                  
                </div>
                </div>
            </section>
        </div>
    )
}

export default Login    