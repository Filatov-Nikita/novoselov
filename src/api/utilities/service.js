import Service from './server';

const api = new Service('https://novadmin.yes-idea.ru', {
  apiPath: 'api/v2',
  timeout: 10000,
});

export default api;
