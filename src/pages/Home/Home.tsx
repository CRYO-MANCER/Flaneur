import useTheme from "../../themes/useTheme";
import getGreeting from "../../utils/getGreeting";

import AnimatedContainer from "../../components/ui/AnimatedContainer";

import GreetingCard from "../../components/home/GreetingCard";
import QuickStats from "../../components/home/QuickStats";
import TodayCard from "../../components/home/TodayCard";

import MoodCard from "../../components/home/MoodCard";
import EnvironmentCard from "../../components/home/EnvironmentCard";
import DailyQuoteCard from "../../components/home/DailyQuoteCard";

import NowPlayingWidget from "../../components/home/NowPlayingWidget";
import CurrentBoardWidget from "../../components/home/CurrentBoardWidget";
import ProductivityWidget from "../../components/home/ProductivityWidget";

export default function Home() {
  const { theme } = useTheme();

  const greeting = getGreeting();

  return (
    <AnimatedContainer>
      <div
        style={{
          padding: "48px",
          color: theme.text,
        }}
      >
        <h1
          style={{
            fontFamily:
              "var(--font-heading)",
            fontSize: "56px",
            marginBottom: "10px",
          }}
        >
          {greeting.title}
        </h1>

        <p
          style={{
            color: theme.accent,
            fontSize: "18px",
            marginBottom: "40px",
          }}
        >
          {greeting.subtitle}
        </p>

        {/* HERO */}

        <div
          style={{
            marginBottom: "24px",
          }}
        >
          <GreetingCard />
        </div>

        {/* DASHBOARD */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "1.5fr 1fr",
            gap: "24px",
            marginBottom: "24px",
          }}
        >
          <TodayCard />

          <QuickStats />
        </div>

        {/* SECOND ROW */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "1.5fr 1fr 1fr",
            gap: "24px",
            marginBottom: "24px",
          }}
        >
          <DailyQuoteCard />

          <MoodCard />

          <EnvironmentCard />
        </div>

        {/* LIVE WIDGETS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "1.5fr 1fr 1fr",
            gap: "24px",
          }}
        >
          <NowPlayingWidget />

          <CurrentBoardWidget />

          <ProductivityWidget />
        </div>
      </div>
    </AnimatedContainer>
  );
}