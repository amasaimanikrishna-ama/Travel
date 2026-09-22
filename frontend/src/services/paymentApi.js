import api from './api';

export const paymentApi = {
  processPayment: (paymentData) => api.post('/payments/process', paymentData),
  getPaymentHistory: () => api.get('/payments/history'),
};
