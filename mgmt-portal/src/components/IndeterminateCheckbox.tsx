import React, { forwardRef, useRef, useEffect } from 'react';

import Checkbox from '@material-ui/core/Checkbox';

interface Props {
  indeterminate?: boolean;
}

export const IndeterminateCheckbox = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { indeterminate, ...rest } = props;
  const defaultRef = useRef<HTMLInputElement>(null);
  const resolvedRef = ref || defaultRef;

  React.useEffect(() => {
    if (typeof resolvedRef === 'object' && resolvedRef.current) {
      resolvedRef.current.indeterminate = Boolean(indeterminate);
    }
  }, [resolvedRef, indeterminate]);

  return <Checkbox inputRef={resolvedRef} {...rest} />;
});
