import logo from "../Assets/Images/kap-logo.png";
import instagramImg from "../Assets/Images/sc4.svg";
import FacebookImg from "../Assets/Images/sc1.svg";
import whatsappImg from "../Assets/Images/sc3.svg";
import linkedinImg from "../Assets/Images/sc2.svg";
import Atchivementimg from "../Assets/Images/achievements.webp";
import SdgImg from "../Assets/Images//SDG.webp";
export default function Footer(props) {
  const theme = props.theme;

  return (
    <footer
      className={`p-4 bg-white shadow md:px-6 md:py-8 ${
        theme ? "bg-blacked" : "bg-offWhite"
      }`}
    >
      <hr className="my-6 border-lightGray sm:mx-auto dark:border-gray lg:my-8" />

      <div className="grid sm:grid-cols-1  md:grid-cols-5 gap-2 flex ">
        <div className="flex md:items-start sm:items-center flex-col md:col-span-2  ">
          <a href="https://Kapreign.com/">
            <img src={logo} alt="Kapreign Logo" />
          </a>

          <div className=" text-lightGray md:ml-6 ml-0"
          style={{fontSize:'18px'}}
          >
            Collaborate for your Digital Experience
          </div>
          <div className="flex md:ml-2 mt-2 sm:ml-2">
            <a href="https://www.instagram.com/kapreign" className="ml-4 w-5">
              {/* Replace the source with your Instagram icon */}
              <img src={instagramImg} alt="Instagram" className="w-5" />
            </a>
            <a
              href="https://in.linkedin.com/company/kapreign"
              className="ml-4 w-5"
            >
              {/* Replace the source with your LinkedIn icon */}
              <img src={linkedinImg} alt="LinkedIn" className="w-5" />
            </a>
            <a href="https://wa.me/7907226404" className="ml-4 w-5">
              {/* Replace the source with your WhatsApp icon */}
              <img src={whatsappImg} alt="WhatsApp" className="w-5" />
            </a>
            <a href="https://www.facebook.com/kapreign" className="ml-4 w-5">
              {/* Replace the source with your WhatsApp icon */}
              <img src={FacebookImg} alt="Facebook" className="w-5" />
            </a>
          </div>
          <span 
          className="block  text-lightGray sm:text-center md:ml-6 mt-2 sm:ml-0"
          style={{fontSize:'18px'}}
          >
            © 2024{" "}
            <a href="https://kapreign.com/" className="hover:underline"
              style={{fontSize:'18px'}}
            >
              Kapreign™
            </a>
            . All Rights Reserved.
          </span>
          <div className=" text-lightGray sm:text-center md:ml-6 mt-2 sm:ml-0"
            style={{fontSize:'18px'}}
          >
            Privacy policy | Terms of service
          </div>
          <div className="flex md:ml-6 mt-2 sm:ml-0 ">
            <img src={Atchivementimg} alt="Atchivementimg" className="w-40 mr-4" />
            <img src={SdgImg} alt="SdgImg" className="w-28" />
          </div>
        </div>

        <div>
          <ul className="text-sm text-lightGray flex flex-col text ml-4 md:text-left sm:text-center ">
            <li className="md:text-md sm:text-xl font-bold text-white">
              Company
            </li>
            <li>
              <a
                href="/about"
                className=" hover:underline md:text-md sm:text-xl"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/caseStudy"
                className="md:text-md sm:text-xl hover:underline"
              >
                Case Study
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="md:text-md sm:text-xl hover:underline"
              >
                Service
              </a>
            </li>
            <li>
              <a href="/blog" className="md:text-md sm:text-xl hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a
                href="/contactUs"
                className="md:text-md sm:text-xl hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ul className="text-sm text-lightGray flex flex-col text ml-4 md:text-left sm:text-center ">
            <li className="md:text-md sm:text-xl font-bold text-white">
              Services
            </li>
            <li>
              <a
                href="/services"
                className="md:text-md sm:text-xl hover:underline"
              >
                Web App Development
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="md:text-md sm:text-xl hover:underline"
              >
                Mobile App Development
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="md:text-md sm:text-xl hover:underline"
              >
                Web Designing
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="md:text-md sm:text-xl hover:underline"
              >
                Digital Marketing
              </a>
            </li>
            
          </ul>
        </div>

        <div>
          <ul className="text-sm text-lightGray flex flex-col text ml-4 md:text-left sm:text-center ">
            <li className="md:text-md sm:text-xl font-bold text-white">
              Address
            </li>
            <li className="md:text-md sm:text-xl">Vengoor, Angamaly,</li>
            <li className="md:text-md sm:text-xl">Kerala, 683572</li>
            <li className="md:text-md sm:text-xl font-bold text-white mt-2">
              Contact
            </li>
            <li className="md:text-md sm:text-xl">+91 9746574532</li>
            <li className="md:text-md sm:text-xl">+91 7907226404</li>
            <li className="md:text-md sm:text-xl">info@kapreign.com</li>

            <li className="md:text-md sm:text-xl font-bold text-white mt-2 ">
              Support Center
            </li>
            <a href="https://kapreign.freshdesk.com/support/login" className="md:text-md sm:text-xl cursor-pointer">Raise a Ticket</a>
          </ul>
        </div>
      </div>

      {/* <hr className="my-6 border-lightGray sm:mx-auto dark:border-gray lg:my-8" /> */}
    </footer>
  );
}
