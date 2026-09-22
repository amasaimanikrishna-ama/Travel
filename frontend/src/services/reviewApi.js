import api from './api';

export const reviewApi = {
  getReviews: (entityType, entityId) => api.get('/reviews/' + entityType + '/' + entityId),
  addReview: (reviewData) => api.post('/reviews', reviewData),
};
