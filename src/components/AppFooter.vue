<script>
// import

export default {
  name: "AppFooter",
  data() {
    return {
      blogArray: [
        {
          imgPath:
            "./src/assets/img/photo-1517520287167-4bbf64a00d66-150x150.jpeg",
          title: 'Our main target is to "Developing Yourself as a Leader"',
          date: "— August 9, 2018",
        },
        {
          imgPath:
            "./src/assets/img/photo-1490376840453-5f616fbebe5b-150x150.jpeg",
          title: "Those Other College Expenses You Aren't Thinking About",
          date: "— June 3, 2015",
        },
      ],
    };
  },
};
</script>

<template>
  <footer>
    <div>
      <h3>About</h3>
      <p>
        <a href="">Masterstudy</a> is Education WordPress theme featured by
        Learning Management System (LMS) for online education. Developed by
        <a href="">StylemixThemes.</a>
        <br />
        <br />
        Loremipsum dolor sit amet, onsectetur adipiscing elit. Morbi at egestas
        magna.
      </p>
      <div id="socials-footer">
        <i class="fab fa-facebook"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
      </div>
    </div>
    <div id="contacts-footer">
      <h3>Contacts</h3>
      <ul>
        <li>USA, Callifornia 20, First Avenue, <br />Callifornia</li>
        <li>Tel.: +1 212 458 300 32</li>
        <li>Fax: +1 212 375 24 14</li>
        <li>info@masterstudy.com</li>
      </ul>
    </div>
    <div id="pages-footer">
      <h3>Pages</h3>
      <ul>
        <li><a href="">About us</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Contact Us</a></li>
        <li><a href="">Shop</a></li>
        <li><a href="">Memberships</a></li>
      </ul>
    </div>
    <div>
      <h3>Blog</h3>
      <div>
        <div v-for="article in blogArray" class="blog-article">
          <figure>
            <img :src="article.imgPath" alt="" />
          </figure>
          <div class="article-infos">
            <h5>{{ article.title }}</h5>
            <span>{{ article.date }}</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;

footer {
  width: 90%;
  margin-inline: auto;
  padding-block: 50px;
  display: flex;
  gap: 20px;

  h3 {
    margin-bottom: 20px;
  }

  span,
  p,
  li {
    color: $light-color;
    font-size: 14px;
  }

  li {
    margin-bottom: 15px;
  }

  a {
    color: blue;
  }

  & > div {
    width: calc(100% / 4);
  }

  #socials-footer {
    margin-top: 15px;
    display: flex;
    gap: 15px;
    font-size: 25px;
    color: $light-color;

    i:hover {
      color: $blue-color;
    }
  }

  #contacts-footer {
    ul {
      li:nth-child(2) {
        margin-bottom: 2px;
      }
    }
  }

  #pages-footer {
    ul {
      margin-left: 1em;
      display: flex;
      flex-wrap: wrap;

      li {
        width: 50%;
        list-style-type: circle;

        a {
          color: $light-color;
        }
      }
    }
  }

  .blog-article {
    display: flex;
    gap: 15px;
    margin-bottom: 15px;

    figure {
      width: 20%;
    }

    .article-infos {
      width: 60%;
    }
  }
}
</style>
