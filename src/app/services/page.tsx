"use client";

import "../../styles/foundation.css";
import hall from "../../assets/hallway_1.avif";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
export default function Services() {
  const [serviceOne, setServiceOne] = useState(false);
  const [serviceTwo, setServiceTwo] = useState(false);
  const [serviceThree, setServiceThree] = useState(false);
  const [serviceFour, setServiceFour] = useState(false);
  const [serviceFive, setServiceFive] = useState(false);
  const [serviceSix, setServiceSix] = useState(false);
  const [serviceSeven, setServiceSeven] = useState(false);
  const [serviceEight, setServiceEight] = useState(false);
  const [serviceNine, setServiceNine] = useState(false);
  const [serviceTen, setServiceTen] = useState(false);
  const [serviceEleven, setServiceEleven] = useState(false);
  const [serviceTwelve, setServiceTwelve] = useState(false);

  return (
    <div className="foundation w-screen h-fit">
      <div className="w-full h-fit flex justify-start items-start relative p-10">
        <p className="w-1/3 break-words text-[2em] ml-20 pl-10">
          Innovation Meets Expertise In Our Range Of Services
        </p>
      </div>
      <div className="w-full h-fit">
        <Image
          src={hall}
          alt="hallway"
          className="w-full h-[400px] object-fill"
        />
      </div>
      <div className="w-full h-fit flex justify-start items-start relative p-10">
        <p className="w-full break-words text-[1.5em] ml-20 pl-10">
          Our Services And Works
        </p>
      </div>
      <div className="w-full h-fit overflow-hidden pr-20 pl-20 pb-20">
        <div className="w-full h-fit m-auto bg-slate-200">
          <div
            onClick={() => setServiceOne(!serviceOne)}
            className="bg-slate-200 relative w-full h-[70px] flex justify-between items-center p-5 border-t-2 border-b-2 border-slate-100 cursor-pointer"
          >
            <h4 className="text-[1.5em]">UI/UX Design</h4>
            <FontAwesomeIcon
              className="text-[2em]"
              icon={faArrowAltCircleRight}
            />
          </div>
          {serviceOne && (
            <p className="break-words w-full h-fit p-10">
              asdfkjas;dkljf;askldjfaiosjnvpqwuiefpoiqwdfmnauvpqwijf8qhwpeuifhoqgyrwgoquwieryhjfnpqwuhesfjnsduhnvalufshdjalsjdfhuiqvnawresjfpuivnqewurgpquerihfgbqyeriuhfqnulwaidskjhfvfdlaxdjvn,xzcmvbkqekryufhpuijsdafnblasdufjh
            </p>
          )}
        </div>

        <div className="w-full h-fit m-auto bg-slate-200">
          <div
            onClick={() => setServiceTwo(!serviceTwo)}
            className="bg-slate-200 relative w-full h-[70px] flex justify-between items-center p-5 border-t-2 border-b-2 border-slate-100 cursor-pointer"
          >
            <h4 className="text-[1.5em]">UI/UX Design</h4>
            <FontAwesomeIcon
              className="text-[2em]"
              icon={faArrowAltCircleRight}
            />
          </div>
          {serviceTwo && (
            <p className="break-words w-full h-fit p-5">
              asdfkjas;dkljf;askldjfaiosjnvpqwuiefpoiqwdfmnauvpqwijf8qhwpeuifhoqgyrwgoquwieryhjfnpqwuhesfjnsduhnvalufshdjalsjdfhuiqvnawresjfpuivnqewurgpquerihfgbqyeriuhfqnulwaidskjhfvfdlaxdjvn,xzcmvbkqekryufhpuijsdafnblasdufjh
            </p>
          )}
        </div>

        <div className="w-full h-fit m-auto bg-slate-200">
          <div
            onClick={() => setServiceThree(!serviceThree)}
            className="bg-slate-200 relative w-full h-[70px] flex justify-between items-center p-5 border-t-2 border-b-2 border-slate-100 cursor-pointer"
          >
            <h4 className="text-[1.5em]">UI/UX Design</h4>
            <FontAwesomeIcon
              className="text-[2em]"
              icon={faArrowAltCircleRight}
            />
          </div>
          {serviceThree && (
            <p className="break-words w-full h-fit p-10">
              asdfkjas;dkljf;askldjfaiosjnvpqwuiefpoiqwdfmnauvpqwijf8qhwpeuifhoqgyrwgoquwieryhjfnpqwuhesfjnsduhnvalufshdjalsjdfhuiqvnawresjfpuivnqewurgpquerihfgbqyeriuhfqnulwaidskjhfvfdlaxdjvn,xzcmvbkqekryufhpuijsdafnblasdufjh
            </p>
          )}
        </div>
        <div className="w-full h-fit m-auto bg-slate-200">
          <div
            onClick={() => setServiceFour(!serviceFour)}
            className="bg-slate-200 relative w-full h-[70px] flex justify-between items-center p-5 border-t-2 border-b-2 border-slate-100 cursor-pointer"
          >
            <h4 className="text-[1.5em]">UI/UX Design</h4>
            <FontAwesomeIcon
              className="text-[2em]"
              icon={faArrowAltCircleRight}
            />
          </div>
          {serviceFour && (
            <p className="break-words w-full h-fit p-10">
              asdfkjas;dkljf;askldjfaiosjnvpqwuiefpoiqwdfmnauvpqwijf8qhwpeuifhoqgyrwgoquwieryhjfnpqwuhesfjnsduhnvalufshdjalsjdfhuiqvnawresjfpuivnqewurgpquerihfgbqyeriuhfqnulwaidskjhfvfdlaxdjvn,xzcmvbkqekryufhpuijsdafnblasdufjh
            </p>
          )}
        </div>
        <div className="w-full h-fit m-auto bg-slate-200">
          <div
            onClick={() => setServiceFive(!serviceFive)}
            className="bg-slate-200 relative w-full h-[70px] flex justify-between items-center p-5 border-t-2 border-b-2 border-slate-100 cursor-pointer"
          >
            <h4 className="text-[1.5em]">UI/UX Design</h4>
            <FontAwesomeIcon
              className="text-[2em]"
              icon={faArrowAltCircleRight}
            />
          </div>
          {serviceFive && (
            <p className="break-words w-full h-fit p-10">
              asdfkjas;dkljf;askldjfaiosjnvpqwuiefpoiqwdfmnauvpqwijf8qhwpeuifhoqgyrwgoquwieryhjfnpqwuhesfjnsduhnvalufshdjalsjdfhuiqvnawresjfpuivnqewurgpquerihfgbqyeriuhfqnulwaidskjhfvfdlaxdjvn,xzcmvbkqekryufhpuijsdafnblasdufjh
            </p>
          )}
        </div>
        <div className="w-full h-fit m-auto bg-slate-200">
          <div
            onClick={() => setServiceSix(!serviceSix)}
            className="bg-slate-200 relative w-full h-[70px] flex justify-between items-center p-5 border-t-2 border-b-2 border-slate-100 cursor-pointer"
          >
            <h4 className="text-[1.5em]">UI/UX Design</h4>
            <FontAwesomeIcon
              className="text-[2em]"
              icon={faArrowAltCircleRight}
            />
          </div>
          {serviceSix && (
            <p className="break-words w-full h-fit p-10">
              asdfkjas;dkljf;askldjfaiosjnvpqwuiefpoiqwdfmnauvpqwijf8qhwpeuifhoqgyrwgoquwieryhjfnpqwuhesfjnsduhnvalufshdjalsjdfhuiqvnawresjfpuivnqewurgpquerihfgbqyeriuhfqnulwaidskjhfvfdlaxdjvn,xzcmvbkqekryufhpuijsdafnblasdufjh
            </p>
          )}
        </div>
        <div className="w-full h-fit m-auto bg-slate-200">
          <div
            onClick={() => setServiceSeven(!serviceSeven)}
            className="bg-slate-200 relative w-full h-[70px] flex justify-between items-center p-5 border-t-2 border-b-2 border-slate-100 cursor-pointer"
          >
            <h4 className="text-[1.5em]">UI/UX Design</h4>
            <FontAwesomeIcon
              className="text-[2em]"
              icon={faArrowAltCircleRight}
            />
          </div>
          {serviceSeven && (
            <p className="break-words w-full h-fit p-10">
              asdfkjas;dkljf;askldjfaiosjnvpqwuiefpoiqwdfmnauvpqwijf8qhwpeuifhoqgyrwgoquwieryhjfnpqwuhesfjnsduhnvalufshdjalsjdfhuiqvnawresjfpuivnqewurgpquerihfgbqyeriuhfqnulwaidskjhfvfdlaxdjvn,xzcmvbkqekryufhpuijsdafnblasdufjh
            </p>
          )}
        </div>
        <div className="w-full h-fit m-auto bg-slate-200">
          <div
            onClick={() => setServiceEight(!serviceEight)}
            className="bg-slate-200 relative w-full h-[70px] flex justify-between items-center p-5 border-t-2 border-b-2 border-slate-100 cursor-pointer"
          >
            <h4 className="text-[1.5em]">UI/UX Design</h4>
            <FontAwesomeIcon
              className="text-[2em]"
              icon={faArrowAltCircleRight}
            />
          </div>
          {serviceEight && (
            <p className="break-words w-full h-fit p-10">
              asdfkjas;dkljf;askldjfaiosjnvpqwuiefpoiqwdfmnauvpqwijf8qhwpeuifhoqgyrwgoquwieryhjfnpqwuhesfjnsduhnvalufshdjalsjdfhuiqvnawresjfpuivnqewurgpquerihfgbqyeriuhfqnulwaidskjhfvfdlaxdjvn,xzcmvbkqekryufhpuijsdafnblasdufjh
            </p>
          )}
        </div>
        <div className="w-full h-fit m-auto bg-slate-200">
          <div
            onClick={() => setServiceNine(!serviceNine)}
            className="bg-slate-200 relative w-full h-[70px] flex justify-between items-center p-5 border-t-2 border-b-2 border-slate-100 cursor-pointer"
          >
            <h4 className="text-[1.5em]">UI/UX Design</h4>
            <FontAwesomeIcon
              className="text-[2em]"
              icon={faArrowAltCircleRight}
            />
          </div>
          {serviceNine && (
            <p className="break-words w-full h-fit p-10">
              asdfkjas;dkljf;askldjfaiosjnvpqwuiefpoiqwdfmnauvpqwijf8qhwpeuifhoqgyrwgoquwieryhjfnpqwuhesfjnsduhnvalufshdjalsjdfhuiqvnawresjfpuivnqewurgpquerihfgbqyeriuhfqnulwaidskjhfvfdlaxdjvn,xzcmvbkqekryufhpuijsdafnblasdufjh
            </p>
          )}
        </div>
        <div className="w-full h-fit m-auto bg-slate-200">
          <div
            onClick={() => setServiceTen(!serviceTen)}
            className="bg-slate-200 relative w-full h-[70px] flex justify-between items-center p-5 border-t-2 border-b-2 border-slate-100 cursor-pointer"
          >
            <h4 className="text-[1.5em]">UI/UX Design</h4>
            <FontAwesomeIcon
              className="text-[2em]"
              icon={faArrowAltCircleRight}
            />
          </div>
          {serviceTen && (
            <p className="break-words w-full h-fit p-10">
              asdfkjas;dkljf;askldjfaiosjnvpqwuiefpoiqwdfmnauvpqwijf8qhwpeuifhoqgyrwgoquwieryhjfnpqwuhesfjnsduhnvalufshdjalsjdfhuiqvnawresjfpuivnqewurgpquerihfgbqyeriuhfqnulwaidskjhfvfdlaxdjvn,xzcmvbkqekryufhpuijsdafnblasdufjh
            </p>
          )}
        </div>
        <div className="w-full h-fit m-auto bg-slate-200">
          <div
            onClick={() => setServiceEleven(!serviceEleven)}
            className="bg-slate-200 relative w-full h-[70px] flex justify-between items-center p-5 border-t-2 border-b-2 border-slate-100 cursor-pointer"
          >
            <h4 className="text-[1.5em]">UI/UX Design</h4>
            <FontAwesomeIcon
              className="text-[2em]"
              icon={faArrowAltCircleRight}
            />
          </div>
          {serviceEleven && (
            <p className="break-words w-full h-fit p-10">
              asdfkjas;dkljf;askldjfaiosjnvpqwuiefpoiqwdfmnauvpqwijf8qhwpeuifhoqgyrwgoquwieryhjfnpqwuhesfjnsduhnvalufshdjalsjdfhuiqvnawresjfpuivnqewurgpquerihfgbqyeriuhfqnulwaidskjhfvfdlaxdjvn,xzcmvbkqekryufhpuijsdafnblasdufjh
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
