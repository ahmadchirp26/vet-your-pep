import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

import MainLayout from "../components/layout/MainLayout";
import RegisterForm from "../components/organisms/Forms/RegisterForm";
import { Button } from "../components/atoms/button";

import Logo from "../../../public/assets/logo.svg";

export default function Register() {
  return (
    <>
      <MainLayout>
        <div className="flex w-full h-full ">
          <div className="w-1/2 max-md:w-full flex flex-col justify-center items-center p-4">
            <div className="flex flex-col mx-4 items-center justify-center w-full gap-3">
              <span className="text-greensharp text-2xl  font-bold">
                {" "}
                VetYourPep
              </span>
              <span className="font-bold text-greensecondary text-xl">
                Create your account
              </span>
              <div className="rounded-3xl register-container-gradient p-8 w-3/2 mt-1">
                <RegisterForm />
              </div>
              <span className="text-white">
                Have an account?{" "}
                <span className="text-greensharp underline">Login here</span>
              </span>
              <div className="flex items-center w-1/2 justify-center mt-2">
                <div className="h-[1px] bg-graydark w-full"></div>
                <div className="flex items-center justify-center p-2 text-white or-gradient rounded-full">
                  or
                </div>
                <div className="h-[1px] bg-graydark w-full"></div>
              </div>

              <Button
                type="submit"
                className="field-drop-shadow flex h-10 px-10 items-center hover:bg-white justify-center gap-3 rounded-full bg-white text-black"
              >
                <FcGoogle size={25} /> Sign up with Google
              </Button>
            </div>
          </div>
          <div className="w-1/2 md:block register-background hidden  h-screen">
            <div className="flex justify-end w-full p-4">
              <Image src={Logo} alt="logo_image" className="w-16 h-16" />
            </div>
            <div className="flex w-full justify-center items-center  mt-10">
              <div className=" bg-black rounded-lg w-1/2 p-4 mt-10 bg-opacity-85 max-xl:w-3/4">
                <div className="flex flex-col items-center gap-4 ">
                  <span className="font-bold text-lg text-white">
                    VetYourPep
                  </span>
                  <span className="font-bold text-lg text-greensharp">
                    A Private Community
                  </span>
                  <span className="text-graylight text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum iaculis mattis nisi, sit amet sagittis felis
                    volutpat a. Quisque suscipit magna ac vestibulum auctor.
                    Cras luctus justo quis tellus tincidunt lacinia. Sed
                    tristique tortor nibh, vel viverra orci fermentum sed. Nulla
                    massa leo, efficitur sit amet urna hendrerit, auctor viverra
                    erat. Ut in arcu risus.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}