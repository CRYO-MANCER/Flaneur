interface Greeting {
  title: string;
  subtitle: string;
}

const greetings = {
  morning: {
    title: "Good Morning ☀️",
    subtitle: "A fresh page is waiting for you.",
  },

  afternoon: {
    title: "Good Afternoon 🌿",
    subtitle: "Keep following what inspires you.",
  },

  evening: {
    title: "Good Evening 🌙",
    subtitle: "Some moments deserve to linger.",
  },

  night: {
    title: "Burning the midnight oil? ✨",
    subtitle: "Certain thoughts only arrive in the quiet.",
  },
};

export default function getGreeting(): Greeting {
  const hour = Number(
    new Intl.DateTimeFormat("en-IN", {
      hour: "numeric",
      hour12: false,
      timeZone: "Asia/Kolkata",
    }).format(new Date())
  );

  if (hour >= 5 && hour < 12) {
    return greetings.morning;
  }

  if (hour >= 12 && hour < 17) {
    return greetings.afternoon;
  }

  if (hour >= 17 && hour < 23) {
    return greetings.evening;
  }

  return greetings.night;
}