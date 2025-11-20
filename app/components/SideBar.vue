<script setup lang="ts">
const imgSrc = usePublicUrl('/images/Caleb.jpg')
</script>

<template>
  <CardView width="100%" height="100%">
    <div class="side-bar">
      <img :src="imgSrc" alt="Caleb" class="side-bar-img" />
      <h1 class="side-bar-title">Chen Chan Hsieh</h1>

      <div class="side-bar-nav">
        <div>Content</div>
      </div>

      <div class="side-bar-link">
        <a href="https://github.com/ayay459547" target="_blank">
          <XIcon type="fa" name="GithubSquare" size="1.5rem" />
        </a>
        <a
          href="https://www.linkedin.com/in/chen-chan-hsieh-7a6221392/"
          target="_blank"
        >
          <XIcon type="fa" name="Linkedin" size="1.5rem" />
        </a>
        <a href="https://medium.com/@ayay459547" target="_blank">
          <XIcon type="fa" name="Medium" size="1.5rem" />
        </a>
        <a href="https://ayay459547.blogspot.com/" target="_blank">
          <XIcon type="fa" name="Blogger" size="1.5rem" />
        </a>
      </div>
    </div>
  </CardView>
</template>

<style lang="scss" scoped>
.side-bar {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  &-img {
    width: 100%;
    max-width: 240px;
    height: auto;
    border-radius: 50%;
    display: block;
    margin: 0 auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &-title {
    font-weight: bold;
    text-align: center;
    color: #ffffff;
    text-shadow: 2px 2px 4px #00000080;
    font-size: 2rem;

    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  &-nav {
    flex: 1;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-link {
    display: flex;
    justify-content: space-evenly;
    color: #ffffff;
  }
}
</style>
