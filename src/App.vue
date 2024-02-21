<script>
import AppHeader from "./components/AppHeader.vue";
import { store } from "./store";
import axios from "axios";

export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      store,
    };
  },
  created() {},
  methods: {},
};
</script>

<template>
  <AppHeader />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
