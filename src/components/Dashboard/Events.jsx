import '../../css/dashboard.css'
import Footer from "../Footer"
import Sidebar from "../Dashboard/components/Sidebar"


const Events = (props) => {
    const { evnt } = props
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
                            <h1>EVENTS</h1>
                            <table className='fortab'>
                                    <tr className='head'>
                                      <th>{evnt.eventHeader[0]}</th>
                                      <th>{evnt.eventHeader[1]}</th>
                                      <th>{evnt.eventHeader[2]}</th>
                                      <th>{evnt.eventHeader[3]}</th>
                                      <th>{evnt.eventHeader[4]}</th>
                                      <th>{evnt.eventHeader[5]}</th>
                                    </tr>
                                    <tr className='foot'>
                                    <td>{evnt.content[0]}</td>
                                    <td>{evnt.content[1]}</td>
                                    <td>{evnt.content[2]}</td>
                                    <td>{evnt.content[3]}</td>
                                    <td>{evnt.content[4]}</td>
                                    <td>{evnt.content[5]}</td>
                                      </tr>
                                    </table>
                                    

                            

                            </div>
                        </div>
                        </main>

        
                        <Footer />  
                      </div>
                      </div>
    )
}

export default Events

//                            e         ventname        eventdescription location 
//   birthday party  owambe            maryland