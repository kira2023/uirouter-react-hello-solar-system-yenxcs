import React from 'react';
import { UIView, useSrefActive } from "@uirouter/react";

export default function App() {
  const activeClass = "active";
  const helloSref = useSrefActive("hello", null, activeClass);
  const aboutSref = useSrefActive("about", null, activeClass);
  const peopleSref = useSrefActive("people", null, activeClass);

  return (
    <div>
      <a {...helloSref}>Hello</a>
      <a {...aboutSref}>About</a>
      <a {...peopleSref}>People</a>
      <UIView />
    </div>
  );
};
