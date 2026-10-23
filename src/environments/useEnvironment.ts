import { useContext } from "react";

import {
  EnvironmentContext,
} from "./EnvironmentProvider";

export default function useEnvironment() {
  return useContext(
    EnvironmentContext
  );
}