/**
 * @desc 在校经历
 * @author pengdaokuan
 */
import './index.less';
import React from 'react';

function Post() {
  return (
    <div styleName="content">
      <p styleName="label">在校经历 Post</p>
      <ul styleName="list">
        <li styleName="flex">
          <div styleName="left">
            <p>2016.09-2017.09</p>
            <p>XXX</p>
          </div>
          <div styleName="right">
            <p>XXX</p>
            <p>
              XXX
            </p>
          </div>
        </li>
        
      </ul>
    </div>
  );
}

export default Post;
