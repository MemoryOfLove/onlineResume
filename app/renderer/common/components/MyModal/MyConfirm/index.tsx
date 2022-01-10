visResumeMook/app/renderer/common/components/MyModal/MyConfirm/index.tsx

彭道宽 [linted][feature][what]添加弹窗组件
Latest commit d8b5700 on 25 May 2021
 History
 0 contributors
62 lines (60 sloc)  2.19 KB
   
/**
 * @description 弹窗组件
 */
import React from 'react';
import './index.less';
import MyButton from '@common/components/MyButton';
import { IConfirmModal } from '../types';

function MyConfirm({ title, width, className, description, renderFooter, config = {}, eleRef }: IConfirmModal) {
  const { deleteBtn = { isShow: false }, cancelBtn = { isShow: true }, submitBtn = { isShow: true } } = config;
  return (
    <div styleName="vis-mask">
      <div styleName="center">
        <div styleName="vis-confirm-box" className={className} style={{ width: width || 440 }} ref={eleRef}>
          <div styleName="vis-confirm-content">
            <p styleName="vis-confirm-content-title">{title || '友情提示'}</p>
            {description && <p styleName="vis-confirm-content-desc">{description}</p>}
          </div>
          {renderFooter || (
            <div styleName="vis-confirm-footer">
              {cancelBtn?.isShow && (
                <MyButton
                  size="middle"
                  className="vis-confirm-footer-btn vis-confirm-footer-cancel-btn"
                  onClick={() => {
                    cancelBtn?.callback && cancelBtn.callback();
                  }}
                >
                  {cancelBtn?.text || '取消'}
                </MyButton>
              )}
              {submitBtn?.isShow && (
                <MyButton
                  size="middle"
                  className="vis-confirm-footer-btn vis-confirm-footer-submit-btn"
                  onClick={() => {
                    submitBtn?.callback && submitBtn.callback();
                  }}
                >
                  {submitBtn?.text || '确定'}
                </MyButton>
              )}
              {deleteBtn?.isShow && (
                <MyButton
                  size="middle"
                  className="vis-confirm-footer-btn vis-confirm-footer-delete-btn"
                  onClick={() => {
                    deleteBtn?.callback && deleteBtn.callback();
                  }}
                >
                  {deleteBtn?.text || '退出'}
                </MyButton>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyConfirm;
