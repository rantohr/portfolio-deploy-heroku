<template>
  <div class="responsive-indicator"></div>
  <div class="menu-fixed">
    <div class="menu">
      <h1 class="title-name">Ranto A.</h1>
      <div class="menu-list">
        <a
          @click="clickLink('bio')"
          :style="{
            borderBottom: underlined.bio ? '0.1em solid #fff' : 'none',
          }"
          href="#bio"
          >About</a
        >
        <a
          href="#experiences"
          @click="clickLink('xp')"
          :style="{ borderBottom: underlined.xp ? '0.1em solid #fff' : 'none' }"
          class="xp-text"
          ><span>Experiences & Education</span></a
        >
        <a
          href="#skills"
          @click="clickLink('skill')"
          :style="{
            borderBottom: underlined.skill ? '0.1em solid #fff' : 'none',
          }"
          >Skills</a
        >
        <a
          href="#projects"
          @click="clickLink('prj')"
          :style="{
            borderBottom: underlined.prj ? '0.1em solid #fff' : 'none',
          }"
          >Projects</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    username: String,
  },
  data() {
    return {
      date: new Date().getFullYear(),
      underlined: { bio: true, xp: false, skill: false, prj: false },
    };
  },
  methods: {
    clickLink(link) {
      switch (link) {
        case "xp":
          this.underlined = { bio: false, xp: true, skill: false, prj: false };
          break;
        case "skill":
          this.underlined = { bio: false, xp: false, skill: true, prj: false };
          break;
        case "prj":
          this.underlined = { bio: false, xp: false, skill: false, prj: true };
          break;
        default:
          this.underlined = { bio: true, xp: false, skill: false, prj: false };
          break;
      }
      this.$emit("clickLink", link);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.menu-fixed {
  position: fixed;
  top: 0;
  width: 100vw;
  color: $textColor;
  background-color: $primaryColor;
  z-index: 2;
  height: 4em;
  background-color: black;

  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    .menu-list {
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: space-between;
      flex-wrap: wrap;

      a {
        cursor: pointer;
        padding-bottom: 0.2em;
      }
    }
  }
}

.responsive-indicator {
  width: 0.5em;
  height: 0.5em;
  background: grey;
  position: fixed;
  z-index: 17;
  display: none;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .responsive-indicator {
    background: red;
  }
  .title-name {
    display: none;
  }
  .menu-list {
    width: 100%;
  }
  .menu {
    padding: 0 1em;
    font-size: smaller;
  }
  .xp-text span {
    display: none;
  }
  .xp-text:after {
    content: "Experiences";
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .responsive-indicator {
    background: orange;
  }
  .title-name {
    display: none;
  }
  .menu-list {
    width: 100%;
  }
  .menu {
    padding: 0 2em;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .responsive-indicator {
    background: yellow;
  }
  .title-name {
    display: none;
  }
  .menu-list {
    width: 100%;
  }
  .menu {
    padding: 0 5em;
  }
}

/* Large devices (laptops/desktops, 1024px and up) */
@media only screen and (min-width: 1024px) {
  .responsive-indicator {
    background: rgb(0, 255, 98);
  }
  .title-name {
    display: block;
  }
  .menu-list {
    width: 60%;
  }
  .menu {
    padding: 0 5em;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .responsive-indicator {
    background: rgb(0, 128, 58);
  }
  .title-name {
    display: block;
  }
  .menu-list {
    width: 60%;
  }
  .menu {
    padding: 0 5em;
  }
}

// @media only screen and (max-width: 600px) {
// }

// @media only screen and (min-width: 600px) {
// }

// @media only screen and (min-width: 768px) {
// }

// @media only screen and (min-width: 1024px) {
// }

// @media only screen and (min-width: 1200px) {
// }
</style>
