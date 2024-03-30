
import "../../styles/foundation.css"
import hall from "../../assets/hallway_1.avif"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
export default function Foundation() {
    return(
        <div className="foundation w-screen h-fit">
        <div className="w-full h-fit flex justify-start items-start relative p-10">
                <p className="w-1/3 break-words text-[2em] ml-20 pl-10">Stay connected with <span className="text-green-400">TeamChat</span>, your all-in-one chat app</p>
        </div>
        <div className="w-full h-fit">
              <Image src={hall} alt="hallway" className="w-full h-[400px] object-fill" />
        </div>
        <div className="foundation_about w-full h-[600px] relative">
            <div className="w-1/2 h-[400px] bg-green-400 absolute left-20 top-[-150px] rounded-[20px] shadow-lg">
                <p className="text-slate-800 text-[3em] font-regular m-4">About Foundation</p>
                <p className="w-[80%] break-words font-thin text-[1.5em] m-4">asdfjaskdfjoviamsvd;kasdjoivquenrpubqnwe;ofiaijavd;kasdjoivquenrpubqnwe;ofiaijavd;kasdjoivquenrpubqnwe;ofiaijavd;kasdjoivquenrpubqnwe;ofiaijavd;kasdjoivquenrpubqnwe;ofiaija;oisdjvniaow;enfvp;aosndgfvpaoindvnqwo;efn;asidjfnvasdf</p>
                <button className="m-4 bg-slate-800 text-white p-4 rounded-md shadow-md shadow-black hover:shadow-sm">Get in touch with us</button>
            </div>
        </div>

        <div className="foundation_mission w-full h-fit relative">
            <div className="absolute left-[200px] top-[-100px] w-[200px] h-[200px] border border-black rounded-[50%] flex justify-center items-center p-4">
                <p className="text-[1.5em] font-thin m-1">Scroll Down</p>
                <FontAwesomeIcon className="text-[1.5em] animate animate-bounce" icon={faArrowDown} />
            </div>
            <div className="w-1/2 h-[400px] bg-slate-400 absolute right-20 top-[-250px] rounded-[20px] shadow-lg">
                <p className="text-slate-800 text-[3em] font-regular m-4">Our Mission</p>
                <p className="w-[80%] break-words font-thin text-[1.5em] m-4">asdfjaskdfjoviamsvd;kasdjoivquenrpubqnwe;ofiaijavd;kasdjoivquenrpubqnwe;ofiaijavd;kasdjoivquenrpubqnwe;ofiaijavd;kasdjoivquenrpubqnwe;ofiaijavd;kasdjoivquenrpubqnwe;ofiaija;oisdjvniaow;enfvp;aosndgfvpaoindvnqwo;efn;asidjfnvasdf</p>
                <button className="m-4 bg-white text-slate-800 p-4 rounded-md shadow-md shadow-black hover:shadow-sm">Get in touch with us</button>
            </div>
        </div>      

        <div className="w-full h-fit flex flex-col justify-center items-center mt-[250px]">
            <p className="text-2xl text-slate-800">Our Values</p>
            <div className="w-full h-fit flex flex-col justify-center items-center">
                <div className="values mt-4 mb-4 w-[50%] h-fit  bg-slate-200 p-2 rounded-[20px]">
                    <h5 className="font-bold p-5">User Friendly</h5>
                    <p className="break-words p-5">sdfjaskdfjoviamsvd;kasdjoivquenrpubqnwe;ofiaijavd;kasdjoivquenrpubqnwe;ofiaijavd;kasdjoivquenrpubqnwe;ofiaijavd;kasdjoivquenrpubqnwe;ofiaijavd;kasdjoiv</p>
                </div>
                <div className="values mt-4 mb-4 w-[50%] h-fit  bg-slate-200 p-2 rounded-[20px]">
                    <h5 className="font-bold p-5">User Friendly</h5>
                    <p className="break-words p-5">sdfjaskdfjoviamsvd;kasdjoivquenrpubqnwe;ofiaijavd;kasdjoivquenrpubqnwe;ofiaijavd;kasdjoivquenrpubqnwe;ofiaijavd;kasdjoivquenrpubqnwe;ofiaijavd;kasdjoiv</p>
                </div>
                <div className="values mt-4 mb-4 w-[50%] h-fit  bg-slate-200 p-2 rounded-[20px]">
                    <h5 className="font-bold p-5">User Friendly</h5>
                    <p className="break-words p-5">sdfjaskdfjoviamsvd;kasdjoivquenrpubqnwe;ofiaijavd;kasdjoivquenrpubqnwe;ofiaijavd;kasdjoivquenrpubqnwe;ofiaijavd;kasdjoivquenrpubqnwe;ofiaijavd;kasdjoiv</p>
                </div>
            </div>
        </div>  
        </div>
    )
}