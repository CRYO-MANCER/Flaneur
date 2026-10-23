import { useMemo } from "react";

import {
  getQuote,
} from "../services/aiMessageService";

export default function useDailyQuote() {
  return useMemo(
    () => getQuote(),
    []
  );
}