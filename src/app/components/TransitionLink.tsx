"use client"

import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "@/utils/animations"

interface Props {
    href: string
    label: string
}

const TransitionLink = ({href, label}: Props) => {
    const router = useRouter();
    const pathname = usePathname()

    const handleClick = () => {
        if(pathname !== href) {
            animatePageOut(href, router)
        }
    }


    return (
        <button
            className="z-10 text-xl text-neutral-900 hover:text-neutral-700 hover:border-b-2 hover:border-green-300"
            onClick={handleClick}
        >
            {label}
        </button>
    )
}

export default TransitionLink