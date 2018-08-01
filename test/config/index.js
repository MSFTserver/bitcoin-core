
/**
 * Default config for Docker-based test suite.
 */

/**
 * Get Docker host.
 */

function getHost(name) {
  return process.env.CI === 'true' ? name : '127.0.0.1'; // eslint-disable-line no-process-env
}

/**
 * Services config.
 */

const config = {
  ravend: {
    host: getHost('ravend'),
    password: 'bar',
    port: 18767,
    username: 'foo'
  },
  ravendSsl: {
    host: getHost('ravend-ssl'),
    password: 'bar',
    port: 18768,
    username: 'foo'
  },
  ravendUsernameOnly: {
    host: getHost('ravend-username-only'),
    port: 18769,
    username: 'foo'
  }
};

/**
 * Export `config`.
 */

export default config;
