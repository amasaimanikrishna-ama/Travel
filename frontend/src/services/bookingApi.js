import api from './api';

export const bookingApi = {
  create: (bookingData) => api.post('/bookings', bookingData),
  getUserBookings: () => api.get('/bookings/my-bookings'),
  getById: (id) => api.get('/bookings/' + id),
  cancel: (id) => api.post('/bookings/' + id + '/cancel'),
};
