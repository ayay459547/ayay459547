<script setup lang="ts">
const imgSrc = usePublicUrl('/images/Caleb.jpg')

const router = useRouter()

const toHome = () => {
  router.push('/')
}

</script>

<template>
  <CardView width="100%" height="100%">
    <div class="side-bar">
      <img :src="imgSrc" alt="Caleb" class="side-bar-img" @click="toHome" />
      <h1 class="side-bar-title">Chen Chan Hsieh</h1>

      <nav class="side-bar-nav">
        <ul class="side-bar-list">
          <li class="side-bar-item">
            <NuxtLink to="/skills">Professional Skills</NuxtLink>
          </li>
          <li class="side-bar-item">
            <NuxtLink to="/work">Work Experience</NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="side-bar-link">
        <a href="https://github.com/ayay459547" target="_blank">
          <XIcon type="fa" name="GithubSquare" size="1.8rem" />
        </a>
        <a
          href="https://www.linkedin.com/in/chen-chan-hsieh-7a6221392/"
          target="_blank"
        >
          <XIcon type="fa" name="Linkedin" size="1.8rem" />
        </a>
        <a href="https://medium.com/@ayay459547" target="_blank">
          <XIcon type="fa" name="Medium" size="1.8rem" />
        </a>
        <a href="https://ayay459547.blogspot.com/" target="_blank">
          <XIcon type="fa" name="Blogger" size="1.8rem" />
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
    cursor: pointer;

    transition: border 0.3s linear;
    border: 1px solid #ffffff00;
    &:hover {
      border: 1px solid #ffffff;
    }
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
    display: flex;
    justify-content: center;
    padding-top: 2rem;
  }

  &-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
  &-item {
    color: #ffffff;
    text-shadow: 2px 2px 4px #00000080;
    font-size: 1.8rem;

    @media screen and (max-width: 768px) {
      font-size: 1.1rem;
    }

    transition: color 0.3s linear;
    &:hover {
      color: #8ecaff;
    }
  }

  &-link {
    display: flex;
    justify-content: space-evenly;

    & a {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      transition: color 0.3s linear;
      color: #ffffff;
      &:hover {
        color: #8ecaff;
      }
    }
  }
}
</style>
