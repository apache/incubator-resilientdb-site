"use client";

import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faDiscord,
  faTwitter,
  faYoutube
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
      <a
        href="https://discord.gg/qbTVfZVs2M"
        aria-label="Discord"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-6 text-gray-600 dark:text-gray-400 duration-300 hover:text-teal-500 dark:hover:text-teal-500"
      >
        <FontAwesomeIcon icon={faDiscord} size="lg" />
      </a>
      <a
        href="https://twitter.com/resilientdb"
        aria-label="Twitter"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-6 text-gray-600 dark:text-gray-400 duration-300 hover:text-teal-500 dark:hover:text-teal-500"
      >
        <FontAwesomeIcon icon={faTwitter} size="lg" />
      </a>
      <a
        href="https://www.youtube.com/@ExpoLabUCDavis"
        aria-label="Youtube"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-3 text-gray-600 dark:text-gray-400 duration-300 hover:text-teal-500 dark:hover:text-teal-500"
      >
        <FontAwesomeIcon icon={faYoutube} size="lg" />
      </a>
    </>
  );
};

export default SocialIcons;
