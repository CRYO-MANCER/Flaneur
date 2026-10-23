import {
  createContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

import { EnvironmentType } from "./environmentTypes";

interface EnvironmentContextType {
  environment: EnvironmentType;
  setEnvironment: (
    env: EnvironmentType
  ) => void;
}

export const EnvironmentContext =
  createContext<EnvironmentContextType>(
    {} as EnvironmentContextType
  );

export default function EnvironmentProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [environment, setEnvironment] =
    useState<EnvironmentType>(() => {
      const saved =
        localStorage.getItem(
          "flaneur_environment"
        );

      return (
        (saved as EnvironmentType) ||
        "night-city"
      );
    });

  useEffect(() => {
    localStorage.setItem(
      "flaneur_environment",
      environment
    );
  }, [environment]);

  return (
    <EnvironmentContext.Provider
      value={{
        environment,
        setEnvironment,
      }}
    >
      {children}
    </EnvironmentContext.Provider>
  );
}