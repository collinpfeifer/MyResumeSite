/* eslint-disable max-len */
import reactIcon from '@iconify-icons/logos/react';
import reduxIcon from '@iconify-icons/logos/redux';
import fileTypeNode from '@iconify-icons/vscode-icons/file-type-node';
import nextJs from '@iconify-icons/cib/next-js';
import typescriptIcon from '@iconify-icons/logos/typescript-icon';
import fileTypeMongo from '@iconify-icons/vscode-icons/file-type-mongo';
import expressIcon from '@iconify-icons/simple-icons/express';
import graphqlIcon from '@iconify-icons/logos/graphql';

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
    site: '',
  },
  {
    title: 'Recluse Stream',
    icons: [reactIcon, reduxIcon, fileTypeNode],
    link: 'https://github.com',
    description: 'Recluse Stream is a web app made for streaming video to anyone. With Google Auth authentication for easy account creation and integration with popular streaming service OBS, Recluse Stream allows for easy, instant streaming with no hassle.',
  },
  {
    title: 'TweetGram',
    icons: [reactIcon, fileTypeNode, expressIcon, fileTypeMongo, graphqlIcon],
    link: 'https://github.com',
    description: 'this is my project lol',
  },
  {
    title: 'My project3',
    icons: [],
    link: 'https://github.com',
    description: 'this is my project lol',
  },
  {
    title: 'My project4',
    icons: [],
    link: 'https://github.com',
    description: 'this is my project lol',
  },
  {
    title: 'My project5',
    icons: [],
    link: 'https://github.com',
    description: 'this is my project lol',
  },
];
