<template>
  <div class="footer">
    <p>Ranto A. - Copyright © {{ date }}. All rights reserved</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables.scss';

.footer {
  height: 3em;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;

  p {
    text-align: center;
    color: $textColor;
    margin: 0;
  }
}

@media only screen and (max-width: 600px) {
  .footer {
    font-size: smaller;
  }
}
</style>
