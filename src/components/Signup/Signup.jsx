import { Link } from 'react-router-dom'
import '../../css/login.css'

const Signup = () => {
    return (
        <div>
           <section>
          
                <div className="container">
                <div className="user signupBx">
                    <div className="formBx">
                    <form action="" >
                        <h2>Create an account</h2>
                        <input type="text" name="" placeholder="Username" />
                        <input type="email" name="" placeholder="Email Address" />
                        <input type="password" name="" placeholder="Create Password" />
                        <input type="password" name="" placeholder="Confirm Password" />
                        <input type="submit" name="" value="Sign Up" />
                        <p className="signup">
                        Already have an account ?
                        <Link to='/login'>Sign in. </Link>
                        </p>
                    </form>
                    </div>
                    <div className="imgBx">
                        <img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img2.jpg" alt="" /></div>
                </div>
                </div>
              
             
            </section>
        </div>
    )
}

export default Signup    