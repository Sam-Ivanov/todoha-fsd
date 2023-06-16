import React, { useEffect } from "react";
import styles from './Button.module.scss';

type ButtonProps = {
  text: string | number,
  render: (text: string) => void,
  num: number;
};

export const Button = React.memo((props: ButtonProps) => {
  const { text, render, num } = props;


  render('log from render');


  useEffect(() => {
    return () => {

    };
  }, []);

  return (
    <>
      <button>
        {text}
      </button>
      <div className={styles.block_todo}>
        Lorem ipsum dolor sit amet.
      </div>
    </>
  );
});

