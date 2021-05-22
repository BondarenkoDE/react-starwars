import React from 'react';
import ContentLoader from 'react-content-loader';

const LoadingBlock = (props) => (
  <ContentLoader
    speed={2}
    width={185}
    height={248}
    viewBox="0 0 185 248"
    backgroundColor="#e0e0e0"
    foregroundColor="#bababa"
    {...props}>
    <rect x="0" y="0" rx="3" ry="3" width="185" height="248" />
  </ContentLoader>
);

export default LoadingBlock;
