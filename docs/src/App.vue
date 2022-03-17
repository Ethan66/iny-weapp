<template>
  <van-doc
    active="小程序组件"
    :config="config"
    :github="github"
    :versions="versions"
    :simulator="simulator"
    @switch-version="onSwitchVersion"
  >
    <router-view />
  </van-doc>
</template>

<script>
import pkgJson from '../../package.json';
import docConfig, { github, versions } from './doc.config';

export default {
  data() {
    return {
      github,
      versions
    };
  },

  computed: {
    config() {
      return docConfig;
    },

    simulator() {
      let prefix = '';
      const { path } = this.$route.meta;

      // if (location.hostname === '0.0.0.0' || location.hostname === 'localhost') {
      //   prefix = 'https://sys.inyoumall.com';
      // 

      return `./preview.html#${path}`;
    }
  },

  methods: {
    onSwitchVersion(version) {
      if (version !== pkgJson.version) {
        location.href = `http://gitlab.ldxinyong.com/igo/iny-weapp/${version}`;
      }
    }
  }
};
</script>

<style lang="less">
.iny-doc-intro {
  padding-top: 20px;
  font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  text-align: center;

  &__logo {
    width: 120px;
    height: 120px;
  }

  h2 {
    font-weight: normal;
    font-size: 32px;
    line-height: 60px;
  }

  p {
    margin-bottom: 20px;
    color: #455a64;
    font-size: 15px;
  }
}
.van-doc-header__logo {
  img {
    display: none!important;
  }
}
.van-doc-header__logo-link {
  img {
    width: 50px!important;
    height: 50px!important;
  }
}
</style>
