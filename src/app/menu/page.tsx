import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TransitionLink from "../components/TransitionLink";
import { faClose } from "@fortawesome/free-solid-svg-icons";


export default function MenuPage() {
    return(
      <div className="fixed top-0 left-0 z-[100] bg-white w-screen h-screen">
        
<ul className="m-auto w-full h-full flex flex-col justify-evenly items-center">
        <TransitionLink href="/" label="Home"/>
        <TransitionLink href="/about" label="About"/>
        <TransitionLink href="/services" label="Services"/>
        <TransitionLink href="/contact" label="Contact"/>
    </ul>
      </div>
    )
}