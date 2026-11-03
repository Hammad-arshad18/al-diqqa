import PocketBase from 'pocketbase';

// Hostinger Horizons proxies PocketBase at /hcgi/platform.
// For a static deploy elsewhere, set VITE_POCKETBASE_URL to your public PocketBase origin
// (e.g. https://pb.example.com).
const POCKETBASE_API_URL = import.meta.env.VITE_POCKETBASE_URL || '/hcgi/platform';

const pocketbaseClient = new PocketBase(POCKETBASE_API_URL);

export default pocketbaseClient;

export { pocketbaseClient, POCKETBASE_API_URL };
