import './App.css'
import Form from './components/Form/Form';
import book from './assets/open_book.jpg';

function App() {
  return (
    <div className='container'>
        <div className='header_image'>
          <img src={book} alt="open_book" /> 
        </div>

      <header>  
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
      <section>
        <Form/>
      </section>
      
      <footer>
        <a href="https://policies.google.com/privacy?hl=en" target="_blank" rel="noopener noreferrer" style={{color:'rgb(61,61,61',   fontSize:'small'}}>privacy</a> <a href="https://policies.google.com/terms?hl=en" target="_blank" rel="noopener noreferrer" style={{color:'rgb(61,61,61',   fontSize:'small'}}>Terms</a>
        <p style={{fontSize:'14px'}}>This form was created inside IGNOU. <a href="https://docs.google.com/forms/u/0/d/e/1FAIpQLSf9dTAAy0VmP__EqCcfg3f_H_P29k0_zK2S-ECD05Mld8wosQ/reportabuse?pli=1&source=https://docs.google.com/forms/d/e/1FAIpQLSf9dTAAy0VmP__EqCcfg3f_H_P29k0_zK2S-ECD05Mld8wosQ/viewform?pli%3D1%26pli%3D1" target="_blank" rel="noopener noreferrer" style={{color:'rgb(61,61,61)'}}>Report Abuse</a></p>
        <h1>Google <span style={{color:'rgb(108,108,108', fontWeight:'400'}}>Forms</span></h1>
      </footer>
       
          
     </div> 
  )
}

export default App;
