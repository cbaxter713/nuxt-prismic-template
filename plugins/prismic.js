import Vue from 'vue'
import Prismic from 'prismic-javascript'
import PrismicConfig from '~/prismic-configuration'
import PrismicDOM from 'prismic-dom'
import PrismicToolbar from 'prismic-toolbar'
import { appEndpoints } from "../api";

export default (ctx, inject) => {
  inject('prismic', new Vue({
    computed: {
      predicates () {
        return Prismic.Predicates
      },
      prismicDOM () {
        return PrismicDOM
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
          return this.prismicDOM.Link.url(link, PrismicConfig.linkResolver)
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

export function setupPrismicPreview() {
  window.prismic = {
    endpoint: appEndpoints.prismic.apiEndpoint
  };

  let prismicToolbarScript = document.createElement('script');
  prismicToolbarScript.setAttribute('src',"//static.cdn.prismic.io/prismic.min.js");
  document.head.appendChild(prismicToolbarScript);
}