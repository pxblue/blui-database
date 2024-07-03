import { Quarter, RoadmapBucket } from "./_types";

const CURRENT_YEAR = 2024;
const CURRENT_QUARTER: Quarter = "Q3";

export const roadmap: RoadmapBucket[] = [
  {
    name: "Okta Login",
    description:
      "For implementing secure and streamlined user access.",
    type: "development",
    framework: ["react", "react-native"],
    items: [
      {
        name: "React and React Native okta login authentication workflow",
        description:
          "Develop Okta authentication for React and React Native applications in collaboration with the Eaton Home team, focusing on secure and streamlined user access.",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "backlog",
        author: "Brightlayer UI",
      }
    ],
  },
  {
    name: "User Management Workflow",
    description: "Enhance the applications by implementing a comprehensive user management workflow to improve security and user experience",
    type: "development",
    framework: ["react"],
    items: [
      {
        name: "React User Management Implementation",
        description:
          "Develop a user management workflow for React applications, enabling functionalities such as role based access control for adding, deleting and updating user.",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "backlog",
        author: "all",
      },
    ],
  },
  {
    name: "Support Initiatives",
    description:
      "Supporting other teams with critical integrations and UI enhancements.",
    type: "development",
    framework: ["react", "react-native"],
    items: [
      {
        name: "DCMS/QT API Integration Support",
        description:
          "Replace the existing API with DCMS/QT API to streamline user management workflows, including adding, editing, and a new deletion flow.",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "backlog",
        author: "Brightlayer UI",
      },
      {
        name: "Edge Seed UI Mobile Responsiveness",
        description: "  ",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "backlog",
        author: "Brightlayer UI",
      },
      {
        name: "Development of Fiji Components",
        description: "  ",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "backlog",
        author: "Brightlayer UI",
      },
    ],
  },
  {
    name: "React Native Developer Documentation Enhancement",
    description:
      "Enhance the React Native developer documentation to improve developer experience and resource accessibility.",
    type: "development",
    framework: ["react-native"],
    items: [
      {
        name: "Component Playground for React Native",
        description: "Develop a component playground within the React Native documentation to allow developers to interactively test and experiment with components.",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "backlog",
        author: "Brightlayer UI",
      },
      {
        name: "React Native Repository Consolidation",
        description: "Consolidate multiple React Native repositories into a single, organized repository.",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "backlog",
        author: "Brightlayer UI",
      },
    ],
  },
  {
    name: "Brightlayer Chart",
    description:
      " ",
    type: "development",
    framework: ["react-native"],
    items: [
      {
        name: "Integration of Brightlayer Charts",
        description:
          " ",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "backlog",
        author: "Brightlayer UI",
      },
    ],
  },
  {
    name: "CLI Templates",
    description:
      "To streamline project setup and enhance developer experience.",
    type: "development",
    framework: ["react"],
    items: [
      {
        name: "New Vite-based CLI Templates for React",
        description:
          "Develop a new CLI Templates for react(vite) and deprecate the existing BLUI CLI.",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "backlog",
        author: "Brightlayer UI",
      },
    ],
  },
  {
    name: "Patch Release and Bug Fixes",
    description:
      "Address critical bug fixes and patch release across targeted repositories, ensuring stability and performance improvements.",
    type: "development",
    framework: ["react", "react-native"],
    items: [
      {
        name: "Targeted Repository Bug Fixes",
        description:
          "Identify and fix critical bugs in specified repositories for React and React Native, followed by a patch release.",
        year: CURRENT_YEAR,
        quarter: CURRENT_QUARTER,
        status: "backlog",
        author: "Brightlayer UI",
      },
    ],
  },
];


