import React from 'react';
import {motion, useMotionValue, useTransform} from 'framer-motion';
import '../css/Card.css';
import {Icon, InlineIcon} from '@iconify/react';
import reactIcon from '@iconify-icons/logos/react';
import reduxIcon from '@iconify-icons/logos/redux';
import githubFilled from '@iconify-icons/ant-design/github-filled';
import fileTypeNode from '@iconify-icons/vscode-icons/file-type-node';


const projects = [
  {
    title: 'hello friend',
    icon: 'fas fa-address-book',
    link: 'https://github.com',
    description: 'this is my project lol',
    id: 1,
  },
  {
    title: 'Recluse Stream',
    icon: 'fas fa-spider',
    link: 'https://github.com',
    description: 'this is my project lol',
    id: 2,
  },
  {
    title: 'My project2',
    icon: 'fad fa-abacus',
    link: 'https://github.com',
    description: 'this is my project lol',
    id: 3,
  },
  {
    title: 'My project3',
    icon: 'fad fa-abacus',
    link: 'https://github.com',
    description: 'this is my project lol',
    id: 4,
  },
  {
    title: 'My project4',
    icon: 'fad fa-abacus',
    link: 'https://github.com',
    description: 'this is my project lol',
    id: 5,
  },
  {
    title: 'My project5',
    icon: 'fad fa-abacus',
    link: 'https://github.com',
    description: 'this is my project lol',
    id: 6,
  },
];

const Card = (props) => {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
  const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
    clamp: false,
  });

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -100) {
      props.setExitX(-250);
      props.setIndex(props.index + 1);
    }
    if (info.offset.x > 100) {
      props.setExitX(250);
      props.setIndex(props.index + 1);
    }
  };

  return (
    <motion.div
      style={{
        width: '25%',
        height: '25%',
        position: 'absolute',
        x: x,
        rotate: rotate,
        cursor: 'grab',
      }}
      whileTap={{cursor: 'grabbing'}}
      drag={props.drag}
      dragConstraints={{
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}
      onDragEnd={handleDragEnd}
      initial={props.initial}
      animate={props.animate}
      transition={props.transition}
      exit={{
        x: props.exitX,
        opacity: 0,
        scale: 0.5,
        transition: {duration: 0.2},
      }}>
      <motion.div
        style={{
          width: 400,
          height: 400,
          backgroundColor: '#000',
          borderRadius: 30,
          scale: scale,
          color: 'white',
        }}
        className='uk-flex uk-flex-column uk-flex uk-flex-wrap-middle'>
        <motion.a style={{color: 'white'}} href={projects[props.pIndex].link}>
          <InlineIcon
            icon={githubFilled}
            width="40"
            style={{margin: '0.5rem', position: 'absolute'}}/>
        </motion.a>
        <motion.div className='box1'>
          <motion.h1>{projects[props.pIndex].title}</motion.h1>
        </motion.div>
        <motion.div className='box2'>
          <motion.p>{projects[props.pIndex].description}</motion.p>
        </motion.div>
        <motion.hr />
        <motion.div className='langs'>
          <motion.div className='box3'>
            <motion.div className='langs-icons'>
              <Icon
                icon={reactIcon}
                width='3.5rem'
                style={{margin: '5%'}}/>
              <Icon
                icon={reduxIcon}
                width='3.5rem'
                style={{margin: '5%'}}/>
              <Icon
                icon={fileTypeNode}
                width='3.5rem'
                style={{margin: '5%'}}/>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className='box4'>
          <motion.span className='progress'>
            <motion.span
              className='progress-item'
              style={{
                backgroundColor: '#f7df1e',
                width: '66.67%',
              }}></motion.span>
            <motion.span
              className='progress-item'
              style={{backgroundColor: 'orange', width: '10%'}}></motion.span>
            <motion.span
              className='progress-item'
              style={{
                backgroundColor: 'lightblue',
                width: '20%',
              }}></motion.span>
            <motion.span
              className='progress-item'
              style={{
                backgroundColor: 'purple',
                width: '3.33%',
              }}></motion.span>
          </motion.span>
          <motion.ul
            style={{listStyle: 'none', margin: 'auto', marginTop: '5%'}}>
            <motion.li className='inline'>
              <motion.div className='name'>
                <motion.svg
                  className='oct'
                  style={{backgroundColor: '#f7df1e'}}
                  width='8'
                  height='8'></motion.svg>
                <motion.span>JavaScript 66.67%</motion.span>
              </motion.div>
            </motion.li>
            <motion.li className='inline'>
              <motion.div className='name'>
                <motion.svg
                  className='oct'
                  style={{backgroundColor: 'orange'}}
                  width='8'
                  height='8'></motion.svg>
                <motion.span>HTML 20%</motion.span>
              </motion.div>
            </motion.li>
            <motion.li className='inline'>
              <motion.div className='name'>
                <motion.svg
                  className='oct'
                  style={{backgroundColor: 'lightblue'}}
                  width='8'
                  height='8'></motion.svg>
                <motion.span>CSS 5%</motion.span>
              </motion.div>
            </motion.li>
            <motion.li className='inline'>
              <motion.div className='name'>
                <motion.svg
                  className='oct'
                  style={{backgroundColor: 'purple'}}
                  width='8'
                  height='8'></motion.svg>
                <motion.span>PHP 3%</motion.span>
              </motion.div>
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default Card;
