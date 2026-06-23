export const ROUTES = {
  HOME: '/',
  RENTALS: '/rentals',
  BUY_CARS: '/buy-cars',
  SELL_CAR: '/sell-car',
  ROADSIDE_ASSISTANCE: '/roadside-assistance',
  MEMBERSHIP: '/membership',
  CONTACT: '/contact',
  BOOK_NOW: '/book-now',
  TRUCK_DRIVER: '/truck-driver',
  CAR_DETAILS: '/buy-cars/:id',
  BOOKING_CONFIRMATION: '/booking-confirmation',
  PROFILE: '/profile',
  LOGIN: '/login',
  REGISTER: '/register',
};

export const NAV_LINKS = [
  { name: 'Home', path: ROUTES.HOME },
  { name: 'Rentals', path: ROUTES.RENTALS },
  { name: 'Buy Cars', path: ROUTES.BUY_CARS },
  { name: 'Sell Car', path: ROUTES.SELL_CAR },
  { name: 'Roadside Assistance', path: ROUTES.ROADSIDE_ASSISTANCE },
  { name: 'Membership', path: ROUTES.MEMBERSHIP },
  { name: 'Contact', path: ROUTES.CONTACT },
  { name: 'Book Now', path: ROUTES.BOOK_NOW },
  { name: 'Truck Driver', path: ROUTES.TRUCK_DRIVER },
];

export const FOOTER_LINKS = {
  quickLinks: [
    { name: 'Rentals', path: ROUTES.RENTALS },
    { name: 'Buy Cars', path: ROUTES.BUY_CARS },
    { name: 'Sell Your Car', path: ROUTES.SELL_CAR },
    { name: 'Membership', path: ROUTES.MEMBERSHIP },
  ],
  services: [
    { name: 'Roadside Assistance', path: ROUTES.ROADSIDE_ASSISTANCE },
    { name: 'Truck Driver Services', path: ROUTES.TRUCK_DRIVER },
    { name: 'Book Now', path: ROUTES.BOOK_NOW },
  ],
  support: [
    { name: 'Contact Us', path: ROUTES.CONTACT },
    { name: 'FAQ', path: '/faq' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy' },
  ],
};