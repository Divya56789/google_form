import { useState } from 'react';
import {createUser} from '../../api/index';
import './form.css';

const Form = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false)

    const [users, setUsers] = useState({email :  "", mobile_no: "", enrollment_no: "", name_of_learner: "", programme_code: "", study_centre_code: "", course_code: "", file_upload: "",choose_date:""});


    
    const handleSubmit = (e) => {
        e.preventDefault();
        createUser(users);//function call of post request
        setUsers({email :  "", mobile_no: "", enrollment_no: "", name_of_learner: "", programme_code: "", study_centre_code: "", course_code: "", file_upload:"" ,choose_date:""}) //reset the form after submission
        setIsButtonClicked(true)
    }
    
    const resetFormdata = () => {
        setUsers({email :  "", mobile_no: "", enrollment_no: "", name_of_learner: "", programme_code: "", study_centre_code: "", course_code: "", file_upload: "", choose_date:""});
    }

    
  return (
        <form action="" method="post" onSubmit={handleSubmit}>
          <div className="email_address">
            <label htmlFor="email">Email <span className="required_field">*</span></label>
            <input type="email" name="email" placeholder="Your email address" value={users.email} onChange={(e) => setUsers({...users, email : e.target.value})} required/>
          </div>
          
          <div className="mobile_no">
            <label htmlFor="mobile_no">Mobile No. (मोबाइल नंबर)
            <span className="required_field">*</span></label>
            <input type="number" name="mobile_no" placeholder="Your answer" value={users.mobile_no} onChange={(e) => setUsers({...users, mobile_no: e.target.value})} required/>
          </div>
          
          <div className="enrollment_no">
            <label htmlFor="enrollment_no">Enrollment Number (नामांकन संख्या)<span className="required_field">*</span></label>
            <input type="number" name="enrollment_no" placeholder="Your answer" value={users.enrollment_no} onChange={(e) => setUsers({...users, enrollment_no: e.target.value})} required/>
          </div>
            
          <div className="name_of_learner">
            <label htmlFor="name_of_learner">Name of the Learner (विद्यार्थी का नाम)
            <span className="required_field">*</span></label>
            <input type="text" name="name_of_learner" placeholder="Your answer" value={users.name_of_learner} onChange={(e) => setUsers({...users, name_of_learner: e.target.value})} required/>
          </div>  

          <div className="programme_code">
            <label htmlFor="programme_code">Programme Code (कार्यक्रम कोड)<span className="required_field">*</span></label>
            <select name="programme_code" value={users.programme_code} onChange={(e) => setUsers({...users, programme_code: e.target.value})} required>
              <option value="">Choose</option>
              <option value="BBA">BBA</option>
              <option value="BCA" >BCA</option>
              <option value="MBA">MBA</option>
              <option value="MCA">MCA</option>
            </select>
          </div>

          <div className="study_centre_code">
            <label htmlFor="study_centre_code">Study Centre Code (अध्ययन केंद्र कोड)
            <span className="required_field">*</span></label>
            <select name="study_centre_code" value={users.study_centre_code} onChange={(e) => setUsers({...users, study_centre_code: e.target.value})} required>
              <option value="">Choose</option>
              <option value="0500">0500</option>
              <option value="0504" >0504</option>
              <option value="0547">0547</option>
              <option value="0532">0532</option>
            </select>
          </div>

          <div className="course_code">
            <label htmlFor="course_code">Course Code (e.g. MHI-1, FEG-2, ECO-1 etc.) <span className="required_field">*</span><br />
              <span className='secondary_text'>This google form is to be filled for one course code only, for other courses fill the form again. (यह Google फॉर्म केवल एक कोर्स कोड के लिए भरा जाना है, अन्य कोर्स कोड के लिए फिर से फॉर्म भरेl)</span>
            </label>
            <input type="text" name="course_code" placeholder="Your answer" value={users.course_code} onChange={(e) => setUsers({...users, course_code: e.target.value})} required/>
          </div>  

          <div className="file_upload">
            <label htmlFor="file_upload">Upload the scanned copy of your assignment (in PDF) <span className="required_field">*</span><br />
              <span className='secondary_text'>Only in PDF format (size should be less than 100 MB) & file name should be &quot; Enrollment No. Programme Course &quot; (for e.g : MAH-MHI01-1234567890 ) | केवल पीडीएफ प्रारूप में (आकार 100 एमबी से कम होना चाहिए) और फ़ाइल का नाम &quot;नामांकन संख्या - प्रोग्राम - कोर्स कोड &quot; होना चाहिए (उदाहरण के लिए: MAH-MHI01-1234567890)</span>
            </label>
            <input type="file" name="file_upload" value={users.file_upload} onChange={(e) => setUsers({...users, file_upload: e.target.value})} accept='.pdf' required/>
            
          </div>

          <div className="choose_date"> 
            <label htmlFor="choose_date"><b>DECLARATION:</b> I declare that I have submitted my assignments only through <span className="required_field">*</span><br /><b>ONLINE</b> mode. If I submit hard copies of the assignments either at the Learner Support Centre (LSC) or at the Regional Centre (RC) they may not be considered. <br /> <b>घोषणा:</b> मैं घोषणा करता हूं कि मैंने अपना असाइनमेंट केवल ऑनलाइन मोड के माध्यम से जमा किया है। यदि मैं किसी अन्य स्थान पर हार्ड कॉपी जमा करूंगा तो उस पर विचार नहीं किया जाएगा। <br />
            <span className='secondary_text'>Date</span>
            </label>
            <input type="date" name="choose_date"  value={users.choose_date} onChange={(e) => setUsers({...users, choose_date: e.target.value})} required/>
          </div>
          
          <p>A copy of your responses will be emailed to the address that you provided.</p>
          
          <div className="form_buttons">
              <input type="submit" value="Submit" disabled={isButtonClicked}/>
              <input type="reset" value="Clear form" onClick={resetFormdata} />
          </div>
            
          <p>Never submit passwords through Google Forms.</p>
        </form>
  )
}

export default Form;