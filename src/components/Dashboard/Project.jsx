import '../../css/dashboard.css'
import Footer from "../Footer"
import Sidebar from "../Dashboard/components/Sidebar"
const Project = (props) => {
    const { docs } = props

 return (
    <div>
<div className="layout">

                <a className="header" href="#0">
                <i className="fa fa-bars"></i>
                <div className="header-user"><i className="fas fa-user-circle icon"></i> Hello D Creator</div>
                </a>

                <Sidebar />
                <main className="content">
                <div className="main-header">
                    <div className="main-title">
                    <h1>Project</h1>
                    <h2>  {docs.projects[0]}{docs.addition}</h2>
                    <h2>  {docs.projects[1]}{docs.addition}</h2>
                    <h2>  {docs.projects[2]}{docs.addition}</h2>
                    <h2>  {docs.projects[3]}{docs.addition}</h2>
                    <h2>  {docs.projects[4]}{docs.addition}</h2>
                    <h2>  {docs.projects[5]}{docs.addition}</h2>
                    <h2>  {docs.projects[6]}{docs.addition}</h2>
                    <h2>  {docs.projects[7]}{docs.addition}</h2>
                    <h2>  {docs.projects[8]}{docs.addition}</h2>
                    </div>
                </div>
                </main>

                <Footer />  
              </div>
              </div>
 )
}             
export default Project