"use client";

import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface Props {
  href: string;
  label: string;
}

const TransitionLinkMenu = ({ href, label }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="cursor-pointer bg-green-200 p-2 rounded-md hover:shadow-md"
    >
      <FontAwesomeIcon icon={faBars} />
    </button>
  );
};

export default TransitionLinkMenu;
