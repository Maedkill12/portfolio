import React from "react";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const socialMedia = [
  {
    icon: <AiFillGithub />,
    url: "https://github.com/Maedkill12",
    name: "GitHub",
  },
  {
    icon: <AiFillLinkedin />,
    url: "https://www.linkedin.com/in/alejandro-elias-3a9502168/",
    name: "Linkedin",
  },
];

const useSocialMedia = () => {
  return socialMedia;
};

export default useSocialMedia;
