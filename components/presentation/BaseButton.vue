<template>
    <nuxt-link v-if="nuxtLink" :class="btnClass" :to="nuxtLink">{{label}}</nuxt-link>
    <a v-else-if="link" :class="btnClass" :href="link" :target="externalLink ? '_blank' : '_self'">{{label}}</a>
    <button v-else :class="btnClass" :type="type" :name="name" :disabled="disabled">{{label}}</button>
</template>

<script>
  export default {
    name: "BaseButton",
    props: {
      label: {
        type: String,
        required: true
      },
      size: {
        type: String,
        default: 'md',
        validator: function (value) {
          return ['sm', 'md', 'lg'].indexOf(value) !== -1
        }
      },
      color: {
        type: String,
        default: 'primary',
        validator: function (value) {
          return ['primary', 'secondary', 'info', 'warning', 'neutral'].indexOf(value) !== -1
        }
      },
      nuxtLink: {
        type: String,
        default: ''
      },
      link: {
        type: String,
        default: ''
      },
      externalLink: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'button',
        validator: function (value) {
          return ['button', 'reset', 'submit'].indexOf(value) !== -1
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        default: ''
      },
      full: {
        type: Boolean,
        default: false
      },
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

        &.btn-primary {
            background: $color-primary;

            &:hover {
                background-color: darken($color-primary, 10%);
            }
        }

        &.btn-secondary {
            background: $color-secondary;

            &:hover {
                background-color: darken($color-secondary, 10%);
            }
        }

        &.btn-info {
            background: $color-info;

            &:hover {
                background-color: darken($color-info, 10%);
            }
        }

        &.btn-warning {
            background: $color-warning;

            &:hover {
                background-color: darken($color-warning, 10%);
            }
        }

        &.btn-neutral {
            background: $gray;

            &:hover {
                background-color: darken($gray, 10%);
            }
        }

        &.btn-sm {
            padding: $input-padding-sm;
        }

        &.btn-lg {
            padding: $input-padding-lg;
        }

        &.disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        &.full-width {
            width: 100%;
        }

        &.inline {
            display: inline-block;
        }
    }
</style>