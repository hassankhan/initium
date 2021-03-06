import * as React from 'react';

interface WidgetBodyProps {
  children: React.ReactNode;
  className?: string;
}

function Body(props: WidgetBodyProps) {
  return (
    <section className={`widget__body ${props.className}`}>
      {props.children}
    </section>
  );
}

export default Body;
