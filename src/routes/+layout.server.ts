import { browser } from '$app/environment';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ locals: { locale, LL } }) => {
  // pass locale information from "server-context" to "shared server + client context"
  return { locale };
};