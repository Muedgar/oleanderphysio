import "../../styles/about.css";
import Image from "next/image";
import hallway from "../../assets/doc.png";
import hall from "../../assets/hallway_2.avif";
export default function About() {
  return (
    <div className="about w-screen h-fit p-10">
      <div className="w-full h-fit flex justify-evenly items-center">
        <div className="w-1/2 h-fit bg-slate-100 rounded-[20px] p-2 mt-[100px]">
          <p className="text-orange-500 font-bold m-10">How it started</p>
          <h1 className="m-10 text-[3em] w-[80%] break-words font-bold">
            Our Dream is Global Learning Transformation
          </h1>
          <p className="m-10 w-[80%] break-words">
            adsfaaksjdf;aksjf;aksdjf;aisdjfvai;sdjq;amdaksjdf;aksjf;djf;aisdjfvai;sdjq;amdaksjdf;aksjf;aksdjf;aisdjfvai;sdjq;amdaksjdf;aksjf;aksdjf;aisdjfvai;sdjq;amdksdjf;aksjdf;aksjf;aksdjf;aisdjfvai;sdjq;amd
            svna;osidfj;aksdjf;aksdjvd;naosdnv;aoisdf;asijd;fk
          </p>
        </div>
        <div className="w-[350px] h-[400px]">
          <Image
            src={hall}
            alt="hallway"
            className="w-full h-1/2 object-fill rounded-[20px]"
          />
          <div className="bg-slate-100 rounded-[20px] w-full h-fit flex mt-2">
            <div className="m-1">
              <p className="flex flex-col bg-slate-300 rounded-[20px] p-3 m-2 shadow-md">
                <span className="text-[2em] font-bold">3.4</span>
                <span className="font-thin">Years of experience</span>
              </p>
              <p className="flex flex-col bg-slate-300 rounded-[20px] p-3 m-2 shadow-md">
                <span className="text-[2em] font-bold">3.4</span>
                <span className="font-thin">Years of experience</span>
              </p>
            </div>
            <div className="m-1">
              <p className="flex flex-col bg-slate-300 rounded-[20px] p-3 m-2 shadow-md">
                <span className="text-[2em] font-bold">3.4</span>
                <span className="font-thin">Years of experience</span>
              </p>
              <p className="flex flex-col bg-slate-300 rounded-[20px] p-3 m-2 shadow-md">
                <span className="text-[2em] font-bold">3.4</span>
                <span className="font-thin">Years of experience</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-fit flex justify-evenly items-center">
        <div className="w-[400px] h-fit bg-slate-100 rounded-[20px] p-2 mt-[100px]">
          <p className="text-orange-500 m-4">Our Vision</p>
          <h1 className="m-4 text-[1.5em] w-[80%] break-words">
            Our Dream is Global Learning Transformation
          </h1>
          <p className="m-4 w-[80%] break-words">
            adsfaaksjdf;aksjf;aksdjf;aisdjfvai;sdjq;amdaksjdf;aksjf;djf;aisdjfvai;sdjq;amdaksjdf;aksjf;aksdjf;aisdjfvai;sdjq;amdaksjdf;aksjf;aksdjf;aisdjfvai;sdjq;amdksdjf;aksjdf;aksjf;aksdjf;aisdjfvai;sdjq;amd
            svna;osidfj;aksdjf;aksdjvd;naosdnv;aoisdf;asijd;fk
          </p>
        </div>
        <div className="w-[400px] h-fit bg-slate-100 rounded-[20px] p-2 mt-[100px]">
          <p className="text-orange-500 m-4">Our Mission</p>
          <h1 className="m-4 text-[1.5em] w-[80%] break-words">
            Our Dream is Global Learning Transformation
          </h1>
          <p className="m-4 w-[80%] break-words">
            adsfaaksjdf;aksjf;aksdjf;aisdjfvai;sdjq;amdaksjdf;aksjf;djf;aisdjfvai;sdjq;amdaksjdf;aksjf;aksdjf;aisdjfvai;sdjq;amdaksjdf;aksjf;aksdjf;aisdjfvai;sdjq;amdksdjf;aksjdf;aksjf;aksdjf;aisdjfvai;sdjq;amd
            svna;osidfj;aksdjf;aksdjvd;naosdnv;aoisdf;asijd;fk
          </p>
        </div>
      </div>
      <div className="w-full h-fit flex flex-col justify-center items-center">
        <div className="w-[80%] h-fit  rounded-[20px] p-2 mt-[100px] text-center">
          <p className="text-orange-500 font-bold m-10">Meet the team</p>
          <h1 className="m-10 text-[3em] w-full break-words font-bold">
            Meet Our Dedicated Team
          </h1>
          <div className="our_team w-full h-fit grid grid-cols-3">
            <div className="relative w-fit h-fit">
              <Image
                src={hallway}
                alt="hallway"
                className="w-[300px] h-[300px] object-fill m-5 rounded-[20px] shadow-lg"
              />
              <div className="absolute bottom-10 left-10">
                <p className="bg-green-500 text-white p-3 rounded-[20px] flex flex-col justify-start items-start shadow-2xl shadow-black">
                  <span className="font-bold">Maria Sachez</span>
                  <span className="font-thin">Physiotherapist</span>
                </p>
              </div>
            </div>

            <div className="relative w-fit h-fit">
              <Image
                src={hallway}
                alt="hallway"
                className="w-[300px] h-[300px] object-fill m-5 rounded-[20px] shadow-lg"
              />
              <div className="absolute bottom-10 left-10">
                <p className="bg-green-500 text-white p-3 rounded-[20px] flex flex-col justify-start items-start shadow-2xl shadow-black">
                  <span className="font-bold">Maria Sachez</span>
                  <span className="font-thin">Physiotherapist</span>
                </p>
              </div>
            </div>

            <div className="relative w-fit h-fit">
              <Image
                src={hallway}
                alt="hallway"
                className="w-[300px] h-[300px] object-fill m-5 rounded-[20px] shadow-lg"
              />
              <div className="absolute bottom-10 left-10">
                <p className="bg-green-500 text-white p-3 rounded-[20px] flex flex-col justify-start items-start shadow-2xl shadow-black">
                  <span className="font-bold">Maria Sachez</span>
                  <span className="font-thin">Physiotherapist</span>
                </p>
              </div>
            </div>

            <div className="relative w-fit h-fit">
              <Image
                src={hallway}
                alt="hallway"
                className="w-[300px] h-[300px] object-fill m-5 rounded-[20px] shadow-lg"
              />
              <div className="absolute bottom-10 left-10">
                <p className="bg-green-500 text-white p-3 rounded-[20px] flex flex-col justify-start items-start shadow-2xl shadow-black">
                  <span className="font-bold">Maria Sachez</span>
                  <span className="font-thin">Physiotherapist</span>
                </p>
              </div>
            </div>

            <div className="relative w-fit h-fit">
              <Image
                src={hallway}
                alt="hallway"
                className="w-[300px] h-[300px] object-fill m-5 rounded-[20px] shadow-lg"
              />
              <div className="absolute bottom-10 left-10">
                <p className="bg-green-500 text-white p-3 rounded-[20px] flex flex-col justify-start items-start shadow-2xl shadow-black">
                  <span className="font-bold">Maria Sachez</span>
                  <span className="font-thin">Physiotherapist</span>
                </p>
              </div>
            </div>

            <div className="relative w-fit h-fit">
              <Image
                src={hallway}
                alt="hallway"
                className="w-[300px] h-[300px] object-fill m-5 rounded-[20px] shadow-lg"
              />
              <div className="absolute bottom-10 left-10">
                <p className="bg-green-500 text-white p-3 rounded-[20px] flex flex-col justify-start items-start shadow-2xl shadow-black">
                  <span className="font-bold">Maria Sachez</span>
                  <span className="font-thin">Physiotherapist</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
