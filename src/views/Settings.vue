<template>
    <b-row>
        <b-col md="12">
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
