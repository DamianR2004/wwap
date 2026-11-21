import { redirect } from '@sveltejs/kit';

export function load() {
  redirect(301, '/woonvormen/beschermd-thuis');
}
