/* eslint-disable max-len */
import reactIcon from '@iconify-icons/logos/react';
import reduxIcon from '@iconify-icons/logos/redux';
import fileTypeNode from '@iconify-icons/vscode-icons/file-type-node';
import nextJs from '@iconify-icons/cib/next-js';
import typescriptIcon from '@iconify-icons/logos/typescript-icon';
import fileTypeMongo from '@iconify-icons/vscode-icons/file-type-mongo';
import expressIcon from '@iconify-icons/simple-icons/express';
import graphqlIcon from '@iconify-icons/logos/graphql';
import gatsbyIcon from '@iconify-icons/logos/gatsby';
import bootstrapIcon from '@iconify-icons/logos/bootstrap';
import apollostackIcon from '@iconify-icons/logos/apollostack';
import mysqlIcon from '@iconify-icons/logos/mysql';
import materialUi from '@iconify-icons/logos/material-ui';


export const projects = [
  {
    title: 'hello friend',
    icons: [
      typescriptIcon,
      reactIcon,
      fileTypeNode,
      expressIcon,
      fileTypeMongo,
      nextJs,
    ],
    link: 'https://github.com',
    description:
      'Hello Friend is web app designed to help everyone get to know themselves better. Allowing you to know your personality types, ennegram, and mental illnesses, along with the chance to chat with similar people in real time! To help combat mental illness, journaling was a key factor in our design allowing you to either delete your thoughts or keep them.',
    site: 'https://www.collinpfeifer.com',
    progress: [
      {
        lang: 'Javascript',
        percent: 66.67,
      },
      {
        lang: 'CSS',
        percent: 17.8,
      },
      {
        lang: 'HTML',
        percent: 5,
      },
    ],
  },
  {
    title: 'Recluse Stream',
    icons: [reactIcon, reduxIcon, fileTypeNode],
    link: 'https://github.com',
    description:
      'Recluse Stream is a web app made for streaming video to anyone. With Google Auth authentication for easy account creation and integration with popular streaming service OBS, Recluse Stream allows for easy, instant streaming with no hassle.',
  },
  {
    title: 'TweetGram',
    icons: [reactIcon, materialUi, fileTypeNode, fileTypeMongo, graphqlIcon, apollostackIcon],
    link: 'https://github.com',
    description: 'TweetGram is a social media clone app, allowing for CRUD features with authentication, data storage with MongoDB, and data access through GraphQL. ',
  },
  {
    title: 'Resume Site',
    icons: [gatsbyIcon, reactIcon, bootstrapIcon],
    link: 'https://github.com',
    description: 'My personal website,',
  },
  {
    title: 'Voice Planner',
    icons: [typescriptIcon, reactIcon, reduxIcon],
    link: 'https://github.com',
    description: 'An app made for logging audio notes to help yourself stay better organized, and build better planning skills. The recordings are organized by day for easy conveinence.',
  },
  {
    title: 'Habit Tracker',
    icons: [typescriptIcon, reactIcon, graphqlIcon, apollostackIcon, mysqlIcon, nextJs],
    link: 'https://github.com',
    description: 'this is my project lol',
  },
];
