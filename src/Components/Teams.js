export default function Teams(props) {
  const theme = props.theme;
  const teamsArray = [
    {
      img: "https://cdn.devdojo.com/images/june2021/avt-03.jpg",
      name:"Sreeharsh"
    },
  ];

  return (
    <section
      className={`relative py-12 overflow-hidden ${
        theme ? "bg-lightBlack" : "bg-offWhite"
      }`}
    >
      <span className="absolute top-0 right-0 flex flex-col items-end mt-0 -mr-16 opacity-60">
        <span className="container hidden w-screen h-32 max-w-xs mt-20 transform rounded-full rounded-r-none md:block md:max-w-xs lg:max-w-lg 2xl:max-w-3xl bg-blue-50"></span>
      </span>

      <span className="absolute bottom-0 left-0"> </span>

      <div className="relative px-16 mx-auto max-w-7xl">
        <div className="m-3 p-auto">
          <span className="font-rale font-black md:text-5xl text-2xl text-kap text-left">
            Meet Our
          </span>
          <span
            className={`font-rale font-black md:text-5xl text-2xl  text-left" ${
              theme ? "text-white" : "text-black"
            }`}
          >
            {" "}
            Amazing Team
          </span>
        </div>
        <div className="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
          <div
            className={`flex flex-col items-center justify-center col-span-1 ${
              theme ? "text-white" : "text-gray"
            }`}
          >
            <div className="relative p-5">
              <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50"></div>
              <img
                className="relative z-20 w-full rounded-full"
                src="https://cdn.devdojo.com/images/june2021/avt-03.jpg"
              />
            </div>
            <div className="mt-3 space-y-2 text-center">
              <div className="space-y-1 text-lg font-medium leading-6">
                <h3>Freddy Smith</h3>
                <p className="text-blue-600">CEO and Founder</p>
              </div>
              <div className="relative flex items-center justify-center space-x-3">
                <a href="#_" className=""></a>
                <a href="#_" className="hover:text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col items-center justify-center col-span-1 ${
              theme ? "text-white" : "text-gray"
            }`}
          >
            <div className="relative p-5">
              <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50"></div>
              <img
                className="relative z-20 w-full rounded-full"
                src="https://cdn.devdojo.com/images/june2021/avt-03.jpg"
              />
            </div>
            <div className="mt-3 space-y-2 text-center">
              <div className="space-y-1 text-lg font-medium leading-6">
                <h3>Freddy Smith</h3>
                <p className="text-blue-600">CEO and Founder</p>
              </div>
              <div className="relative flex items-center justify-center space-x-3">
                <a href="#_" className=""></a>
                <a href="#_" className="hover:text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col items-center justify-center col-span-1 ${
              theme ? "text-white" : "text-gray"
            }`}
          >
            <div className="relative p-5">
              <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50"></div>
              <img
                className="relative z-20 w-full rounded-full"
                src="https://cdn.devdojo.com/images/june2021/avt-03.jpg"
              />
            </div>
            <div className="mt-3 space-y-2 text-center">
              <div className="space-y-1 text-lg font-medium leading-6">
                <h3>Freddy Smith</h3>
                <p className="text-blue-600">CEO and Founder</p>
              </div>
              <div className="relative flex items-center justify-center space-x-3">
                <a href="#_" className=""></a>
                <a href="#_" className="hover:text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col items-center justify-center col-span-1 ${
              theme ? "text-white" : "text-gray"
            }`}
          >
            <div className="relative p-5">
              <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50"></div>
              <img
                className="relative z-20 w-full rounded-full"
                src="https://cdn.devdojo.com/images/june2021/avt-03.jpg"
              />
            </div>
            <div className="mt-3 space-y-2 text-center">
              <div className="space-y-1 text-lg font-medium leading-6">
                <h3>Freddy Smith</h3>
                <p className="text-blue-600">CEO and Founder</p>
              </div>
              <div className="relative flex items-center justify-center space-x-3">
                <a href="#_" className=""></a>
                <a href="#_" className="hover:text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
