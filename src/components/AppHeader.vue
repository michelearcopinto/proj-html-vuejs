<script>
// import

export default {
  name: "AppHeader",
  data() {
    return {
      sectionsListArray: [
        { name: "courses", absoluteValue: "", visibility: false },
        { name: "zoom", absoluteValue: "new", visibility: true },
        { name: "pages", absoluteValue: "", visibility: false },
        { name: "bundles", absoluteValue: "", visibility: false },
        { name: "course formats", absoluteValue: "", visibility: false },
        { name: "add course", absoluteValue: "new", visibility: true },
        { name: "demos", absoluteValue: "", visibility: false },
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
            <ul id="list-elements">
              <li v-for="listElement in sectionsListArray">
                <a href="">{{ listElement.name }}</a>
                <div v-show="listElement.visibility">
                  {{ listElement.absoluteValue }}
                </div>
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
        <div id="links-container">
          <a href=""
            ><i class="fa-solid fa-bullhorn"></i> Become an Instructor</a
          >
          <a href=""><i class="fas fa-briefcase"></i> For Enterprise</a>
        </div>
        <div id="account-container">
          <a href=""><i class="fa-regular fa-user"></i> Log In</a>
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
  padding-top: 25px;
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

        #list-elements {
          gap: 25px;

          li {
            position: relative;

            div {
              position: absolute;
              top: -19px;
              right: -10px;
              font-size: 12px;
              color: white;
              background-color: $tag-element-color;
              border-radius: 4px 4px 4px 0px;
              padding: 2px 4px;
            }
          }
        }

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

    hr {
      margin-block: 20px;
    }

    #bottom-nav {
      @include header-width;
      display: flex;
      justify-content: space-between;
      align-items: center;

      #links-container {
        display: flex;
        align-items: center;
        gap: 20px;

        a {
          i {
            color: $blue-color;
          }
        }
      }

      .search-container {
        display: flex;
        align-items: center;
        gap: 10px;
        color: $light-color;

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

      #account-container {
        display: flex;
        align-items: center;
        gap: 25px;

        a,
        i {
          color: $blue-color;
        }

        button {
          @include blue-button;
          @include pill-button;
        }

        & > i {
          font-size: 22px;
        }
      }
    }
  }
}
</style>
