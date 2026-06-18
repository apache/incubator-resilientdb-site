"use client";

import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => {
  return (
    <>
      <a
        href="https://github.com/apache/incubator-resilientdb"
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-6 text-gray-600 dark:text-gray-400 duration-300 hover:text-teal-500 dark:hover:text-teal-500"
      >
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
    </>
  );
};

export default SocialIcons;
