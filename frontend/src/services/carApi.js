import api from './api';

export const carApi = {
  getAll: (params) => api.get('/cars', { params }),
  getById: (id) => api.get('/cars/' + id),
  checkAvailability: (id, dates) => api.post('/cars/' + id + '/availability', dates),
};
