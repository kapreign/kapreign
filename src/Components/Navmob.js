export default function Navmob() {
  return (
    <div className="bg-lightGray lg:hidden" id="navbar-default">
      <ul className="flex flex-col md:mt-0 md:text-md md:font-medium">
        <li>
          <a
            href="#"
            className="block py-2 pr-4 pl-3 text-gray hover:text-blue hover:bg-offWhite md:border-0 md:p-5 dark:text-gray"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 pr-4 pl-3 text-gray hover:text-blue hover:bg-offWhite md:border-0 md:p-5 dark:text-gray"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 pr-4 pl-3 text-gray hover:text-blue hover:bg-offWhite md:border-0 md:p-5 dark:text-gray"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/9497656243"
            className="block py-2 pr-4 pl-3 text-gray hover:text-blue hover:bg-offWhite md:border-0 md:p-5 dark:text-gray border-b border-lightGray"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

//<a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-lightGray hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
