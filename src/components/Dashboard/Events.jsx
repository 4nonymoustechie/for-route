import '../../css/dashboard.css'
import Footer from '../Footer'
import Sidebar from './components/Sidebar'

const Events = (props) => {
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
               <h1>Events</h1>
               <table id='customers'>
                       <tr>
                         <th>{progs.evntDescription[0]}</th>
                         <th>{progs.evntDescription[1]}</th>
                         <th>{progs.evntDescription[2]}</th>
                         <th>{progs.evntDescription[3]}</th>
                       </tr>
                       <tr>
                         <td>{progs.evntDetails[0]}</td>
                         <td>{progs.evntDetails[1]}</td>
                         <td>{progs.evntDetails[2]}</td>
                         <td>{progs.evntDetails[3]}</td>
                       </tr>
                       </table>
               </div>
           </div>
           </main>

           <Footer />  
         </div>
</>

    )
}
export default Events