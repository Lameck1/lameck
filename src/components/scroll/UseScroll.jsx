import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const useScroll = (threshold = 0.2) => {
  const [ref, inView] = useInView({
    threshold,
  });
  const controls = useAnimation();

  if (inView) {
    controls.start('show');
  } else {
    controls.start('hide');
  }

  return [ref, controls];
};
