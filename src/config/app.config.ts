interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Chef', 'Waiter', 'Restaurant Manager', 'Restaurant Owner', 'Wait Staff'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read restaurant information',
    'Read menus of the restaurant',
    'Read table availability',
    'Read restaurant reviews',
  ],
  ownerAbilities: [
    'Manage users',
    'Manage restaurants',
    'Manage menus',
    'Manage reservations',
    'Manage tables',
    'Manage employees',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/0e40b78a-4311-42fe-bce1-9b265c620498',
};
