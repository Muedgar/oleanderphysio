"use client";

import "../styles/home.css";
import "../styles/how_it_works.css";

import doc from "../assets/doc_eric.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCalendarDays,
  faClock,
  faEnvelope,
  faLifeRing,
  faPlayCircle,
} from "@fortawesome/free-regular-svg-icons";

import hallway from "../assets/hallway_2.avif";

import hallwayTwo from "../assets/hallway_1.avif";
import {
  faArrowLeft,
  faArrowRight,
  faClose,
  faCross,
  faLocation,
  faPhone,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons/faCalendarDay";

export default function Home() {
  const [screenWidth, setScreenWidth] = useState<any>(
    typeof window !== "undefined" ? window.innerWidth : 1040,
  );
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window?.innerWidth);
    };

    window?.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window?.removeEventListener("resize", handleResize);
    };
  }, []);

  const [showVid, setShowVid] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(1);

  const [content, setContent] = useState<any>([]);
  useEffect(() => {
    setContent([
      {
        title: "Healthcare 1.",
        content:
          "sfdjbpiaons;didjbpiaons;difjaskdfjaskddjdjbpiaons;didjbpiaons;difjaskdfjaskddjbpiaons;difjaskdlfj;alskdj aons;didjbpiaons;difjaskdfjaskddjbpiaons;difjaskdlfj;alskdjf",
      },
      {
        title: "Healthcare 2.",
        content:
          "sfdjbpiaons;didjbpiaons;difjaskdfjaskddjdjbpiaons;didjbpiaons;difjaskdfjaskddjbpiaons;difjaskdlfj;alskdj aons;didjbpiaons;difjaskdfjaskddjbpiaons;difjaskdlfj;alskdjf",
      },
      {
        title: "Healthcare 3.",
        content:
          "sfdjbpiaons;didjbpiaons;difjaskdfjaskddjdjbpiaons;didjbpiaons;difjaskdfjaskddjbpiaons;difjaskdlfj;alskdj aons;didjbpiaons;difjaskdfjaskddjbpiaons;difjaskdlfj;alskdjf",
      },
    ]);
  }, []);
  return (
    <>
      <div
        id="home_container"
        className="home w-screen h-fit flex flex-row justify-center items-center pb-4"
      >
        <div
          id="home_hide_content_1"
          className="m-auto h-full flex flex-col justify-start pt-20 pl-20 items-start w-1/2"
        >
          <p
            className={
              screenWidth > 1000
                ? "text-[2em] font-bold text-[rgb(10,32,32)] mt-5"
                : "text-[2em] font-bold text-[rgb(10,32,32)]"
            }
          >
            <span>Feel Better About</span> <br />
            <span>
              Finding <span className="text-[rgb(37,88,95)]">Health care</span>
            </span>
          </p>
          <p
            style={{ wordBreak: "break-word" }}
            className="break-words text-[1em] font-400 text-slate-900 mt-5"
          >
            loasdfj;aklsdjf;lkasdjf;iasjdfmioqwnem;vioasdjf;lkasdjfioasnva;sdifj;laksdjf;aksdnf;klasndf;nioasdf
          </p>
          <div className={screenWidth > 1000 ? "mt-16" : "mt-5"}>
            <button className="bg-[rgb(37,88,95)] p-3 m-2 text-white cursor-pointer hover:shadow-lg hover:shadow-black text-sm outline-none">
              Get Care
            </button>
            <button className="bg-[rgb(10,32,32)] p-3 m-2 text-white cursor-pointer hover:shadow-lg hover:shadow-black text-sm outline-none">
              Call Us Now
            </button>
          </div>
        </div>
        <div
          id="home_hide_content_2"
          className="m-auto h-[90%] flex flex-col mt-3 justify-start pt-10 pl-5 pr-5 items-start w-[80%] bg-gradient-to-r from-blue-100 to-green-100"
        >
          <p
            className={
              screenWidth > 1000
                ? "text-[2em] font-bold text-[rgb(10,32,32)] mt-5"
                : "text-[2em] font-bold text-[rgb(10,32,32)]"
            }
          >
            <span>Feel Better About</span> <br />
            <span>
              Finding <span className="text-[rgb(37,88,95)]">Health care</span>
            </span>
          </p>
          <p
            style={{ wordBreak: "break-word" }}
            className="break-words text-[1em] font-400 text-slate-900 mt-5"
          >
            loasdfj;aklsdjf;lkasdjf;iasjdfmioqwnem;vioasdjf;lkasdjfioasnva;sdifj;laksdjf;aksdnf;klasndf;nioasdf
          </p>
          <div className={screenWidth > 1000 ? "mt-16" : "mt-5"}>
            <button className="bg-[rgb(37,88,95)] p-3 m-2 text-white cursor-pointer hover:shadow-lg hover:shadow-black text-sm outline-none">
              Get Care
            </button>
            <button className="bg-[rgb(10,32,32)] p-3 m-2 text-white cursor-pointer hover:shadow-lg hover:shadow-black text-sm outline-none">
              Call Us Now
            </button>
          </div>
        </div>
        <div className="home_hide_doc w-1/2 relative h-[500px]">
          <div className="absolute bottom-0 w-[350px] h-[450px] bg-white ml-[50px] rounded-tl-[200px] rounded-tr-[200px]">
            <Image
              className="absolute bottom-0 w-full h-full object-cover rounded-tl-[200px] rounded-tr-[200px]"
              src={doc}
              alt="doc"
            />
          </div>
        </div>
      </div>

      <div className="w-screen h-[800px] relative">
        {showVid && (
          <div className="absolute top-0 z-[120] w-full h-full">
            <button
              className="absolute top-2 right-2 w-8 h-8 bg-black text-white z-[150] cursor-pointer shadow-xl shadow-black hover:shadow-none"
              onClick={() => setShowVid(false)}
            >
              <FontAwesomeIcon icon={faClose} />
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/z4d4RuOgFjs?si=kxhb0ERHdLB5PUfK?mute=0"
              title="Oleander Physio Clinic"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        )}
        <div id="how_it_works_video" className="absolute top-0 w-full h-full">
          <Image
            className="w-full h-full relative"
            alt="hallway"
            src={hallway}
          />
        </div>
        <div className="absolute top-0 z-90 w-full h-full flex flex-col justify-evenly items-center">
          <div>
            <h1 className="text-[2em] text-center z-90 text-black font-bold">
              <span className="bg-black text-white p-2 text-center">
                YOUR JOURNEY TO
              </span>{" "}
              <br />
              <br />
              <span className="bg-black text-white p-2 text-center">
                WELLNESS BEGINS HERE
              </span>
            </h1>
          </div>
          <div>
            <div className="h-[90px] w-[90px] rounded-[50%] bg-green-200 flex flex-col justify-center items-center animate-bounce">
              <button
                onClick={() => setShowVid(true)}
                id="how_it_works_video_button"
                className="relative bg-white text-center h-[70px] w-[70px] rounded-[50%]"
              >
                <FontAwesomeIcon
                  className="text-[2em] text-green-200"
                  icon={faPlay}
                />
              </button>
            </div>
          </div>
          <div className="w-[90%] h-fit flex flex-col justify-center items-center">
            <h4 className="flex flex-col justify-center items-center text-black font-bold">
              <span className="text-center">
                Schedule your appointment today and embark on a health
              </span>
              <span className="text-center">
                journey where you are the hero. Your well-being starts with us.
              </span>
            </h4>
            <br />
            <button className="bg-[#0a1429] p-3 text-white rounded-[30px] text-sm cursor-pointer shadow-lg shadow-black hover:shadow-none z-[100]">
              How We Work
            </button>
          </div>
        </div>
      </div>

      {/* what we love to do */}

      <div className="w-screen h-fit p-10">
        <div id="advantages">
          <p className="text-[3em] font-bold">
            <span>We Care About</span>
            <br />
            <span>Your</span>
            <span className="text-[#237e5e]"> Families</span>
          </p>
          <div className="w-[40%] h-full flex flex-col justify-end pb-[30px] pl-[50px]">
            <p className="text-bottom break-words text-slate-600 font-semibold">
              akdjf;kasjdf;kasdj;fkjsa;dkfja;skdfja;skdfj;aksdjf;alskdjf;aklsjd;flkajs;dlfkj
            </p>
          </div>
        </div>

        <div
          id="advantages_list"
          className="mt-[50px] w-full h-fit flex justify-evenly"
        >
          <div className="w-fit h-fit flex flex-col mt-[50px]">
            <p className="font-bold text-[1.5em] text-[#237e5e]">
              Our Advantages
            </p>
            <ul className="m-2">
              <li className="m-[20px] flex justify-start items-center font-bold">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="bg-[#237e5e3d] p-3 text-[#237e5e] rounded-md mr-2"
                />{" "}
                Make an appointment
              </li>
              <li className="m-[20px] flex justify-start items-center font-bold">
                <FontAwesomeIcon
                  icon={faLifeRing}
                  className="bg-[#237e5e3d] p-3 text-[#237e5e] rounded-md mr-2"
                />{" "}
                Digital x-ray on site
              </li>
              <li className="m-[20px] flex justify-start items-center font-bold">
                <FontAwesomeIcon
                  icon={faClock}
                  className="bg-[#237e5e3d] p-3 text-[#237e5e] rounded-md mr-2"
                />{" "}
                Emergency services
              </li>
              <li className="m-[20px] flex justify-start items-center font-bold">
                <FontAwesomeIcon
                  icon={faCross}
                  className="bg-[#237e5e3d] p-3 text-[#237e5e] rounded-md mr-2"
                />{" "}
                Immunizations
              </li>
            </ul>
          </div>
          <div className="flex relative w-1/2">
            <Image
              className="w-[100%] object-fill shadow-2xl shadow-[#68e3b8bd]"
              src={hallwayTwo}
              alt="group-photo"
            />
            <div className="absolute bottom-[-20px] right-[-20px] bg-[#29bc88] w-[320px] p-5">
              <p className="text-white flex justify-start items-center">
                <FontAwesomeIcon className="mr-2" icon={faPhone} />
                (330) 718-8699
              </p>
              <p className="text-white flex justify-start items-center">
                <FontAwesomeIcon className="mr-2" icon={faLocation} />
                65 Commings Dr Walton, KY
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* content slider */}

      <div className="w-screen h-[750px]  relative">
        <div className="w-full h-full">
          {currentSlide === 1 && (
            <Image className="w-full h-full" src={hallway} alt="hero-img" />
          )}
          {currentSlide === 2 && (
            <Image className="w-full h-full" src={hallwayTwo} alt="hero-img" />
          )}
          {currentSlide === 3 && (
            <Image className="w-full h-full" src={hallway} alt="hero-img" />
          )}
        </div>
        <div
          id="content-slider"
          className="w-full h-full absolute bottom-0 z-10 p-10 flex justify-start"
        >
          <div className="w-fit h-[90%] bg-[#585858]">
            <div
              onClick={() => setCurrentSlide(1)}
              className={
                currentSlide === 1
                  ? `w-[4px] transition-all h-1/3 ml-[-1px] bg-[#e6e6e6]`
                  : `h-1/3 bg-[#585858]`
              }
            ></div>
            <div
              onClick={() => setCurrentSlide(2)}
              className={
                currentSlide === 2
                  ? `w-[4px] transition-all h-1/3 ml-[-1px] bg-[#e6e6e6]`
                  : `h-1/3 bg-[#585858]`
              }
            ></div>
            <div
              onClick={() => setCurrentSlide(3)}
              className={
                currentSlide === 3
                  ? `w-[4px] transition-all h-1/3 ml-[-1px] bg-[#e6e6e6]`
                  : `h-1/3 bg-[#585858]`
              }
            ></div>
          </div>
          <div className="w-full h-[90%] flex flex-col justify-end mt-[-5%] pl-10">
            <h1 className="text-white">
              <span className="text-[2em]">{currentSlide}</span>
              <span className="text-[1.5em] text-[#b9b9b9]">/</span>
              <span className="text-[1.5em] text-[#b9b9b9]">3</span>
            </h1>
            <div className="w-full overflow-hidden">
              <h1 className="text-[2em] font-bold text-white">
                {content[currentSlide - 1]?.title}
              </h1>
              <p className="w-[60%] h-fit text-[#dedede] break-words text-sm">
                {content[currentSlide - 1]?.content}
              </p>
            </div>
            <div className="mt-[20px]">
              <button
                onClick={() => {
                  if (currentSlide > 1) {
                    setCurrentSlide(currentSlide - 1);
                  }
                }}
              >
                <FontAwesomeIcon
                  className="text-white border border-white p-4 rounded-[50%] hover:bg-white hover:text-black"
                  icon={faArrowLeft}
                />
              </button>
              <button
                onClick={() => {
                  if (currentSlide < 3) {
                    setCurrentSlide(currentSlide + 1);
                  }
                }}
              >
                <FontAwesomeIcon
                  className="text-white border border-white p-4 rounded-[50%] ml-2 hover:bg-white hover:text-black"
                  icon={faArrowRight}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
