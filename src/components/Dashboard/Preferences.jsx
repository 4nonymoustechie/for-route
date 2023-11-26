import '../../css/dashboard.css'
import Footer from '../Footer'
import Sidebar from './components/Sidebar'

const Preferances = (props) => {
    const { user } = props
    return (
        <>
             <div className="layout">

                <a className="header" href="#0">
                <i className="fa fa-bars"></i>
                <div className="header-user"><i className="fas fa-user-circle icon"></i>Hello D Creator</div>
                </a>

                <Sidebar />
                <main className="content">
                <div className="main-header">
                    <div className="main-title">
                    <h1>Preferances</h1>
                    <h2>preference is a technical term usually used in relation to choosing between alternatives.
                         For example, someone prefers A over B if they would rather choose A than B.
                         Preferences are central to decision theory because of this relation to behavior.</h2>
                         <br />
                         
                    <div className='lower'>    <p>which one do you prefer our current or former site <br /><br /><button className='downbtn' type='button'>current</button>       <button className='downbtn' type='button'>former</button></p></div>
                    </div>
                </div>
                </main>

                <Footer />  
              </div>
    </>
   
    )

}

export default Preferances



