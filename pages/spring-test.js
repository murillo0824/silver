import React from 'react';
import { useSpring, animated } from 'react-spring';

const SpringTest = () => {
  const props = useSpring({to: {opacity:1}, from:{opacity:0}})
  return (
    <div>
      <animated.div style={props}>I will fade in</animated.div>
    </div>
  )
}

export default SpringTest;
