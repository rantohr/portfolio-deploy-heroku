<template>
  <div id="experiences"></div>
  <div class="certificates">
    <div
      class="certificates-description"
      :style="{ minHeight: clicked ? '10em' : '5em' }"
    >
      <Transition name="fade">
        <div class="certificates-description-content" v-if="clicked">
          <h2>
            {{ clicked.type == "edu" ? "Education" : "Experience" }}
          </h2>
          <hr />
          <div class="glitcher">
            <h3>
              <a style="color: black" v-bind:href="clicked.link">{{
                clicked.society
              }}</a>
            </h3>
          </div>
          <div class="certificates-description-details">
            <h5>{{ clicked.jobOrDegree }}</h5>
            <p>{{ clicked.start }} - {{ clicked.end }}</p>
          </div>
          <div class="certificates-description-details">
            <p>{{ clicked.department }} Department</p>
            <a v-bind:href="clicked.link">{{ clicked.link }}</a>
          </div>
        </div>
        <div class="certificates-description-content" v-else-if="!clicked">
          <h2>Experiences &#38; Education</h2>
          <hr />
          <div class="certificates-all">
            <img
              v-for="item in experiences"
              v-bind:key="item.society"
              v-bind:src="'/images/' + item.logo"
              alt=""
            />
          </div>
        </div>
      </Transition>
    </div>
    <div id="certificate-canvas-div">
      <canvas width="700" height="400" class="certificate-canvas"></canvas>
      <p>{{ instruction }}</p>
    </div>
  </div>

  <div class="dipl-outer">
    <div class="certificate-title">
      <div>
        <h2>Experiences &#38; Education</h2>
        <hr />
      </div>
    </div>
    <div class="dipl" v-for="item in experiences" v-bind:key="item.society">
      <div class="dipl-logo">
        <img v-bind:src="'/images/' + item.logo" alt="" />
        <h3>{{ item.society }}</h3>
        <a v-bind:href="item.link">({{ item.link }})</a>
      </div>

      <h1>
        {{ item.type == "edu" ? "Education" : "Experience" }}
      </h1>

      <div class="dipl-body">
        <p>
          <b>{{ item.type == "edu" ? "Degree: " : "Job Title: " }}</b>
          <span class="glitcher">{{ item.jobOrDegree }}</span>
        </p>
        <p><b>Department: </b> {{ item.department }}</p>
        <p>From {{ item.start }} to {{ item.end }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import * as data from "../assets/data.js";
import * as certificate from "../assets/modules/threejs/certificates.js";

export default {
  data() {
    return {
      date: new Date().getFullYear(),
      experiences: data.experiences,
      clicked: null,
      instruction: "*click on an image to view details",
    };
  },

  mounted() {
    document?.addEventListener(
      "click",
      (event) => {
        const clicked = certificate.certificatesClick();
        if (clicked?.name) {
          this.clicked = data.experiences.find((e) => e.code == clicked.name);
        } else this.clicked = null;
      },
      false
    );
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.certificates {
  display: flex;
  color: $primaryColor;
  justify-content: center;
  background-color: $textColor;
  min-height: 85vh;
  align-items: center;
  width: 100vw;

  h2 {
    text-align: center;
  }
}

.certificates-description {
  margin-right: 2em;
  width: 30%;
  position: relative;
  display: flex;
  justify-content: center;
  height: auto;
  min-height: 5em;

  .certificates-description-content {
    transition: 0.8s ease;
    position: absolute;
    top: 0;
    width: 100%;
    min-height: 10em;
  }

  .certificates-description-details {
    margin-top: 0.5em;
    :first-child {
      margin-right: 1em;
    }
  }

  h3 {
    font-size: x-large;
  }

  a {
    color: $secondaryColor;
  }

  hr {
    margin: -1em 0 3.5em 0;
  }
}

#certificate-canvas-div {
  width: 45em;
  height: 25em;

  p {
    font-size: smaller;
    width: 100%;
    text-align: center;
  }
}

.certificates-all {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem 1rem;

  img {
    height: 2.5em;
  }
}

.dipl-outer {
  background-color: white;
  padding: 4em;

  .certificate-title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    div {
      h2 {
        font-size: xx-large;
        text-align: center;
      }
      hr {
        margin: -1em 0 2em 0;
      }
    }
  }
}

.dipl {
  padding: 2em 0;
  // border: inset #3282c9;
  border: inset black 0.1em;
  margin-bottom: 1em;

  h2 {
    font-size: xx-large;
  }
  hr {
    margin: -1em 0 2em 0;
  }

  .dipl-logo {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    img {
      height: 4em;
    }

    h3 {
      margin-bottom: 0;
    }
  }

  h1 {
    text-align: center;
    margin: 2em 0;
  }

  a {
    color: $secondaryColor;
  }

  .dipl-body {
    margin: 0 2em;
    max-width: 75vw;
  }
}

.glitcher {
  -moz-animation: glitchBlackText 5s linear infinite;
  -webkit-animation: glitchBlackText 5s linear infinite;
  -o-animation: glitchBlackText 5s linear infinite;
  animation: glitchBlackText 5s linear infinite;
}

@media only screen and (max-width: 600px) {
  .certificates {
    display: none;
  }

  .dipl-outer {
    display: block;
    font-size: smaller;
  }
}

@media only screen and (min-width: 600px) {
  .certificates {
    flex-direction: column;
    display: flex;
  }

  .certificates-description {
    width: 80%;
    // height: 10em;
    h2 {
      font-size: xx-large;
    }
    hr {
      margin: -1em 0 2em 0;
    }

    h3 {
      margin: 0;
    }
  }

  .certificates-all {
    display: none;
  }

  .certificates-description-details {
    display: flex;
    align-items: center;
    height: 2em;
    :first-child {
      width: 60%;
    }
    a {
      display: none;
    }
  }

  .dipl-outer {
    display: none;
  }
}

@media only screen and (min-width: 768px) {
  .certificates {
    flex-direction: column;
    display: flex;
  }

  .certificates-description {
    width: 70%;
    // height: 10em;
    h2 {
      font-size: xx-large;
    }
    hr {
      margin: -1em 0 2em 0;
    }

    h3 {
      margin: 0;
    }
  }

  .certificates-all {
    display: none;
  }

  .certificates-description-details {
    display: flex;
    align-items: center;
    height: 2em;
    :first-child {
      width: 60%;
    }
    a {
      display: block;
    }
  }

  .dipl-outer {
    display: none;
  }
}

@media only screen and (min-width: 1024px) {
  .certificates {
    flex-direction: column;
    display: flex;
  }

  .certificates-description {
    width: 70%;
    // height: 10em;
    h2 {
      font-size: xx-large;
    }
    hr {
      margin: -1em 0 2em 0;
    }

    h3 {
      margin: 0;
    }
  }

  .certificates-all {
    display: none;
  }

  .certificates-description-details {
    display: flex;
    align-items: center;
    height: 2em;

    :first-child {
      width: 60%;
    }
    a {
      display: block;
    }
  }

  .dipl-outer {
    display: none;
  }
}

@media only screen and (min-width: 1200px) {
  .certificates {
    flex-direction: row;
    display: flex;
  }

  .certificates-description {
    width: 30%;
    height: 25em;
    h2 {
      font-size: xxx-large;
    }
  }

  .certificates-all {
    display: grid;
  }

  .certificates-description-details {
    height: 5em;
    display: block;

    :first-child {
      width: 100%;
    }
    a {
      display: block;
    }
  }

  .dipl-outer {
    display: none;
  }
}
</style>
