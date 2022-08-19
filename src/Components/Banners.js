import avatar from "../Assets/Images/Person.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
export default function Banners(props) {
  const theme = props.theme;

  return (
    <div className={`relative h-auto ${theme ? "bg-black" : "bg-white"}`}>
      <section className="relative py-5 sm:py-5 lg:py-5 lg:pb-5">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-12">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-8">
            <div>
              <div
                className={`text-center lg:text-left ${
                  theme ? "text-white" : "text-black"
                }`}
              >
                <h1 className="font-rale font-black text-2xl text-4xl leading-tight sm:text-6xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">
                  Build your next idea with us
                </h1>
                <p className="mt-2 text-lg sm:mt-8 font-inter">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vehicula massa in enim luctus. Rutrum arcu.
                </p>

                <div className="relative flex flex-col sm:flex-row sm:space-x-4 mt-8 sm:mt-10 md:justify-center sm:justify-center lg:justify-start">
                  <a
                    href="#_"
                    className="flex items-center px-10 py-3 text-white bg-gray rounded-md hover:bg-lightGray hover:text-white"
                  >
                    Connect With Us
                  </a>
                </div>
              </div>
            </div>

            <div>
              <img className="w-full" src={avatar} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
