import riod from "../Assets/Images/riod.png";
import plug from "../Assets/Images/plug.png";
import nexcure from "../Assets/Images/nexcure.png";
import student from "../Assets/Images/student.png";
import vista from "../Assets/Images/vista.png";
import bull from "../Assets/Images/bull.png";
import voyage from "../Assets/Images/voyage.png";

export default function Projects(props) {
  const theme = props.theme;
  const projects = [
    {
      img: riod,
      name: "kapreign",
    },
    {
      img: plug,
      name: "kapreign",
    },
    {
      img: voyage,
      name: "kapreign",
    },
    {
      img: nexcure,
      name: "kapreign",
    },
    {
      img: student,
      name: "kapreign",
    },
    {
      img: vista,
      name: "kapreign",
    },
    {
      name: "kapreign",
      img: bull,
    },
  ];
  return (
    <section className={`pt-7 pb-14 ${theme ? "bg-blaack" : "bg-white"}`}>
      <div className="container px-8 mx-auto sm:px-12 lg:px-20">
        <h1 className="text-m font-bold tracking-wide text-center text-kap uppercase mb-7">
          our happy clients
        </h1>
        <div className="flex flex-col md:grid items-center justify-center grid-cols-1 md:grid-cols-4 md:gap-4">
          {projects.map((images) => (
            <div className="flex items-center justify-center flex items-center w-full w-44 h-32 mb-3 text-lg bg-paleBlue rounded-md hover:bg-lightBlue ">
              <img
                src={images.img}
                alt="Disney Plus"
                className="block object-contain h-12"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
