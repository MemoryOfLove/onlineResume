/**
 * @desc 项目经历
 * @author pengdaokuan
 * @createTime 2021-03-22
 * @lastModify 2021-03-22
 */
import React from 'react';
import './index.less';

function Project() {
  return (
    <div styleName="content">
      <p styleName="label">项目经历 Project</p>
      <ul styleName="list">
        <li styleName="flex">
          <div styleName="left">
            <p>
              <span>2021.09 - 2021.12</span>
            </p>
          </div>
          <div styleName="right">
            <p>
              <span>XXX -前端</span>
            </p>
          </div>
          <div styleName="text">
            <ul styleName="item-box">
              <li styleName="item-content">
                <span>XXX</span>
              </li>
              <li styleName="item-content">
                <span>XXX</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Project;
