import '../../css/dashboard.css'
import Footer from '../Footer'
import Sidebar from './components/Sidebar'

const Feedbacks = () => {
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
                                
                            <h1>Feedbacks</h1>
                            <div className='whole'>
                            <h3>Please provide your feedback in the form below</h3>
                            <h4>How do you rate your overall experience?</h4>
                            <div className='rates'> 
                                <input type="radio" name='rating'/>
                                <label htmlFor="rate">Bad</label>
                                <input type="radio" name='rating'/>
                                <label htmlFor="rate">Good</label>
                                <input type="radio" name='rating'/>
                                <label htmlFor="rate">Excellent!</label>
                            </div>
                            <label htmlFor="area">Comment</label>
                            <br />
                            <textarea name="areas" id="" cols="50" rows="10"></textarea>
                            
                                <div className='detailing'>
                                <label htmlFor="">Your Name:</label>
                                <label htmlFor="">Your Name:</label>
                                </div>
                                <div className='details'>
                                <input type="text" name="" id="" />
                                <input type="email" />
                            </div>
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

export default Feedbacks



