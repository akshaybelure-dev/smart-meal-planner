import { createContext, useContext, useEffect, useState } from "react";

const ProfileContext = createContext();

const DEFAULT_PROFILE = {
  name: "Akshay",
  goal: "fat_loss",
  diet: "veg",
};

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem("smartmeal_profile");
    return saved ? JSON.parse(saved) : DEFAULT_PROFILE;
  });

  useEffect(() => {
    localStorage.setItem("smartmeal_profile", JSON.stringify(profile));
  }, [profile]);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  return useContext(ProfileContext);
}
