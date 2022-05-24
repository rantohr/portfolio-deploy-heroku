<template>
  <!-- <Header @clickLink="clickLink($event)" />
  <div class="big-carousel">
    <div class="bio-carousel"><Bio /></div>
    <div class="xp-carousel"><Experience /></div>
    <div class="skill-carousel"><Skill /></div>
    <div class="prj-carousel"><Project /></div>
  </div>
  <Footer /> -->
  <Header />
  <Bio />
  <Experience />
  <Skill />
  <Project />
  <Footer /> 
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Bio from "@/views/Bio.vue";
import Experience from "@/views/Experience.vue";
import Skill from "@/views/Skill.vue";
import Project from "@/views/Projects.vue";
import * as certificate from "../assets/modules/threejs/certificates.js";
import * as bio from "../assets/modules/threejs/bio.js";
import * as project from "../assets/modules/threejs/house/project.js";
import * as THREE from "three";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Bio,
    Experience,
    Skill,
    Project,
  },

  data() {
    return {
      currentSituation: { div: "bio", position: 0 },
    };
  },
  mounted() {
    certificate.init();
    bio.init();

    const canvas = document.querySelector("canvas.project-canvas");
    const canvasDiv = document.querySelector("#project-canvas-div");
    project.init(canvas, canvasDiv);

    /**
     * RESIZE
     */
    window.addEventListener("resize", () => {
      certificate.resize();
      bio.resize();
      project.resize();
    });

    /**
     * EVENTS
     */
    document.addEventListener("scroll", (event) => {
      certificate.onScroll();
      bio.onScroll();
    });

    document.addEventListener("keydown", (event) => {
      project.onKeyDown(event);
    });

    document.addEventListener("keyup", (event) => {
      project.onKeyUp(event);
    });

    window.addEventListener(
      "mousemove",
      (event) => {
        certificate.onMouseMove(event); 
      },
      false
    );

    /**
     * ANIMATE
     */
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      bio.animate(clock);
      // project.animate(clock);
      certificate.renderer.render(certificate.scene, certificate.camera);
      bio.renderer.render(bio.scene, bio.camera);
      project.renderer.render(project.scene, project.camera);
    };
    animate();
  },

  methods: {
    clickLink(link) {
      if (this.currentSituation.div == link) return;

      let position = 0;
      switch (link) {
        case "xp":
          position = 100;
          break;
        case "skill":
          position = 200;
          break;
        case "prj":
          position = 300;
          break;
        default:
          position = 0;
          break;
      }
      const bigCarousel = document?.querySelector(".big-carousel");
      if (bigCarousel) {
        bigCarousel.style.transform = `translateX(-${position}vw)`;
      }
      this.currentSituation = { div: link, position: position };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.big-carousel {
  display: flex;
  width: 400vw;
  transition: 0.8s;
  // transform: translateX(-80vw);

  div {
    width: 100vw;
    height: 80vh;
  }
}
</style>
