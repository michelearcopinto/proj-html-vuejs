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
  computed: {
    filteredArray() {
      if (store.selectedCategory === "") {
        return store.coursesInfos.slice(0, 12);
      } else if (store.selectedCategory === "All Categories") {
        return store.coursesInfos;
      } else if (store.selectedCategory !== "") {
        return store.coursesInfos.filter(
          (course) => course.category === store.selectedCategory
        );
      }
    },
  },
  methods: {
    filterByCategory(category) {
      console.log(category);
      store.selectedCategory = category;
    },
    calcVote(num) {
      return 5 - num;
    },
    genRandomNum(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
};
</script>

<template>
  <main>
    <section id="cta-investing" class="main-container">
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
    <section id="cta-cards" class="main-container">
      <div v-for="card in cardsArray">
        <i :class="card.icon"></i>
        <h3>{{ card.title }}</h3>
        <p>{{ card.content }}</p>
      </div>
    </section>

    <section id="categories-grid" class="main-container">
      <div
        v-for="category in store.categoriesInfos"
        class="category-card"
        :class="category.doubleCourse ? 'double-card' : ''"
      >
        <div>
          <figure>
            <img :src="category.imgPath" alt="" />
          </figure>
          <div class="category-infos">
            <span>{{ category.title }}</span>
            <span> {{ category.courses }} Courses</span>
          </div>
        </div>
        <div>
          <figure v-show="category.doubleCourse">
            <img :src="category.imgPath2" alt="" />
          </figure>
          <div v-show="category.doubleCourse" class="category-infos">
            <span>{{ category.title2 }}</span>
            <span> {{ category.courses2 }} Courses</span>
          </div>
        </div>
      </div>
    </section>

    <section id="more-infos">
      <div class="main-container">
        <div>
          <h1>Limitless learning, more possibilities</h1>
          <p>
            Online courses open the opportunity for learning to almost anyone,
            regardless of their scheduling commitments.
          </p>
          <button>read more</button>
        </div>
      </div>
    </section>

    <section id="recent-courses">
      <h1>recent courses</h1>
      <div id="categories-buttons">
        <button @click="filterByCategory('')">all categories</button>
        <button @click="filterByCategory('Art')">art</button>
        <button @click="filterByCategory('Exercise')">exercise</button>
        <button @click="filterByCategory('Material Design')">
          material design
        </button>
        <button @click="filterByCategory('Music')">music</button>
        <button @click="filterByCategory('Photography')">photography</button>
        <button @click="filterByCategory('Software Development')">
          software development
        </button>
      </div>
      <div id="courses-grid">
        <div v-for="course in filteredArray" class="course-card">
          <figure>
            <img :src="course.imgPath" alt="" />
          </figure>
          <div class="course-infos">
            <ul>
              <li>{{ course.category }} &gt;</li>
              <li>
                <h4>{{ course.title }}</h4>
              </li>
            </ul>
            <hr />
            <div class="course-extra-infos">
              <div class="stars-container" v-if="course.average_vote !== 0">
                <img
                  v-for="star in course.average_vote"
                  src="../assets/img/starfull.svg"
                  alt="starfull"
                />
                <img
                  v-for="emptyStar in calcVote(course.average_vote)"
                  src="../assets/img/staremptyl.svg"
                  alt="staremptyl"
                />
                <span>{{ course.average_vote }}</span>
              </div>
              <div class="course-time" v-else>
                <span
                  ><i class="fa-regular fa-clock"></i>
                  {{ genRandomNum(2, 12) }} hours</span
                >
              </div>
              <div class="price-container">
                <span :class="course.sale ? 'strikethrough-price' : ''">
                  {{ course.price }}</span
                >
                <span> {{ course.sale }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button @click="filterByCategory('All Categories')">show all</button>
    </section>

    <section id="proud-infos">
      <div>
        <h1>We are Proud</h1>
        <p>
          Certificate coursed are instructed by highly educated and qualified
          instructors who hold doctoral master's level degrees.
        </p>
      </div>
      <div id="number-counts">
        <div>
          <h1>2000</h1>
          <span>students</span>
        </div>
        <div>
          <h1>950</h1>
          <span>courses</span>
        </div>
        <div>
          <h1>1600</h1>
          <span>hours video</span>
        </div>
        <div>
          <h1>150</h1>
          <span>countries reached</span>
        </div>
      </div>
      <img src="../assets/img/we_proud.png" alt="" />
    </section>
    <section id="newsletter">
      <div class="main-container">
        <div id="newsletter-info">
          <h3>Subscribe our newsletter</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words
          </p>
        </div>
        <div class="search-container">
          <span>YOUR E-MAIL ADDRESS</span>
          <div>
            <input type="text" placeholder="Enter your E-mail" />
            <button>SUBSCRIBE</button>
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

.strikethrough-price {
  color: $light-color;
  text-decoration: line-through;
  font-size: 14px;
}

main {
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
      @include title-content-button;
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

  #categories-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 120px;

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

  #more-infos {
    background-image: url("../assets/img/Untitled-1-1-1-1-1.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 450px;
    margin-bottom: 120px;

    .main-container {
      height: 100%;

      div {
        height: 100%;
        width: 50%;

        display: flex;
        flex-direction: column;
        gap: 30px;
        font-size: 20px;
        @include title-content-button;
        justify-content: center;
      }
    }
  }

  #recent-courses {
    width: 90%;
    margin-inline: auto;
    margin-bottom: 80px;

    h1 {
      font-size: 50px;
      font-weight: 300;
      text-align: center;
      text-transform: capitalize;
    }

    #categories-buttons {
      padding-block: 25px 40px;
      display: flex;
      justify-content: center;
      gap: 30px;

      button {
        @include pill-button;
        @include light-button;
        text-transform: capitalize;
      }
    }

    #courses-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;

      .course-card {
        width: calc((100% - 5 * 10px) / 6);
        border: 1px solid rgba($color: #000000, $alpha: 0.1);

        &:hover {
          cursor: pointer;
        }

        &:hover figure {
          filter: brightness(0.8);
        }

        .course-infos {
          padding: 10px;

          ul {
            li:first-child {
              color: $light-color;
              margin-bottom: 5px;
            }
          }

          hr {
            margin-block: 10px;
            border: 1px solid rgba($color: #000000, $alpha: 0.1);
          }

          .course-extra-infos {
            display: flex;
            justify-content: space-between;

            .stars-container {
              display: flex;
              align-items: center;

              span {
                padding-left: 5px;
              }

              img {
                width: 15px;
              }
            }

            .price-container {
              display: flex;
              flex-direction: column;
              align-items: end;
            }

            .course-time {
              color: $light-color;
            }
          }
        }
      }
    }

    & > button {
      @include blue-button;
      @include pill-button;
      text-transform: uppercase;
      margin-inline: auto;
      display: block;
      margin-top: 50px;
    }
  }

  #proud-infos {
    background-color: $background-proud-card;
    text-align: center;
    padding-top: 40px;
    height: 520px;
    position: relative;
    @include title-content-button;

    p {
      margin-top: 20px;
    }

    span,
    p {
      color: $light-color;
    }

    div:first-child {
      @include title-content-button;
      margin-inline: auto;
      width: 50%;
    }

    #number-counts {
      display: flex;
      margin-inline: auto;
      width: 70%;
      margin-top: 50px;

      div {
        width: calc(100% / 4);
        display: flex;
        flex-direction: column;

        h1 {
          padding-top: 10px;
        }

        span {
          padding-bottom: 10px;
          text-transform: uppercase;
        }
      }

      div:nth-child(2) {
        border-inline: 2px solid rgba(0, 0, 0, 0.1);
      }

      div:nth-child(3) {
        border-right: 2px solid rgba(0, 0, 0, 0.1);
      }
    }

    img {
      position: absolute;
      bottom: 0;
    }
  }

  #newsletter {
    background-color: $background-newsletter-card;
    padding-block: 50px;
    color: white;

    .main-container {
      width: 70%;
      display: flex;
      gap: 30px;

      #newsletter-info {
        width: 60%;
      }

      .search-container {
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        div {
          display: flex;

          input {
            background-color: $input-background;
            border: 0;
            padding: 8px;

            &::placeholder {
              color: $light-color;
            }
          }

          button {
            @include blue-button;
            padding: 5px 13px;
            font-weight: 800;
          }
        }
      }
    }
  }
}
</style>
