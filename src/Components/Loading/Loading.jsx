import { useLoading, ThreeDots } from '@agney/react-loading';

const Loading = () => {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <ThreeDots width="20" />,
  });

  return <section {...containerProps}>Typing {indicatorEl}</section>;
};

export default Loading;
