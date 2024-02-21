<script>
import { store } from "../store";

export default {
  name: "AppMain",
  data() {
    return {
      store,
      cardsArray: [
        {
          icon: "fa-solid fa-earth-americas",
          title: "Worldwide Recognize",
          content:
            "Our online course certificates can be used around the world and also in most popular universities and companies.",
        },
        {
          icon: "fa-solid fa-desktop",
          title: "Mostly Online Learning (sd)",
          content:
            "Masterstudy online certificates can be obtained in a range of specialized areas and typically take about a year to complete.",
        },
        {
          icon: "fa-regular fa-calendar-check",
          title: "Graduate in as little as 1 Year",
          content:
            "Online post-graduate certificates are a popular way to develop your professional qualifications of Masterstudy",
        },
      ],
    };
  },
};
</script>

<template>
  <main>
    <section id="cta-investing">
      <div id="cta-investing-texts">
        <h1>Start Investing in You</h1>
        <p>
          With over 1200 courses in 18 subjects, you're guaranteed to find
          something that's right for you.
        </p>
        <button>join for free</button>
      </div>
      <figure>
        <img src="../assets/img/base.png" alt="cta-image" />
        <img
          src="../assets/img/book1.png"
          alt="cta-image-book1"
          id="cta-image-book1"
        />
        <img
          src="../assets/img/book2.png"
          alt="cta-image-book2"
          id="cta-image-book2"
        />
        <img
          src="../assets/img/bubblespeech.png"
          alt="cta-image-bubblespeech"
          id="cta-image-bubblespeech"
        />
        <img
          src="../assets/img/magnifier.png"
          alt="cta-image-magnifier"
          id="cta-image-magnifier"
        />
        <img
          src="../assets/img/moon.png"
          alt="cta-image-moon"
          id="cta-image-moon"
        />
      </figure>
    </section>
    <section id="cta-cards">
      <div v-for="card in cardsArray">
        <i :class="card.icon"></i>
        <h3>{{ card.title }}</h3>
        <p>{{ card.content }}</p>
      </div>
    </section>
    <section id="courses-grid">
      <div
        v-for="course in store.coursesGridArray"
        class="category-card"
        :class="course.doubleCourse ? 'double-card' : ''"
      >
        <div>
          <figure>
            <img :src="course.imgPath" alt="" />
          </figure>
          <div class="category-infos">
            <span>{{ course.nameCategory }}</span>
            <span> {{ course.courses.length }} Courses</span>
          </div>
        </div>
        <div>
          <figure v-show="course.doubleCourse">
            <img :src="course.imgPath2" alt="" />
          </figure>
          <div v-show="course.doubleCourse" class="category-infos">
            <span>{{ course.nameCategory2 }}</span>
            <span> {{ course.courses2.length }} Courses</span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;

.double-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

main {
  width: 60%;
  margin-inline: auto;
  margin-top: 80px;

  #cta-investing {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 60px;

    #cta-investing-texts {
      display: flex;
      flex-direction: column;
      gap: 30px;
      font-size: 20px;

      h1 {
        font-size: 50px;
        font-weight: 300;
      }

      button {
        @include blue-button;
        @include pill-button;
        text-transform: uppercase;
        width: fit-content;
      }
    }

    figure {
      position: relative;

      img:first-child {
        width: 403px;
      }

      :not(img:first-child) {
        position: absolute;
      }

      #cta-image-book1 {
        width: 120px;
        top: 80px;
        right: 30px;
      }

      #cta-image-book2 {
        width: 150px;
        top: 190px;
        right: 100px;
      }

      #cta-image-bubblespeech {
        width: 50px;
        top: 44px;
        right: 26px;
      }

      #cta-image-magnifier {
        width: 45px;
        top: 215px;
        right: 50px;
      }

      #cta-image-moon {
        width: 45px;
        top: 80px;
        left: 72px;
        filter: grayscale(100%);
      }
    }
  }

  #cta-cards {
    display: flex;
    gap: 20px;
    margin-bottom: 80px;

    div {
      width: calc(100% / 3);
      background-color: $background-cta-card;
      padding: 30px;
      display: flex;
      flex-direction: column;
      gap: 25px;
      transition: transform 0.4s ease;

      &:hover {
        transform: translateY(-10px);
      }

      i {
        font-size: 50px;
        color: $blue-color;
      }

      h3 {
        font-weight: 500;
      }

      p {
        font-size: 14px;
        color: $light-color;
      }
    }
  }

  #courses-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    .category-card {
      width: calc((100% / 3) - 20px + (20px / 3));

      &:hover {
        cursor: pointer;
      }

      figure {
        overflow: hidden;

        img {
          transition: transform 0.4s ease;
        }

        &:hover img {
          transform: scale(1.05);
        }
      }

      .category-infos {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-top: 15px;
      }
    }

    .category-card:first-child {
      width: calc((100% / 3) * 2 - 20px + (20px / 3 * 2));
    }
  }
}
</style>
