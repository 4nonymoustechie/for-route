import '../../css/dashboard.css'
import Footer from '../Footer'
import Sidebar from './components/Sidebar'

const Dashboard = (props) => {

    const { user } = props
    // const {mySurname, myOthername, myDos, sex } = props

// const mySurname = props.surname
// const myOthername = props.othernames
// const myDos = props.dos
// const sex = props.sex

    return (
        <>
             <div className="layout">

                <a className="header" href="#0">
                <i className="fa fa-bars"></i>
                <div className="header-user"><i className="fas fa-user-circle icon"></i>Hello {user.surname} {user.othernames}</div>
                </a>

                <Sidebar />
            <main className="content">
            <div className="main-header">
                <div className="main-title">
                <h1>New Event</h1>
                </div>
            <div className="main-form">
            <form name="event">
                <input type="text" id="ftitle" placeholder="Add title"/>
                <input type="text" id="fdescription" placeholder="Add description"/>
                <input type="text" id="flocation" placeholder="Add location"/>

                <div className="input-group">
                <input type="date" id="fdate"/>
                <label htmlFor="fallday" className="all_day">All day:</label>
                <input type="checkbox" className="checkbox" id="fallday" />
                </div>

                <div className="input-hour">
                <div id="fhourdiv">
                    <input type="time" id="fstart" className="hour" />
                    <input type="time" id="fend" className="hour" />
                </div>
                </div>

                <input type="submit" id="fsubmit" value="Save" className="button" />
            </form>
            </div>
        </div>
        </main>

            <Footer />
        </div>
    </>
   
    )


}

export default Dashboard