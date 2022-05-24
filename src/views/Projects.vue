<template>
  <div id="projects"></div>
  <div class="modal-details" v-if="selectedPrj && enterPressed.showModal">
    <div class="modal-details-content">
      <div class="modal-close">
        <button @click="closeModal()">X</button>
      </div>
      <div class="modal-details-prj" v-if="selectedPrj.type == 'prj'">
        <div
          class="modal-details-prj-container"
          :style="{ display: selectedPrj.project.mobile ? 'flex' : 'block' }"
        >
          <div style="font-size: smaller">
            <div class="modal-details-header">
              <h2>{{ selectedPrj.project.title }}</h2>
            </div>
            <p>{{ selectedPrj.project.shortDescription }}</p>
            <p>
              <b>Technologies: </b>
              <span
                v-for="(tech, index) in selectedPrj.project.technologies"
                v-bind:key="tech.name"
                >{{
                  tech.name +
                  (index == selectedPrj.project.technologies.length - 1
                    ? ""
                    : " - ")
                }}
              </span>
            </p>
            <b>Responsabilities:</b>
            <ul class="glitcher">
              <li
                v-for="mission in selectedPrj.project.missions"
                v-bind:key="mission"
              >
                {{ mission }}
              </li>
            </ul>
          </div>
          <div style="display: flex; justify-content: center">
            <img
              class="screenshot-img"
              v-bind:src="
                '/images/screenshots/' + selectedPrj.project.screenshot
              "
              :style="{
                height: selectedPrj.project.mobile ? '20em' : 'auto',
                width: selectedPrj.project.mobile ? 'auto' : '30em',
              }"
            />
          </div>
        </div>
        <p class="modal-details-footer">({{ selectedPrj.project.society }})</p>
      </div>
      <div class="modal-details-cv" v-if="selectedPrj.type == 'cv'">
        <h2>Download my resume</h2>
        <br />
        <div>
          <a class="button-a" role="button" href="/CV_2022-05-23_Ranto Herizo_Andriamanalina.pdf" download>Download (PDF version)</a>
        </div>
      </div>
      <div class="modal-details-skill" v-if="selectedPrj.type == 'skill'">
        <h2>Skills</h2>
        <div class="skill-list">
          <div
            class="skill-item"
            v-for="item in skills"
            v-bind:key="item.technology"
          >
            <img v-bind:src="'/images/' + item.logo" alt="" />
            <div class="skill-progress">
              <div :style="{ width: item.capacity + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-details-bio" v-if="selectedPrj.type == 'bio'">
        <h4>I'm</h4>
        <h2>Ranto Andriamanalina</h2>
        <div class="glitcher">FULLSTACK JAVASCRIPT DEVELOPER</div>
        <ul>
          <li>📅 February 25, 1999</li>
          <li>📧 rantoandriamanalina@gmail.com</li>
          <li>🏠 Antananarivo, Madagascar</li>
        </ul>
        <div class="sn">
          <a href="https://www.instagram.com/ranto_hr/">
            <img class="img-link" src="/images/insta-logo-min.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/ranto-andriamanalina">
            <img class="img-link" src="/images/linkdin-logo-min.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="project-sample">
    <div class="project-title" style="width: 100%">
      <div style="width: 80%">
        <h2>Projects</h2>
        <hr />
      </div>
    </div>
    <div class="prj" v-for="item in mainProjects" v-bind:key="item.title">
      <div class="prj-decor">
        <div>
          <h3>{{ item.title }}</h3>
          <p class="prj-decor-desc">{{ item.shortDescription }}</p>
          <p class="glitcher">
            <span
              v-for="(tech, index) in item.technologies"
              v-bind:key="tech.name"
              >{{
                tech.name + (index == item.technologies.length - 1 ? "" : " - ")
              }}
            </span>
          </p>
        </div>
        <div style="display: flex; justify-content: center">
          <img
            class="screenshot-img"
            v-bind:src="'/images/screenshots/' + item.screenshot"
            :style="{
              height: item.mobile ? '15em' : 'auto',
              width: item.mobile ? 'auto' : '20em',
            }"
          />
        </div>
      </div>
    </div>
  </div>

  <div id="project-canvas-div">
    <canvas width="700" height="400" class="project-canvas"></canvas>
    <div id="instructions">
      <div class="project-title">
        <div>
          <h2>Projects</h2>
          <hr />
        </div>
      </div>
      <p><b>></b> Use the WASD keys to move</p>
      <p>(W is up, A is left, S is down, and D is right)</p>
      <p><b>></b> Move your mouse to look around</p>
      <p>
        <b>></b> Look at an interactive element and press Enter to view details
      </p>
      <p><b>></b> Press ESC to leave</p>
      <button v-on:click="play">Play</button>
    </div>
    <div id="tips">
      <p>
        <b>{{ tip.title }}</b> {{ tip.text }}
      </p>
    </div>
  </div>
</template>

<script>
import * as project from "../assets/modules/threejs/house/project.js";
import * as data from "../assets/data.js";

export default {
  data() {
    return {
      date: new Date().getFullYear(),
      projects: data.projects,
      mainProjects: data.mainProjects,
      skills: data.skills,
      tip: { title: "", text: "" },
      selectedPrj: null,
      enterPressed: { counter: 0, showModal: false },
    };
  },
  methods: {
    play: function (event) {
      project.playIt();
    },
    closeModal: function (event) {
      this.enterPressed = { counter: 0, showModal: false };
      project.lock();
    },
  },
  mounted() {
    const animate = () => {
      requestAnimationFrame(animate);
      const projectData = project.animate();
      if (projectData) {
        if (projectData.activeObject) {
          let pressText = "";
          switch (projectData.activeObject) {
            case "Laptop":
              pressText = "(press ENTER to view details)";
              this.selectedPrj = { type: "skill" };
              break;
            case "Smartphone":
              pressText = "(press ENTER to view details)";
              this.selectedPrj = { type: "bio" };
              break;
            case "Papers":
              pressText = "(press ENTER to view details)";
              this.selectedPrj = { type: "cv" };
              break;
            default:
              const exist = this.projects.find(
                (e) => e.title == projectData.activeObject && e.missions
              );
              if (exist) {
                pressText = "(press ENTER to view details)";
                this.selectedPrj = { type: "prj", project: exist };
              } else {
                this.selectedPrj = null;
              }
              break;
          }
          this.tip = {
            title: projectData.activeObject,
            text: pressText,
          };
        } else {
          this.tip = { title: "", text: "" };
        }
      }
    };
    animate();

    document.addEventListener("keypress", (e) => {
      if (
        project?.controls?.isLocked === true &&
        e.code == "Enter" &&
        this.selectedPrj
      ) {
        this.enterPressed.counter++;
        if (this.enterPressed.counter <= 2) {
          this.enterPressed.showModal = true;
          project.lock(-1);
        } else {
          this.enterPressed.counter = 0;
          this.enterPressed.showModal = false;
          project.lock();
        }
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

$max-instr-width: 15vw;

.project-title {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 1em;

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

#project-canvas-div {
  position: relative;

  #instructions {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: #00000099;
    color: white;
    padding-bottom: 0.5em;

    p {
      max-width: $max-instr-width;
      margin: 1em;
    }
    button {
      width: $max-instr-width;
      margin: 1em;
    }
  }

  #tips {
    display: none;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: transparent;
    color: white;

    p {
      background-color: #00000099;
      padding: 0.5em;
      margin: 0.5em;
    }
  }
}

.project-sample {
  background-color: white;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .prj {
    position: relative;
    margin-bottom: 2em;

    .prj-decor {
      width: 20em;
      height: 25em;
      background-color: $primaryColor;
      color: white;
      padding: 1em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 0px 0px 7px rgb(131, 131, 131);

      h3 {
        margin: 0;
        font-size: xx-large;
        font-weight: lighter;
        text-transform: uppercase;
        text-align: center;
      }

      p {
        text-align: center;
      }

      .prj-decor-desc {
        font-size: large;
      }
    }
  }
}

.modal-details {
  display: flex;
  width: 100vw;
  min-height: 80vh;
  position: absolute;
  background-color: transparent;
  z-index: 10;
  justify-content: center;
  align-items: center;

  .modal-details-content {
    color: white;
    background-color: rgba(0, 0, 0, 0.9);
    padding: 1em;

    .modal-close {
      display: flex;
      justify-content: flex-end;
      margin: 0;
      padding: 0;
      button {
        border: none;
        outline: none;
        width: min-content;
        height: min-content;
        margin: 0;
        transform: translate(0.7em, -0.7em);
      }
    }

    img {
      height: 3em;
    }

    .modal-details-prj {
      .modal-details-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h2 {
          margin: 0;
          color: $secondaryColor;
        }
      }

      .modal-details-prj-container {
        display: flex;

        img {
          height: 10em;
          // display: none;
        }
      }

      .modal-details-footer {
        text-align: end;
      }
    }

    .modal-details-cv {
      h2 {
        text-align: center;
      }

      div {
        display: flex;
        justify-content: center;
        align-content: center;
      }
    }

    .modal-details-skill {
      h2 {
        text-align: center;
      }

      .skill-list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1.5rem 1rem;

        .skill-item {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          img {
            margin-bottom: 1em;
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
      }
    }

    .modal-details-bio {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .sn {
        display: flex;
        width: 10em;
        justify-content: space-between;
      }

      ul {
        margin-bottom: 3em;
        list-style: none;
      }

      h2 {
        margin-top: 0;
      }
    }
  }
}

.glitcher {
  -moz-animation: glitch 5s linear infinite;
  -webkit-animation: glitch 5s linear infinite;
  -o-animation: glitch 5s linear infinite;
  animation: glitch 5s linear infinite;
}

@media only screen and (max-width: 600px) {
  #project-canvas-div {
    display: none;
  }
  .modal-details {
    display: none;
  }
  .project-sample {
    display: flex;
    font-size: smaller;
  }
}

@media only screen and (min-width: 600px) {
  #instructions,
  #tips {
    font-size: small;
  }
  .modal-details-content {
    width: 30em;
  }
  #project-canvas-div {
    display: block;
  }
  .modal-details {
    display: flex;
  }
  .project-sample {
    display: none;
  }
}

@media only screen and (min-width: 768px) {
  #instructions,
  #tips {
    font-size: unset;
  }
  .modal-details-content {
    width: 40em;
  }
  #project-canvas-div {
    display: block;
  }
  .modal-details {
    display: flex;
  }
  .project-sample {
    display: none;
  }
}

@media only screen and (min-width: 1024px) {
  #instructions,
  #tips {
    font-size: unset;
  }
  .modal-details-content {
    width: 50em;
  }
  #project-canvas-div {
    display: block;
  }
  .modal-details {
    display: flex;
  }
  .project-sample {
    display: none;
  }
}

@media only screen and (min-width: 1200px) {
  #instructions,
  #tips {
    font-size: unset;
  }

  .modal-details-content {
    width: 50em;
  }
  #project-canvas-div {
    display: block;
  }
  .modal-details {
    display: flex;
  }
  .project-sample {
    display: none;
  }
}

@media only screen and (max-height: 600px) {
  .screenshot-img {
    display: none;
  }
}
@media only screen and (min-height: 600px) {
  .screenshot-img {
    display: block;
  }
}
</style>
