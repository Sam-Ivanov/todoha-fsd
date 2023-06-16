import React, { useCallback, useMemo, useState } from 'react';
import { Button } from '../Button/Button';
import styles from './Counter.module.scss';

type CounterProps = {
  initialCount?: number;
};

export const Counter: React.FC<CounterProps> = (props: CounterProps) => {

  const [show, setShow] = useState(true);

  const { initialCount = 0 } = props;

  const [count, setCount] = useState(initialCount);

  const increaseCount = () => setCount(prevCount => prevCount + 1);
  const decreaseCount = () => setCount(prevCount => prevCount - 1);

  const render = useCallback((text: string) => {
  }, []);

  const randN = useMemo(() => {
    return Math.random();
  }, []);

  return (
    <>
      <div className={styles.counterBlock}>
        <h2>Count: {count}</h2>
        <button className={styles.btn} onClick={increaseCount}>Increase Count</button>
        <button className={styles.btn} onClick={decreaseCount}>Decrease Count</button>
      </div>
      {show && <Button text={123123} render={render} num={randN} />}
      <button onClick={() => { setShow(!show); }}>toggle btn</button>
    </>
  );
};