// react libraries
import * as ReactGA from 'react-ga';

/**
 * this function Initializes tracking Id for google analytics to push data
 *
 * @returns void
 */
export const initializeGA = () =>
ReactGA.initialize('UA-140673404-1', {
  testMode: process.env.NODE_ENV === 'test',
});

/**
 * this function logs the page that is being viewed
 *
 * @param {String} pathname
 *
 * @returns void
 */
export const logPageView = pathname => ReactGA.pageview(pathname);
