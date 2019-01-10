const prismicConfig = {
  apiEndpoint: 'https://vue-demo.cdn.prismic.io/api/v2',
  accessToken: 'MC5XLVJXWEJJQUFCOEF0VW8z.77-977-9I--_vTc677-9Te-_vWYnDe-_vSrvv70EE--_ve-_vR5vHO-_vV7vv73vv70ydO-_vR9SKA',
  linkResolver: function(doc) {
    if (doc.isBroken) { return '/not-found' }
    if (doc.type === 'content_page') { return doc.uid === 'home-page' ? '/' : `/content/${doc.uid}` }
    if (doc.type === 'team_page') { return '/team' }
    if (doc.type === 'team_member') { return '/team/' + doc.uid }
    return '/'
  }
}

module.exports = prismicConfig;