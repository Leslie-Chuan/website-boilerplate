import request from '@/utils/request';
import getBaseUrl from '@/core/envconfig';

// 动态api domain
const baseDomain = getBaseUrl(process.env.CUSTOME_ENV);

type dataProps = {
  api: string;
  params?: {};
};

type GetLoginUrlProps = {
  activity_type: string;
  os: string;
  redirectUri: string;
};

export async function getListRecommend(data: dataProps) {
  const { api, params } = data;
  return request(`https://sapi.xxx.com/ds/ajax/endpoint.json`, {
    body: {
      api,
      params,
    },
  });
}

export async function getWechatConfig(data: dataProps) {
  const { api, params } = data;
  return request('https://sapi.xxx.com/ds/ajax/endpoint.json', {
    body: {
      api,
      params,
    },
  });
}

export async function getLoginUrl(data: GetLoginUrlProps) {
  let params = '?';
  Object.keys(data).forEach((key: string) => {
    params += '&' + key + '=' + data[key];
  });
  return request(
    `https://p10080-gangplank.ejoy.com/gp/P10080/oauth/lingxi/v3/get_login_url${params}`,
    {
      method: 'get',
    },
  );
}

export async function getInfoDetail(data: dataProps) {
  const { api, params } = data;
  return request('https://sapi.xxx.com/ds/ajax/endpoint.json', {
    body: {
      api,
      params,
    },
  });
}

export async function getImageGetList(data: dataProps) {
  const { api, params } = data;
  return request('https://sapi.xxx.com/ds/ajax/endpoint.json', {
    body: {
      api,
      params,
    },
  });
}

export async function getVideoList(data: dataProps) {
  const { api, params } = data;
  return request('https://sapi.xxx.com/ds/ajax/endpoint.json', {
    body: {
      api,
      params,
    },
  });
}

/****************************************牛逼的分割线(mock)*************************************************************************************************************************************************/

export async function mockGetListRecommend(data?: dataProps) {
  return request('/api/getListRecommend');
}

export async function mockGetLoginUrl(data?: any) {
  return request('/api/mockGetLoginUrl');
}
