import api from './api';

export const destinationApi = {
  getAll: (params) => api.get('/destinations', { params }),
  getById: (id) => api.get('/destinations/' + id),
};
