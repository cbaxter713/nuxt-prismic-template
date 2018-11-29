import Vue from 'vue'
import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'
import PrismicConfig from '~/prismic-configuration'
import PrismicToolbar from 'prismic-toolbar'

export default async ({ app, req, route, res, query, redirect }, inject) => {
  let options = {};

  if (process.server) {
    options.req = req
  }

  let api = await Prismic.api(PrismicConfig.apiEndpoint, options)

  inject('prismic', new Vue({
    computed: {
      predicates () {
        return Prismic.Predicates
      },
      prismicDOM () {
        return PrismicDOM
      },
      api () {
        return api
      }
    },
    methods: {
      asHtml (richText) {
        if (richText) {
          return this.prismicDOM.RichText.asHtml(richText, PrismicConfig.linkResolver, PrismicConfig.htmlSerializer)
        }
      },
      asText (richText) {
        if (richText) {
          return this.prismicDOM.RichText.asText(richText)
        }
      },
      asLink (link) {
        if (link) {
          return this.prismicDOM.Link(link, PrismicConfig.linkResolver)
        }
      },
      asDate (date, format) {
        if (date) {
          let d = this.prismicDOM.Date(date)
          return d
        }
      },
      initApi (req) {
        const accessToken = PrismicConfig.accessToken
        return Prismic.getApi(PrismicConfig.apiEndpoint, {
          req: req
        }).then(api => ({
          api,
          req,
          endpoint: PrismicConfig.apiEndpoint,
          accessToken,
          linkResolver: PrismicConfig.linkResolver
        }))
      }
    }
  }))
}