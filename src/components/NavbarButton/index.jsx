import React from "react";
import { useNavigate } from "react-router-dom";

function NavbarButton({ label, link }) {
  const navigate = useNavigate();
  return (
    <div
      className="bg-transparent cursor-pointer font-bold leading-[normal] min-w-[84px] text-center text-white-A700 text-xl hover:text-pink-A400"
      onClick={() => navigate(link)}
      size="xs"
    >
      {label}
    </div>
  );
}

export default NavbarButton;
