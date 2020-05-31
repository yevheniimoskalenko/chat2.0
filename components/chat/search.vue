<template>
  <div class="search">
    <el-form>
      <el-row type="flex">
        <el-col :span="20">
          <el-input v-model="controler.search" class="search_input">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-select v-model="value" clearable placeholder="type">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      controler: {
        search: ''
      },
      value: '',
      options: [
        {
          value: 'messages',
          label: 'Messages'
        },
        {
          value: 'autor',
          label: 'Autor'
        }
      ]
    }
  }
}
</script>
