<<<<<<< HEAD
=======
import { reject } from 'lodash';

>>>>>>> 9a2b13b6a11ee794bdd084080ccb4d88cf5b46f1
/**
 * Mocking client-server processing
 */
const _products = [
  { id: 1, title: '华为 Mate 20', price: 3999, inventory: 2 },
  { id: 2, title: '小米 9', price: 2999, inventory: 0 },
  { id: 3, title: 'OPPO R17', price: 2999, inventory: 5 },
];

const res = {
  success: { code: 200, data: {}, message: 'success' },
  failed: { code: 200, error: true, message: 'failed' },
};

export default {
  getProducts() {
    return new Promise(resolve => {
      setTimeout(resolve(_products), 1000);
    });
  },

  submitOrder(products) {
    console.log('submit products :>> ', products);
    return new Promise(resolve =>
      setTimeout(() => {
        resolve(Math.random() > 0.5 ? res.success : res.failed);
      }, 1000)
    );
  },
};
