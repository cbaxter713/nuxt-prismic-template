<template>
    <nuxt-link v-if="nuxtLink" :class="btnClass" :to="nuxtLink">{{label}}</nuxt-link>
    <a v-else-if="link" :class="btnClass" :href="link" :target="externalLink ? '_blank' : '_self'">{{label}}</a>
    <button v-else :class="btnClass" :type="type" :name="name" :disabled="disabled">{{label}}</button>
</template>

<script>

  /**
   * Base Button component to be used for all buttons on the site.
   */

  export default {
    name: "BaseButton",
    props: {
      /**
       * Text to be displayed inside of the button
       */
      label: {
        type: String,
        required: true
      },
      /**
       * Size of button to display (sm, md, lg)
       */
      size: {
        type: String,
        default: 'md',
        validator: function (value) {
          return ['sm', 'md', 'lg'].indexOf(value) !== -1
        }
      },
      /**
       * Color of button to display (primary, secondary, info, warning, neutral)
       */
      color: {
        type: String,
        default: 'primary',
        validator: function (value) {
          return ['primary', 'secondary', 'info', 'warning', 'neutral'].indexOf(value) !== -1
        }
      },
      /**
       * Relative path of route to link to internally via vue-router, on click of the button
       */
      nuxtLink: {
        type: String,
        default: ''
      },
      /**
       * Url to link to using a standard href
       */
      link: {
        type: String,
        default: ''
      },
      /**
       * When using a link, this determines if that link will open in an external tab or not
       */
      externalLink: {
        type: Boolean,
        default: false
      },
      /**
       * Type of button to render (button, reset, submit)
       */
      type: {
        type: String,
        default: 'button',
        validator: function (value) {
          return ['button', 'reset', 'submit'].indexOf(value) !== -1
        }
      },
      /**
       * Whether or not the button is disabled
       */
      disabled: {
        type: Boolean,
        default: false
      },
      /**
       * Text to use in the HTML name attribute on the button
       */
      name: {
        type: String,
        default: ''
      },
      /**
       * Gives button a width of 100% of its parent container
       */
      full: {
        type: Boolean,
        default: false
      },
      /**
       * Displays button inline
       */
      inline: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      btnClass() {
        return [
          'btn', `btn-${this.size}`, `btn-${this.color}`,
          {
            'disabled': this.disabled,
            'full-width': this.full,
            'inline': this.inline
          }
        ];
      }
    },
  }
</script>

<style scoped lang="scss">
    .btn {
        display: block;
        padding: $input-padding;
        text-transform: uppercase;
        font-size: $input-font-size;
        color: $color-white;
        cursor: pointer;
        user-select: none;
        width: $input-default-width;
        text-align: center;
    }

    .btn-primary {
        background-color: $color-black;

        &:hover {
            background-color: darken($color-black, 10%);
        }
    }

    .btn-secondary {
        background-color: $color-secondary;

        &:hover {
            background-color: darken($color-secondary, 10%);
        }
    }

    .btn-info {
        background-color: $color-info;

        &:hover {
            background-color: darken($color-info, 10%);
        }
    }

    .btn-warning {
        background-color: $color-warning;

        &:hover {
            background-color: darken($color-warning, 10%);
        }
    }

    .btn-neutral {
        background-color: $gray;

        &:hover {
            background-color: darken($gray, 10%);
        }
    }

    .btn-sm {
        padding: $input-padding-sm;
    }

    .btn-lg {
        padding: $input-padding-lg;
    }

    .disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .full-width {
        width: 100%;
    }

    .inline {
        display: inline-block;
    }
</style>

<docs>
    Default Button (md, primary)
    ```jsx
        <BaseButton label="Hello"></BaseButton>
    ```

    Large Secondary Button
    ```jsx
        <BaseButton label="Secondary" size="lg" color="secondary"></BaseButton>
    ```

    Small Info Button
    ```jsx
        <BaseButton label="Warning" size="sm" color="info"></BaseButton>
    ```

    Disabled Button
    ```jsx
        <BaseButton label="Button" disabled></BaseButton>
    ```

    Full Width Button
    ```jsx
        <BaseButton label="Full Width" full></BaseButton>
    ```
</docs>
