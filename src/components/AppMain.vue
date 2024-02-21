<script>
import { store } from "../store";

export default {
  name: "AppMain",
  data() {
    return {
      store,
      counterImg: 0,
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
      plansCardsArray: [
        {
          imgPath: "./src/assets/img/image_box_1-221x231.png",
          title: "Become an Instructor",
          content:
            "Teach what you love. Masterstudy gives you the tools to create a course.",
          button: "START TEACHING",
        },
        {
          imgPath: "./src/assets/img/image_box_2-234x231.png",
          title: "Setup For Business",
          content:
            "Get unlimited access to 2,500 of Udemy's top courses for your team.",
          button: "DOING BUSINESS",
        },
      ],
      testimonialsArray: [
        {
          imgPath:
            "background-image: url('./src/assets/img/brooke-cagle-224821-unsplash-1-1920x700.jpg')",
          name: "Martin Sub",
          occupation: "General Developer, Stylemix Themes",
          title: "Come as you are",
          content:
            "MasterStudy used is an excellent workshop whether you come as a counselor, advisor, administrator, or faculty member. I am going home empowered. I am looking forward to attending the On Course MasterStudy and the MasterStudy National Conference next year and facilitating the use of this excellent retention/student success course at my college.",
        },
        {
          imgPath:
            "background-image: url('./src/assets/img/testimonial-1-1917x640.jpg')",
          name: "Linda Green",
          occupation: "Product Manager, Apple Inc",
          title: "Investing for Your Future",
          content:
            "It is no exaggeration to say this MasterStudy experience was transformative–both professionally and personally. This workshop will long remain a high point of my life. Thanks again…. I am feeling energized and eager to start teaching my class next week. I can’t wait to use all of my new teaching tools. I will absolutely recommend this workshop to other educators!",
        },
        {
          imgPath:
            "background-image: url('./src/assets/img/micah-296507-unsplash-1-copy-1-1920x700.jpg')",
          name: "Mayn Red",
          occupation: "Xatashi, Froust Inc",
          title: "Paints of the Future",
          content:
            "The response to your MasterStudy has been really overwhelming! Those who participated in the workshop are spreading the word here on campus and the “buzz” is on. The VP of Instruction wants you to come back! Her goal is to have more faculty trained. She also wants to attend a workshop herself. Our President told me Masterstudy needs to be the cornerstone of our success program.”",
        },
      ],
    };
  },
  created() {
    setInterval(() => {
      this.counterImg === 2 ? (this.counterImg = 0) : this.counterImg++;
      console.log(this.counterImg);
    }, 9000);
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
      <div class="courses-grid">
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

    <section id="popular-courses">
      <div class="container">
        <h1>popular courses</h1>
        <span>Discover our most popular courses for self learning</span>
        <div class="courses-grid">
          <div
            v-for="course in store.coursesInfos.slice(0, 6)"
            class="course-card"
          >
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
        <div>
          <button><i class="fas fa-chevron-left"></i></button>
          <button><i class="fas fa-chevron-right"></i></button>
        </div>
      </div>
    </section>

    <section id="plans-cards">
      <div>
        <div v-for="card in plansCardsArray">
          <figure>
            <img :src="card.imgPath" alt="img" />
          </figure>
          <div>
            <h1>{{ card.title }}</h1>
            <p>{{ card.content }}</p>
            <button>{{ card.button }}</button>
          </div>
        </div>
      </div>
    </section>

    <section id="testimonials" :style="testimonialsArray[counterImg].imgPath">
      <div id="testimonial-box">
        <i class="fas fa-caret-right"></i>
        <h1>{{ testimonialsArray[counterImg].title }}</h1>
        <p>{{ testimonialsArray[counterImg].content }}</p>
        <div>
          <span
            ><strong>{{ testimonialsArray[counterImg].name }}</strong></span
          >
          <span>{{ testimonialsArray[counterImg].occupation }}</span>
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
    height: 540px;
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

  #popular-courses {
    margin-bottom: 80px;
    padding-top: 80px;
    padding-bottom: 50px;
    background-color: $background-proud-card;

    .container {
      width: 90%;
      margin-inline: auto;

      h1 {
        font-size: 50px;
        font-weight: 300;
        text-align: center;
        text-transform: capitalize;
        margin-bottom: 10px;
      }

      & > span {
        text-align: center;
        display: block;
        font-size: 20px;
        font-weight: 300;
        margin-bottom: 30px;
      }

      .course-card {
        background-color: white;
      }

      & > div {
        margin-top: 35px;
        width: fit-content;
        margin-inline: auto;

        button {
          padding: 5px 10px;
          background-color: white;
          border: 1px solid rgba($color: #000000, $alpha: 0.2);
          color: rgba($color: #000000, $alpha: 0.2);
          transition: all 0.3s ease;

          &:hover {
            background-color: $grey-color-hover;
            color: white;
            cursor: pointer;
          }
        }
      }
    }
  }

  #plans-cards {
    width: 90%;
    margin-inline: auto;
    margin-bottom: 80px;

    & > div {
      display: flex;
      gap: 30px;

      & > div {
        @include title-content-button;
        display: flex;
        align-items: center;
        gap: 30px;
        padding: 50px 15px;
        border: 1px solid rgba($color: #000000, $alpha: 0.1);

        div {
          display: flex;
          flex-direction: column;
          gap: 20px;

          h1 {
            font-size: 35px;
          }

          button {
            font-weight: 800;

            &:hover {
              background-color: $green-color-hover;
            }
          }
        }
      }
    }
  }

  #testimonials {
    height: 700px;
    background-size: cover;
    background-position: 55% 50%;
    background-repeat: no-repeat;
    transition: all 1s ease-in-out;
    position: relative;

    #testimonial-box {
      position: relative;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-90%, -50%);
      background-color: white;
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 50%;
      height: 550px;
      padding: 60px 80px;
      border-radius: 10px;

      i {
        position: absolute;
        font-size: 150px;
        right: -35px;
        top: 50%;
        transform: translateY(-50%);
        color: white;
      }

      h1 {
        font-size: 50px;
        font-weight: 300;
      }

      p {
        line-height: 30px;
      }

      div {
        span:first-child {
          display: block;
          margin-bottom: 5px;
        }
      }
    }
  }
}

.courses-grid {
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
          font-size: 13px;
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
</style>
