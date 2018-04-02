<template>
  <b-row>
    <b-col md="12">
      <b-card>
          <div slot="header">
            <strong>Basic Form</strong> Elements
          </div>
          <!-- <b-row>
            <b-col sm="4">
                <b-form-group >
                    <label for="time">Time</label>
                    <b-form-select id="time"
                        :plain="true"
                        :options="['0:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00']">
                    </b-form-select>
                </b-form-group>
            </b-col>
            <b-col sm="4">
                <b-form-group >
                    <label for="week">Week</label>
                    <b-form-select id="week"
                        :plain="true"
                        :options="['Mon','Tue','Wed','Thur','Fri','Sat','Sun']">
                    </b-form-select>
                </b-form-group>
            </b-col>
            <b-col sm="4">
                <b-form-group>
                    <label for="year1">Year</label>
                    <b-form-select id="year1"
                        :plain="true"
                        :options="[2018,2019,2020,2021,2022,2023,2024,2025]">
                    </b-form-select>
                </b-form-group>
            </b-col>
          </b-row> -->
          <b-form-group
            label="ChooseTime"
            label-for="basicInlineCheckboxes"
            :label-cols="3"
            :horizontal="true">
            <b-form-checkbox-group id="basicInlineCheckboxes" name="InlineCheckboxes" :plain="true" :checked="[1]">
              <b-form-checkbox :plain="true" value="1">0:00 - 6:00</b-form-checkbox>
              <b-form-checkbox :plain="true" value="2">6:00 - 12:00</b-form-checkbox>
              <b-form-checkbox :plain="true" value="3">12:00 - 18:00</b-form-checkbox>
              <b-form-checkbox :plain="true" value="4">18:00 - 24:00</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
          <b-form-group
            label="ChooseDay"
            label-for="dayCheckboxes"
            :label-cols="3"
            :horizontal="true">
            <b-form-checkbox-group id="dayCheckboxes" name="dayCheckboxes" :plain="true" :checked="[1]">
              <b-form-checkbox :plain="true" value="7">Sun</b-form-checkbox>
              <b-form-checkbox :plain="true" value="1">Mon</b-form-checkbox>
              <b-form-checkbox :plain="true" value="2">Tue</b-form-checkbox>
              <b-form-checkbox :plain="true" value="3">Wed</b-form-checkbox>
              <b-form-checkbox :plain="true" value="4">Thus</b-form-checkbox>
              <b-form-checkbox :plain="true" value="5">Fri</b-form-checkbox>
              <b-form-checkbox :plain="true" value="6">Sat</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>

          <b-form-group
            label="Tag"
            label-for="basicTextarea"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="basicTextarea" :textarea="true" :rows="9" placeholder="请输入该任务的标签"></b-form-input>
          </b-form-group>
          <b-form-group
            label="上传解析脚本"
            label-for="fileInput"
            :label-cols="3"
            :horizontal="true">
              <b-form-file id="fileInput" :plain="true"></b-form-file>
          </b-form-group>
          <div slot="footer">
            <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
            <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
          </div>
        </b-card>
      <b-card no-body>
        <div slot="header">
          Sizes
        </div>
        <b-card-body class="p-0">
          <b-table hover striped responsive="sm" class="table-align-middle mb-0" :items="items" :fields="fields">
            <template slot="example" slot-scope="data">
              <c-switch :type="data.value.type" :variant="data.value.variant" :size="data.value.size" :checked="data.value.checked"/>
            </template>
          </b-table>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
  import cSwitch from '../components/Switch'

  export default {
    name: 'switches',
    components: {
      cSwitch
    },
    computed: {
      icon (icon) {
        return icon
      }
    },
    data: () => {
      return {
        fields: [
          {key: 'size'},
          {key: 'example'},
          {key: 'css_class', label: 'CSS Class'}
        ],
        items: [
          {size: 'Large', example: {type: '3d', variant: 'primary', size: 'lg', checked: true}, css_class: 'Add following code <code>size="lg"</code>'},
          {size: 'Normal', example: {type: '3d', variant: 'primary', size: '', checked: true}, css_class: '-'},
          {size: 'Small', example: {type: '3d', variant: 'primary', size: 'sm', checked: true}, css_class: 'Add following code <code>size="sm"</code>'},
          {size: 'Extra small', example: {type: '3d', variant: 'primary', size: 'xs', checked: true}, css_class: 'Add following code <code>size="xs"</code>'}
        ]
      }
    }
  }
</script>
