import { Routes, Route } from "react-router-dom";

import AppLayout from "../layouts/AppLayout/AppLayout";

import Home from "../pages/Home/Home";
import MusicStudio from "../pages/MusicStudio/MusicStudio";
import InspirationStudio from "../pages/InspirationStudio/InspirationStudio";
import MoodboardStudio from "../pages/MoodboardStudio/MoodboardStudio";
import DailyCompanion from "../pages/DailyCompanion/DailyCompanion";
import WellnessHub from "../pages/WellnessHub/WellnessHub";
import AICompanion from "../pages/AICompanion/AICompanion";
import Settings from "../pages/Settings/Settings";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/music"
          element={
            <MusicStudio />
          }
        />

        <Route
          path="/inspiration"
          element={
            <InspirationStudio />
          }
        />

        <Route
          path="/moodboard"
          element={
            <MoodboardStudio />
          }
        />

        <Route
          path="/daily"
          element={
            <DailyCompanion />
          }
        />

        <Route
          path="/wellness"
          element={
            <WellnessHub />
          }
        />

        <Route
          path="/companion"
          element={
            <AICompanion />
          }
        />

        <Route
          path="/settings"
          element={
            <Settings />
          }
        />
      </Route>
    </Routes>
  );
}