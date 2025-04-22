import React, {useEffect,useState} from 'react';
import Aos from 'aos';
import './App.css';


let Hills =()=>{

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    // Clear error when user starts typing
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!form.username?.trim()) {
      newErrors.username = "Username is required";
    }
    if (!form.password?.trim()) {
      newErrors.password = "Password is required";
    } else if(form.password.length<8){
      newErrors.password = "Password Must Be 8 Characters Long"
    }
    if (!form.email?.trim()) {
      newErrors.email = "Email is required";
    } else if (!form.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch("http://localhost:8080/demo", {
          method: "POST",
          body: JSON.stringify(form),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };




  useEffect(()=>{
    Aos.init({duration:1000})
  },[]
);
    return(
    <>
      <div className='hills'>
        <h1><u>Top 10 Hill Stations.</u></h1>
        <div className='hills2'>
          <h1><u>Top 10 Hill Stations.</u></h1>
          <h3>A hill is a piece of land that rises higher than everything surrounding it. It looks like a little bump in the Earth. Since they are higher than everything around them, hills are good places to get a nice view. Hills are easier to climb than mountains.</h3>
        </div><hr></hr>
        <div className='hills3'>
          <div data-aos="zoom-in" className='one'>
             <h1>1. Shimla</h1>
           <div className='flex'>
             <div><img src='https://www.trawell.in/admin/images/thumbs/487035497Shimla_Main_thumb.jpg' alt='...'></img></div>
             <div><p>Often called the 'Queen of Hills', Shimla is a mesmerizing hill station in Himachal Pradesh. It is one of the top hill stations in India, and among the top Himachal tourist places. It is located about 112 km from Chandigarh, and 348 km from New Delhi.</p>

             <p>Among the top hill stations in Himachal, Shimla derives its name from 'Goddess Shyamala', an incarnation of Goddess Kali. Kali Bari Temple, Annandale, Vice Regal Lodge, Jakhu Temple / Jakhu Hill, The Mall, Tara Devi Temple, Christ Church, and Kalka - Shimla Railway are some of the best tourist places in Shimla.</p></div>
           </div>
          </div>

          <div data-aos="zoom-in" className='one'>
             <h1>2. Mussoorie</h1>
           <div className='flex'>
             <div><img src='https://www.trawell.in/admin/images/thumbs/194726945Mussoorie_Main_thumb.jpg' alt='...'></img></div>
             <div><p>At a distance of 33 km from Dehradun, 187 km from Ambala, 197 km from Chandigarh, 278 km from Delhi, 263 km from Shimla and 310 km from Nainital, Mussoorie is a popular hill station in Dehradun district of Uttarakhand state. This is one of the most popular hill stations in Uttarakhand and also one of the best tourist places near Delhi. Mussoorie is one of the well known tourist destination not to miss in your honeymoon trip.</p>

             <p>Mussoorie gets its name from the Mansoor plant that grows in abundance in this region. It was founded in 1820 by Captain Young from the British army. The British officials visited it as a getaway from the heat during summer.</p></div>
           </div>
          </div>

          <div data-aos="zoom-in" className='one'>
             <h1>3. Manali</h1>
           <div className='flex'>
             <div><img src='https://www.trawell.in/admin/images/thumbs/12908479Manali_Main_thumb.jpg' alt='...'></img></div>
             <div><p>Manali is a breathtakingly beautiful hill station nestled in the mountains of Himachal Pradesh near the northern end of the Kullu Valley. About 295 km from Chandigarh, and 545 km from Delhi, it is one of the top hill stations in Himachal, and among the top places to visit near Chandigarh.</p>

             <p>Renowned for its snow-covered mountains, scenic beauty, history, and culture, Manali is located at an altitude of 2050 m and is spread along the banks of the river Beas. Manali is named after the Hindu lawgiver Manu. Often referred to as the 'Valley of the Gods', Manali is one of the popular hill stations near Delhi.</p></div>
           </div>
          </div>

          <div data-aos="zoom-in" className='one'>
             <h1>4. Dharamshala</h1>
           <div className='flex'>
             <div><img src='https://www.trawell.in/admin/images/thumbs/368054368Dharamshala_Main_thumb.jpg' alt='...'></img></div>
             <div><p>At an average altitude of 1,475 m above sea level, Dharamshala is a pristine hill station situated in the Kangra district of Himachal Pradesh. It is one of the best hill stations in Himachal Pradesh, and among the most famous places to visit near Delhi. It is about 234 km from Manali, 237 km from Shimla, and 486 km from Delhi.</p>

             <p>Often called the gateway to the Kangra valley, Dharamshala is the headquarters of Kangra district and among the must-include places in Himachal tour packages. In the year 1960, Dharamshala became a temporary headquarters to His Holiness Dalai Lama.</p></div>
           </div>
          </div>

          <div data-aos="zoom-in" className='one'>
             <h1>5. Dalhousie</h1>
           <div className='flex'>
             <div><img src='https://www.trawell.in/admin/images/thumbs/912016977Dalhousie_Main_thumb.jpg' alt='...'></img></div>
             <div><p>
             Located at an altitude of 1,970 m, Dalhousie is one of the famous hill stations in Himachal, and among the popular places to visit near Chandigarh. It is located about 319 km from Chandigarh, and 564 km from Delhi.</p>

             <p>Surrounded by snow-capped mountains, Dalhousie is located on the western edge of the Dhauladhar mountain range of the Himalayas. It is hill stations near Delhi, and among the best places to visit in Himachal. It was named after Lord Dalhousie, the then Viceroy of India, who established this town as a summer retreat in 1854.</p></div>
           </div>
          </div>

          <div data-aos="zoom-in" className='one'>
             <h1>6. Kasauli</h1>
           <div className='flex'>
             <div><img src='https://www.trawell.in/admin/images/thumbs/229035779Kasauli_Main_thumb.jpg' alt='...'></img></div>
             <div><p>
             Kasauli is a picturesque hill station in the Solan district of Himachal Pradesh. About 55 km from Chandigarh, 68 km from Shimla, and 306 km from Delhi, it is one of the top hill stations near Chandigarh, and among the Himachal tour packages.</p>

             <p>Situated in the foothills of the Dhauladhar Ranges of the lower Himalayas, Kasauli is a cantonment town of the Indian Army, having an elevation of 1,900 m above sea level. One of the scenic places to visit near Delhi, the town is famous for its lush green and picturesque surroundings of the mountains and its quiet and tourist-friendly locals.</p></div>
           </div>
          </div>

          <div  data-aos="zoom-in"className='one'>
             <h1>7. Kullu</h1>
           <div className='flex'>
             <div><img src='https://www.trawell.in/admin/images/thumbs/454282455Kullu_Main_thumb.jpg' alt='...'></img></div>
             <div><p>
             At a distance of 40 km from Manali, 500 km from Delhi, 215 km from Shimla and 258 km from Chandigarh, Kullu is the capital town of Kullu district in the state of Himachal Pradesh. It is located on the banks of the Beas River in Kullu Valley at an altitude of 1230 meters. Kullu Manali is one of the top summer resorts to visit as part of Himachal tour packages and among the wellknown honeymoon destination in India.</p>

             <p>Kullu is a broad open valley formed by the Beas River between Manali and Larji. This valley is famous for its temples, beauty and its majestic hills covered with Pine and Deodar Forest and sprawling Apple Orchards.</p></div>
           </div>
          </div>

          <div data-aos="zoom-in" className='one'>
             <h1>8. Lansdowne</h1>
           <div className='flex'>
             <div><img src='https://www.trawell.in/admin/images/thumbs/676730242Lansdowne_Main_thumb.jpg' alt='...'></img></div>
             <div><p>
             Lansdowne was a popular hill resort for the British and they built a cantonment here. Lansdowne is named after its founder Lord Lansdowne, the Viceroy of India between 1888 and 1894. Currently, the command office of the legendary Garhwal Rifles of the Indian Army is situated in Lansdowne.</p>

             <p>At a distance of 40 km from Kotdwar, 131 km from Rishikesh, 106 km from Haridwar, 158 km from Dehradun and 247 km from Delhi, Lansdowne is a small hill town in Pauri Garhwal district of Uttarakhand. It lies at an elevation of 1706 m above sea level and is surrounded by thick oak and pine forests. It is one of the best hill stations in Uttarakhand state.</p></div>
           </div>
          </div>

          <div data-aos="zoom-in" className='one'>
             <h1>9. Almora</h1>
           <div className='flex'>
             <div><img src='https://www.trawell.in/admin/images/thumbs/36373250Almora_Main_thumb.jpg' alt='...'></img></div>
             <div><p>
             Lansdowne was a popular hill resort for the British and they built a cantonment here. Lansdowne is named after its founder Lord Lansdowne, the Viceroy of India between 1888 and 1894. Currently, the command office of the legendary Garhwal Rifles of the Indian Army is situated in Lansdowne.</p>

             <p>Almora was founded in 1568 by Kalyan Chand during the rule of the Chand dynasty. Prior to that the region was under the control of Katyuri King Bhaichaldeo and he has donated part of this land to a Gujrati Brahmin Sri Chand Tiwari. In the days of the Chand Kings it was called Rajapur and was also mentioned.</p></div>
           </div>
          </div>

          <div data-aos="zoom-in" className='one'>
             <h1>10. Narkanda</h1>
           <div className='flex'>
             <div><img src='https://www.trawell.in/admin/images/thumbs/264656589narkanda_thumb.jpg' alt='...'></img></div>
             <div><p>
             Situated on the India - Tibet Road, Narkanda is one of the offbeat places to visit in Himachal, and among the must-visit hill stations near Chandigarh. It is about 60 km from Shimla, 167 km from Chandigarh, and 414 km from New Delhi.</p>

             <p>Situated at an altitude of 8600 ft, the opulent town of Narkanda is known for its exquisite natural beauty with scenic views of snow-clad mountains, and dense forests. Narkanda is popularly known as the 'Getaway to Apple Country' as it connects to Thanedar. It can be visited along with Shimla holiday packages.</p></div>
           </div>
          </div>

        </div><hr></hr>

  <div className='table'>
    <table>
      <tr>
        <td style={{backgroundColor:"black", width:"300px"}}><b style={{color:"white"}}>Package</b></td>
        <td style={{backgroundColor:"black", width:"150px"}}><b style={{color:"white"}}>Duration</b></td>
        <td style={{backgroundColor:"black", width:"200px"}}><b style={{color:"white"}}>Starting Price</b></td>
      </tr>

      <tr>
        <td>Kasauli and Dharamshala in 2 days</td>
        <td>2D/1N</td>
        <td>₹ 5000</td>
      </tr>


      <tr>
        <td>Shimla Tour in 3 Days</td>
        <td>3D/2N</td>
        <td>₹ 8500</td>
      </tr>

      <tr>
        <td>Kullu & Manali in 3 Days</td>
        <td>3D/2N</td>
        <td>₹ 8500</td>
      </tr>

      <tr>
        <td>Shimla & Manali in 5 Days</td>
        <td>5D/4N</td>
        <td>₹ 14000</td>
      </tr>

      <tr>
        <td>Shimla, Manali and Amritsar in 6 Days</td>
        <td>6D/5N</td>
        <td>₹ 17300</td>
      </tr>

      <tr>
        <td>Best of Himachal in 7 Days</td>
        <td>7D/6N</td>
        <td>₹ 19950</td>
      </tr>

      </table>
  </div><br></br><hr></hr>

  <h1 style={{textAlign:"center"}}>Give Details For Any Further Enquiry</h1>
      
      <div className='enquiry'>
      <form onSubmit={handleSubmit}>
         <div>
         <span style={{fontSize:"20px"}}>Username:</span>
         <input type="text"name="username" autoComplete="off" onChange={handleForm} style={{marginLeft:"10px",backgroundColor:"white"}}></input><br></br><br></br>
         {errors.username && <span style={{color:"red"}}>{errors.username}</span>}
         </div>

         <div>
         <span style={{fontSize:"20px"}}>Password:</span>
         <input type="password" name="password" autoComplete="off" onChange={handleForm} style={{marginLeft:"12px", backgroundColor:"white"}}></input><br></br><br></br>
         {errors.password && <span style={{color:"red"}}>{errors.password}</span>}
         </div>

         <div>
         <span style={{fontSize:"20px"}}>Email:</span>
         <input type="email"name="email" autoComplete="off" onChange={handleForm} style={{marginLeft:"45px",backgroundColor:"white"}}></input><br></br><br></br>
         {errors.email && <span style={{color:"red"}}>{errors.email}</span>}
         </div>


         <input type="submit" style={{height:"40px", width:"80px", fontSize:"18px", borderRadius:"18px", backgroundColor:"rgb(116, 111, 111)"}}></input>
       </form>

        </div><br></br><hr></hr><br></br>
    <div className='foot'>
      <ul>
        <li><img src="https://cdn-icons-png.flaticon.com/128/733/733641.png" height={"40px"} alt=".."></img></li>
        <li><img src="https://cdn-icons-png.flaticon.com/128/1384/1384015.png" height={"40px"} alt=".."></img></li>
        <li><img src="https://cdn-icons-png.flaticon.com/128/2175/2175193.png" height={"40px"} alt=".."></img></li>
      </ul>
      </div>
      <br></br>
      <div className='footpoint'>
      <ul style={{fontSize:"18px"}}>
        <li>Info</li>
        <li>Support</li>
        <li>Marketing</li>
      </ul>
      </div>
    
    <div className='footpoint2'>
      <ul>
        <li>Term of Use</li>
        <li>Privacy Policy</li>
      </ul>
    </div><br></br><br></br>
    <p style={{textAlign:"center"}}>copyright@2025</p>
      </div>
    </>
          )
      }
      

export default Hills;