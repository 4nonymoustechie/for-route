import '../../css/dashboard.css'
import Footer from "../Footer"
import Sidebar from "../Dashboard/components/Sidebar"


const Suggestions = () => {
    
    return(
        <div>
        <div className="layout">
        
                        <a className="header" href="#0">
                        <i className="fa fa-bars"></i>
                        <div className="header-user"><i className="fas fa-user-circle icon"></i>Hello D Creator</div>
                        </a>
        
                        <Sidebar />
                        <main className="content">
                        <div className="main-header">
                            <div className="main-title">  
                            <h1>Suggestion</h1>
                            <div className='line'>
                            <label htmlFor="area">Suggestion:</label>
                            <br />
                            <br />
                            <textarea name="areas" id="" cols="50" rows="10"></textarea>
                           </div>
                           <div className='forlast'>
                           <button className= "lastbtn"type='button'>post</button>
                           </div>
                            </div>
                        </div>
                        </main>
        
                        <Footer />  
                      </div>
                      </div>
    )
}
export default Suggestions