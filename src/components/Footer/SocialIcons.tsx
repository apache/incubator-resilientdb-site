"use client";

import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

const DISCORD_INVITE = "https://discord.gg/vKtRX4MRJR";

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
        href={DISCORD_INVITE}
        aria-label="Discord"
        title="Unofficial community chat — official communication is on dev@resilientdb.apache.org"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-3 text-gray-600 dark:text-gray-400 duration-300 hover:text-teal-500 dark:hover:text-teal-500"
      >
        <FontAwesomeIcon icon={faDiscord} size="lg" />
      </a>
    </>
  );
};

export default SocialIcons;
