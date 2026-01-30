"use client";

import { useState, useEffect } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ScrollUp from "@/components/Common/ScrollUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faDiscord,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { 
  faEnvelope, 
  faCodeBranch,
  faUsers,
  faCode,
  faComments,
  faCalendar,
  faBook,
  faHandshake,
  faBars,
  faTimes,
  faCircleQuestion,
  faEnvelopeOpen,
  faBug,
  faLightbulb,
  faStar,
  faCodeMerge,
  faClipboardCheck,
  faFileAlt,
  faCodeCompare,
  faFileSignature,
} from "@fortawesome/free-solid-svg-icons";

const sidebarItems = [
  { id: "overview", title: "Overview", icon: faUsers },
  { id: "asking-for-help", title: "Asking for Help", icon: faCircleQuestion },
  { id: "subscribe", title: "How to Subscribe", icon: faEnvelope },
  { id: "email-usage", title: "How to use Email", icon: faEnvelopeOpen },
  { id: "contribute", title: "How to Contribute", icon: faCode },
  { id: "dev-meetings", title: "Developer Meetings", icon: faCalendar },
  { id: "vote-committer", title: "Vote Committer/PMC", icon: faStar },
  { id: "icla-signing", title: "ICLA Signing Process", icon: faFileSignature },
  { id: "naming-guide", title: "Product Name Usage", icon: faFileAlt },
  { id: "site-map", title: "Site Map", icon: faBook },
];

const CommunityPage = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Scroll to top when section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return (
          <div>
            <h1 className="community-h1">
              About Apache ResilientDB
            </h1>

            {/* What is Apache ResilientDB */}
            <div className="mb-8">
              <h2 className="community-h2">
                What is Apache ResilientDB?
              </h2>
              <p className="mb-4 text-base leading-relaxed text-body-color">
                Apache ResilientDB is a high-throughput, low-latency blockchain fabric designed 
                for production environments. Built with a focus on performance and reliability, 
                ResilientDB provides a robust foundation for building decentralized applications 
                and distributed systems.
              </p>
              <div className="mt-4 rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
                <ul className="space-y-2 text-base leading-relaxed text-body-color">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span><strong>High-throughput, low-latency:</strong> Optimized for performance with minimal transaction latency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span><strong>Strong consistency and fault tolerance:</strong> Ensures data integrity even in the presence of failures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span><strong>Modular architecture:</strong> Clean interfaces between consensus, storage, and networking components</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span><strong>Production-oriented:</strong> Developer-friendly experience with comprehensive documentation and tooling</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Who are we */}
            <div className="mb-8">
              <h2 className="community-h2">
                Who Are We?
              </h2>
              <p className="mb-4 text-base leading-relaxed text-body-color">
                ResilientDB is an Apache Software Foundation project currently in the Apache Incubator. 
                We are a diverse community of developers, researchers, and engineers passionate about 
                advancing blockchain technology and distributed systems.
              </p>
              <p className="mb-4 text-base leading-relaxed text-body-color">
                Our project brings together expertise from academia and industry to create a 
                production-ready blockchain infrastructure that addresses real-world challenges 
                in scalability, performance, and reliability.
              </p>
            </div>

            {/* Our Mission */}
            <div className="mb-8">
              <h2 className="community-h2">
                Our Mission
              </h2>
              <p className="mb-4 text-base leading-relaxed text-body-color">
                To provide a flexible and efficient blockchain infrastructure that empowers 
                developers and organizations to build innovative solutions with ease. We aim to 
                democratize access to high-performance blockchain technology by offering:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-6 text-body-color">
                <li>Open-source, community-driven development</li>
                <li>Production-ready tools and frameworks</li>
                <li>Comprehensive documentation and learning resources</li>
                <li>A welcoming and inclusive community for all contributors</li>
              </ul>
            </div>

            {/* Team & Contributors */}
            <div className="mb-8">
              <h2 className="community-h2">
                Team & Contributors
              </h2>
              <p className="mb-4 text-base leading-relaxed text-body-color">
                We are grateful to everyone contributing to ResilientDB and its ecosystem. 
                The success of this project is built on the collective efforts of:
              </p>
              <div className="mt-4 space-y-4">
                <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
                  <h3 className="community-h3">
                    Core Team & Maintainers
                  </h3>
                  <p className="text-base leading-relaxed text-body-color">
                    The dedicated maintainers and core team members who guide the project's 
                    direction, review contributions, and ensure the quality and stability of ResilientDB.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
                  <h3 className="community-h3">
                    Ecosystem Contributors
                  </h3>
                  <p className="text-base leading-relaxed text-body-color">
                    Developers and researchers building tools, applications, and extensions 
                    within the ResilientDB ecosystem, expanding its capabilities and use cases.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
                  <h3 className="community-h3">
                    Community Members
                  </h3>
                  <p className="text-base leading-relaxed text-body-color">
                    Everyone who files issues, improves documentation, shares examples, provides 
                    feedback, and helps newcomers. Every contribution, no matter how small, 
                    makes a difference.
                  </p>
                </div>
              </div>
              <div className="mt-6 rounded-lg bg-primary bg-opacity-10 p-4">
                <p className="text-base leading-relaxed text-body-color">
                  <strong className="text-black dark:text-white">Want to contribute?</strong> We welcome contributions of all kinds! 
                  Open an issue or pull request in the relevant repository. Contributions to 
                  documentation are especially welcome—small fixes are just as valuable as large guides.
                </p>
              </div>
            </div>

            {/* Acknowledgements */}
            <div className="mb-8">
              <h2 className="community-h2">
                Acknowledgements
              </h2>
              <p className="mb-4 text-base leading-relaxed text-body-color">
                We extend our heartfelt gratitude to all our contributors and the open-source 
                community for their support, contributions, and dedication to the ResilientDB project. 
                Your efforts help make blockchain technology more accessible and powerful for everyone.
              </p>
            </div>

            {/* Useful Links */}
            <div className="mt-8 rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
              <h2 className="community-h2-in-card">
                Useful Links
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="community-h3">
                    Development
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://github.com/apache/incubator-resilientdb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:underline"
                      >
                        <FontAwesomeIcon icon={faGithub} className="mr-2" />
                        Main GitHub Repository
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/apache/incubator-resilientdb/blob/main/CONTRIBUTING.md"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:underline"
                      >
                        <FontAwesomeIcon icon={faCodeBranch} className="mr-2" />
                        Contributing Guide
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/apache/incubator-resilientdb/issues"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:underline"
                      >
                        <FontAwesomeIcon icon={faGithub} className="mr-2" />
                        Issue Tracker
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="community-h3">
                    Community
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://discord.gg/vKtRX4MRJR"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:underline"
                      >
                        <FontAwesomeIcon icon={faDiscord} className="mr-2" />
                        Discord Server
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://lists.apache.org/list.html?dev@resilientdb.apache.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:underline"
                      >
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        Mailing Lists
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case "asking-for-help":
        return (
          <div>
            <h1 className="community-h1">
              Asking for Help
            </h1>
            <p className="mb-6 text-base leading-relaxed text-body-color">
              Need help with ResilientDB? We're here to assist you! There are several ways 
              to connect with our team and get the information and knowledge you need. 
              Choose the method that works best for you.
            </p>

            <div className="space-y-8">
              {/* Method 1: GitHub Issues */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 flex h-[50px] w-[50px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </div>
                  <div>
                    <h2 className="community-h3">
                      Method 1: GitHub Issues
                    </h2>
                    <p className="text-sm text-body-color">
                      Report bugs, ask questions, and request features
                    </p>
                  </div>
                </div>
                <p className="mb-4 text-base leading-relaxed text-body-color">
                  GitHub Issues is the best way to report bugs, ask technical questions, 
                  or request new features. Our team actively monitors and responds to issues.
                </p>
                <div className="mb-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                  <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">
                    Steps to Create an Issue:
                  </h3>
                  <ol className="space-y-3 text-base leading-relaxed text-body-color">
                    <li className="flex items-start">
                      <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary font-semibold">1</span>
                      <span>Navigate to the <a href="https://github.com/apache/incubator-resilientdb/issues" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub Issues page</a> for the ResilientDB repository</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary font-semibold">2</span>
                      <span>Click the <strong>"New Issue"</strong> button (green button on the right side)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary font-semibold">3</span>
                      <span>Choose the appropriate issue template (Bug Report, Feature Request, Question, etc.) or click "Get started" next to a blank template</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary font-semibold">4</span>
                      <span>Fill in the issue form with:
                        <ul className="mt-2 ml-4 list-disc space-y-1">
                          <li>A clear and descriptive title</li>
                          <li>Detailed description of your question or problem</li>
                          <li>Steps to reproduce (if it's a bug)</li>
                          <li>Expected vs actual behavior</li>
                          <li>Environment details (OS, version, etc.)</li>
                        </ul>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary font-semibold">5</span>
                      <span>Add relevant labels if you have permission, or our maintainers will add them</span>
                    </li>
                    <img src="/images/community/Github_issues.png" alt="Github issues example" />
                    <li className="flex items-start">
                      <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary font-semibold">6</span>
                      <span>Click <strong>"Submit new issue"</strong> to create your issue</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary font-semibold">7</span>
                      <span>Wait for responses from the community and maintainers. You'll be notified via email when someone comments</span>
                    </li>
                  </ol>
                </div>
                <p className="text-sm text-body-color">
                  <strong>Tip:</strong> Before creating a new issue, search existing issues to see if your question 
                  has already been answered. You can also check closed issues for solutions.
                </p>
                <div className="mt-4">
                  <a
                    href="https://github.com/apache/incubator-resilientdb/issues/new/choose"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-base font-medium text-primary hover:underline"
                  >
                    Create a GitHub Issue →
                  </a>
                </div>
              </div>

              {/* Method 2: Discord */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 flex h-[50px] w-[50px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                    <FontAwesomeIcon icon={faDiscord} size="lg" />
                  </div>
                  <div>
                    <h2 className="community-h3">
                      Method 2: Discord Community
                    </h2>
                    <p className="text-sm text-body-color">
                      Real-time chat and community forum
                    </p>
                  </div>
                </div>
                <p className="mb-4 text-base leading-relaxed text-body-color">
                  Join our Discord server for real-time discussions, quick questions, and 
                  community support. Our Discord has dedicated channels for different topics 
                  and a community forum where you can post questions.
                </p>
                <div className="mb-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                  <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">
                    How to Get Help on Discord:
                  </h3>
                  <ol className="space-y-3 text-base leading-relaxed text-body-color">
                    <li className="flex items-start">
                      <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary font-semibold">1</span>
                      <span>Join our Discord server by clicking the link: <a href="https://discord.gg/vKtRX4MRJR" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://discord.gg/vKtRX4MRJR</a></span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary font-semibold">2</span>
                      <span>Navigate to the appropriate channel for your question (e.g., <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">#general</code>, <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">#Research</code>, <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">#resdb-platform</code>)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary font-semibold">3</span>
                      <span>For more detailed questions, use the community forum,<code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">#resdb-support</code>, channel where you can create a post with your query</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary font-semibold">4</span>
                      <span>Be clear and specific about your question or problem. Include relevant code snippets, error messages, or context</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary font-semibold">5</span>
                      <span>Community members and maintainers will respond as soon as possible</span>
                    </li>
                  </ol>
                </div>
                <div className="mt-4">
                  <a
                    href="https://discord.gg/vKtRX4MRJR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-base font-medium text-primary hover:underline"
                  >
                    Join Discord Server →
                  </a>
                </div>
              </div>

              {/* Method 3: Email Consultation */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 flex h-[50px] w-[50px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                  </div>
                  <div>
                    <h2 className="community-h3">
                      Method 3: Email Consultation
                    </h2>
                    <p className="text-sm text-body-color">
                      Mailing list for development discussions
                    </p>
                  </div>
                </div>
                <p className="mb-4 text-base leading-relaxed text-body-color">
                  For more formal questions or detailed technical discussions, you can reach 
                  out via our development mailing list. This is especially useful for 
                  in-depth technical questions or when you need a written record of the discussion.
                </p>
                <div className="mb-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                  <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">
                    Email Question Process:
                  </h3>
                  <ol className="space-y-3 text-base leading-relaxed text-body-color">
                    <li className="flex items-start">
                      <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary font-semibold">1</span>
                      <span>
                        <strong>Step 1:</strong> Subscribe to <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">dev@resilientdb.apache.org</code> emails. 
                        <a href="https://lists.apache.org/list.html?dev@resilientdb.apache.org" target="_blank" rel="noopener noreferrer" className="ml-1 text-primary hover:underline">Click to view the guide: Subscribe to the mailing list</a>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary font-semibold">2</span>
                      <span>
                        <strong>Step 2:</strong> Send your question to <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">dev@resilientdb.apache.org</code>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary font-semibold">3</span>
                      <span>
                        <strong>Step 3:</strong> After the question is answered, you will be notified by email as soon as possible, and you can continue the conversation via email
                      </span>
                    </li>
                  </ol>
                </div>
                <div className="mt-4">
                  <a
                    href="https://lists.apache.org/list.html?dev@resilientdb.apache.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-base font-medium text-primary hover:underline"
                  >
                    View Mailing List →
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Tips */}
            <div className="mt-8 rounded-lg bg-primary bg-opacity-10 p-6">
              <h2 className="community-h3">
                Tips for Getting Help
              </h2>
              <ul className="mt-4 space-y-2 text-base leading-relaxed text-body-color">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span><strong>Be specific:</strong> Provide as much context as possible about your question or problem</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span><strong>Search first:</strong> Check existing issues, Discord messages, and documentation before asking</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span><strong>Include details:</strong> Version numbers, error messages, code snippets, and environment information help us help you faster</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span><strong>Be patient:</strong> Our team is volunteer-based, so responses may take some time, especially for complex questions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span><strong>Follow up:</strong> If your question hasn't been answered, feel free to follow up after a reasonable time</span>
                </li>
              </ul>
            </div>
          </div>
        );

      case "subscribe":
        return (
          <div>
            <h1 className="community-h1">
              How to Subscribe
            </h1>
            <p className="mb-6 text-base leading-relaxed text-body-color">
              Stay connected with the ResilientDB community by subscribing to our mailing lists. 
              Our mailing lists are the primary channels for development discussions, announcements, 
              and commit notifications.
            </p>

            <div className="space-y-8">
              {/* Mailing Lists */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2">
                  Available Mailing Lists
                </h2>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  ResilientDB maintains two main mailing lists for different purposes:
                </p>

                <div className="space-y-6">
                  {/* Dev List */}
                  <div className="rounded-lg bg-gray-50 p-5 dark:bg-gray-800">
                    <h3 className="community-h3 mb-3">
                      dev@resilientdb.apache.org
                    </h3>
                    <p className="mb-4 text-base leading-relaxed text-body-color">
                      The development mailing list is for technical discussions, questions, 
                      feature proposals, and general development-related topics. This is the 
                      primary list for community engagement.
                    </p>
                    <div className="mt-4">
                      <a
                        href="https://lists.apache.org/list.html?dev@resilientdb.apache.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-base font-medium text-primary hover:underline"
                      >
                        View dev@resilientdb.apache.org →
                      </a>
                    </div>
                  </div>

                  {/* Commits List */}
                  <div className="rounded-lg bg-gray-50 p-5 dark:bg-gray-800">
                    <h3 className="community-h3 mb-3">
                      commits@resilientdb.apache.org
                    </h3>
                    <p className="mb-4 text-base leading-relaxed text-body-color">
                      The commits mailing list automatically receives notifications for all 
                      code commits, pull requests, and repository activity. This is useful 
                      for staying updated on project changes.
                    </p>
                    <div className="mt-4">
                      <a
                        href="https://lists.apache.org/list.html?commits@resilientdb.apache.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-base font-medium text-primary hover:underline"
                      >
                        View commits@resilientdb.apache.org →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subscription Methods */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2">
                  How to Subscribe
                </h2>
                <p className="mb-6 text-base leading-relaxed text-body-color">
                  You can subscribe to either mailing list using one of the following methods. 
                  Both methods work for <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">dev@resilientdb.apache.org</code> and 
                  <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">commits@resilientdb.apache.org</code>.
                </p>

                {/* Method 1: Web Interface */}
                <div className="mb-6 rounded-lg bg-gray-50 p-5 dark:bg-gray-800">
                  <h3 className="community-h3 mb-4">
                    Method 1: Web Interface
                  </h3>
                  <ol className="space-y-3 text-base leading-relaxed text-body-color">
                    <li className="flex items-start">
                      <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary font-semibold">1</span>
                      <span>Visit the mailing list page:
                        <ul className="mt-2 ml-4 list-disc space-y-1">
                          <li><a href="https://lists.apache.org/list.html?dev@resilientdb.apache.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">dev@resilientdb.apache.org</a></li>
                          <li><a href="https://lists.apache.org/list.html?commits@resilientdb.apache.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">commits@resilientdb.apache.org</a></li>
                        </ul>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary font-semibold">2</span>
                      <span>Click on <strong>"Subscribe to [list-name]@resilientdb.apache.org"</strong> or use the subscription form</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary font-semibold">3</span>
                      <span>Enter your email address and choose your subscription preferences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary font-semibold">4</span>
                      <span>You will receive a confirmation email - click the confirmation link to complete your subscription</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary font-semibold">5</span>
                      <span>Once confirmed, you'll start receiving emails from the list</span>
                    </li>
                  </ol>
                </div>

                {/* Method 2: Email Subscription */}
                <div className="mb-4 rounded-lg bg-gray-50 p-5 dark:bg-gray-800">
                  <h3 className="community-h3 mb-4">
                    Method 2: Email Subscription
                  </h3>
                  <p className="mb-4 text-base leading-relaxed text-body-color">
                    To subscribe via email, send an email to the subscription address for the list you want to join:
                  </p>
                  <ul className="mb-4 space-y-2 text-base leading-relaxed text-body-color">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>For <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">dev@resilientdb.apache.org</code>: send to <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">dev-subscribe@resilientdb.apache.org</code></span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>For <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">commits@resilientdb.apache.org</code>: send to <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">commits-subscribe@resilientdb.apache.org</code></span>
                    </li>
                  </ul>
                  <ol className="space-y-3 text-base leading-relaxed text-body-color">
                    <li className="flex items-start">
                      <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary font-semibold">1</span>
                      <span>Send an email without any content or subject to:
                        <ul className="mt-2 ml-4 list-disc space-y-1">
                          <li><code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">dev-subscribe@resilientdb.apache.org</code> (for dev list)</li>
                          <li><code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">commits-subscribe@resilientdb.apache.org</code> (for commits list)</li>
                        </ul>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary font-semibold">2</span>
                      <span>Wait until you receive an email with the subject line <strong>"confirm subscribe to [list-name]@resilientdb.apache.org"</strong></span>
                      <ul className="mt-2 ml-4 list-disc space-y-1 text-sm text-body-color">
                        <li>If you have not received it for a long time, please check whether the email is blocked by your spam filter</li>
                        <li>If you have not been blocked and still haven't received a reply for a long time, return to step 1</li>
                      </ul>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary font-semibold">3</span>
                      <span>Reply directly to the email <strong>without changing the subject line or adding any email content</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary font-semibold">4</span>
                      <span>Wait until you receive an email with the subject line <strong>"WELCOME to [list-name]@resilientdb.apache.org"</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary font-semibold">5</span>
                      <span>If you receive the welcome email from step 4, you have successfully subscribed to the mailing list</span>
                    </li>
                  </ol>
                  <div className="mt-4 rounded-md bg-primary bg-opacity-10 p-3">
                    <p className="text-sm leading-relaxed text-body-color">
                      <strong>Note:</strong> To initiate a discussion, you can send an email directly to 
                      <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded mx-1">dev@resilientdb.apache.org</code> or 
                      <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded mx-1">commits@resilientdb.apache.org</code>, 
                      which will be sent to everyone who subscribed to the mailing list.
                    </p>
                  </div>
                </div>
              </div>

              {/* How to Unsubscribe */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2">
                  How to Unsubscribe
                </h2>
                <p className="mb-4 text-base leading-relaxed text-body-color">
                  If you no longer wish to receive emails from a mailing list, you can unsubscribe 
                  at any time using one of the following methods:
                </p>
                <div className="mb-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                  <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">
                    Method 1: Via the Mailing List Web Interface
                  </h3>
                  <ol className="space-y-2 text-base leading-relaxed text-body-color">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">1.</span>
                      <span>Visit the mailing list page (e.g., <a href="https://lists.apache.org/list.html?dev@resilientdb.apache.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">dev@resilientdb.apache.org</a>)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">2.</span>
                      <span>Click on <strong>"Unsubscribe from dev@resilientdb.apache.org"</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">3.</span>
                      <span>Enter your email address and confirm the unsubscribe request</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">4.</span>
                      <span>You'll receive a confirmation email - click the link to complete the unsubscription</span>
                    </li>
                  </ol>
                </div>
                <div className="mb-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                  <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">
                    Method 2: Via Email
                  </h3>
                  <ol className="space-y-2 text-base leading-relaxed text-body-color">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">1.</span>
                      <span>Send an email to <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">dev-unsubscribe@resilientdb.apache.org</code> (replace "dev" with "commits" for the commits list)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">2.</span>
                      <span>You can leave the subject and body empty, or include "unsubscribe" in the subject</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">3.</span>
                      <span>You'll receive a confirmation email - reply to confirm your unsubscription</span>
                    </li>
                  </ol>
                </div>
                <p className="text-sm text-body-color">
                  <strong>Note:</strong> You must send the unsubscribe email from the same address 
                  you used to subscribe. If you're having trouble unsubscribing, contact the 
                  list administrators.
                </p>
              </div>

              {/* Mail Usage */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2">
                  Mail Usage
                </h2>
                <p className="mb-4 text-base leading-relaxed text-body-color">
                  Learn how to effectively use email to communicate with the ResilientDB community, 
                  including best practices, email etiquette, and how to get the most out of our 
                  mailing lists.
                </p>
                <div className="mt-4">
                  <button
                    onClick={() => setActiveSection("email-usage")}
                    className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-base font-medium text-white transition-colors hover:bg-primary/90"
                  >
                    Learn How to Use Email →
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case "email-usage":
        return (
          <div>
            <h1 className="community-h1">
              How to use Email
            </h1>
            <p className="mb-6 text-base leading-relaxed text-body-color">
              This guide introduces mailing list usage guidelines and reference examples for 
              effective communication with the ResilientDB community.
            </p>

            <div className="space-y-6">
              {/* Quick Links */}
              <div className="rounded-lg bg-primary bg-opacity-10 p-4">
                <p className="text-base leading-relaxed text-body-color">
                  <strong>New to our mailing lists?</strong> To subscribe, please refer to our{" "}
                  <button 
                    onClick={() => setActiveSection("subscribe")} 
                    className="text-primary hover:underline font-medium"
                  >
                    Subscription Guidelines
                  </button>
                  . You can also view{" "}
                  <a 
                    href="https://lists.apache.org/list.html?dev@resilientdb.apache.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    archived mail here
                  </a>.
                </p>
              </div>

              {/* Important Notice */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2-in-card">
                  Important Notice
                </h2>
                <p className="mb-4 text-base leading-relaxed text-body-color">
                  When replying to mailing list emails, please be aware of the following:
                </p>
                <ul className="space-y-2 text-base leading-relaxed text-body-color">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Some email clients may modify the subject line when replying (e.g., adding "Re:" in different languages or formats). This can cause your reply to be recognized as a new thread instead of a continuation of the original conversation.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Always check that your reply keeps the original subject line intact when responding to thread emails.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Configure your email client to use plain text format when possible, as HTML-formatted emails may not display correctly for all recipients.</span>
                  </li>
                </ul>
              </div>

              {/* 1. Themes/Subject Prefixes */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2-in-card">
                  1. Email Subject Prefixes
                </h2>
                <p className="mb-4 text-base leading-relaxed text-body-color">
                  To help organize discussions, please use the following subject prefixes when sending emails to the mailing list:
                </p>
                <div className="space-y-4">
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                      <code className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded text-blue-700 dark:text-blue-300">[DISCUSS]</code>
                    </h3>
                    <p className="text-base leading-relaxed text-body-color">
                      Discussion on a feature, function, logic modification, CI/CD, implementation, design, or optimization suggestions.
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                      <code className="px-2 py-1 bg-purple-100 dark:bg-purple-900 rounded text-purple-700 dark:text-purple-300">[PROPOSAL]</code>
                    </h3>
                    <p className="text-base leading-relaxed text-body-color">
                      Proposals for adding or removing features, architectural changes, or significant modifications. Similar to [DISCUSS] but typically for more formal proposals.
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                      <code className="px-2 py-1 bg-green-100 dark:bg-green-900 rounded text-green-700 dark:text-green-300">[VOTE]</code>
                    </h3>
                    <p className="text-base leading-relaxed text-body-color">
                      Vote for changes, release candidates, electing new Committers or PMC members. Each version release is voted on in the community dev mailing list.
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                      <code className="px-2 py-1 bg-teal-100 dark:bg-teal-900 rounded text-teal-700 dark:text-teal-300">[ANNOUNCE]</code>
                    </h3>
                    <p className="text-base leading-relaxed text-body-color">
                      Announcements for new version releases, newly elected Committers or PMC members, and other important news.
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                      <code className="px-2 py-1 bg-orange-100 dark:bg-orange-900 rounded text-orange-700 dark:text-orange-300">[NOTICE]</code>
                    </h3>
                    <p className="text-base leading-relaxed text-body-color">
                      Temporary notifications such as maintenance announcements, service unavailability, meeting schedules, online/offline events, and community gatherings.
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                      <code className="px-2 py-1 bg-red-100 dark:bg-red-900 rounded text-red-700 dark:text-red-300">[HELP]</code>
                    </h3>
                    <p className="text-base leading-relaxed text-body-color">
                      Requests for help or assistance. Use this when you need community support, have questions, or are having trouble accessing GitHub or submitting issues.
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                      <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 rounded text-indigo-700 dark:text-indigo-300">[VOTE][RESULT]</code>
                    </h3>
                    <p className="text-base leading-relaxed text-body-color">
                      Announce the results of a completed vote, such as release vote outcomes or election results.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. Email Specifications */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2-in-card">
                  2. Email Specifications
                </h2>

                {/* General Guidelines */}
                <div className="mb-6">
                  <h3 className="community-h3">
                    General Guidelines
                  </h3>
                  <ul className="space-y-3 text-base leading-relaxed text-body-color">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Whenever possible, send <strong>plain text emails</strong> instead of HTML-formatted emails. This ensures compatibility across all email clients.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Send development discussions, help requests, and notifications to <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">dev@resilientdb.apache.org</code></span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Always include the appropriate <strong>subject prefix</strong> (e.g., <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">[HELP] Your question here</code>, <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">[DISCUSS] Feature proposal</code>)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>For more detailed email etiquette, refer to the official <a href="https://infra.apache.org/contrib-email-tips" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Apache Mail Etiquette Guide</a></span>
                    </li>
                  </ul>
                </div>

                {/* Reply Guidelines */}
                <div className="mb-6">
                  <h3 className="community-h3">
                    Reply Guidelines
                  </h3>
                  <ul className="space-y-3 text-base leading-relaxed text-body-color">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Include your <strong>signature</strong> at the end of your email (preferably in English for international collaboration)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>When replying to voting emails, include a <strong>binding mark</strong>:
                        <ul className="mt-2 ml-4 list-disc space-y-1">
                          <li>PMC members: <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">+1 approve (binding)</code></li>
                          <li>Non-PMC members: <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">+1 approve (non-binding)</code></li>
                        </ul>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span><strong>Do not modify the subject line</strong> when replying to keep the email thread connected</span>
                    </li>
                  </ul>
                </div>

                {/* DISCUSS/Proposal Guidelines */}
                <div className="mb-6">
                  <h3 className="community-h3">
                    [DISCUSS/PROPOSAL] Email Guidelines
                  </h3>
                  <ul className="space-y-3 text-base leading-relaxed text-body-color">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Title format: <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">[DISCUSS][module-name] Your topic</code> (include module name if applicable)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Create a corresponding <strong>GitHub issue</strong> first, then initiate the email discussion</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Clearly describe: background, problem you want to solve, proposed solution</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>List the modules involved if specific components are affected</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Place detailed design documents or diagrams in the GitHub issue and reference the link in your email</span>
                    </li>
                  </ul>
                </div>

                {/* HELP Guidelines */}
                <div className="mb-6">
                  <h3 className="community-h3">
                    [HELP] Email Guidelines
                  </h3>
                  <ul className="space-y-3 text-base leading-relaxed text-body-color">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Before sending, check if your question is already answered in the documentation, existing issues, or <a href="https://lists.apache.org/list.html?dev@resilientdb.apache.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">archived mail</a></span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Provide a <strong>detailed description</strong> of the problem encountered</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Include <strong>steps to reproduce</strong> the issue</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Consider creating a corresponding <strong>GitHub issue</strong> for tracking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Include relevant environment details (OS, version, configuration)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 3. Sample References */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2-in-card">
                  3. Sample References
                </h2>
                <p className="mb-4 text-base leading-relaxed text-body-color">
                  Here are examples of different email types from Apache projects for reference:
                </p>
                <div className="space-y-4">
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                      [DISCUSS/PROPOSAL] Examples
                    </h3>
                    <ul className="space-y-1 text-base text-body-color">
                      <li>• Feature discussions and implementation proposals</li>
                      <li>• Architecture change discussions</li>
                      <li>• Community building proposals</li>
                    </ul>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                      [VOTE] Examples
                    </h3>
                    <ul className="space-y-1 text-base text-body-color">
                      <li>• Release candidate voting</li>
                      <li>• New committer/PMC elections</li>
                    </ul>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                      [ANNOUNCE] Examples
                    </h3>
                    <ul className="space-y-1 text-base text-body-color">
                      <li>• New version release announcements</li>
                      <li>• New committer/PMC member announcements</li>
                    </ul>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                      [NOTICE] Examples
                    </h3>
                    <ul className="space-y-1 text-base text-body-color">
                      <li>• Regular meeting notices</li>
                      <li>• Service status notifications</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-sm text-body-color">
                  View our <a href="https://lists.apache.org/list.html?dev@resilientdb.apache.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">archived mailing list</a> for real examples from the ResilientDB community.
                </p>
              </div>

              {/* 4. PMC Email Usage */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2-in-card">
                  4. PMC Email Usage
                </h2>
                <p className="mb-4 text-base leading-relaxed text-body-color">
                  For PMC members, here are common scenarios that involve using the mailing list:
                </p>
                <ul className="space-y-3 text-base leading-relaxed text-body-color">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span><strong>Version Planning:</strong> Organize discussions with PMC members and developers, record meeting minutes, determine feature scope, release timeline, and release manager. Send meeting minutes to the appropriate mailing list.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span><strong>Feature Voting:</strong> Send voting emails to <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">dev@resilientdb.apache.org</code> for new version features. Requires 3+ PMC members to agree and yes votes greater than negative votes.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span><strong>Meeting Communications:</strong> Send meeting invitation/reminder emails before meetings and meeting minutes after meetings to <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">dev@resilientdb.apache.org</code></span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span><strong>Committer/PMC Elections:</strong> New committer/PMC member votes follow the <a href="https://community.apache.org/newcommitter.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Apache New Committer Guidelines</a></span>
                  </li>
                </ul>
              </div>

              {/* 5. Replying to Release Voting Emails */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2-in-card">
                  5. Replying to Release Voting Emails
                </h2>
                <p className="mb-4 text-base leading-relaxed text-body-color">
                  When a release vote is initiated, you should verify the release candidate before casting your vote. 
                  Here's how to properly reply to voting emails:
                </p>
                
                <div className="mb-6 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
                  <p className="text-base leading-relaxed text-body-color">
                    <strong>Important:</strong> Simply replying <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">+1 approve</code> is <strong>not valid</strong>. 
                    You must include information about what you verified.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">
                      Non-PMC Member Reply Template
                    </h3>
                    <pre className="bg-gray-200 dark:bg-gray-900 p-4 rounded-lg text-sm overflow-x-auto">
{`+1 (non-binding)

I checked:
    1. All download links are valid
    2. Checksum and signature are OK
    3. LICENSE and NOTICE files exist
    4. Build successfully on [your OS]
    5. [Any additional checks you performed]`}
                    </pre>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="mb-3 text-lg font-semibold text-black dark:text-white">
                      PMC Member Reply Template
                    </h3>
                    <pre className="bg-gray-200 dark:bg-gray-900 p-4 rounded-lg text-sm overflow-x-auto">
{`+1 (binding)

I checked:
    1. All download links are valid
    2. Checksum and signature are OK
    3. LICENSE and NOTICE files exist
    4. Build successfully on [your OS]
    5. [Any additional checks you performed]`}
                    </pre>
                    <p className="mt-2 text-sm text-body-color">
                      PMC member votes are binding and count toward the official vote tally.
                    </p>
                  </div>
                </div>
              </div>

              {/* 6. Email Client Tips */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2-in-card">
                  6. Email Client Tips
                </h2>
                <p className="mb-4 text-base leading-relaxed text-body-color">
                  Tips for configuring your email client for optimal mailing list participation:
                </p>
                <ul className="space-y-3 text-base leading-relaxed text-body-color">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span><strong>Use Plain Text:</strong> Configure your email client to send plain text emails instead of HTML. This ensures compatibility and readability for all recipients.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span><strong>Preserve Subject Lines:</strong> When replying, ensure your email client doesn't modify the subject line beyond adding "Re:". Some clients add language-specific prefixes that break email threading.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span><strong>Reply-to-All:</strong> When responding to mailing list discussions, use "Reply All" to ensure your response goes to the list and maintains the conversation.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span><strong>Inline Replies:</strong> When responding to specific points, use inline replies (quoting the relevant text and responding below) for clarity.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span><strong>Signature:</strong> Keep your email signature brief and professional. Include your name and optionally your GitHub handle or affiliation.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "contribute":
        return (
          <div>
            <h1 className="community-h1">
              How to Participate in Project Contribution
            </h1>
            <p className="mb-6 text-base leading-relaxed text-body-color">
              Thank you for your interest in contributing to ResilientDB! There are many ways to get involved, 
              from reporting bugs to implementing new features. Every contribution, no matter how small, 
              makes a difference to our community.
            </p>

            <div className="space-y-6">
              {/* 1. Contribution Categories */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2-in-card">
                  1. Contribution Categories
                </h2>

                {/* 1.1 Bug Feedback and Fixes */}
                <div className="mb-6">
                  <h3 className="community-h3">
                    1.1 Bug Feedback and Fixes
                  </h3>
                  <p className="mb-4 text-base leading-relaxed text-body-color">
                    We recommend that whether it is a bug feedback or a fix, an issue is first created to describe 
                    the bug in detail. This allows the community to find and review the problem and code through 
                    the issue record.
                  </p>
                  <p className="mb-4 text-base leading-relaxed text-body-color">
                    Bug feedback issues usually need to include:
                  </p>
                  <ul className="mb-4 space-y-2 text-base leading-relaxed text-body-color">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span><strong>Complete description</strong> of the bug information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span><strong>Reproducible scenarios</strong> so the community can quickly locate the cause</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Environment details (OS, version, configuration)</span>
                    </li>
                  </ul>
                  <p className="text-base leading-relaxed text-body-color">
                    All open issues that contain the <code className="px-1 py-0.5 bg-red-100 dark:bg-red-900 rounded text-red-700 dark:text-red-300">#bug</code> tag need to be fixed.
                  </p>
                </div>

                {/* 1.2 Feature Development */}
                <div className="mb-6">
                  <h3 className="community-h3">
                    1.2 Feature Development and Refactoring
                  </h3>
                  <p className="mb-4 text-base leading-relaxed text-body-color">
                    In the communication process, a detailed description, mechanisms, and usage scenarios of 
                    the new feature (or refactoring) can promote it to be implemented better and faster 
                    (including test cases, code, and CI/CD related work).
                  </p>
                  <div className="mb-4 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
                    <p className="text-base leading-relaxed text-body-color">
                      <strong>Important:</strong> If you plan to implement a major feature (or refactoring), 
                      be sure to communicate with the core development team through Issue or other means so 
                      that everyone can promote it in the most efficient way.
                    </p>
                  </div>
                  <ul className="space-y-2 text-base leading-relaxed text-body-color">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Issues with <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900 rounded text-blue-700 dark:text-blue-300">#feature</code> label are new features that need implementation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Issues with <code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900 rounded text-purple-700 dark:text-purple-300">#enhancement</code> label are features that need improvement or refactoring</span>
                    </li>
                  </ul>
                </div>

                {/* 1.3 Issue Q&A */}
                <div className="mb-6">
                  <h3 className="community-h3">
                    1.3 Issue Q&A
                  </h3>
                  <p className="text-base leading-relaxed text-body-color">
                    Helping answer questions in the ResilientDB community is a very valuable way to contribute. 
                    There will always be new users joining the community. While helping new users, you can also 
                    demonstrate your expertise and build your reputation in the community.
                  </p>
                </div>

                {/* 1.4 Documentation */}
                <div className="mb-6">
                  <h3 className="community-h3">
                    1.4 Documentation Improvements
                  </h3>
                  <p className="mb-4 text-base leading-relaxed text-body-color">
                    Good documentation is crucial to the development of ResilientDB. You can contribute by:
                  </p>
                  <ul className="space-y-2 text-base leading-relaxed text-body-color">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Improving existing documentation clarity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Writing tutorials and getting-started guides</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Creating code examples and use cases</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Fixing typos and grammatical errors</span>
                    </li>
                  </ul>
                </div>

                {/* 1.5 Other */}
                <div>
                  <h3 className="community-h3">
                    1.5 Other Contributions
                  </h3>
                  <p className="text-base leading-relaxed text-body-color">
                    Including participating in and helping to organize community exchanges, community operation 
                    activities, research collaboration, presenting at conferences, and other activities that can 
                    help the ResilientDB project and the community.
                  </p>
                </div>
              </div>

              {/* 2. How to Contribute */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2-in-card">
                  2. How to Contribute
                </h2>

                {/* 2.1 Branch Structure */}
                <div className="mb-6">
                  <h3 className="community-h3">
                    2.1 Branch Structure
                  </h3>
                  <p className="mb-4 text-base leading-relaxed text-body-color">
                    The ResilientDB repository has many branches, but these are the two main ones you should know:
                  </p>
                  <div className="space-y-3">
                    <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                      <code className="font-semibold text-primary">master</code>
                      <span className="ml-2 text-body-color">— The main production branch containing stable, release-ready code</span>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                      <code className="font-semibold text-primary">development</code>
                      <span className="ml-2 text-body-color">— The staging branch for working on features and testing before merging to master</span>
                    </div>
                  </div>

                  <h4 className="mt-6 mb-3 text-lg font-semibold text-black dark:text-white">
                    Key Concepts
                  </h4>
                  <ul className="mb-4 space-y-2 text-base leading-relaxed text-body-color">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span><strong>Original Repository:</strong> <a href="https://github.com/apache/incubator-resilientdb" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://github.com/apache/incubator-resilientdb</a> — The Apache repository of ResilientDB</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span><strong>Fork Repository:</strong> Your personal copy of the repository after forking</span>
                    </li>
                  </ul>

                  <h4 className="mt-6 mb-3 text-lg font-semibold text-black dark:text-white">
                    Synchronize Your Fork with the Original Repository
                  </h4>
                  <ol className="mb-4 space-y-2 text-base leading-relaxed text-body-color list-decimal list-inside">
                    <li>Go to your forked repository page on GitHub</li>
                    <li>Select the branch you want to update</li>
                    <li>Click "Sync fork" under the Code button and select "Update branch"</li>
                  </ol>

                  <h4 className="mt-6 mb-3 text-lg font-semibold text-black dark:text-white">
                    Sync a New Branch from Original Repository
                  </h4>
                  <p className="mb-3 text-base leading-relaxed text-body-color">
                    If a new branch exists in the original repository but not in your fork:
                  </p>
                  <pre className="mb-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
{`# Add the original Apache repository as a remote
git remote add apache git@github.com:apache/incubator-resilientdb.git

# Fetch the apache remote information
git fetch apache

# Create a local branch based on the new branch
git checkout -b new-branch-name apache/new-branch-name

# Push the local branch to your fork
git push origin new-branch-name:new-branch-name

# Remove the upstream remote (optional)
git remote remove apache`}
                  </pre>
                </div>

                {/* 2.2 Pull Request Process */}
                <div className="mb-6">
                  <h3 className="community-h3">
                    2.2 Pull Request Process
                  </h3>
                  <ol className="mb-4 space-y-3 text-base leading-relaxed text-body-color list-decimal list-inside">
                    <li>
                      <strong>Confirm the base branch</strong> — Usually the current version in development. 
                      If unsure, ask in the community Discord or in the relevant issue.
                    </li>
                    <li>
                      <strong>Sync your fork</strong> — Ensure your fork is up-to-date with the original repository.
                    </li>
                    <li>
                      <strong>Create a feature branch</strong> — Don't modify the main branch directly:
                      <pre className="mt-2 overflow-x-auto rounded-lg bg-gray-900 p-3 text-sm text-gray-100">
{`git checkout -b fix-issue-123 main
git push origin fix-issue-123:fix-issue-123`}
                      </pre>
                    </li>
                    <li>
                      <strong>Develop and commit</strong> — Make your changes with clear, descriptive commit messages.
                    </li>
                    <li>
                      <strong>Submit PR</strong> — If work is still in progress, add <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">[WIP]</code> prefix 
                      to the title (e.g., <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">[WIP] Add unit tests for consensus module</code>). 
                      Associate the relevant issue.
                    </li>
                    <li>
                      <strong>Wait for review</strong> — Address any feedback from reviewers.
                    </li>
                    <li>
                      <strong>Clean up</strong> — After merge, delete your feature branch:
                      <pre className="mt-2 overflow-x-auto rounded-lg bg-gray-900 p-3 text-sm text-gray-100">
{`git branch -d fix-issue-123
git push origin --delete fix-issue-123`}
                      </pre>
                    </li>
                  </ol>
                </div>

                {/* 2.3 Development Guidelines */}
                <div className="mb-6">
                  <h3 className="community-h3">
                    2.3 Development Guidelines
                  </h3>
                  <p className="mb-4 text-base leading-relaxed text-body-color">
                    Before starting development, fork the ResilientDB project to your GitHub account. 
                    Develop based on the code in your fork repository.
                  </p>
                  <pre className="mb-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
{`# Clone your fork
git clone https://github.com/{your-username}/incubator-resilientdb.git --branch main

# Create a development branch
git checkout -b dev-fix main

# Push to your fork
git push origin dev-fix:dev-fix`}
                  </pre>
                  <p className="text-base leading-relaxed text-body-color">
                    For detailed build instructions and environment setup, refer to the{" "}
                    <a 
                      href="https://github.com/apache/incubator-resilientdb/blob/main/README.md" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      README
                    </a>{" "}
                    and{" "}
                    <a 
                      href="https://github.com/apache/incubator-resilientdb/blob/main/CONTRIBUTING.md" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      CONTRIBUTING.md
                    </a>.
                  </p>
                </div>

                {/* 2.4 Issue Submission Guidelines */}
                <div className="mb-6">
                  <h3 className="community-h3">
                    2.4 Issue Submission Guidelines
                  </h3>
                  <ul className="space-y-3 text-base leading-relaxed text-body-color">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Use a clear, concise <strong>issue title</strong> that briefly describes your problem or suggestion</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Write issues in <strong>English</strong> for international collaboration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Add appropriate <strong>labels</strong> (e.g., <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">bug</code>, <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">feature</code>, <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">documentation</code>)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Provide <strong>reproducible steps</strong> for bugs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Include relevant <strong>environment information</strong> (OS, version, etc.)</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-base leading-relaxed text-body-color">
                    If you're new to GitHub issues, see{" "}
                    <a 
                      href="https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      GitHub's guide on issues
                    </a>.
                  </p>
                </div>

                {/* 2.5 Pull Request Guidelines */}
                <div className="mb-6">
                  <h3 className="community-h3">
                    2.5 Pull Request Submission Guidelines
                  </h3>
                  <ul className="space-y-3 text-base leading-relaxed text-body-color">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Submit PRs to the appropriate branch (usually <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">main</code> or the current development branch)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>PR title should follow: <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;</code></span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Types: <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">feat</code>, <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">fix</code>, <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">docs</code>, <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">style</code>, <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">refactor</code>, <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">test</code>, <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">chore</code></span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>If the PR includes new features, <strong>include documentation updates</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>If not ready to merge, add <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">[WIP]</code> prefix to the title</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>All PRs require <strong>at least one review</strong> before merging</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-base leading-relaxed text-body-color">
                    New to pull requests? See{" "}
                    <a 
                      href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      GitHub's guide on pull requests
                    </a>.
                  </p>
                </div>

                {/* 2.6 Review Standards */}
                <div>
                  <h3 className="community-h3">
                    2.6 Review Standards
                  </h3>
                  <p className="mb-4 text-base leading-relaxed text-body-color">
                    Understanding what makes a good submission helps get your PR merged faster.
                  </p>

                  <h4 className="mt-4 mb-3 text-lg font-semibold text-green-600 dark:text-green-400">
                    What We Look For (Gains)
                  </h4>
                  <ul className="mb-4 space-y-2 text-base leading-relaxed text-body-color">
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">✓</span>
                      <span>Fixes the root cause of a bug</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">✓</span>
                      <span>Adds or fixes a feature that many users need</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">✓</span>
                      <span>Simple and effective implementation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">✓</span>
                      <span>Easy to test, with test cases included</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">✓</span>
                      <span>Reduces complexity and code amount</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-green-600">✓</span>
                      <span>Addresses issues discussed and identified by the community</span>
                    </li>
                  </ul>

                  <h4 className="mt-4 mb-3 text-lg font-semibold text-red-600 dark:text-red-400">
                    What We Avoid (Risks)
                  </h4>
                  <ul className="space-y-2 text-base leading-relaxed text-body-color">
                    <li className="flex items-start">
                      <span className="mr-2 text-red-600">✗</span>
                      <span>Only fixes surface symptoms of a bug</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-red-600">✗</span>
                      <span>Introduces new features with high complexity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-red-600">✗</span>
                      <span>Adds complexity for niche use cases</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-red-600">✗</span>
                      <span>Changes stable existing API or semantics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-red-600">✗</span>
                      <span>Causes other functions to break</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-red-600">✗</span>
                      <span>Adds many dependencies or changes versions arbitrarily</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-red-600">✗</span>
                      <span>Submits large amounts of code in one PR</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 3. Outstanding Contributors */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2-in-card">
                  3. Outstanding Contributors
                </h2>

                {/* 3.1 About Committers */}
                <div className="mb-6">
                  <h3 className="community-h3">
                    3.1 About Committers
                  </h3>
                  
                  <h4 className="mt-4 mb-3 text-lg font-semibold text-black dark:text-white">
                    How to Become a Committer
                  </h4>
                  <p className="mb-4 text-base leading-relaxed text-body-color">
                    If you have submitted valuable PRs to ResilientDB that have been merged, or contributed 
                    consistently for an extended period, you may be nominated to become a Committer:
                  </p>
                  <ol className="mb-4 space-y-2 text-base leading-relaxed text-body-color list-decimal list-inside">
                    <li>A PMC member recognizes your contributions and nominates you</li>
                    <li>The nominator presents your contributions to all PMC members and Committers</li>
                    <li>PMC members and Committers vote on your nomination</li>
                    <li>If you receive sufficient votes, you become a Committer</li>
                  </ol>

                  <h4 className="mt-4 mb-3 text-lg font-semibold text-black dark:text-white">
                    Committer Rights
                  </h4>
                  <ul className="space-y-2 text-base leading-relaxed text-body-color">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Join official developer channels to participate in discussions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Manage issues (close, add labels)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Create and manage project branches (except main and release branches)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Review PRs submitted to development branches</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Apply to become a PMC member</span>
                    </li>
                  </ul>
                </div>

                {/* 3.2 About PMC */}
                <div>
                  <h3 className="community-h3">
                    3.2 About PMC (Project Management Committee)
                  </h3>
                  
                  <h4 className="mt-4 mb-3 text-lg font-semibold text-black dark:text-white">
                    How to Become a PMC Member
                  </h4>
                  <p className="mb-4 text-base leading-relaxed text-body-color">
                    If you are a Committer of the ResilientDB project and all your contributions have been 
                    recognized by other PMC members, you can apply to become a PMC member. Other PMC members 
                    will vote to decide whether to allow you to join.
                  </p>

                  <h4 className="mt-4 mb-3 text-lg font-semibold text-black dark:text-white">
                    PMC Member Rights
                  </h4>
                  <ul className="space-y-2 text-base leading-relaxed text-body-color">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Merge PRs submitted by Committers and contributors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Participate in determining the roadmap and development direction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Participate in new version releases</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Vote on new Committer and PMC nominations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Binding votes on release candidates</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Quick Links */}
              <div className="rounded-lg bg-primary bg-opacity-10 p-6">
                <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
                  Quick Links
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <a
                    href="https://github.com/apache/incubator-resilientdb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center rounded-lg bg-white p-4 shadow-sm transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <FontAwesomeIcon icon={faGithub} className="mr-3 text-xl text-gray-700 dark:text-gray-300" />
                    <span className="font-medium text-black dark:text-white">GitHub Repository</span>
                  </a>
                  <a
                    href="https://github.com/apache/incubator-resilientdb/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center rounded-lg bg-white p-4 shadow-sm transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <FontAwesomeIcon icon={faBug} className="mr-3 text-xl text-gray-700 dark:text-gray-300" />
                    <span className="font-medium text-black dark:text-white">Issue Tracker</span>
                  </a>
                  <a
                    href="https://github.com/apache/incubator-resilientdb/pulls"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center rounded-lg bg-white p-4 shadow-sm transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <FontAwesomeIcon icon={faCodeMerge} className="mr-3 text-xl text-gray-700 dark:text-gray-300" />
                    <span className="font-medium text-black dark:text-white">Pull Requests</span>
                  </a>
                  <a
                    href="https://github.com/apache/incubator-resilientdb/blob/main/CONTRIBUTING.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center rounded-lg bg-white p-4 shadow-sm transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <FontAwesomeIcon icon={faFileAlt} className="mr-3 text-xl text-gray-700 dark:text-gray-300" />
                    <span className="font-medium text-black dark:text-white">Contributing Guide</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );

      case "dev-meetings":
        return (
          <div>
            <h1 className="community-h1">
              Developer Meetings
            </h1>
            <p className="mb-6 text-base leading-relaxed text-body-color">
              Apache ResilientDB holds regular developer meetings to discuss project progress, 
              upcoming features, architectural decisions, and community matters. Everyone interested 
              in the project is welcome to participate!
            </p>

            <div className="space-y-6">
              {/* Meeting Overview */}
              <div className="rounded-lg bg-primary bg-opacity-10 p-6">
                <h2 className="mb-4 text-xl font-bold text-black dark:text-white">
                  Meeting Overview
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary bg-opacity-20 text-primary">
                      <FontAwesomeIcon icon={faCalendar} className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black dark:text-white">Schedule</h3>
                      <p className="text-body-color">Weekly on Mondays</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary bg-opacity-20 text-primary">
                      <FontAwesomeIcon icon={faUsers} className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black dark:text-white">Participants</h3>
                      <p className="text-body-color">Open to anyone interested</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary bg-opacity-20 text-primary">
                      <FontAwesomeIcon icon={faComments} className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black dark:text-white">Format</h3>
                      <p className="text-body-color">Online video conference</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary bg-opacity-20 text-primary">
                      <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black dark:text-white">Notifications</h3>
                      <p className="text-body-color">Via mailing list</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* How to Join */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2-in-card">
                  How to Join
                </h2>
                <p className="mb-4 text-base leading-relaxed text-body-color">
                  Meeting announcements, including the date, time, agenda, and conference link, are sent 
                  to the developer mailing list before each meeting. To receive these notifications:
                </p>
                
                <ol className="mb-6 space-y-3 text-base leading-relaxed text-body-color list-decimal list-inside">
                  <li>
                    <strong>Subscribe to the mailing list</strong> — See our{" "}
                    <button 
                      onClick={() => setActiveSection("subscribe")} 
                      className="text-primary hover:underline font-medium"
                    >
                      How to Subscribe
                    </button>{" "}
                    guide to join <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">dev@resilientdb.apache.org</code>
                  </li>
                  <li>
                    <strong>Watch for meeting announcements</strong> — Emails with subject containing "[NOTICE]" or "Meeting" will have the details
                  </li>
                  <li>
                    <strong>Join the conference</strong> — Click the meeting link provided in the announcement email at the scheduled time
                  </li>
                </ol>

                <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                  <p className="text-base leading-relaxed text-body-color">
                    <strong>Tip:</strong> Meeting times may occasionally change due to holidays or scheduling conflicts. 
                    Always check the mailing list for the most up-to-date information.
                  </p>
                </div>
              </div>

              {/* What We Discuss */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2-in-card">
                  What We Discuss
                </h2>
                <p className="mb-4 text-base leading-relaxed text-body-color">
                  Our developer meetings cover a variety of topics relevant to the project and community:
                </p>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="mb-2 font-semibold text-black dark:text-white">Project Updates</h3>
                    <ul className="space-y-1 text-sm text-body-color">
                      <li>• Version planning and release progress</li>
                      <li>• Development status updates</li>
                      <li>• Milestone tracking</li>
                    </ul>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="mb-2 font-semibold text-black dark:text-white">Technical Discussions</h3>
                    <ul className="space-y-1 text-sm text-body-color">
                      <li>• New features and proposals</li>
                      <li>• Architecture and design decisions</li>
                      <li>• Performance optimizations</li>
                    </ul>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="mb-2 font-semibold text-black dark:text-white">Community Matters</h3>
                    <ul className="space-y-1 text-sm text-body-color">
                      <li>• Community growth and outreach</li>
                      <li>• Documentation improvements</li>
                      <li>• Event planning</li>
                    </ul>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="mb-2 font-semibold text-black dark:text-white">Q&A Session</h3>
                    <ul className="space-y-1 text-sm text-body-color">
                      <li>• Open questions from attendees</li>
                      <li>• Troubleshooting and support</li>
                      <li>• Contributor guidance</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Meeting Notes */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2-in-card">
                  Meeting Notes
                </h2>
                <p className="mb-4 text-base leading-relaxed text-body-color">
                  After each meeting, notes and summaries are shared on the mailing list so that 
                  community members who couldn't attend can stay informed. Meeting notes typically include:
                </p>
                
                <ul className="mb-6 space-y-2 text-base leading-relaxed text-body-color">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Summary of topics discussed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Decisions made and action items</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Links to relevant issues, PRs, or documents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>Next meeting date and preliminary agenda</span>
                  </li>
                </ul>

                <p className="text-base leading-relaxed text-body-color">
                  You can find past meeting notes and discussions in the{" "}
                  <a 
                    href="https://lists.apache.org/list.html?dev@resilientdb.apache.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Apache mailing list archive
                  </a>.
                </p>
              </div>

              {/* Can't Attend? */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2-in-card">
                  Can't Attend a Meeting?
                </h2>
                <p className="mb-4 text-base leading-relaxed text-body-color">
                  If you can't make it to a meeting but have topics you'd like to discuss or questions 
                  you'd like answered, you have several options:
                </p>
                
                <ul className="space-y-3 text-base leading-relaxed text-body-color">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>
                      <strong>Send an email</strong> to{" "}
                      <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">dev@resilientdb.apache.org</code>{" "}
                      with your question or topic — it may be added to the meeting agenda
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>
                      <strong>Review the meeting notes</strong> sent to the mailing list after each meeting
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>
                      <strong>Join our Discord</strong> for asynchronous discussions —{" "}
                      <a 
                        href="https://discord.gg/vKtRX4MRJR" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Join Discord
                      </a>
                    </span>
                  </li>
                </ul>
              </div>

              {/* Quick Links */}
              <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
                  Useful Links
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <button
                    onClick={() => setActiveSection("subscribe")}
                    className="flex items-center rounded-lg bg-white p-3 shadow-sm transition-colors hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 text-left"
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-primary" />
                    <span className="text-sm font-medium text-black dark:text-white">Subscribe to Mailing List →</span>
                  </button>
                  <a
                    href="https://lists.apache.org/list.html?dev@resilientdb.apache.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center rounded-lg bg-white p-3 shadow-sm transition-colors hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600"
                  >
                    <FontAwesomeIcon icon={faFileAlt} className="mr-3 text-primary" />
                    <span className="text-sm font-medium text-black dark:text-white">Meeting Notes Archive →</span>
                  </a>
                  <a
                    href="https://discord.gg/vKtRX4MRJR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center rounded-lg bg-white p-3 shadow-sm transition-colors hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600"
                  >
                    <FontAwesomeIcon icon={faDiscord} className="mr-3 text-primary" />
                    <span className="text-sm font-medium text-black dark:text-white">Join Discord →</span>
                  </a>
                  <button
                    onClick={() => setActiveSection("email-usage")}
                    className="flex items-center rounded-lg bg-white p-3 shadow-sm transition-colors hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 text-left"
                  >
                    <FontAwesomeIcon icon={faEnvelopeOpen} className="mr-3 text-primary" />
                    <span className="text-sm font-medium text-black dark:text-white">Email Usage Guide →</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case "vote-committer":
        return (
          <div>
            <h1 className="community-h1">
              How to Vote New Committer/PMC Members
            </h1>
            <p className="mb-4 text-base leading-relaxed text-body-color">
              This guide introduces the selection requirements and process for Committer and PMC members 
              in the Apache ResilientDB project.
            </p>
            <p className="mb-6 text-sm text-body-color">
              Official guidelines can be found at:{" "}
              <a 
                href="https://community.apache.org/newcommitter.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                https://community.apache.org/newcommitter.html
              </a>
            </p>

            <div className="space-y-6">
              {/* 1. Candidate Requirements */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2-in-card">
                  1. Candidate Requirements
                </h2>
                <p className="mb-4 text-base leading-relaxed text-body-color">
                  When voting, all PMC members need to decide for themselves whether candidates should be 
                  approved as committers. This can be done by searching the mailing list, issues, PRs, and 
                  documentation contributions to understand how candidates interact with others and the 
                  contributions they make.
                </p>

                <p className="mb-4 text-base leading-relaxed text-body-color">
                  Below are some points to consider when evaluating candidates:
                </p>

                {/* Evaluation Criteria */}
                <div className="space-y-4">
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                      1. Community Collaboration
                    </h3>
                    <ul className="space-y-1 text-base text-body-color">
                      <li>• Interaction via email and community channels</li>
                      <li>• Participation in group voting or decision-making discussions</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                      2. Community Reputation
                    </h3>
                    <ul className="space-y-1 text-base text-body-color">
                      <li>• Helpfulness in answering questions on the mailing list</li>
                      <li>• Shows a helpful attitude and respects the ideas of others</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                      3. Quality of Contributions
                    </h3>
                    <ul className="space-y-1 text-base text-body-color">
                      <li>• Completion of tasks according to the project plan</li>
                      <li>• Attitude and process for handling difficult issues</li>
                      <li>• Willingness to help with less glamorous tasks</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                      4. Technical Skills
                    </h3>
                    <ul className="space-y-1 text-base text-body-color">
                      <li>• Solid general understanding of the project</li>
                      <li>• Quality of discussions in emails</li>
                      <li>• Are their patches easy to apply with just a cursory review</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                      5. PMC-Specific Requirements
                    </h3>
                    <ul className="space-y-1 text-base text-body-color">
                      <li>• Comprehensive understanding of the project</li>
                      <li>• Ability to control project progress and version quality</li>
                      <li>• Active participation in community building</li>
                      <li>• Responsive to questions raised by the ASF Board</li>
                      <li>• Familiar with the ASF release process</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                  <p className="text-base leading-relaxed text-body-color">
                    <strong>Note:</strong> In most cases, new PMC members are nominated from the Committer team. 
                    However, it is also possible to become a PMC member directly if the PMC agrees and is confident 
                    that the candidate is ready (e.g., if they were an Apache member or PMC member of another project).
                  </p>
                </div>
              </div>

              {/* 2. Detailed Process */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2-in-card">
                  2. Detailed Process of Recommendation
                </h2>

                <div className="mb-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                  <p className="text-sm text-body-color">
                    <strong>Legend:</strong><br />
                    <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">{"${Candidate Name}"}</code> — The nominee (e.g., Joe Bloggs)<br />
                    <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">{"${Committer/PMC}"}</code> — The role type (Committer or PMC member)
                  </p>
                </div>

                {/* 2.1 Discussion */}
                <div className="mb-6">
                  <h3 className="community-h3">
                    2.1 Initiate Community Mail Discussion
                  </h3>
                  <p className="mb-4 text-base leading-relaxed text-body-color">
                    Any Apache ResilientDB PMC member can initiate a voting discussion. After finding valuable 
                    contributions from community contributors and obtaining the candidate's consent, they can 
                    initiate a discussion on the private mailing list.
                  </p>
                  <ul className="mb-4 space-y-2 text-base leading-relaxed text-body-color">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Send to: <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">private@resilientdb.apache.org</code></span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Discussion period: <strong>At least 72 hours</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>Include links to the candidate's contributions for review</span>
                    </li>
                  </ul>

                  <div className="rounded-lg bg-gray-900 p-4 overflow-x-auto">
                    <p className="mb-2 text-sm text-gray-400">Sample Discussion Email:</p>
                    <pre className="text-sm text-gray-100 whitespace-pre-wrap">
{`To: private@resilientdb.apache.org
Subject: [DISCUSS] \${Candidate Name} as an Apache ResilientDB \${Committer/PMC}

Hi all,

I nominate \${Candidate Name} as an Apache ResilientDB \${Committer/PMC} candidate.

Judging from the contributions in recent months, \${Candidate Name} has 
submitted many implementations to the project and improved various modules. 
Their contributions include:

1. https://github.com/apache/incubator-resilientdb/issues/created_by/\${GitHub ID}
2. https://github.com/apache/incubator-resilientdb/commits?author=\${GitHub ID}
3. https://lists.apache.org/list?dev@resilientdb.apache.org

So I nominate \${Candidate Name} as \${Committer/PMC} of the Apache ResilientDB project.

Thanks!`}
                    </pre>
                  </div>
                </div>

                {/* 2.2 Vote */}
                <div className="mb-6">
                  <h3 className="community-h3">
                    2.2 Initiate Community Mail Vote
                  </h3>
                  <p className="mb-4 text-base leading-relaxed text-body-color">
                    If the discussion email does not receive any disagreement within the specified time, 
                    the vote initiator needs to initiate a formal vote on the private mailing list.
                  </p>
                  
                  <div className="mb-4 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
                    <p className="text-base leading-relaxed text-body-color">
                      <strong>Voting Rules:</strong>
                    </p>
                    <ul className="mt-2 space-y-1 text-base text-body-color">
                      <li>• Requires at least <strong>3, +1 votes</strong> from PMC members to pass</li>
                      <li>• If there is <strong>1, -1 vote</strong>, the entire vote fails</li>
                      <li>• A -1 vote must include clear reasoning</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-gray-900 p-4 overflow-x-auto">
                    <p className="mb-2 text-sm text-gray-400">Sample Vote Email:</p>
                    <pre className="text-sm text-gray-100 whitespace-pre-wrap">
{`To: private@resilientdb.apache.org
Subject: [VOTE] \${Candidate Name} as an Apache ResilientDB \${Committer/PMC}

Hi all,

Judging from the contributions in recent months, \${Candidate Name} has 
submitted many implementations to the project and improved various modules.

I think making them a \${Committer/PMC} will be a recognition of their 
outstanding work for Apache ResilientDB. So, I am happy to call VOTE to 
accept \${Candidate Name} as an Apache ResilientDB \${Committer/PMC}.

Voting will remain open until the required number of votes is reached.

Please vote accordingly:
[ ] +1 approve
[ ] +0 no opinion
[ ] -1 disapprove with the reason

Here are links to their contributions:
1. https://github.com/apache/incubator-resilientdb/issues/created_by/\${GitHub ID}
2. https://github.com/apache/incubator-resilientdb/commits?author=\${GitHub ID}

Thanks!`}
                    </pre>
                  </div>
                </div>

                {/* 2.3 Results */}
                <div className="mb-6">
                  <h3 className="community-h3">
                    2.3 Announcement of Voting Results
                  </h3>
                  <p className="mb-4 text-base leading-relaxed text-body-color">
                    After the voting ends, the initiator needs to announce the results to the private mailing list.
                  </p>

                  <div className="rounded-lg bg-gray-900 p-4 overflow-x-auto">
                    <p className="mb-2 text-sm text-gray-400">Sample Results Email (Passed):</p>
                    <pre className="text-sm text-gray-100 whitespace-pre-wrap">
{`To: private@resilientdb.apache.org
Subject: [RESULTS][VOTE] \${Candidate Name} as an Apache ResilientDB \${Committer/PMC}

Hi all,

The vote for "\${Candidate Name} as an Apache ResilientDB \${Committer/PMC}" 
has PASSED and closed now.

The result is as follows:

3 PMC +1 Votes
- PMC Member A
- PMC Member B
- PMC Member C

Vote thread: https://lists.apache.org/thread/xxxxx

I will now send an invitation to \${Candidate Name}.

Thanks for everyone's support!`}
                    </pre>
                  </div>

                  <p className="mt-4 text-sm text-body-color">
                    <strong>Note:</strong> If not passed, change to: "The vote for... has <span className="text-red-500">FAILED</span> and closed now."
                  </p>
                </div>

                {/* 2.4 PMC Notification */}
                <div className="mb-6">
                  <h3 className="community-h3">
                    2.4 PMC Notification Email (PMC Only)
                  </h3>
                  <div className="mb-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                    <p className="text-base leading-relaxed text-body-color">
                      <strong>This step is only for new PMC member elections.</strong> Skip this step for Committer elections.
                    </p>
                  </div>
                  <p className="mb-4 text-base leading-relaxed text-body-color">
                    The vote initiator must send a notification to the ASF Board and wait at least 72 hours 
                    for any objections before proceeding.
                  </p>

                  <div className="rounded-lg bg-gray-900 p-4 overflow-x-auto">
                    <p className="mb-2 text-sm text-gray-400">Sample Board Notification:</p>
                    <pre className="text-sm text-gray-100 whitespace-pre-wrap">
{`To: board@apache.org
Cc: private@resilientdb.apache.org
Subject: [NOTICE] \${Candidate Name} for Apache ResilientDB PMC

Hi everyone,

\${Candidate Name} has been voted as a new member of the 
Apache ResilientDB PMC.

The vote thread is at: https://lists.apache.org/thread/xxxxx

Thanks!`}
                    </pre>
                  </div>
                </div>

                {/* 2.5 Invitation */}
                <div className="mb-6">
                  <h3 className="community-h3">
                    2.5 Send Invitation to Candidate
                  </h3>
                  <p className="mb-4 text-base leading-relaxed text-body-color">
                    After announcing the results (and board notification for PMC), send an invitation email 
                    to the candidate with CC to the private list.
                  </p>

                  <div className="rounded-lg bg-gray-900 p-4 overflow-x-auto">
                    <p className="mb-2 text-sm text-gray-400">Sample Invitation Email:</p>
                    <pre className="text-sm text-gray-100 whitespace-pre-wrap">
{`To: candidate@email.com
Cc: private@resilientdb.apache.org
Subject: Invitation to become Apache ResilientDB committer: \${Candidate Name}

Hello \${Candidate Name},

The Apache ResilientDB Project Management Committee (PMC) hereby offers 
you committer privileges to the project [as well as membership in the PMC].

These privileges are offered on the understanding that you'll use them 
reasonably and with common sense. We like to work on trust rather than 
unnecessary constraints.

Being a committer enables you to more easily make changes without needing 
to go through the patch submission process. [Being a PMC member enables 
you to guide the direction of the project.]

Of course, you can decline and instead remain as a contributor.

A. This personal invitation is a chance for you to accept or decline in 
   private. Please reply to private@resilientdb.apache.org only.

B. If you accept, the next step is to register an iCLA:
   1. Details: https://www.apache.org/licenses/#clas
   2. Submission instructions: https://www.apache.org/licenses/#submitting
   3. Choose a unique Apache ID (check existing IDs at:
      https://people.apache.org/committer-index.html)

When your iCLA is recorded, you will receive follow-up instructions.

With the expectation of your acceptance, welcome!

The Apache ResilientDB PMC`}
                    </pre>
                  </div>
                </div>

                {/* 2.6 Acceptance */}
                <div className="mb-6">
                  <h3 className="community-h3">
                    2.6 Invitation Acceptance Process
                  </h3>
                  <p className="mb-4 text-base leading-relaxed text-body-color">
                    <strong>For the candidate:</strong> Reply to <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">private@resilientdb.apache.org</code> (reply all) 
                    to accept or decline the invitation.
                  </p>

                  <p className="mb-4 text-base leading-relaxed text-body-color">
                    Once accepted, the new committer must complete these steps:
                  </p>

                  <ol className="mb-4 space-y-3 text-base leading-relaxed text-body-color list-decimal list-inside">
                    <li>Subscribe to <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">dev@resilientdb.apache.org</code> (if not already)</li>
                    <li>
                      Choose an unused Apache ID from the{" "}
                      <a href="https://people.apache.org/committer-index.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Apache committers list
                      </a>
                    </li>
                    <li>
                      Complete and submit the ICLA — see our{" "}
                      <button 
                        onClick={() => setActiveSection("icla-signing")} 
                        className="text-primary hover:underline font-medium"
                      >
                        ICLA Signing Process guide
                      </button>{" "}
                      for detailed instructions
                    </li>
                    <li>Wait for confirmation email from Apache Secretary</li>
                  </ol>

                  <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                    <p className="text-base leading-relaxed text-body-color">
                      <strong>Confirmation:</strong> You will receive an email titled "Welcome to the Apache Software Foundation (ASF)!" 
                      when your account is created. This typically takes 2-5 days after ICLA processing.
                    </p>
                  </div>
                </div>

                {/* 2.7 Setup */}
                <div>
                  <h3 className="community-h3">
                    2.7 Setting Up Apache ID and Development Environment
                  </h3>
                  <p className="mb-4 text-base leading-relaxed text-body-color">
                    <strong>For the new committer:</strong> Complete the following setup steps:
                  </p>

                  <ol className="mb-4 space-y-3 text-base leading-relaxed text-body-color list-decimal list-inside">
                    <li>
                      Go to{" "}
                      <a href="https://id.apache.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Apache Account Utility Platform
                      </a>{" "}
                      — create password, set forwarding email, and link GitHub account
                    </li>
                    <li>
                      (Optional) Set up{" "}
                      <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">@apache.org</code>{" "}
                      email forwarding (Gmail recommended)
                    </li>
                    <li>
                      <strong>Enable GitHub 2FA</strong> —{" "}
                      <a href="https://help.github.com/articles/configuring-two-factor-authentication-via-a-totp-mobile-app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Follow this guide
                      </a>
                      <div className="mt-2 rounded-lg bg-red-50 p-3 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                        <p className="text-sm text-body-color">
                          <strong>Important:</strong> If 2FA is disabled, you will lose write access to Apache repositories. 
                          Keep your recovery codes safe!
                        </p>
                      </div>
                    </li>
                    <li>
                      Use{" "}
                      <a href="https://gitbox.apache.org/setup/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        GitBox Account Linking
                      </a>{" "}
                      to obtain write access to the ResilientDB repository
                    </li>
                    <li>
                      (Optional) Make yourself visible in the{" "}
                      <a href="https://github.com/orgs/apache/people" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Apache GitHub organization
                      </a>{" "}
                      by setting visibility to "Public"
                    </li>
                  </ol>
                </div>
              </div>

              {/* 3. Announcement */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2-in-card">
                  3. Public Announcement Email
                </h2>
                <p className="mb-4 text-base leading-relaxed text-body-color">
                  After the new committer completes all setup steps, the vote initiator sends a public 
                  announcement to the dev mailing list.
                </p>

                <div className="rounded-lg bg-gray-900 p-4 overflow-x-auto">
                  <p className="mb-2 text-sm text-gray-400">Sample Announcement:</p>
                  <pre className="text-sm text-gray-100 whitespace-pre-wrap">
{`To: dev@resilientdb.apache.org
Subject: [ANNOUNCE] New \${Committer/PMC}: \${Candidate Name}

Hi everyone,

The Project Management Committee (PMC) for Apache ResilientDB has invited 
\${Candidate Name} to become a \${Committer/PMC member} and we are pleased 
to announce that they have accepted.

\${Candidate Name} has been active in the Apache ResilientDB community, 
and we are glad to see their continued interactions with the community.

Welcome \${Candidate Name}, and please enjoy your journey!

Thanks!
The Apache ResilientDB PMC`}
                  </pre>
                </div>
              </div>

              {/* 4. Workflow Summary */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2-in-card">
                  4. Workflow Summary
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="mb-3 font-semibold text-black dark:text-white">For Vote Initiator (PMC)</h3>
                    <ol className="space-y-2 text-sm text-body-color list-decimal list-inside">
                      <li>Send [DISCUSS] email to private list</li>
                      <li>Wait 72 hours</li>
                      <li>Send [VOTE] email to private list</li>
                      <li>Collect votes (need 3 +1)</li>
                      <li>Send [RESULTS] email</li>
                      <li>For PMC: Send [NOTICE] to board@apache.org</li>
                      <li>Send invitation to candidate</li>
                      <li>After setup complete: Send [ANNOUNCE] to dev list</li>
                    </ol>
                  </div>

                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="mb-3 font-semibold text-black dark:text-white">For New Committer</h3>
                    <ol className="space-y-2 text-sm text-body-color list-decimal list-inside">
                      <li>Reply to accept invitation</li>
                      <li>Complete and submit ICLA</li>
                      <li>Wait for account creation email (2-5 days)</li>
                      <li>Set up Apache ID at id.apache.org</li>
                      <li>Enable GitHub 2FA</li>
                      <li>Link account at gitbox.apache.org</li>
                      <li>Notify PMC that setup is complete</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="rounded-lg bg-primary bg-opacity-10 p-6">
                <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
                  Useful Links
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <a
                    href="https://community.apache.org/newcommitter.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center rounded-lg bg-white p-3 shadow-sm transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <span className="text-sm font-medium text-black dark:text-white">Apache New Committer Guide →</span>
                  </a>
                  <button
                    onClick={() => setActiveSection("icla-signing")}
                    className="flex items-center rounded-lg bg-white p-3 shadow-sm transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-left"
                  >
                    <span className="text-sm font-medium text-black dark:text-white">ICLA Signing Guide →</span>
                  </button>
                  <a
                    href="https://id.apache.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center rounded-lg bg-white p-3 shadow-sm transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <span className="text-sm font-medium text-black dark:text-white">Apache Account Utility →</span>
                  </a>
                  <a
                    href="https://gitbox.apache.org/setup/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center rounded-lg bg-white p-3 shadow-sm transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <span className="text-sm font-medium text-black dark:text-white">GitBox Account Linking →</span>
                  </a>
                  <a
                    href="https://people.apache.org/committer-index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center rounded-lg bg-white p-3 shadow-sm transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <span className="text-sm font-medium text-black dark:text-white">Apache Committers List →</span>
                  </a>
                  <a
                    href="https://whimsy.apache.org/roster/ppmc/resilientdb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center rounded-lg bg-white p-3 shadow-sm transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <span className="text-sm font-medium text-black dark:text-white">ResilientDB Roster →</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );

      case "icla-signing":
        return (
          <div>
            <h1 className="community-h1">
              ICLA Signing Process
            </h1>
            <p className="mb-6 text-base leading-relaxed text-body-color">
              The Apache Contributor License Agreement (ICLA) clearly defines the terms under which 
              intellectual property has been contributed to the ASF. This allows the foundation to 
              defend the project should there be a legal dispute regarding the software. A signed 
              ICLA is required before an individual is given commit rights to any ASF project.
            </p>

            <div className="space-y-6">
              {/* Step 1: Download ICLA */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2-in-card">
                  Step 1: Download the ICLA Form
                </h2>
                <p className="mb-4 text-base leading-relaxed text-body-color">
                  Visit the{" "}
                  <a 
                    href="https://www.apache.org/licenses/#clas" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Apache Licenses page
                  </a>{" "}
                  and find the "Contributor License Agreements" section.
                </p>
                
                <div className="mb-4">
                  <img 
                    src="/images/community/CLA.png" 
                    alt="Apache Contributor License Agreements page" 
                    className="rounded-lg border border-gray-200 dark:border-gray-700 w-full max-w-2xl"
                  />
                </div>

                <p className="mb-4 text-base leading-relaxed text-body-color">
                  Download the <strong>ICLA (Individual Contributor License Agreement)</strong> PDF form from the page:
                </p>

                <div className="mb-4">
                  <img 
                    src="/images/community/ICLA.png" 
                    alt="ICLA download option" 
                    className="rounded-lg border border-gray-200 dark:border-gray-700 w-full max-w-2xl"
                  />
                </div>
              </div>

              {/* Step 2: Fill in the Form */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2-in-card">
                  Step 2: Fill in the Form
                </h2>
                <p className="mb-4 text-base leading-relaxed text-body-color">
                  Open the PDF and fill in the required fields <strong>in English</strong>
                </p>

                <div className="mb-4 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
                  <p className="font-semibold text-black dark:text-white mb-2">Important Notes:</p>
                  <ul className="space-y-2 text-base text-body-color">
                    <li>• <strong>Full name:</strong> Leave a space between first name and last name. Capitalize the first letter of each.</li>
                    <li>• <strong>Preferred Apache ID:</strong> This is <strong>required for committers</strong>. Choose an ID that doesn't already exist at{" "}
                      <a href="https://people.apache.org/committer-index.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Apache Committer Index
                      </a>
                    </li>
                    <li>• <strong>Notify project:</strong> Enter <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">Apache ResilientDB</code></li>
                  </ul>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-base text-body-color">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Field</th>
                        <th className="px-4 py-3 font-semibold">Description</th>
                        <th className="px-4 py-3 font-semibold">Required</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      <tr>
                        <td className="px-4 py-3">Full name</td>
                        <td className="px-4 py-3">Your legal name (First Last)</td>
                        <td className="px-4 py-3"><span className="text-green-600">Yes</span></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">Public name</td>
                        <td className="px-4 py-3">Name to appear in public records</td>
                        <td className="px-4 py-3"><span className="text-gray-500">Optional</span></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">Mailing address</td>
                        <td className="px-4 py-3">Your postal address</td>
                        <td className="px-4 py-3"><span className="text-green-600">Yes</span></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">Country</td>
                        <td className="px-4 py-3">Your country of residence</td>
                        <td className="px-4 py-3"><span className="text-green-600">Yes</span></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">Telephone</td>
                        <td className="px-4 py-3">Contact phone number</td>
                        <td className="px-4 py-3"><span className="text-gray-500">Optional</span></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">E-mail</td>
                        <td className="px-4 py-3">Your email address</td>
                        <td className="px-4 py-3"><span className="text-green-600">Yes</span></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">Preferred Apache ID</td>
                        <td className="px-4 py-3">Your desired username (check availability first)</td>
                        <td className="px-4 py-3"><span className="text-green-600">Yes (for committers)</span></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">Notify project</td>
                        <td className="px-4 py-3">Enter: Apache ResilientDB</td>
                        <td className="px-4 py-3"><span className="text-green-600">Yes</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Step 3: Sign the Document */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2-in-card">
                  Step 3: Sign the Document
                </h2>
                <p className="mb-4 text-base leading-relaxed text-body-color">
                  Apache only accepts <strong>hand-written signatures</strong> or <strong>PDF digital signatures</strong>.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="mb-3 font-semibold text-black dark:text-white">Option A: PDF Digital Signature</h3>
                    <ol className="space-y-2 text-sm text-body-color list-decimal list-inside">
                      <li>Open the filled PDF</li>
                      <li>Use a PDF editor or online signing tool</li>
                      <li>Add your digital signature</li>
                      <li>Save as PDF</li>
                    </ol>
                    <p className="mt-3 text-sm text-body-color">
                      <strong>Tools:</strong> Adobe Acrobat, Preview (Mac), DocuSign, or online PDF signers
                    </p>
                  </div>

                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <h3 className="mb-3 font-semibold text-black dark:text-white">Option B: Handwritten Signature</h3>
                    <ol className="space-y-2 text-sm text-body-color list-decimal list-inside">
                      <li>Print the filled PDF</li>
                      <li>Sign by hand with pen</li>
                      <li>Scan the signed document</li>
                      <li>Save as a <strong>single PDF file</strong></li>
                    </ol>
                    <p className="mt-3 text-sm text-body-color">
                      <strong>Tip:</strong> Use a scanner app on your phone if you don't have a scanner
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4: Send the ICLA */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2-in-card">
                  Step 4: Send the ICLA via Email
                </h2>
                <p className="mb-4 text-base leading-relaxed text-body-color">
                  Rename your signed ICLA file to <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">yourname-icla.pdf</code> and 
                  send it to the Apache Secretary.
                </p>

                <div className="mb-4 rounded-lg bg-red-50 p-4 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                  <p className="text-base leading-relaxed text-body-color">
                    <strong>Important:</strong> Do NOT CC <code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">private@resilientdb.apache.org</code> when 
                    submitting your ICLA. The ICLA contains personal information (PII). The "notify project" field 
                    in the ICLA will automatically notify the project PMC.
                  </p>
                </div>

                <div className="rounded-lg bg-gray-900 p-4 overflow-x-auto">
                  <p className="mb-2 text-sm text-gray-400">Email Template:</p>
                  <pre className="text-sm text-gray-100 whitespace-pre-wrap">
{`To: secretary@apache.org
Subject: ICLA submission - Apache ResilientDB committer

Hello,

I have accepted the Apache ResilientDB PMC invitation to become 
a committer. Please find my signed ICLA attached.

Thank you!

[Your Name]

Attachment: yourname-icla.pdf`}
                  </pre>
                </div>
              </div>

              {/* Step 5: Wait for Confirmation */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2-in-card">
                  Step 5: Wait for Confirmation
                </h2>
                <p className="mb-4 text-base leading-relaxed text-body-color">
                  After submitting your ICLA, you will receive confirmation emails:
                </p>

                <div className="space-y-4">
                  <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                    <h3 className="mb-2 font-semibold text-black dark:text-white">Email 1: ICLA Receipt Confirmation</h3>
                    <p className="text-sm text-body-color">
                      Within 1-2 days, you'll receive an email confirming your ICLA has been received and filed:
                    </p>
                    <pre className="mt-2 text-sm text-body-color bg-white dark:bg-gray-800 p-3 rounded overflow-x-auto">
{`Dear [Your Name],

This message acknowledges receipt of your ICLA, which has been 
filed in the Apache Software Foundation records.

Your account has been requested for you and you should receive 
email with next steps within the next few days (can take up to a week).`}
                    </pre>
                  </div>

                  <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                    <h3 className="mb-2 font-semibold text-black dark:text-white">Email 2: Account Creation</h3>
                    <p className="text-sm text-body-color">
                      Within 2-5 business days, you'll receive an email titled:
                    </p>
                    <p className="mt-2 text-base font-semibold text-green-700 dark:text-green-300">
                      "Welcome to the Apache Software Foundation (ASF)!"
                    </p>
                    <p className="mt-2 text-sm text-body-color">
                      This email contains instructions to set up your Apache account.
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-base leading-relaxed text-body-color">
                  After receiving your account creation email, follow the{" "}
                  <button 
                    onClick={() => setActiveSection("vote-committer")} 
                    className="text-primary hover:underline font-medium"
                  >
                    Apache ID setup instructions
                  </button>{" "}
                  in the "Vote Committer/PMC" guide (Section 2.7).
                </p>
              </div>

              {/* Summary Checklist */}
              <div className="rounded-lg bg-primary bg-opacity-10 p-6">
                <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
                  Quick Checklist
                </h3>
                <ul className="space-y-3 text-base text-body-color">
                  <li className="flex items-start">
                    <span className="mr-3 text-primary">☐</span>
                    <span>Downloaded ICLA from Apache website</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-primary">☐</span>
                    <span>Filled in all required fields in English</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-primary">☐</span>
                    <span>Chose a unique Apache ID (checked availability)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-primary">☐</span>
                    <span>Entered "Apache ResilientDB" as notify project</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-primary">☐</span>
                    <span>Signed the document (digital or handwritten)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-primary">☐</span>
                    <span>Renamed file to yourname-icla.pdf</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-primary">☐</span>
                    <span>Sent to secretary@apache.org (no CC to private list!)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-primary">☐</span>
                    <span>Received ICLA confirmation email</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-primary">☐</span>
                    <span>Received "Welcome to ASF" email</span>
                  </li>
                </ul>
              </div>

              {/* Useful Links */}
              <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
                  Useful Links
                </h3>
                <ul className="space-y-2 text-base text-body-color">
                  <li>
                    <a 
                      href="https://www.apache.org/licenses/#clas" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Apache CLAs Page (ICLA & CCLA Downloads) →
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://people.apache.org/committer-index.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Check Apache ID Availability →
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.apache.org/licenses/#submitting" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Official ICLA Submission Instructions →
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "naming-guide":
        return (
          <div>
            <h1 className="community-h1">
              Apache Product Name Usage Guide
            </h1>
            <p className="mb-6 text-base leading-relaxed text-body-color">
              This guide explains how to properly use the Apache ResilientDB name in documentation, 
              presentations, and other materials. Following these guidelines helps maintain the 
              independent and vendor-neutral reputation of the Apache brand.
            </p>
            <p className="mb-6 text-sm text-body-color">
              See the official{" "}
              <a 
                href="https://www.apache.org/foundation/marks/guide" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Apache Foundation Trademark Guide
              </a>{" "}
              for detailed and complete instructions.
            </p>

            <div className="space-y-6">
              {/* General Rule */}
              <div className="rounded-lg bg-primary bg-opacity-10 p-6">
                <h2 className="mb-4 text-xl font-bold text-black dark:text-white">
                  General Rule
                </h2>
                <p className="text-base leading-relaxed text-body-color">
                  The first and most prominent mentions must use the full form: <strong>"Apache ResilientDB"</strong> for 
                  any individual usage (webpage, handout, slides, etc.). Depending on the context and writing style, 
                  you should use the full form of the name sufficiently often to ensure that readers clearly understand 
                  the association of both the ResilientDB project and the ResilientDB software product to the ASF as 
                  the parent organization.
                </p>
                <p className="mt-4 text-base leading-relaxed text-body-color">
                  Later in each specific document you may use the bare form of the name, i.e. just <strong>ResilientDB</strong>, 
                  as best suits your writing style.
                </p>
              </div>

              {/* Required Full Form Usage */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2-in-card">
                  When to Use "Apache ResilientDB"
                </h2>
                <p className="mb-4 text-base leading-relaxed text-body-color">
                  The full form of the name <strong>must</strong> be used in the following cases:
                </p>
                <ul className="space-y-3 text-base leading-relaxed text-body-color">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span><strong>Titles or subtitles</strong>, including web page title or description metadata</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span><strong>First and most prominent header elements</strong> within any major document section</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span><strong>First and most prominent callouts, sidebars, or highlighted blocks</strong> displayed to the user</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span><strong>First and most prominent uses</strong> in running or body text within the document</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span><strong>Graphics headers or diagrams</strong> — the full form must be clear in the graphic itself where practical; if not, use it in a prominent caption or accompanying explanation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span><strong>Video content</strong> — in the title, first uses, last use, and any use in credits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span><strong>Trademark attributions</strong> — in page footers or in a clearly marked Terms, Legal, or Trademarks page</span>
                  </li>
                </ul>
              </div>

              {/* Software Vendors */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2-in-card">
                  For Software Vendors & Service Providers
                </h2>
                <p className="mb-4 text-base leading-relaxed text-body-color">
                  For use by software vendors or software-related service providers, or when organizations 
                  or organization-branded pages are discussing ResilientDB in relation to any non-Apache 
                  provided software products or services, <strong>extra care is required</strong> to maintain 
                  the independent and vendor-neutral reputation of the Apache brand.
                </p>
                <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
                  <p className="text-base leading-relaxed text-body-color">
                    <strong>Important:</strong> Always ensure clear distinction between Apache ResilientDB 
                    and any related commercial products or services. The Apache brand must not be used 
                    in ways that imply endorsement of non-Apache products.
                  </p>
                </div>
              </div>

              {/* Academic & Media */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2-in-card">
                  For Academic, Media & Personal Use
                </h2>
                
                <div className="mb-6">
                  <h3 className="community-h3">
                    Scholarly or Academic Work
                  </h3>
                  <p className="text-base leading-relaxed text-body-color">
                    Use the full form "Apache ResilientDB" in titles, subtitles, the first and most prominent 
                    references in headers, callouts, or other highlighted sections, and the first and most 
                    prominent references in running or body text. Use of the bare form "ResilientDB" 
                    afterwards is permitted.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="community-h3">
                    Published Media (Books, Magazines, Journalism)
                  </h3>
                  <p className="text-base leading-relaxed text-body-color">
                    Ensure the full form "Apache ResilientDB" is used in titles or subtitles, the first and 
                    most prominent references in headers, callouts, or other highlighted sections, and the 
                    first and most prominent references in running or body text. Otherwise, follow your 
                    normal publisher's guidelines for referring to software product names.
                  </p>
                </div>

                <div>
                  <h3 className="community-h3">
                    Personal Bloggers & Individuals
                  </h3>
                  <p className="text-base leading-relaxed text-body-color">
                    We appreciate the use of the full form "Apache ResilientDB" in titles and the first 
                    and most prominent uses in running or body text.
                  </p>
                </div>
              </div>

              {/* Examples */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2-in-card">
                  Examples
                </h2>
                
                <div className="space-y-4">
                  <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                    <h4 className="mb-2 font-semibold text-green-700 dark:text-green-300">Correct Usage</h4>
                    <ul className="space-y-2 text-base text-body-color">
                      <li>✓ "Getting Started with Apache ResilientDB"</li>
                      <li>✓ "Apache ResilientDB is a high-throughput blockchain fabric. ResilientDB provides..."</li>
                      <li>✓ "This tutorial covers Apache ResilientDB installation. Once ResilientDB is running..."</li>
                    </ul>
                  </div>
                  
                  <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                    <h4 className="mb-2 font-semibold text-red-700 dark:text-red-300">Incorrect Usage</h4>
                    <ul className="space-y-2 text-base text-body-color">
                      <li>✗ "Getting Started with ResilientDB" (missing "Apache" in title)</li>
                      <li>✗ "ResilientDB™ by Apache" (incorrect trademark attribution)</li>
                      <li>✗ "My Company's ResilientDB" (implies ownership)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Additional Resources */}
              <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
                  Additional Resources
                </h3>
                <ul className="space-y-2 text-base text-body-color">
                  <li>
                    <a 
                      href="https://www.apache.org/foundation/marks/guide" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Apache Foundation Trademark Guide →
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.apache.org/foundation/marks/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Apache Trademark Policy →
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.apache.org/foundation/marks/events" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Apache Event Branding Policy →
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "site-map":
        return (
          <div>
            <h1 className="community-h1">
              Site Map
            </h1>
            <p className="mb-6 text-base leading-relaxed text-body-color">
              A comprehensive collection of useful links and resources related to the Apache ResilientDB 
              project, community, and the Apache Software Foundation.
            </p>

            <div className="space-y-6">
              {/* ResilientDB Project Links */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2-in-card">
                  Apache ResilientDB Project
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-base">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-4 py-3 font-semibold text-black dark:text-white">Resource</th>
                        <th className="px-4 py-3 font-semibold text-black dark:text-white">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700 text-body-color">
                      <tr>
                        <td className="px-4 py-3">
                          <a href="https://github.com/apache/incubator-resilientdb" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            GitHub Repository
                          </a>
                        </td>
                        <td className="px-4 py-3">Main source code repository</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          <a href="https://github.com/apache/incubator-resilientdb/issues" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            Issue Tracker
                          </a>
                        </td>
                        <td className="px-4 py-3">Report bugs and request features</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          <a href="https://github.com/apache/incubator-resilientdb/pulls" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            Pull Requests
                          </a>
                        </td>
                        <td className="px-4 py-3">View and submit code contributions</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          <a href="https://lists.apache.org/list.html?dev@resilientdb.apache.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            Mailing List Archive
                          </a>
                        </td>
                        <td className="px-4 py-3">Development discussions and meeting notes</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          <a href="https://discord.gg/vKtRX4MRJR" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            Discord Server
                          </a>
                        </td>
                        <td className="px-4 py-3">Real-time community chat</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          <a href="https://www.youtube.com/@ExpoLabUCDavis" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            YouTube Channel
                          </a>
                        </td>
                        <td className="px-4 py-3">Tutorials, demos, and talks</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Apache Incubator Links */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2-in-card">
                  Apache Incubator
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-base">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-4 py-3 font-semibold text-black dark:text-white">Resource</th>
                        <th className="px-4 py-3 font-semibold text-black dark:text-white">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700 text-body-color">
                      <tr>
                        <td className="px-4 py-3">
                          <a href="https://incubator.apache.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            Apache Incubator
                          </a>
                        </td>
                        <td className="px-4 py-3">Incubator homepage with resources and guides</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          <a href="https://incubator.apache.org/projects/resilientdb.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            ResilientDB Status Page
                          </a>
                        </td>
                        <td className="px-4 py-3">Project incubation status and information</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          <a href="https://incubator.apache.org/guides/graduation.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            Graduation Guide
                          </a>
                        </td>
                        <td className="px-4 py-3">Guide for projects graduating from incubation</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          <a href="https://whimsy.apache.org/roster/ppmc/resilientdb" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            ResilientDB PPMC Roster
                          </a>
                        </td>
                        <td className="px-4 py-3">View PPMC members and committers</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Apache Foundation Links */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2-in-card">
                  Apache Software Foundation
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-base">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-4 py-3 font-semibold text-black dark:text-white">Resource</th>
                        <th className="px-4 py-3 font-semibold text-black dark:text-white">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700 text-body-color">
                      <tr>
                        <td className="px-4 py-3">
                          <a href="https://www.apache.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            Apache Software Foundation
                          </a>
                        </td>
                        <td className="px-4 py-3">ASF homepage</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          <a href="https://www.apache.org/foundation/policies/conduct.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            Code of Conduct
                          </a>
                        </td>
                        <td className="px-4 py-3">Apache community behavior guidelines</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          <a href="https://www.apache.org/licenses/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            Apache License
                          </a>
                        </td>
                        <td className="px-4 py-3">License information and CLAs</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          <a href="https://www.apache.org/foundation/marks/guide" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            Trademark Guide
                          </a>
                        </td>
                        <td className="px-4 py-3">How to use Apache trademarks</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          <a href="https://community.apache.org/newcommitter.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            New Committer Guide
                          </a>
                        </td>
                        <td className="px-4 py-3">Guidelines for new Apache committers</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          <a href="https://infra.apache.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            Infrastructure
                          </a>
                        </td>
                        <td className="px-4 py-3">Apache infrastructure services and tools</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          <a href="https://www.apache.org/foundation/press/kit/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            Press Kit / Logos
                          </a>
                        </td>
                        <td className="px-4 py-3">Apache logos and branding assets</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Committer Resources */}
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark">
                <h2 className="community-h2-in-card">
                  Committer & PMC Resources
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-base">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-4 py-3 font-semibold text-black dark:text-white">Resource</th>
                        <th className="px-4 py-3 font-semibold text-black dark:text-white">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700 text-body-color">
                      <tr>
                        <td className="px-4 py-3">
                          <a href="https://id.apache.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            Apache Account Utility
                          </a>
                        </td>
                        <td className="px-4 py-3">Manage your Apache ID and settings</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          <a href="https://gitbox.apache.org/setup/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            GitBox Account Linking
                          </a>
                        </td>
                        <td className="px-4 py-3">Link GitHub account for repo write access</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          <a href="https://people.apache.org/committer-index.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            Apache Committers List
                          </a>
                        </td>
                        <td className="px-4 py-3">Check Apache ID availability</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          <a href="https://infra.apache.org/committers.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            Committer FAQ
                          </a>
                        </td>
                        <td className="px-4 py-3">Frequently asked questions for committers</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          <a href="https://www.apache.org/dev/pmc.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            PMC Guide
                          </a>
                        </td>
                        <td className="px-4 py-3">How to perform PMC duties</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Community Page Quick Links */}
              <div className="rounded-lg bg-primary bg-opacity-10 p-6">
                <h2 className="mb-4 text-xl font-bold text-black dark:text-white">
                  Quick Links to This Page
                </h2>
                <p className="mb-4 text-base leading-relaxed text-body-color">
                  Jump to different sections of our community documentation:
                </p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  <button
                    onClick={() => setActiveSection("overview")}
                    className="rounded-lg bg-white p-3 text-left shadow-sm transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <span className="text-sm font-medium text-black dark:text-white">Overview →</span>
                  </button>
                  <button
                    onClick={() => setActiveSection("asking-for-help")}
                    className="rounded-lg bg-white p-3 text-left shadow-sm transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <span className="text-sm font-medium text-black dark:text-white">Asking for Help →</span>
                  </button>
                  <button
                    onClick={() => setActiveSection("subscribe")}
                    className="rounded-lg bg-white p-3 text-left shadow-sm transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <span className="text-sm font-medium text-black dark:text-white">How to Subscribe →</span>
                  </button>
                  <button
                    onClick={() => setActiveSection("email-usage")}
                    className="rounded-lg bg-white p-3 text-left shadow-sm transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <span className="text-sm font-medium text-black dark:text-white">How to use Email →</span>
                  </button>
                  <button
                    onClick={() => setActiveSection("contribute")}
                    className="rounded-lg bg-white p-3 text-left shadow-sm transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <span className="text-sm font-medium text-black dark:text-white">How to Contribute →</span>
                  </button>
                  <button
                    onClick={() => setActiveSection("dev-meetings")}
                    className="rounded-lg bg-white p-3 text-left shadow-sm transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <span className="text-sm font-medium text-black dark:text-white">Developer Meetings →</span>
                  </button>
                  <button
                    onClick={() => setActiveSection("vote-committer")}
                    className="rounded-lg bg-white p-3 text-left shadow-sm transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <span className="text-sm font-medium text-black dark:text-white">Vote Committer/PMC →</span>
                  </button>
                  <button
                    onClick={() => setActiveSection("icla-signing")}
                    className="rounded-lg bg-white p-3 text-left shadow-sm transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <span className="text-sm font-medium text-black dark:text-white">ICLA Signing →</span>
                  </button>
                  <button
                    onClick={() => setActiveSection("naming-guide")}
                    className="rounded-lg bg-white p-3 text-left shadow-sm transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <span className="text-sm font-medium text-black dark:text-white">Product Name Usage →</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <ScrollUp />
      <Breadcrumb
        pageName="Community"
        description="Join our vibrant community of developers, researchers, and contributors"
      />
      
      <section className="relative z-10 py-16 md:py-20 lg:py-28" style={{ backgroundColor: '#0F0F1A' }}>
        <div className="container">
          <div className="flex flex-col lg:flex-row">
            {/* Sidebar Navigation */}
            <aside className="mb-8 lg:mb-0 lg:w-64 lg:flex-shrink-0 lg:pr-8">
              {/* Mobile Sidebar Toggle */}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="mb-4 flex w-full items-center justify-between rounded-lg bg-white p-4 shadow-two dark:bg-gray-dark lg:hidden"
              >
                <span className="font-semibold text-black dark:text-white">
                  {sidebarItems.find(item => item.id === activeSection)?.title}
                </span>
                <FontAwesomeIcon 
                  icon={sidebarOpen ? faTimes : faBars} 
                  className="text-black dark:text-white w-5 h-5"
                  style={{ width: '1.25rem', height: '1.25rem' }}
                />
              </button>

              {/* Sidebar */}
              <nav
                className={`rounded-lg bg-white shadow-two dark:bg-gray-dark lg:sticky lg:top-24 lg:block ${
                  sidebarOpen ? "block" : "hidden"
                }`}
              >
                <div className="p-4">
                  <ul className="space-y-2">
                    {sidebarItems.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => {
                            setActiveSection(item.id);
                            setSidebarOpen(false);
                          }}
                          className={`w-full rounded-md px-4 py-3 text-left transition-colors ${
                            activeSection === item.id
                              ? "bg-primary bg-opacity-10 text-primary font-semibold"
                              : "text-body-color hover:bg-gray-100 dark:hover:bg-gray-800"
                          }`}
                        >
                          <div className="flex items-center">
                            <FontAwesomeIcon 
                              icon={item.icon} 
                              className="mr-3 w-4 h-4"
                              style={{ width: '1rem', height: '1rem' }}
                            />
                            <span>{item.title}</span>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 lg:pl-8">
              <div className="rounded-lg bg-white p-6 shadow-two dark:bg-gray-dark md:p-8 lg:p-10">
                {renderContent()}
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommunityPage;
