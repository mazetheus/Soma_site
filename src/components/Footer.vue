<template>
  <footer class="footer container-fluid">
    <div class="row">
      <div class="col-12 text-center">
        <a href="http://aagenciadigital.com" target="__blank"><img src="@/assets/aagencia.png" class="img img-fluid"/></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
  .footer {
    border-top: 4px solid #fb9527;
    padding: 24px;
  }

  .img {
    width: 10vw;
  }

  @media (max-width: 768px) {
    .img {
      width: 13vw;
    }
  }

  @media (max-width: 576px) {
    .img {
      width: 32vw;
    }
  }
</style>
