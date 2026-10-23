import { useMemo } from "react";

import {
  getGreeting,
} from "../services/aiMessageService";

export default function useGreeting() {
  return useMemo(
    () => getGreeting(),
    []
  );
}