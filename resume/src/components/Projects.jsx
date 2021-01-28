import React, {useState} from 'react';
import '../css/Projects.scss';
import {AnimatePresence, motion} from 'framer-motion';
import Card from './Card';

const Projects = () => {
  const [index, setIndex] = useState(0);
  const [exitX, setExitX] = useState('100%');

  return (
    <>
      <motion.div
        style={{
          width: 150,
          height: 150,
          position: 'relative',
        }}>
        <AnimatePresence initial={false}>
          <Card
            key={index + 1}
            initial={{
              scale: 0,
              y: 105,
              opacity: 0,
            }}
            animate={{
              scale: 0.75,
              y: 30,
              opacity: 0.5,
            }}
            transition={{
              scale: {duration: 0.2},
              opacity: {duration: 0.4},
            }}
          />
          <Card
            key={index}
            animate={{
              scale: 1,
              y: 0,
              opacity: 1,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
              opacity: {
                duration: 0.2,
              },
            }}
            exitX={exitX}
            setExitX={setExitX}
            index={index}
            setIndex={setIndex}
            drag='x'
          />
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Projects;
