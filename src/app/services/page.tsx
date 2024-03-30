
import "../../styles/foundation.css"
import hall from "../../assets/hallway_1.avif"
import Image from "next/image"
export default function Services() {
    return(
        <div className="foundation w-screen h-fit">
        <div className="w-full h-fit flex justify-start items-start relative p-10">
                <p className="w-1/3 break-words text-[2em] ml-20 pl-10">Stay connected with <span className="text-green-400">TeamChat</span>, your all-in-one chat app</p>
        </div>
        <div className="w-full h-fit">
              <Image src={hall} alt="hallway" className="w-full h-[400px] object-fill" />
        </div>
        </div>
    )
}