import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface SettingsContextType {
  username: string;
  setUsername: (
    value: string
  ) => void;

  bio: string;
  setBio: (
    value: string
  ) => void;

  animationsEnabled: boolean;
  setAnimationsEnabled: (
    value: boolean
  ) => void;

  particlesEnabled: boolean;
  setParticlesEnabled: (
    value: boolean
  ) => void;
}

const SettingsContext =
  createContext(
    {} as SettingsContextType
  );

export function SettingsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [username, setUsername] =
    useState(() => {
      return (
        localStorage.getItem(
          "flaneur_username"
        ) || "Rishi"
      );
    });

  const [bio, setBio] =
    useState(() => {
      return (
        localStorage.getItem(
          "flaneur_bio"
        ) ||
        "Dreaming in code and moonlight."
      );
    });

  const [
    animationsEnabled,
    setAnimationsEnabled,
  ] = useState(() => {
    const saved =
      localStorage.getItem(
        "flaneur_animations"
      );

    return saved
      ? JSON.parse(saved)
      : true;
  });

  const [
    particlesEnabled,
    setParticlesEnabled,
  ] = useState(() => {
    const saved =
      localStorage.getItem(
        "flaneur_particles"
      );

    return saved
      ? JSON.parse(saved)
      : true;
  });

  useEffect(() => {
    localStorage.setItem(
      "flaneur_username",
      username
    );
  }, [username]);

  useEffect(() => {
    localStorage.setItem(
      "flaneur_bio",
      bio
    );
  }, [bio]);

  useEffect(() => {
    localStorage.setItem(
      "flaneur_animations",
      JSON.stringify(
        animationsEnabled
      )
    );
  }, [animationsEnabled]);

  useEffect(() => {
    localStorage.setItem(
      "flaneur_particles",
      JSON.stringify(
        particlesEnabled
      )
    );
  }, [particlesEnabled]);

  return (
    <SettingsContext.Provider
      value={{
        username,
        setUsername,

        bio,
        setBio,

        animationsEnabled,
        setAnimationsEnabled,

        particlesEnabled,
        setParticlesEnabled,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(
    SettingsContext
  );
}