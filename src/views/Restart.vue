<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="6">
        <Callout variant="info">
        <small class="text-muted">总爬虫数</small><br>
        <strong class="h4">123</strong>
        <div class="chart-wrapper">
            <callout-chart-example :data="[35, 23, 56, 22, 97, 23, 64]" variant="#20a8d8" width="80" height="30" />
        </div>
        </Callout>
      </b-col>
      <b-col>
        <Callout variant="danger">
        <small class="text-muted">当前活跃爬虫</small><br>
        <strong class="h4">43</strong>
        <div class="chart-wrapper">
            <callout-chart-example :data="[65, 59, 84, 84, 51, 55, 40]" variant="#f86c6b" width="80" height="30" />
        </div>
        </Callout>
      </b-col>
    </b-row>
    </div>
</template>
  
