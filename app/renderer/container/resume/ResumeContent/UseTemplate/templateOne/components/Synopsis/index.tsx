/**
 * @desc 简单介绍
 * @author pengdaokuan
 */
import React from 'react';
import './index.less';

function Synopsis() {
  return (
    <div styleName="content">
      <p styleName="name">XX</p>
      <p styleName="job">前端</p>
      <p styleName="summary">
        {[
          'XXX',
        ].join('，')}
      </p>
    </div>
  );
}

export default Synopsis;
