import React, { useState, useEffect } from "react";

const ManifestSection = () => {
  const [timeRemaining, setTimeRemaining] = useState("");
  const [randomPositions, setRandomPositions] = useState([]);
  const [isEventPassed, setIsEventPassed] = useState(false); 
  const [loading, setLoading] = useState(true);
  const eventDate = new Date("October 9, 2024 14:00:00").getTime();

  const generateRandomPositions = () => {
    const positions = [];
    const numberOfManifest = 8;
    for (let i = 0; i < numberOfManifest; i++) {
      const randomX = Math.random() * 90;
      const randomY = Math.random() * 90; 
      positions.push({ top: `${randomY}%`, left: `${randomX}%` });
    }
    setRandomPositions(positions);
  };

  useEffect(() => {
    generateRandomPositions();

    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance <= 0) {
        clearInterval(countdown);
        setIsEventPassed(true);
      } else {
        const totalHours = Math.floor(distance / (1000 * 60 * 60)); 
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        const formattedMinutes = String(minutes).padStart(2, "0");

        setTimeRemaining(`${totalHours}:${formattedMinutes}`);
        setLoading(false); 
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [eventDate]);


  if (isEventPassed) {
    return (
      <section id="manifest">
        <div className="wrapper">
          <div className="container">
            <div className="background-layer"></div>
            <div className="content-layer content-layer--grey">
              <div style={{ textAlign: "center", fontSize: "32px", fontWeight: "bold" }}>
                Маніфест завантажено
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="manifest">
      <div className="wrapper">
        <div className="container">
          <div className="background-layer"></div>
          <div className="content-layer content-layer--grey" style={{ position: "relative" }}>
            {randomPositions.map((pos, index) => (
              <div
                key={index}
                style={{
                  position: "absolute",
                  top: pos.top,
                  left: pos.left,
                  color: "white",
                  fontSize: "32px",
                  fontWeight: "500",
                  lineHeight: "41px",
                  opacity: 0.5,
                }}
              >
                МАНІФЕСТ
              </div>
            ))}

            <div className="manifest__waiting" style={{ textAlign: "center" }}>
              <div className="manifest__waiting--text">
                З'явиться через
              </div>
              {loading ? (
                <div className="lds-ring" style={{ margin: "20px auto" }}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              ) : (
                <div className="manifest__waiting--timer">
                  {timeRemaining}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestSection;
