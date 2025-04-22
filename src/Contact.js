import React,{useEffect} from "react";
import Aos from "aos";
import "./App.css";
import axios from "axios";
import {useForm} from "react-hook-form";

let Contact=()=>{
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async (data) => {
        try {
          const response = await axios.post("http://localhost:8080/register", data);
          alert(response.data.message);
        } catch (error) {
          alert("Error submitting form");
        }
      };


     useEffect(()=>{
                Aos.init({duration:1000})
              },[]
            );

    return(
        <><div className='contact'>
        <h2>REACH US AND GET MORE INFO...</h2>
        <p style={{fontSize:"20px"}}>The concepts of travel and tourism are very closely linked, and the travel and tourism industries overlap significantly. However, there are also differences between the terms and the two industries. In this article, you will learn more about travel and tourism and the industries based on those activities.
        A tourist is generally only classed as such if they stay in overnight accommodation situated in the location they travel to. By its very nature, tourism involves a round trip rather than travel in one direction only. With this in mind, the tourism industry refers to all aspects of the service industry that cater to tourists.
        </p>
        
        
        <div data-aos="zoom-in" className='form'>
            <h1>SIGN-UP</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
      <label>Full Name:</label>
      <input {...register("fullname", { required: "Full Name is required" })} /><br></br><br></br>
      {errors.fullname && <p style={{color:"red"}}>{errors.fullname.message}</p>}

      <label>Phone Number:</label>
      <input
        {...register("phone", {
          required: "Phone Number is required",
          pattern: { value: /^[0-9]{10}$/, message: "Invalid phone number" },
        })}
      /><br></br><br></br>
      {errors.phone && <p style={{color:"red"}}>{errors.phone.message}</p>}

      <label>Email ID:</label>
      <input
        {...register("email", {
          required: "Email is required",
          pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: "Invalid email" },
        })}
      /><br></br><br></br>
      {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}

      <label>City:</label>
      <select {...register("city", { required: "City is required" })}>
        <option value="chandigarh">Chandigarh</option>
        <option value="delhi">Delhi</option>
        <option value="mumbai">Mumbai</option>
      </select><br></br><br></br>
      {errors.city && <p style={{color:"red"}}>{errors.city.message}</p>}

      <label>Password:</label>
      <input
        type="password"
        {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
      /><br></br><br></br>
      {errors.password && <p style={{color:"red"}}>{errors.password.message}</p>}

      <label>Confirm Password:</label>
      <input
        type="password"
        {...register("confirmPassword", {
          required: "Confirm Password is required",
          validate: (value) => value === watch("password") || "Passwords do not match",
        })}
      /><br></br><br></br>
      {errors.confirmPassword && <p style={{color:"red"}}>{errors.confirmPassword.message}</p>}

      <button type="submit" style={{marginRight:"20px",height:"30px", width:"80px"}}>Submit</button>
      <button type="reset" style={{height:"30px", width:"80px"}}>Reset</button>
    </form>
        </div>
    <hr></hr>

    <div className="map">
            <div className="firstC">
                <h3 style={{marginBottom:"30px"}}>Our Social Media Handles</h3>
            <ul className='contac'>
              <li data-aos="fade-left"><img src='https://cdn-icons-png.flaticon.com/128/3955/3955024.png' alt=".." height="40px" width="40px"></img>-<a href="fade_21">@tour&travels</a></li>
              <li data-aos="fade-left"><img src='https://cdn-icons-png.flaticon.com/128/3670/3670051.png' alt=".." height="40px" width="40px"></img>-<a href="9867453751">9867453751</a></li>
              <li data-aos="fade-left"><img src='https://cdn-icons-png.flaticon.com/128/145/145802.png' alt=".." height="40px" width="40px"></img><a href="fade">@tour&travels</a></li>
              <li data-aos="fade-left"><img src='https://cdn-icons-png.flaticon.com/128/3670/3670151.png' alt=".." height="40px" width="40px"></img><a href='fade'>@tour&travels2121@twitter</a></li>
              </ul>
            </div>
            <div>
            <h3 style={{textAlign:"center"}}>Our Location</h3>
            <iFrame data-aos="zoom-in"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.424280339828!2d76.73295807426575!3d30.734581585545605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed9e4fa70fbd%3A0xf36fffd65f231c5b!2sTour%20and%20travels!5e0!3m2!1sen!2sin!4v1739520179468!5m2!1sen!2sin" width="700" height="350" style={{marginRight:"50px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iFrame>       
            </div>
    </div>
        <hr></hr>

        <h1 style={{textAlign:"center",marginBottom:"30px"}}>Thanks for visit our page...</h1>
        <p style={{textAlign:"center"}}>© 2025 Your Travel Website. All rights reserved.</p>
</div></>
    )
};

export default Contact;