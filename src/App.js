//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="container">
    <div className="App" height="100%" width="100px">
     
      <fieldset>
      <center><u><legend>Registration Form</legend></u> </center>
  
        <label> Firstname </label> &nbsp; &nbsp;&nbsp;       
        <input type="text" name="firstname" size="15"/> 
        <br/> 
        <label> Middlename: </label>    &nbsp; &nbsp;&nbsp;  
        <input type="text" name="middlename" size="15"/> 
        <br/>  
        <label> Lastname: </label>   &nbsp; &nbsp;&nbsp;       
        <input type="text" name="lastname" size="15"/>
        <br/> 
    
         <label>   
          Course :  
         </label> &nbsp; &nbsp;&nbsp;   
         <select>  
          <option value="Course">Course</option>  
          <option value="BCA">BCA</option>  
          <option value="BBA">BBA</option>  
          <option value="B.Tech">B.Tech</option>  
          <option value="MBA">MBA</option>  
          <option value="MCA">MCA</option>  
          <option value="M.Tech">M.Tech</option>  
         </select>  
    
            <br/>  
            
        <label>   
          Gender :  
        </label><br/>  
        <input class="inputcss" type="radio" name="male"/> Male <br/>  
        <input class="inputcss" type="radio" name="female"/> Female <br/>  
        <input class="inputcss" type="radio" name="other"/> Other  
        <br/>  
        
    
        <label>   
          Phone :  
        </label>  &nbsp; &nbsp;&nbsp; 
        <input type="text" id="inputcss" name="country code"  value="+91" size="2"/>   
        <input type="text" name="phone" size="10"/> <br/> <br/>  
          Address  
          <br/>  
            <textarea cols="80" rows="5" >  
            </textarea>  
          <br/> 
        Email:  
        <input type="email" id="email" name="email"/> <br/>    
       <br/>  
        Password:  
        <input type="Password" id="pass" name="pass"/> <br/>   
        <br/>   
        Re-type password:  
        <input type="Password" id="repass" name="repass"/> <br/> <br/>  
        <input id="inputbtn" type="button" value="Submit"/>  
        </fieldset>
    
   </div>
   </div>
  );
}

export default App;
