import { sm_logo_white } from "../assets";
import { contacts, navLinks, social } from "../constants";

export default function Footer() {
  return (
    <footer className="relative max-w-full bg-primary-25 ">
      <div className="flex md:justify-between md:px-32 px-8 py-20 md:flex-row flex-col justify-center items-center ">
        <img src={sm_logo_white} />
        <div>
          <div className="md:flex md:justify-between text-center md:text-start">
            <div className="space-y-4 mt-8">
              <span className="font-bold text-xl font-bold text-white">
                Menu
              </span>
              <ul className="list-none flex justify-start md:items-start flex-1 flex-col gap-4 font-nunito font-semi-bold text-white ">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className="hover:text-primary-100 cursor-pointer"
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4 md:ml-12 mt-8">
              <span className="font-bold text-xl font-bold text-white">
                Contacts
              </span>
              <ul className="list-none flex justify-start md:items-start items-center flex-1 flex-col gap-4 font-nunito font-semi-bold text-white">
                {contacts.map((nav) => (
                  <li
                    key={nav.id}
                    className="hover:text-primary-100 cursor-pointer"
                  >
                    <div className="flex">
                      <img className="pr-2 " src={nav.icon} />
                      <a>{nav.name}</a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#001B42] text-center text-white w-full p-4">
        &copy; <em id="date"></em>MessageMail
      </div>
    </footer>
  );
}
