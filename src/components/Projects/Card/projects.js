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
import uikitIcon from '@iconify-icons/logos/uikit';


export const projects = [
  {
    title: 'TweetGram',
    icons: [
      reactIcon,
      materialUi,
      fileTypeNode,
      fileTypeMongo,
      graphqlIcon,
      apollostackIcon,
    ],
    link: 'https://github.com/collinpfeifer/TweetGram',
    description:
      'TweetGram is a social media clone app, allowing for CRUD features with authentication, data storage with MongoDB, and data access through GraphQL. ',
    site: 'https://tweetgram.netlify.app',
    progress: [
      {
        lang: 'Javascript',
        percent: 97.1,
        color: '#f7df1e',
      },
      {
        lang: 'HTML',
        percent: 2.9,
        color: 'orange',
      },
    ],
  },
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
    link: 'https://github.com/collinpfeifer/hellofriend',
    description:
      'Hello Friend is web app designed to help everyone get to know themselves better. Allowing you to know your personality types, ennegram, and mental illnesses, along with the chance to chat with similar people in real time.',
    progress: [
      {
        lang: 'Javascript',
        color: '#f7df1e',
        percent: 66.67,
      },
      {
        lang: 'CSS',
        color: '#563d7c',
        percent: 17.8,
      },
      {
        lang: 'HTML',
        color: 'orange',
        percent: 5,
      },
    ],
  },
  {
    title: 'Recluse Stream',
    icons: [reactIcon, reduxIcon, fileTypeNode],
    link: 'https://github.com/collinpfeifer/RecluseStream',
    description:
      'Recluse Stream is a web app made for easily streaming video to anyone. With Google Auth authentication for easy account creation and integration with popular streaming service OBS.',
    progress: [
      {
        lang: 'JavaScript',
        color: '#f7df1e',
        percent: 86.2,
      },
      {
        lang: 'HTML',
        color: 'orange',
        percent: 12.7,
      },
      {
        lang: 'CSS',
        color: '#563d7c',
        percent: 1.1,
      },
    ],
  },
  {
    title: 'Voice Planner',
    icons: [typescriptIcon, reactIcon, reduxIcon],
    link: 'https://github.com/collinpfeifer/voicePlanner',
    description:
      'An app made for logging audio notes to help yourself stay better organized, and build better planning skills. The recordings are organized by day for easy conveinence.',
    progress: [
      {
        lang: 'TypeScript',
        color: '#2b7489',
        percent: 81.3,
      },
      {
        lang: 'CSS',
        color: '#563d7c',
        percent: 10.4,
      },
      {
        lang: 'HTML',
        color: 'orange',
        percent: 8.3,
      },
    ],
  },
  {
    title: 'Habit Tracker',
    icons: [
      typescriptIcon,
      reactIcon,
      graphqlIcon,
      apollostackIcon,
      mysqlIcon,
      nextJs,
    ],
    link: 'https://github.com',
    description: 'An app for bettering yourself by keeping habits and helping yourself grow. The habits are recorded in a Next.js UI interface and in a MySQL database',
    progress: [
      {
        lang: 'TypeScript',
        color: '#2b7489',
        percent: 88.8,
      },
      {
        lang: 'CSS',
        color: '#563d7c',
        percent: 11.2,
      },
    ],
  },
  {
    title: 'Resume Site',
    icons: [gatsbyIcon, reactIcon, bootstrapIcon, uikitIcon],
    link: 'https://github.com/collinpfeifer/myResumeSite',
    description: 'My personal website, made with React, Gatsby for SSR, and BootStrap and UiKit for styling.',
    progress: [
      {
        lang: 'JavaScript',
        color: '#f7df1e',
        percent: 70.1,
      },
      {
        lang: 'CSS',
        color: '#563d7c',
        percent: 16.5,
      },
      {
        lang: 'SCSS',
        color: '#c6538c',
        percent: 13.4,
      },
    ],
    site: 'https://www.collinpfeifer.dev'
  },
];
