<script>
// import

export default {
  name: "AppHeader",
  data() {
    return {
      sectionsListArray: [
        "courses",
        "zoom",
        "pages",
        "bundles",
        "course formats",
        "add course",
        "demos",
      ],
      socialsListArray: [
        "fab fa-twitter",
        "fab fa-instagram",
        "fab fa-behance",
        "fab fa-dribbble",
        "fab fa-flickr",
        "fab fa-git",
        "fab fa-linkedin",
        "fab fa-pinterest",
      ],
    };
  },
};
</script>

<template>
  <header>
    <nav>
      <div id="upper-nav">
        <div id="upper-nav-left-side">
          <span>english</span>
          <i class="fas fa-chevron-down"></i>
        </div>
        <div id="upper-nav-right-side">
          <div>
            <ul>
              <li v-for="listElement in sectionsListArray">
                <a href="">{{ listElement }}</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li v-for="social in socialsListArray">
                <a href=""><i :class="social"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div id="bottom-nav">
        <figure>
          <img src="../assets/img/MasterStudy_logo.svg" alt="logo-header" />
        </figure>
        <div class="search-container">
          <span><i class="fas fa-bars"> category</i></span>
          <div>
            <input type="text" placeholder="Search courses" />
            <button><i class="fas fa-magnifying-glass"></i></button>
          </div>
        </div>
        <div>
          <span><i class="fa-solid fa-bullhorn"></i> Become an Instructor</span>
          <span><i class="fas fa-briefcase"></i> For Enterprise</span>
        </div>
        <div>
          <span><i class="fa-regular fa-user"></i> Log In</span>
          <button>SIGN UP</button>
          <i class="fa-regular fa-bookmark"></i>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;

header {
  padding-top: 20px;
  nav {
    #upper-nav {
      @include header-width;
      color: $light-color;
      text-transform: capitalize;
      display: flex;
      justify-content: space-between;

      #upper-nav-left-side {
        display: flex;
        gap: 5px;
      }

      #upper-nav-right-side {
        display: flex;
        gap: 40px;

        ul {
          display: flex;
          gap: 15px;

          a {
            color: $light-color;

            &:hover {
              color: black;
            }
          }
        }
      }
    }
  }

  hr {
    margin-block: 20px;
  }

  #bottom-nav {
    @include header-width;
    display: flex;
  }
}
</style>
