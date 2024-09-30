import React, { useState, useEffect } from "react";

const ManifestSection = () => {
  const [timeRemaining, setTimeRemaining] = useState("");
  const eventDate = new Date("October 9, 2024 14:00:00").getTime(); // Дата події

  useEffect(() => {
    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance <= 0) {
        clearInterval(countdown);
      } else {
        const totalHours = Math.floor(distance / (1000 * 60 * 60)); // Загальні години
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); // Залишкові хвилини

        // Додаємо ведучі нулі для хвилин, якщо значення менше 10
        const formattedMinutes = String(minutes).padStart(2, "0");

        setTimeRemaining(`${totalHours}:${formattedMinutes}`);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [eventDate]);

  // Якщо подія настала
  if (new Date().getTime() >= eventDate) {
    return (
      <section id="manifest">
        <div className="wrapper">
          <div className="container">
            <div className="background-layer"></div>
            <div className="content-layer content-layer--grey">
              <div>Маніфест завантажено</div>
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
          <div className="content-layer content-layer--grey">
            
            <div className="manifest__waiting">
              <div className="manifest__waiting--text">З'явиться через</div>
              <div className="manifest__waiting--timer">{timeRemaining}</div>
            </div>  
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestSection;
