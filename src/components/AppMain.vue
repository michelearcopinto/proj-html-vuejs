<script>
// import

export default {
  name: "AppMain",
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
  </main>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;

main {
  width: 60%;
  margin-inline: auto;
  margin-top: 80px;

  #cta-investing {
    display: flex;
    align-items: center;
    gap: 20px;

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
}
</style>
