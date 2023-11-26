import '../../css/dashboard.css'
import Footer from '../Footer'
import Sidebar from './components/Sidebar'

const Project = (props) => {
    const { progs } = props
    return(
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
               <h1>Project</h1>
               <h2>{progs.projects[0]}{progs.input}</h2>
               <h2>{progs.projects[1]}{progs.input}</h2>
               <h2>{progs.projects[2]}{progs.input}</h2>
               <h2>{progs.projects[3]}{progs.input}</h2>
               <h2>{progs.projects[4]}{progs.input}</h2>
               <h2>{progs.projects[5]}{progs.input}</h2>
               <h2>{progs.projects[6]}{progs.input}</h2>
               </div>
           </div>
           </main>

           <Footer />  
         </div>
</>

    )
}
export default Project