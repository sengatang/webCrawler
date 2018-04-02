<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col lg="12">
        <c-table caption="<i class='fa fa-align-justify'></i> 代理列表"></c-table>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import cTable from '../base/Table.vue'

  export default {
    name: 'tables',
    components: {cTable}
  }
</script>
  

