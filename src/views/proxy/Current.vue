<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col lg="12">
        <b-form-group>
          <label for="proxy_search">搜索</label>
          <input v-model="search" class="form-control" placeholder="请输入URL搜索..." id="proxy_search">
        </b-form-group>
        <c-table caption="<i class='fa fa-align-justify'></i> 代理列表"></c-table>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import cTable from '../base/Table.vue'

  export default {
    name: 'tables',
    components: {cTable},
    methods: {
      sortBy: function (sortKey) {
        this.reverse = (this.sortKey === sortKey) ? !this.reverse : false

        this.sortKey = sortKey
      },
      addUser: function () {
        this.users.push(this.newUser)
        this.newUser = {}
      }
    }
  }
</script>
  

