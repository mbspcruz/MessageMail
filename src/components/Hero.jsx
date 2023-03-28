import { ButtonForm } from ".";
import { hero } from "../assets";

export default function Hero() {
  return (
    <div
      id="home"
      className="flex mt-40 flex-col md:px-32 px-8 w-full md:justify-between justify-center lg:items-start items-center text-center md:text-left md:flex-row font-nunito"
    >
      <div className="md:w-1/2 lg:pr-24 mt-20">
        <h1 className="lg:text-7xl text-5xl font-bold text-primary-25">
          Manage your DM's with Ease
        </h1>
        <h2 className="lg:text-2xl text-xl mt-8 pr-10 text-primary-25">
          We offer you a central location to manage all of your social media
          account's direct messages!
        </h2>
        <div className="mt-8 w-full mb-20 flex md:block justify-center">
          <ButtonForm />
        </div>
      </div>
      <img
        src={hero}
        className="object-contain max-w-full max-h-screen md:w-1/2 "
      />
    </div>
  );
}
