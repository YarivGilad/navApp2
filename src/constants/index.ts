//  1)  import first, then export
//----------------------------------
/*

import ROUTES from './routes';
import IMGS from './imgs';
import COLORS from './colors';

export {ROUTES, IMGS, COLORS};

*/

/*
*   2) export directly in one go
------------------------------------------- */
export {default as COLORS} from './colors';
export {default as IMGS} from './imgs';
export {ROUTES} from './routes';
