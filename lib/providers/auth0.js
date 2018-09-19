const { randomString } = require('../utilities')
const { assignDefaults } = require('./_utils')

module.exports = function auth0 (strategy) {
  assignDefaults(strategy, {
    _scheme: 'oauth2',
    authorization_endpoint: `https://${strategy.domain}/authorize`,
    userinfo_endpoint: `https://${strategy.domain}/userinfo`,
    scope: ['openid', 'profile', 'email'],
    response_type: 'token id_token',
    token_key: 'id_token',
    loginParams: { nonce: randomString }
  })
}
