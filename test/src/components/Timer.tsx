import React, { useState, useCallback, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import moment from "moment";

import { StyledSubtitle, StyledNumbers } from "../styled/style";
import { CardState } from "../actions/types/cards.actions.types";

const Timer = () => {
  const [counter, setCounter] = useState(moment().startOf("day"));

  const localCounter = useSelector((state: CardState) => state.localCounter);

  useEffect(() => {
    if (localCounter > 0 && localCounter <= 1) {
      start();
    }
    if (localCounter === 0) {
      setCounter(moment().startOf("day"));
      stop();
    }
  }, [localCounter]);

  const useCounter = () => {
    const intervalRef = useRef(0);
    const start = useCallback(() => {
      if (intervalRef.current !== 0) {
        return;
      }
      intervalRef.current = window.setInterval(() => {
        minutesInterval();
      }, 1000);
    }, []);
    const stop = useCallback(() => {
      if (intervalRef.current === 0) {
        return;
      }
      clearInterval(intervalRef.current);
      intervalRef.current = 0;
    }, []);

    return { start, stop };
  };
  const { start, stop } = useCounter();

  const minutesInterval = () => {
    setCounter(e => {
      let updatedCounter = moment({ ...e.add(1, "seconds") });
      return updatedCounter;
    });
  };

  return (
    <div>
      <div>
        <StyledSubtitle>Temps</StyledSubtitle>
      </div>
      <div>
        <StyledNumbers>{counter.format("mm:ss")}</StyledNumbers>
      </div>
    </div>
  );
};

export default Timer;
