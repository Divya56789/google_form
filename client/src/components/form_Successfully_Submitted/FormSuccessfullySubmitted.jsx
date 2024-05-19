import { Link } from 'react-router-dom'
import Footer from '../footer/Footer';
import './formSuccessfullySubmitted.css';

const FormSuccessfullySubmitted = () => {
  return (
<div className="form_submitted_successful_container">
        <div className="header_message">
          <h1>Thanks for filling in <span >ONLINE SUBMISSION OF ASSIGNMENTS FOR TERM END EXAMINATION JUNE 2024</span></h1>
          <p>Your response has been recorded.</p>
          <Link to='/'>Submit another response</Link>
        </div>
        <Footer/>
    </div>
      )
}

export default FormSuccessfullySubmitted;