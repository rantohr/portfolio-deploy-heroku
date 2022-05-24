<template>
  <div class="skill-title" id="skills">
    <div>
      <h2>Skills</h2>
      <hr />
    </div>
  </div>
  <div id="skill-div">
    <div class="skill" v-for="item in skills" v-bind:key="item.technology">
      <div class="skill-coner" :class="[item.important ? 'glitcher' : '']">
        <a v-bind:href="item.link">{{ item.technology }}</a>
        <img v-bind:src="'/images/' + item.logo" alt="" />
        <p>{{ item.description }}</p>
        <div class="skill-progress">
          <div :style="{ width: item.capacity + '%' }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as data from "../assets/data.js";

export default {
  data() {
    return {
      date: new Date().getFullYear(),
      skills: data.skills,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.skill-title {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    h2 {
      font-size: xx-large;
      color: white;
      text-align: center;
    }
    hr {
      margin: -1em 0 2em 0;
    }
  }
}

#skill-div {
  margin-bottom: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.skill {
  color: white;
  background-color: black;
  width: 13em;
  height: 13em;
  padding: 1em;
  // flex: 0 0 33.333333%;
  margin: 0.3em;

  .skill-coner {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background: linear-gradient(
          to right,
          $secondaryColor 0.2em,
          transparent 0.2em
        )
        0 0,
      linear-gradient(to right, $secondaryColor 0.2em, transparent 0.2em) 0 100%,
      linear-gradient(to left, $secondaryColor 0.2em, transparent 0.2em) 100% 0,
      linear-gradient(to left, $secondaryColor 0.2em, transparent 0.2em) 100%
        100%,
      linear-gradient(to bottom, $secondaryColor 0.2em, transparent 0.2em) 0 0,
      linear-gradient(to bottom, $secondaryColor 0.2em, transparent 0.2em) 100%
        0,
      linear-gradient(to top, $secondaryColor 0.2em, transparent 0.2em) 0 100%,
      linear-gradient(to top, $secondaryColor 0.2em, transparent 0.2em) 100%
        100%;

    background-repeat: no-repeat;
    background-size: 20px 20px;

    img {
      height: 2em;
    }

    p {
      text-align: center;
      font-size: smaller;
      width: 95%;
      min-height: 3em;
    }

    a {
      color: $secondaryColor;
      margin-bottom: 0.5em;
      font-size: larger;
    }

    .skill-progress {
      height: 1em;
      width: 95%;
      border: solid 0.1em white;
      margin-bottom: 2em;

      div {
        height: 100%;
        width: 0%;
        background-image: linear-gradient(
          90deg,
          $secondaryColor 25%,
          transparent 25%,
          transparent 50%,
          $secondaryColor 50%,
          $secondaryColor 75%
        );
        background-size: 0.65em;
      }
    }
  }

  .glitcher {
    -moz-animation: glitch 5s linear infinite;
    -webkit-animation: glitch 5s linear infinite;
    -o-animation: glitch 5s linear infinite;
    animation: glitch 5s linear infinite;
  }
}

@media only screen and (max-width: 600px) {
  .skill-title {
    div {
      width: 80%;
    }
  }
}

@media only screen and (min-width: 600px) {
  .skill-title {
    div {
      width: 80%;
    }
  }
}

@media only screen and (min-width: 768px) {
  .skill-title {
    div {
      width: 70%;
    }
  }
}

@media only screen and (min-width: 1024px) {
  .skill-title {
    div {
      width: 70%;
    }
  }
}

@media only screen and (min-width: 1200px) {
  .skill-title {
    div {
      width: 70%;
    }
  }
}
</style>
