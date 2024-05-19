import './home.css';
import Form from '../form/Form';
import book from '../../assets/open_book.jpg';
import Footer from '../footer/Footer';
const Home = () => {
  return (
    <div className='container'>
        
      <header> 
        <div className='header_image'>
          <img src={book} alt="open_book" /> 
        </div> 
        <div className='header_content'>
          <h1>ONLINE SUBMISSION OF ASSIGNMENTS <br /> FOR TERM END EXAMINATION JUNE 2024</h1>
          <p>IGNOU REGIONAL CENTER, PATNA</p>
          <p> <b>NOTE:</b> Do not submit the scanned copy of Assignments if you have already submitted the hard copy at your Study Center / Regional Centre. <br />
          <b>नोट:</b> यदि आप पहले से ही असाइनमेंट की हार्ड कॉपी अपने अध्ययन केंद्र / क्षेत्रीय केंद्र में जमा कर दिए हैं, तो स्कैन कॉपी जमा न करें।
          </p>
          <div>
          <p>The first page(Cover Page) of your assignment response should have your. <br /> आपकी असाइनमेंट का पहला पृष्ठ (कवर पेज) में निम्नलिखित विवरण भरा होना चाहिए।
          </p>
          <ul>
            <li>a) Name and Enrollment Number</li>
            <li>b) Programme Code</li>
            <li>c) Course Code</li>
            <li>d) Study Centre Code</li>
            <li>e) Date of Submission </li>
          </ul>
          </div>
          <hr />
          <p>Please Subscribe RC Patna Official Telegram channel: <a href="https://t.me/ignourcp05" target="_blank" rel="noopener noreferrer">https://t.me/ignourcp05</a></p>  
          <hr />
          
          <p>The name, email address and poto associated woth your Google Account will be recorded when you upload files and submit this form</p>
          <hr />
          <p className='required_field'>* Indicates required question</p>
        </div>
      </header>
      <Form/>      
      <Footer/>
      
     </div> 
  )
}

export default Home