import { redirect } from "@remix-run/node"; 
import bgImage from '../images/bg_1.jpg'
import { Card } from "~/components";
import prof1 from '../images/prof1.jpg';
import prof2 from '../images/prof2.jpg';
import prof3 from '../images/prof3.jpg';
import { Form, Link, useActionData, useNavigation, } from "@remix-run/react";
import type { ActionFunction, ActionArgs, V2_MetaFunction,  } from "@remix-run/node";
import FbIcon from 'remixicon-react/FacebookLineIcon'
import Ig from 'remixicon-react/InstagramLineIcon'
import Twt from 'remixicon-react/TwitterLineIcon';
import { motion } from 'framer-motion'  
import React, { useState  } from 'react';


export const action:ActionFunction = async({request}: ActionArgs) => {
  const values =  Object.fromEntries(await request.formData());    
  console.log(values)
  return redirect('/')
} 
  


export default function Index() {    
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation(); 
  console.log("formaction", navigation.state) 
  const [email, setEmail] = useState('');  
  const [message, setMessage] = useState('');
  const [toast, setToast] = useState(false)
  const [err, setErr] = useState({
    email: '',
    message: ''
  })
 
  const checkEmail = () => {
    if(email == "") {
      return setErr((prev) => ({...prev, email: 'Email Required'})) 
    }else setErr((prev) => ({...prev, email: ''}));
    if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
      return setErr((prev) => ({
       ...prev,
       email: 'Invalid Email Format!'
      }));
   }else setErr((prev) => ({...prev, email: ''}));
  }

  const handleEmail = (event:React.ChangeEvent<HTMLInputElement>) => {
    checkEmail();
    setEmail(event.target.value)
  } 

  const checkMessage = () => {
    if(message == ""){
      return setErr((prev) => ({
        ...prev,
        message: 'Message Required'
      }))
    }else setErr((prev) => ({...prev, message: ''}));
  } 

  const handleMessage = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    checkMessage();
    setMessage(e.target.value)
  }
  
  const handleSubmit = () => {
    checkMessage();
    checkEmail();
    setEmail('');
    setMessage('');
    setToast(true);
    setTimeout(() => {
      setToast(false)
    }, 3000);
  }

  const isDisable = () :boolean => {
    if(((email == "") || (err?.email)) || ((message == "") || (err?.message))) return true
    return false
  }

  return ( 
    <>
      <div className={`z-[99] transition-all ${toast ? 'opacity-100' : 'opacity-0'} absolute top-24 right-5 rounded-lg text-white bg-[#22A5C2] px-5 py-3 `}>
        Thankyou for reaching us!
      </div>
      <section className="h-screen  flex items-center w-screen z-10  relative scroll-smooth">
        <img src={bgImage} className="absolute opacity-30 h-full w-screen object-cover" alt="bgImage" />
        <motion.div 
          initial={{x:50, opacity: 0}}
          transition={{type: 'spring', duration: 1.2, damping: 99, stiffness: 99}}
          whileInView={{x: 0, opacity: 1}}  
          viewport={{once: false}}
          className="h-full overflow-y-scroll  w-screen   absolute z-20 flex flex-col justify-center pl-10 transition-all sm:pl-20  " 
        >
          <h1 className="text-[50px] sm:text-[70px] md:mt-0   quicksand text-black transition-all">Spa and Resort</h1>
          <p className="w-4/5 md:tracking-widest poppins md:leading-10 break-words transition-all">Escape to our luxurious spa and resort for ultimate relaxation and rejuvenation. Indulge in breathtaking views, top-notch amenities, and pampering treatments designed to revitalize your body and mind.</p>
          <Link to='#about' className="border border-black hover:border-white duration-1000 self-start my-10 animate-typing font-bold hover:bg-white hover:bg-opacity-60 px-4 py-2 hover:rounded-lg transition-all bg-opacity-0 hover:shadow-xl ">
            Explore More...
          </Link>
        </motion.div>
      </section>
      <section id="about" className="scroll-smooth h-auto pt-5 pb-16 z-10 overflow-y-hidden relative bg-[#0C697E] bg-opacity-80 flex flex-col overflow-x-hidden" >
        <h1 className="text-white text-4xl poppins text-center w-screen mt-10 sm:mt-16">About us</h1>
        <p className="px-8 text-justify sm:px-28 text-white indent-8 leading-10 break-words tracking-widest mt-5 text-xl poppins">
          Welcome to SpaRe's, where luxury and relaxation meet to create an unforgettable spa and resort experience. Our brand is committed to providing you with the highest level of service, attention to detail, and quality products to ensure that your visit with us is nothing short of exceptional.
        </p>
        <p className="px-8 text-justify sm:px-28 text-white indent-8 leading-10 break-words tracking-widest mt-5 text-xl poppins">
          Our resort facilities are designed to help you unwind and destress. From our state-of-the-art fitness center to our outdoor pool and spacious guest rooms and suites, we have everything you need to achieve complete relaxation. Our team of highly skilled and experienced therapists uses only the finest quality products and techniques to deliver a personalized experience that leaves you feeling refreshed, renewed, and rejuvenated.
        </p>
        <p className="px-8 text-justify sm:px-28 text-white indent-8 leading-10 break-words tracking-widest mt-5 text-xl poppins">
          At SpaRe's, we understand that wellness is an important part of a healthy lifestyle. Our range of treatments, from massages and facials to full-body treatments, are designed to cater to all your wellness needs. Our commitment to exceptional service and attention to detail ensures that every aspect of your stay with us is nothing short of extraordinary. Thank you for choosing SpaRe's as your destination for luxury spa and resort experiences.
        </p>
        <h1 className="text-white poppins text-4xl text-center my-14 mb-8">Team</h1>
        <div className="flex gap-16 items-center md:justify-evenly  flex-col md:flex-row">
          <Card prof={prof1} name="Member 1" position="position 0" />
          <Card prof={prof2} name="Member 2" position="position 1" />
          <Card prof={prof3} name="Member 3" position="position 2" />
        </div>
      </section>
      <section className="sm:p-8 bg-[#00323D] w-screen flex flex-col sm:flex-row sm:justify-evenly pb-5 ">
        <div className="p-8  w-full sm:w-6/12  ">
          <Form method="POST" onSubmit={handleSubmit} >
            <h1 className="text-white text-3xl " >Contact us:</h1>
            <div >
              <input type="email" name="email" value={email} onChange={handleEmail}  className="peer email focus:outline outline-double outline-[#0C697E] w-[100%] sm:w-[100%] md:w-[70%] py-2 mt-2 px-4 rounded-md  text-lg" placeholder="Email" />
              {err?.email && <p className="text-red-500 mb-2">{err.email}</p> }
            </div>
            <div className="mt-5  ">
              <textarea name="message" value={message} onChange={handleMessage}  className="peer sm:w-[100%] w-[100%] md:w-[70%] h-32  rounded-md p-3" placeholder="Message..." minLength={1} />
              {err?.message && <p className="text-red-500 mb-2">{err.message}</p> }
            </div>
            <button disabled={isDisable()} type="submit" className="disabled:bg-slate-500 disabled:bg-opacity-50 disabled:text-slate-400   rounded-md bg-white w-[100%] sm:w-[100%] md:w-[70%] my-4 py-2">{navigation.state === "submitting" ? 'Loading...' : 'Submit'}</button>
          </Form>
        </div>
        <div className="w-screen sm:w-6/12 text-white text-xl self-center justify-self-center "> 
          <div className="flex flex-col gap-y-5 mb-5 px-10 items-center break-words leading-6 tracking-widest ">
            <h1>Email: sample@email.com</h1>
            <h1>Address: 2937 Petunia Way, Birmingham City</h1>
            <h1>Contact No. 09876543210</h1>
          </div>
          <div className="flex w-full gap-10 justify-center pb-8">
            <Link to='https://www.facebook.com' target="_blank" className="group bg-slate-900 p-3 rounded-full cursor-pointer hover:text-slate-900 hover:bg-white overflow-hidden transition-all "  >
              <FbIcon size={30}  className="group-hover:scale-150 hover:pr-1 transition-all duration-500"/>
            </Link>
            <div className="bg-slate-900 p-3 group rounded-full cursor-pointer hover:text-slate-900 hover:bg-white overflow-hidden transition-all ">
              <Ig size={30} className="group-hover:scale-150 transition-all duration-500"/>
            </div>
            <div className="bg-slate-900 p-3 group rounded-full cursor-pointer hover:text-slate-900 hover:bg-white overflow-hidden transition-all ">
              <Twt size={30} className="group-hover:scale-150 transition-all duration-500"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}