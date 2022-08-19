import logo from "../Assets/Images/kap-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
export default function Footer (props) {
    const theme = props.theme

    return (

<footer class={`p-4 bg-white rounded-lg shadow md:px-6 md:py-8 ${theme ? "bg-blaack" :"bg-offWhite"}`}>
    <div class="sm:flex sm:items-center sm:justify-center">
        <a href="https://capreign.com/" class="flex items-center justify-center mb-4 sm:mb-0">
            <img src={logo} alt="Capreign Logo" />
                   </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-lightGray sm:mb-0 text-gray">
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
                <a href="#" class="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <hr class="my-6 border-gray sm:mx-auto dark:border-gray lg:my-8" />
    <span class="block text-sm text-gray sm:text-center">© 2022 <a href="https://capreign.com/" class="hover:underline">Cpareign™</a>. All Rights Reserved.
    </span>
</footer>


    );
};

