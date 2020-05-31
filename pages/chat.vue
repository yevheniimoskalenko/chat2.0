<template>
  <div>
    <div class="header">
      <h2>Chats</h2>
      <el-button icon="el-icon-plus">Create new Chat</el-button>
    </div>
    <div class="search">
      <el-form>
        <el-row type="flex">
          <el-col :span="21">
            <el-input v-model="controler.search" popper-class="input_search">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </el-col>
          <el-col :span="3">
            <el-select v-model="value" clearable placeholder="type">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
          </el-col>
        </el-row>
      </el-form>

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
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      size: 54,
      url: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      controler: {
        search: ''
      },
      options: [
        {
          value: 'Messages',
          label: 'Messages'
        }
      ],
      value: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.search {
  margin: 20px 0;
}

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
.el-button--default {
  background: linear-gradient(100.61deg, #7cb8f7 0%, #2a8bf2 100%);
  box-shadow: 10px 6px 25px rgba(42, 139, 242, 0.15), 4px 4px 25px rgba(42, 139, 242, 0.05), 6px 6px 25px rgba(42, 139, 242, 0.15);
  border-radius: 6px;
  color: #fff;
  height: 60px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header h2 {
  font-size: 36px;
  line-height: 26px;
  font-weight: 500;
}
</style>
