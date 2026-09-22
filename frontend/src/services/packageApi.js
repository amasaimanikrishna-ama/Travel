import api from './api';

export const packageApi = {
  getAll: (params) => api.get('/packages', { params }),
  getById: (id) => api.get('/packages/' + id),
};
