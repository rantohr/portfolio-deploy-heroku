<template>
  <div class="main-bio-div" id="bio">
    <div class="sub-bio-div">
      <div class="detail-bio-div">
        <div class="profile-pic">
          <img
            src="/images/profile-pic-min.png"
            alt=""
            style="transform: scaleX(-1); filter: grayscale(100%)"
          />
        </div>
        <div class="profile-description">
          <div class="profile-description-details">
            <div class="hi">
              <h2><span>Hi, I'm</span> Ranto Andriamanalina</h2>
            </div>
            <div class="glitch">
              <div class="glitcher">FULLSTACK JAVASCRIPT DEVELOPER</div>
            </div>
            <p>
              Passionate and quick learner engineer with 3 years of experiences,
              specialized in building 3D interactive web application, business
              and catalogue websites. Graduated with a master's degree in
              software development and data management (MBDS) from Côte d'Azur
              University (France). Offers experience in the project conception,
              and both front-end and back-end development.
            </p>
            <ul>
              <li>📅 February 25, 1999</li>
              <li>📧 rantoandriamanalina@gmail.com</li>
              <li>🏠 Antananarivo, Madagascar</li>
            </ul>
            <!-- <button role="button">Download my resume</button> -->
            <a class="button-a" role="button" href="/CV_2022-05-23_Ranto Herizo_Andriamanalina.pdf" download>Download my resume</a>
          </div>
        </div>
      </div>
      <div class="link-bio-div">
        <ul>
          <li>
            <a href="https://www.instagram.com/ranto_hr/">
              <img class="img-link" src="/images/insta-logo-min.png" alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ranto-andriamanalina">
              <img class="img-link" src="/images/linkdin-logo-min.png" alt="" />
            </a>
          </li>
        </ul>
      </div>
      <p class="warning">
        (⚠️ IMPORTANT: For 3D experience, please use a desktop/laptop)
      </p>
    </div>
    <div class="bio profile-decor">
      <canvas width="400" height="400" class="bio-canvas"></canvas>
    </div>
  </div>
  <div
    class="scroll-me glitcher"
    id="scrollme"
    style="position: absolute; width: 100vw; margin-top: 1em"
  >
    <div class="scroll-me scroll-me-content">
      <p class="scroll-me-p1">scroll to see more 🡣</p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const scrollme = document?.getElementById("scrollme");

    if (scrollme) {
      const myScrollFunc = () => {
        const y = window.scrollY;
        if (y < 300) {
          scrollme.style.display = "flex";
        } else {
          scrollme.style.display = "none";
        }
      };
      window.addEventListener("scroll", myScrollFunc);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.main-bio-div {
  width: 100vw;
  height: 85vh;
  position: relative;
  margin-top: 4em;
}

.bio {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.profile-pic {
  height: 85vh;
  float: left;
  margin-right: 1em;
  img {
    height: 100%;
    -webkit-mask-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 1)),
      to(rgba(0, 0, 0, 0))
    );
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }
}

.profile-description {
  display: flex;
  align-items: center;
  margin-left: 2em;
  position: relative;

  .profile-description-details {
    padding: 2em 0;

    button {
      margin-top: 1em;
      font-family: "Courier New", monospace;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin-top: 2em;

    li {
      margin-bottom: 0.85em;
    }
  }
}

.profile-decor {
  top: 0;
  right: 0;
  opacity: 0.05;
  transition: $transition * 4;
}

.sub-bio-div:hover + .profile-decor {
  opacity: 0.3;
}

.profile-decor:hover {
  opacity: 1;
}

.glitch {
  position: relative;
  color: #fff;
  font-size: 20pt;
}

.hi {
  span {
    color: white;
    font-size: small;
  }

  h2 {
    font-size: x-large;
    color: $secondaryColor;
  }
}

.sub-bio-div {
  display: flex;
  color: $textColor;
  justify-content: space-between;
  padding: 0 5em;
  z-index: 1;
  position: absolute;
}

.img-link {
  transition: 0.3s;
  width: 2em;
  height: 2em;
}

.img-link:hover {
  transform: scale(1.2);
}

.link-bio-div {
  display: flex;
  align-items: center;
  ul {
    list-style: none;
    li {
      margin-bottom: 3em;
    }
  }
}

.warning {
  margin: 0.2em 0;
}

.scroll-me {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;

  .scroll-me-content {
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 70px;

    p {
      margin: 0.5em;
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
  .profile-pic {
    display: none;
  }
  .sub-bio-div {
    padding: 0 1em;
    font-size: smaller;
    flex-direction: column;
  }
  .link-bio-div {
    ul {
      li {
        display: inline;
        margin-right: 2em;
      }
    }
  }
  .warning {
    display: block;
  }
  .profile-description-details {
    p {
      max-width: 90%;
    }
  }
}

@media only screen and (min-width: 600px) {
  .profile-pic {
    display: none;
  }
  .sub-bio-div {
    padding: 0 2em;
    flex-direction: row;
  }
  .link-bio-div {
    ul {
      li {
        display: block;
        margin-right: 0;
      }
    }
  }
  .warning {
    display: none;
  }
  .profile-description-details {
    p {
      max-width: 90%;
    }
  }
}

@media only screen and (min-width: 768px) {
  .profile-pic {
    display: block;
    height: 60vh;
  }
  .sub-bio-div {
    padding: 0 2em;
    flex-direction: row;
  }
  .link-bio-div {
    ul {
      li {
        display: block;
        margin-right: 0;
      }
    }
  }
  .warning {
    display: none;
  }
  .profile-description-details {
    p {
      max-width: 95%;
    }
  }
}

@media only screen and (min-width: 1024px) {
  .profile-pic {
    display: block;
    height: 85vh;
  }
  .sub-bio-div {
    padding: 0 5em;
    flex-direction: row;
  }
  .link-bio-div {
    ul {
      li {
        display: block;
        margin-right: 0;
      }
    }
  }
  .warning {
    display: none;
  }
  .profile-description-details {
    p {
      max-width: 92%;
    }
  }
}

@media only screen and (min-width: 1200px) {
  .profile-pic {
    display: block;
    height: 85vh;
  }
  .sub-bio-div {
    padding: 0 5em;
    flex-direction: row;
  }
  .link-bio-div {
    ul {
      li {
        display: block;
        margin-right: 0;
      }
    }
  }
  .warning {
    display: none;
  }
  .profile-description-details {
    p {
      max-width: 70%;
    }
  }
}
</style>
