import '../../css/dashboard.css'
import Footer from '../Footer'
import Sidebar from './components/Sidebar'

const Users = (props) => {
    const { user } = props
    return (
        <>
             <div className="layout">

                <a className="header" href="#0">
                <i className="fa fa-bars"></i>
                <div className="header-user"><i className="fas fa-user-circle icon"></i>Hello John Dee</div>
                </a>

                <Sidebar />
                <main className="content">
                <div className="main-header">
                    <div className="main-title">
                    <h1>Users</h1>
                    <h2> Welcome {user.surname}{user.othernames}</h2>
                    </div>
                </div>
                </main>

                <Footer />  
              </div>
    </>
   
    )

}

export default Users


// explain props
//Props are arguments passed into React components. Props are passed to components via HTML attributes.
// props are immutable
// props are used to pass data from parent to child
// props are used to pass data from child to parent
// props are used to pass data from siblings

//Tasks
//1. Write the 




// sn. date        eventname        eventdescription location 
// 1   30/12/2023  birthday party  owambe            maryland
