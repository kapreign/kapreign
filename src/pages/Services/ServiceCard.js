import React from "react";
// import { useNavigate } from "react-router-dom";
import WebappDev from "../../Assets/Images/web app.svg";
import Digimarket from "../../Assets/Images/Digimarket2.jpg";
import MobAPP from "../../Assets/Images/mob app.svg";
import DataBpo from "../../Assets/Images/DataBpo.jpg";
export default function ServiceCard() {
  //   const navigate = useNavigate();

  const CardData = [
    {
      Heading: "Web App Development",
      image: WebappDev,
    },
    {
      Heading: "Mobile App Development",
      image: MobAPP,
    },
    {
        Heading: "Digital Marketing",
        image: Digimarket,
      },
      {
        Heading: "Data Analysis/ BPO",
        image: DataBpo,
      },
  ];
  return (
    <div>
      <div style={{ backgroundColor: "black" }}>
        <div style={{ color: "white", textAlign: "left", padding: "50px" }}>
          <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-8">
            {CardData.map((Data) => (
              <div>
                <div style={{ position: "relative", display: "flex" }}>
                  <img
                    className="CardImage"
                    src={Data?.image}
                    alt="WebappDev"
                  />
                  <div
                    style={{
                      position: "absolute",
                      alignSelf: "end",
                      alignItems: "center",
                      justifyContent: "end",
                    }}
                    class="w-full"
                  >
                    <div>
                      <h2
                        className="serviceHead"
                        style={{ textAlign: "center" }}
                      >
                        {Data?.Heading}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
