import RedBike from '../assets/images/red-bike.svg';
import BlueBike from '../assets/images/blue-bike.svg';
import WhiteBike from '../assets/images/white-bike.svg';
import BlackBike from '../assets/images/black-bike.svg';

/**
 * Selectable bike colourways. The first entry is the default hero bike.
 */
export const bikes = [
  { id: 'black', name: 'Midnight Black', image: BlackBike },
  { id: 'white', name: 'Arctic White', image: WhiteBike },
  { id: 'blue', name: 'Electric Blue', image: BlueBike },
  { id: 'red', name: 'Racing Red', image: RedBike },
];

/**
 * Headline specs shown in the feature cards below the hero.
 */
export const specs = [
  { value: '105', unit: 'lbs', label: 'Net weight' },
  { value: '26', unit: 'mph', label: 'Top Speed' },
  { value: '38', unit: 'miles', label: 'Max Range' },
  { value: '89', unit: 'nm', label: 'Max Torque' },
  { value: '22%', unit: 'slope', label: 'Hill Climbing' },
  { value: '2x', unit: '', label: 'Hydraulic Disc Brakes' },
];

/**
 * Primary navigation links.
 */
export const navLinks = [
  { label: 'HOME', href: '/' },
  { label: 'PRODUCT', href: '/' },
  { label: 'GALLERY', href: '/' },
  { label: 'CONTACT', href: '/' },
];
