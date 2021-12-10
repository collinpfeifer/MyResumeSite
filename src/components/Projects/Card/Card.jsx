import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { projects } from '../projects';
import { Icon, InlineIcon } from '@iconify/react';
import './Card.css';

const Card = props => {
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
        position: 'absolute',
        x: x,
        rotate: rotate,
        cursor: 'grab',
      }}
      id="card"
      whileTap={{ cursor: 'grabbing' }}
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
        transition: { duration: 0.2 },
      }}
    >
      <motion.div
        style={{
          backgroundColor: '#000',
          borderRadius: 30,
          scale: scale,
          color: 'white',
        }}
        id="card"
        className="uk-flex uk-flex-column uk-flex-center"
      >
        <motion.a
          style={{ color: 'white' }}
          href={projects[props.pIndex].link}
          target="_blank"
        >
          <InlineIcon
            icon="ant-design:github-filled"
            width="40"
            style={{ margin: '0.5rem', position: 'absolute' }}
          />
        </motion.a>
        {projects[props.pIndex].site ? (
          <motion.a
            style={{ color: 'white' }}
            href={projects[props.pIndex].site}
            target="_blank"
          >
            <InlineIcon
              icon="mdi:web"
              width="40"
              style={{ margin: '0.5rem', position: 'absolute', right: '0' }}
            />
          </motion.a>
        ) : (
          ''
        )}
        <motion.div className="box1">
          <motion.h1>{projects[props.pIndex].title}</motion.h1>
        </motion.div>
        <motion.div className="box2">
          <motion.p>{projects[props.pIndex].description}</motion.p>
        </motion.div>
        <motion.hr />
        <motion.div className="langs">
          <motion.div className="box3">
            <motion.div className="langs-icons">
              {projects[props.pIndex].icons.map(icon => {
                return (
                  <Icon
                    key={Math.random()}
                    icon={icon}
                    width="40"
                    style={{ margin: '0.5rem' }}
                  />
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="box4">
          <motion.span className="progress">
            {projects[props.pIndex].progress.map(item => {
              return (
                <motion.span
                  className="progress-item"
                  key={item.percent}
                  style={{
                    backgroundColor: `${item.color}`,
                    width: `${item.percent}%`,
                  }}
                ></motion.span>
              );
            })}
          </motion.span>
          <motion.ul
            style={{ listStyle: 'none', margin: 'auto', marginTop: '5%' }}
          >
            {projects[props.pIndex].progress.map(item => {
              return (
                <motion.li className="inline" key={Math.random()}>
                  <motion.div className="name">
                    <motion.svg
                      className="oct"
                      style={{ backgroundColor: `${item.color}` }}
                      width="8"
                      height="8"
                    ></motion.svg>
                    <motion.span>{`${item.lang} ${item.percent}%`}</motion.span>
                  </motion.div>
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default Card;
