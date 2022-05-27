import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const useScroll = (threshold = 0.2) => {
  const [ref, inView] = useInView({
    threshold,
  });
  const controls = useAnimation();
  inView ? controls.start('show') : controls.start('hide');
  return [ref, controls];
};
