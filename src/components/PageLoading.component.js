import React from 'react';

import './styles/PageLoading.component.css';
import Loader from './Loader.component';

function PageLoading() {
  return (
    <div className="PageLoading">
      <Loader />
    </div>
  );
}

export default PageLoading;