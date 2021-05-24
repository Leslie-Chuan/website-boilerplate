const getBaseUrl = (env?: string) => {
  let baseURL = '';
  switch (env) {
    case 'dev':
      baseURL = 'htt'+ 'p:/'+'/127.0.0.1:7001';
      break;
    case 'qa':
      // 日常
      baseURL = '';
      break;
    case 'pre':
      // 预发
      baseURL = '';
      break;
    case 'prod':
      // 生产
      baseURL = '';
      break;
    default:
      // 默认
      baseURL = '';
      break;
  }
  return baseURL;
};

export default getBaseUrl;
