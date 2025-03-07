"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ThemeToggler = () => {
  const [isDark, setIsDark] = useState(true);
  const sun = "/images/sun.png";
  const moon = "/images/moon.png";

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.body.classList.remove("dark");
    } else {
      setIsDark(true);
      document.body.classList.add("dark");
    }
  }, []);

  const handleToggle = () => {
    if (isDark) {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };
  return (
    <div>
      <div onClick={handleToggle} className="cursor-pointer">
        {isDark ? (
          <Image src={sun} height={20} width={20} alt="theme-icon" />
        ) : (
          <Image src={moon} height={20} width={20} alt="theme-icon" />
        )}
      </div>
    </div>
  );
};

export default ThemeToggler;
