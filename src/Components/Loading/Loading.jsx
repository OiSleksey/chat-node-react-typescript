import React, { HTMLAttributes } from 'react';
import { useLoading, ThreeDots } from '@agney/react-loading';

export default function Loading() {
  // const width: LoadingProps = '20';
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <ThreeDots width="20" />,
  });

  return <section {...containerProps}>Typing {indicatorEl}</section>;
}

// export default function Loading(): JSX.Element {
//   const { containerProps, indicatorEl } = useLoading({
//     loading: true,
//     indicator: <ThreeDots width="20" />,
//   });

//   return <section {...containerProps}>Typing {indicatorEl}</section>;
// }
