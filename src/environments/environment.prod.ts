import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    product: 'https://9qhyrydex7.execute-api.eu-west-1.amazonaws.com/dev/api',
    order: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    import: 'https://etc9574ywh.execute-api.eu-west-1.amazonaws.com/dev/api',
    bff: 'https://9qhyrydex7.execute-api.eu-west-1.amazonaws.com/dev/api',
    cart: 'https://w62nstp1kd.execute-api.eu-west-1.amazonaws.com/dev/api',
  },
  apiEndpointsEnabled: {
    product: true,
    order: false,
    import: true,
    bff: true,
    cart: true,
  },
};
