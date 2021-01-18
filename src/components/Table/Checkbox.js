import React, { useEffect } from 'react';

const Checkbox = React.forwardRef(({ inderminate, ...rest }, ref) => {
  const defaultRef = React.useRef();
  const resolvedRef = ref || defaultRef;

  useEffect(() => {
    resolvedRef.current.inderminate = inderminate;
  }, [resolvedRef, inderminate]);

  return (
    <>
      <input type='checkbox' ref={resolvedRef} {...rest} />
    </>
  );
});

export default Checkbox;
