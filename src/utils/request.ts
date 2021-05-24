import fetch from 'dva/fetch';

function checkJson(resp: Response) {
  if (!resp.ok) {
    if ([500, 502].includes(resp.status)) {
      console.error(`系统故障，请稍候重试`, 3);
    } else if (resp.status === 404) {
      console.error(`系统故障，请稍候重试`, 3);
    }
    return Promise.reject({
      url: resp.url,
      code: resp.status,
      message: resp.statusText,
    });
  }
  const json = resp.json().catch(_err => {
    return Promise.reject({
      url: resp.url,
      code: 500,
      message: 'json format error',
    });
  });

  return Promise.resolve(json).then(body => {
    const { success, message, resultView } = body;
    if (success === false) {
      const error = {
        url: resp.url,
        message: message || resultView || '未知错误',
      };
      return Promise.reject(error);
    }
    return Promise.resolve(body);
  });
}

export default function request(url: string, options?: any) {
  const deafultOpts: any = {
    method: 'post',
    credentials: 'omit',
    // mode: 'cors',
  };
  const newOptions = { ...deafultOpts, ...options };
  if (!(newOptions.body instanceof FormData)) {
    newOptions.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      ...newOptions.headers,
    };
    newOptions.body = JSON.stringify(newOptions.body);
  } else {
    newOptions.headers = {
      Accept: 'application/json',
      ...newOptions.headers,
    };
  }
  return fetch(url, newOptions).then((response: any) => {
    return checkJson(response);
  });
}
