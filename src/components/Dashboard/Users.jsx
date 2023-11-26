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
                <div className="header-user"><i className="fas fa-user-circle icon"></i>Hello D Creator</div>
                </a>

                <Sidebar />
                <main className="content">
                <div className="main-header">
                    <div className="main-title">
                    <h1>Users</h1>
                    <h2>{user.surname}{user.othernames}</h2>
                    <h2>{user.userN[1]}</h2>
                    <h2>{user.userN[2]}</h2>
                    <h2>{user.userN[3]}</h2>
                    <h2>{user.userN[4]}</h2>
                    <h2>{user.userN[5]}</h2>
                    <h2>{user.userN[6]}</h2>
                    <h2>{user.userN[7]}</h2>
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
