// 首页模块的入口文件
import React from 'react';
import './index.less';
import Logo from '@assets/logo.jpg';
import { useHistory } from 'react-router';
import { shell } from 'electron';
import { isHttpOrHttpsUrl } from '@common/utils/router';
import { ROUTER_ENTRY, ROUTER_KEY } from '@common/constants/router';

function Root() {
  // 👇 通过 history.push 进行跳转
  const history = useHistory();
  // 在方法调用上
  const onRouterToLink = (router: TSRouter.Item) => {
    if (isHttpOrHttpsUrl(router.url)) {
      shell.openExternal(router.url);
    } else {
      history.push(router.url);
    }
  };

  return (
    <div styleName="root">
      <div styleName="container">
        <img src={Logo} alt="" />
        <div styleName="title">onlineResume</div>
        <div styleName="tips">一个模板简历制作平台, 让你的简历更加出众 ~</div>
        // 在遍历上
        <div styleName="action">
          {ROUTER_ENTRY.map((router: TSRouter.Item) => {
            return (
              <div key={router.key} styleName="item" onClick={() => onRouterToLink(router)}>
                {router.text}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Root;
