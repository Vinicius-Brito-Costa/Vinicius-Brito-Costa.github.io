import { redirect } from '@sveltejs/kit';

// If the user access the default path it will be redirected
// to the portfolio route
export function load() {
  throw redirect(302, '/portfolio/about');
}