// 模块路径
const ROUTER = {
    root: '/',
    resume: '/resume',
  };
  export default ROUTER;
  
  export const ROUTER_KEY = {
    root: 'root',
    resume: 'resume',
  };
  
  // 入口模块，TS 定义类型必须为 TSRouter.Item
  export const ROUTER_ENTRY: TSRouter.Item[] = [
    {
      url: 'http://localhost:4000/project/onlineResume/0.%20%E5%89%8D%E8%A8%80/',
      key: 'intro',
      text: '介绍',
    },
    {
      url: ROUTER.resume,
      key: ROUTER_KEY.resume,
      text: '简历',
    },
    {
      url: 'https://github.com/MemoryOfLove/onlineResume',
      key: 'code',
      text: '源码',
    },
  ];