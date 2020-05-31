<template>
  <div class="messages">
    <el-card>
      <div class="message__container">
        <div class="header-message">
          <div class="autor">
            <el-avatar :size="size" :src="url"></el-avatar>
            <span class="name">Luy Robin</span>
          </div>
          <div class="date">
            <span>1 minute ago</span>
          </div>
        </div>
        <div class="message">
          <p>
            Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes).
          </p>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      size: 54
    }
  }
}
</script>
<style lang="scss" scoped>
.messages {
  margin: 25px 0;
}
.header-message {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.autor {
  display: flex;
  flex-direction: row;
  .name {
    color: #0d1c2e;
    font-weight: bold;
    margin-left: 20px;
  }
}
.message__container {
  padding: 33px 40px;
}
.message {
  margin-top: 22px;
  p {
    font-size: 16px;
    line-height: 26px;
  }
}
</style>
