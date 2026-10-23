import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./index.css";

import { ThemeProvider } from "./themes/ThemeProvider";
import EnvironmentProvider from "./environments/EnvironmentProvider";

import {
  MoodboardProvider,
} from "./store/moodboardStore";

import {
  DailyProvider,
} from "./store/dailyStore";

import {
  HabitsProvider,
} from "./store/habitsStore";

import {
  WellnessProvider,
} from "./store/wellnessStore";

import {
  SettingsProvider,
} from "./store/settingsStore";

import {
  MusicProvider,
} from "./store/musicStore";

import {
  RoutineProvider,
} from "./store/routinesStore";

import {
  InspirationProvider,
} from "./store/inspirationStore";

import {
  CompanionProvider,
} from "./store/companionStore";

import {
  CompanionMemoryProvider,
} from "./store/companionMemoryStore";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <BrowserRouter>
      <EnvironmentProvider>
        <ThemeProvider>
          <HabitsProvider>
            <MoodboardProvider>
              <DailyProvider>
                <WellnessProvider>
                  <SettingsProvider>
                    <RoutineProvider>
                      <MusicProvider>
                        <InspirationProvider>
                          <CompanionMemoryProvider>
                            <CompanionProvider>
                              <App />
                            </CompanionProvider>
                          </CompanionMemoryProvider>
                        </InspirationProvider>
                      </MusicProvider>
                    </RoutineProvider>
                  </SettingsProvider>
                </WellnessProvider>
              </DailyProvider>
            </MoodboardProvider>
          </HabitsProvider>
        </ThemeProvider>
      </EnvironmentProvider>
    </BrowserRouter>
  </React.StrictMode>
);