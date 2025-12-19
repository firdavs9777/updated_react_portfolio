// src/hooks/useScrollAnimation.ts

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export const useScrollAnimation = (options = {}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    ...options,
  });

  return { ref, inView };
};

