
'use client'

import '../styles/home.css'
import '../styles/how_it_works.css'

import doc from '../assets/doc_eric.png'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';

import hallway from "../assets/hallway_2.avif"
import { faClose, faPlay } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [screenWidth, setScreenWidth] = useState<any>(typeof window !== 'undefined' ? window.innerWidth : 1040)
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window?.innerWidth);
    };

    window?.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window?.removeEventListener('resize', handleResize);
    };
  }, []);

  const [showVid, setShowVid] = useState(false)
  return (
    <>
     <div id='home_container' className='home w-screen h-fit flex flex-row justify-center items-center pb-4'>
      <div id="home_hide_content_1" className='m-auto h-full flex flex-col justify-start pt-20 pl-20 items-start w-1/2'>
        <p className={screenWidth>1000?'text-[2em] font-bold text-[rgb(10,32,32)] mt-5':'text-[2em] font-bold text-[rgb(10,32,32)]'}>
          <span>Feel Better About</span> <br/>
          <span>Finding <span className='text-[rgb(37,88,95)]'>Health care</span></span>
        </p>
        <p  style={{wordBreak:'break-word'}} className='break-words text-[1em] font-400 text-slate-900 mt-5'>loasdfj;aklsdjf;lkasdjf;iasjdfmioqwnem;vioasdjf;lkasdjfioasnva;sdifj;laksdjf;aksdnf;klasndf;nioasdf</p>
        <div className={screenWidth>1000?'mt-16':'mt-5'}>
          <button className='bg-[rgb(37,88,95)] p-3 m-2 text-white cursor-pointer hover:shadow-lg hover:shadow-black text-sm outline-none'>Get Care</button>
          <button className='bg-[rgb(10,32,32)] p-3 m-2 text-white cursor-pointer hover:shadow-lg hover:shadow-black text-sm outline-none'>Call Us Now</button>
        </div>
      </div>
      <div id="home_hide_content_2" className='m-auto h-[90%] flex flex-col mt-3 justify-start pt-10 pl-5 pr-5 items-start w-[80%] bg-gradient-to-r from-blue-100 to-green-100'>
        <p className={screenWidth>1000?'text-[2em] font-bold text-[rgb(10,32,32)] mt-5':'text-[2em] font-bold text-[rgb(10,32,32)]'}>
          <span>Feel Better About</span> <br/>
          <span>Finding <span className='text-[rgb(37,88,95)]'>Health care</span></span>
        </p>
        <p  style={{wordBreak:'break-word'}} className='break-words text-[1em] font-400 text-slate-900 mt-5'>loasdfj;aklsdjf;lkasdjf;iasjdfmioqwnem;vioasdjf;lkasdjfioasnva;sdifj;laksdjf;aksdnf;klasndf;nioasdf</p>
        <div className={screenWidth>1000?'mt-16':'mt-5'}>
          <button className='bg-[rgb(37,88,95)] p-3 m-2 text-white cursor-pointer hover:shadow-lg hover:shadow-black text-sm outline-none'>Get Care</button>
          <button className='bg-[rgb(10,32,32)] p-3 m-2 text-white cursor-pointer hover:shadow-lg hover:shadow-black text-sm outline-none'>Call Us Now</button>
        </div>
      </div>
      <div className='home_hide_doc w-1/2 relative h-[500px]'>
        <div className='absolute bottom-0 w-[350px] h-[450px] bg-white ml-[50px] rounded-tl-[200px] rounded-tr-[200px]'>
          <Image className='absolute bottom-0 w-full h-full object-cover rounded-tl-[200px] rounded-tr-[200px]' src={doc} alt='doc' />
        </div>
      </div>
     </div>

    
     <div className='w-screen h-[800px] relative'>

         {showVid && <div className='absolute top-0 z-[120] w-full h-full'>
          <button className='absolute top-2 right-2 w-8 h-8 bg-black text-white z-[150] cursor-pointer shadow-xl shadow-black hover:shadow-none' onClick={() => setShowVid(false)}><FontAwesomeIcon icon={faClose} /></button>
          <video className='w-full h-full object-cover' controls preload="none" loop muted>
  <source src="https://drive.google.com/uc?export=download&id=1Vx2eCi13GXaHWvqrm5RiM4kESQo7N0Tx" type="video/mp4" />
  Your browser does not support the video tag.
</video>

         </div>}
     <div id="how_it_works_video" className='absolute top-0 w-full h-full'>
      <Image className='w-full h-full relative' alt='hallway' src={hallway} />
     </div>
      <div className='absolute top-0 z-90 w-full h-full flex flex-col justify-evenly items-center'>
        <div>
        <h1 className='text-[2em] text-center z-90 text-black font-bold'>
          <span className='bg-black text-white p-2 text-center'>YOUR JOURNEY TO</span> <br /><br />
          <span className='bg-black text-white p-2 text-center'>WELLNESS BEGINS HERE</span>
        </h1>
        </div>
        <div>
          <div className='h-[90px] w-[90px] rounded-[50%] bg-green-200 flex flex-col justify-center items-center animate-bounce'>
          <button onClick={() => setShowVid(true)} id="how_it_works_video_button" className='relative bg-white text-center h-[70px] w-[70px] rounded-[50%]'>
            <FontAwesomeIcon className='text-[2em] text-green-200' icon={faPlay} />
          </button>
          </div>
        </div>
        <div className='w-full h-fit flex flex-col justify-center items-center'>
        <h4 className='flex flex-col justify-center items-center text-black font-bold'>
          <span className='text-center'>Schedule your appointment today and embark on a health</span>  
          <span className='text-center'>journey where you are the hero. Your well-being starts with us.</span>
        </h4>
        <br />
        <button className='bg-[#0a1429] p-3 text-white rounded-[30px] text-sm cursor-pointer shadow-lg shadow-black hover:shadow-none z-[100]'>
          How We Work
        </button>
        </div>
      </div>
     </div>
    </>
  );
}
