import React from 'react';

import Spinner from '../../Assets/tail-spin.svg';
import './index.css';

interface LoadingProps {
  fullScreen: boolean;
}

const Loading: React.FC<LoadingProps> = ({ fullScreen }) => {
  let classname = `loading-spinner ${fullScreen ? 'loading-fullscreen' : ''}`;

  return (
    <div className={classname}>
      <img src={Spinner} alt={'Loading...'} />
    </div>
  );
};

export default Loading;
