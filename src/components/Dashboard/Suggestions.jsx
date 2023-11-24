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
                            <h1>SUGGESTIONS</h1>
                            <h2>  </h2>
                            </div>
                        </div>
                        </main>
        
                        <Footer />  
                      </div>
                      </div>
    )
}

export default Suggestions  