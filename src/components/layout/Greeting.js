import React from "react";

const greetingMessage = strings => {
  const { goodMorning, goodAfternoon, goodEvening, goodNight } = strings;
  const hours = new Date().getHours();

  if (hours < 6) {
    return `${goodNight || "good night"}`;
  } else if (hours >= 6 && hours < 12) {
    return `${goodMorning || "good morning"}`;
  } else if (hours >= 12 && hours < 18) {
    return `${goodAfternoon || "good afternoon"}`;
  } else if (hours >= 18) {
    return `${goodEvening || "good evening"}`;
  }
};

const Greeting = ({ greeting, strings }) => {
  return (
    <>
      {greeting && strings && (
        <p className="content-block__eyebrow text--alternative">
          <span>{greetingMessage(strings)}</span>, {greeting}
        </p>
      )}
    </>
  );
};

export default Greeting;
