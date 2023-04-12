let hostname = '';
if (typeof window !== 'undefined') {
  hostname = window.location.origin;
}

const config = {
  siteUrl: hostname,
}

export default config;