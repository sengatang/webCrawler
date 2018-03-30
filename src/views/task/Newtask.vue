<template>
      <b-row>
      <b-col md="12">
        <b-card>
          <div slot="header">
            <strong>Basic Form</strong> Elements
          </div>
          <b-form-group
            description="Let us know your desired URL."
            label="Enter URL"
            label-for="URL"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="URL" type="text"></b-form-input>
          </b-form-group>
          <b-form-group
            description="This is a help text"
            label="Text Input"
            label-for="basicText"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="basicText" type="text" placeholder="Text"></b-form-input>
          </b-form-group>
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
            label="Disabled Input"
            label-for="basicInputDisabled"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="basicInputDisabled" type="text" :disabled="true" placeholder="Disabled"></b-form-input>
          </b-form-group>
          <b-form-group
            label="Textarea"
            label-for="basicTextarea"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="basicTextarea" :textarea="true" :rows="9" placeholder="Content.."></b-form-input>
          </b-form-group>
          <b-form-group
            label="Select"
            label-for="basicSelect"
            :label-cols="3"
            :horizontal="true">
            <b-form-select id="basicSelect"
              :plain="true"
              :options="['Please select','Option 1', 'Option 2', 'Option 3']"
              value="Please select">
            </b-form-select>
          </b-form-group>
          <b-form-group
            label="Select large"
            label-for="basicSelectLg"
            :label-cols="3"
            :horizontal="true">
            <b-form-select id="basicSelectLg"
              size="lg"
              :plain="true"
              :options="['Please select','Option 1', 'Option 2', 'Option 3']"
              value="Please select">
            </b-form-select>
          </b-form-group>
          <b-form-group
            label="Select small"
            label-for="basicSelectSm"
            :label-cols="3"
            :horizontal="true">
            <b-form-select id="basicSelectSm"
              size="sm"
              :plain="true"
              :options="['Please select','Option 1', 'Option 2', 'Option 3']"
              value="Please select">
            </b-form-select>
          </b-form-group>
          <b-form-group
            label="Disabled select"
            label-for="basicSelectDisabled"
            :label-cols="3"
            :horizontal="true">
            <b-form-select id="basicSelectDisabled"
              :plain="true"
              :options="['Please select','Option 1', 'Option 2', 'Option 3']"
              :disabled="true"
              value="Please select">
            </b-form-select>
          </b-form-group>
          <b-form-group
            label="Select"
            label-for="basicMultiSelect"
            :label-cols="3"
            :horizontal="true">
            <b-form-select id="basicMultiSelect"
              :plain="true"
              :multiple="true"
              :options="[
                {
                  text: 'Please select some item',
                  value: null
                },
                {
                  text: 'This is First option',
                  value: 'a'
                }, {
                  text: 'Default Selected Option',
                  value: 'b'
                }, {
                  text: 'This is another option',
                  value: 'c'
                }, {
                  text: 'This one is disabled',
                  value: 'd',
                  disabled: true
                }]"
              :value="[null,'c']">
            </b-form-select>
          </b-form-group>
          <b-form-group
            label="Radios"
            label-for="basicRadios"
            :label-cols="3"
            :horizontal="true">
            <b-form-radio-group id="basicRadios"
              :plain="true"
              :options="[
                {text: 'Option 1 ',value: '1'},
                {text: 'Option 2 ',value: '2'},
                {text: 'Option 3 ',value: '3'}
              ]"
              checked="2"
              stacked>
            </b-form-radio-group>
          </b-form-group>
          <b-form-group
            label="Inline radios"
            label-for="basicInlineRadios"
            :label-cols="3"
            :horizontal="true">
            <b-form-radio-group id="basicInlineRadios"
              :plain="true"
              :options="[
                {text: 'Option 1 ',value: '1'},
                {text: 'Option 2 ',value: '2'},
                {text: 'Option 3 ',value: '3'}
              ]"
              :checked="3">
            </b-form-radio-group>
          </b-form-group>

          <b-form-group
            label="Checkboxes"
            label-for="basicCheckboxes"
            :label-cols="3"
            horizontal>
            <b-form-checkbox-group stacked id="basicCheckboxes" name="Checkboxes" :plain="true" :checked="[2,3]">
              <b-form-checkbox value="1">Option 1</b-form-checkbox>
              <b-form-checkbox value="2">Option 2</b-form-checkbox>
              <b-form-checkbox value="3">Option 3</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>

          <!--custom controls - radios/checkboxes - temporary fix-->
          <b-form-group
            label="Radios - custom"
            label-for="basicRadiosCustom"
            :label-cols="3"
            :horizontal="true">
            <b-form-radio-group
              id="basicRadiosCustom"
              value="1"
              stacked>
              <div class="custom-control custom-radio">
                <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" value="1">
                <label class="custom-control-label" for="customRadio1">Option 1</label>
              </div>
              <div class="custom-control custom-radio">
                <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" value="2" checked>
                <label class="custom-control-label" for="customRadio2">Option 2</label>
              </div>
              <div class="custom-control custom-radio">
                <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input" value="3">
                <label class="custom-control-label" for="customRadio3">Option 3</label>
              </div>
            </b-form-radio-group>
          </b-form-group>
          <b-form-group
            label="Inline radios - custom"
            label-for="basicCustomRadios1"
            :label-cols="3"
            :horizontal="true">
            <b-form-radio-group
              id="basicCustomRadios1"
              name="customRadioInline1">
              <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input" value="1">
                <label class="custom-control-label" for="customRadioInline1">Option 1</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input" value="2" checked>
                <label class="custom-control-label" for="customRadioInline2">Option 2</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline3" name="customRadioInline1" class="custom-control-input" value="3">
                <label class="custom-control-label" for="customRadioInline3">Option 3</label>
              </div>
            </b-form-radio-group>
          </b-form-group>
          <b-form-group
            label="Checkboxes - custom"
            label-for="basicCustomCheckboxes"
            :label-cols="3"
            :horizontal="true">
            <b-form-checkbox-group stacked id="basicCustomCheckboxes">
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customChk1" value="1" checked>
                <label class="custom-control-label" for="customChk1">Option 1</label>
              </div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customChk2" value="2">
                <label class="custom-control-label" for="customChk2">Option 2</label>
              </div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customChk3" value="3">
                <label class="custom-control-label" for="customChk3">Option 3</label>
              </div>
            </b-form-checkbox-group>
          </b-form-group>
          <b-form-group
            label="Inline checkboxes - custom"
            label-for="basicInlineCustomCheckboxes"
            :label-cols="3"
            :horizontal="true">
            <b-form-checkbox-group id="basicInlineCustomCheckboxes">
              <div class="custom-control custom-checkbox custom-control-inline">
                <input type="checkbox" class="custom-control-input" id="customInChk1" value="1">
                <label class="custom-control-label" for="customInChk1">Option 1</label>
              </div>
              <div class="custom-control custom-checkbox custom-control-inline">
                <input type="checkbox" class="custom-control-input" id="customInChk2" value="2" checked>
                <label class="custom-control-label" for="customInChk2">Option 2</label>
              </div>
              <div class="custom-control custom-checkbox custom-control-inline">
                <input type="checkbox" class="custom-control-input" id="customInChk3" value="3">
                <label class="custom-control-label" for="customInChk3">Option 3</label>
              </div>
            </b-form-checkbox-group>
          </b-form-group>
          <b-form-group
            label="File input"
            label-for="fileInput"
            :label-cols="3"
            :horizontal="true">
              <b-form-file id="fileInput" :plain="true"></b-form-file>
          </b-form-group>
          <b-form-group
            label="Multiple file input"
            label-for="fileInputMulti"
            :label-cols="3"
            :horizontal="true">
              <b-form-file id="fileInputMulti" :plain="true" :multiple="true"></b-form-file>
          </b-form-group>
          <div slot="footer">
            <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
            <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
          </div>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Inline</strong> Form
          </div>
          <!-- Bootstrap Vue has some problems with Inline forms that's why we use some standard bootstrap classes -->
          <b-form inline>
            <label class="mr-sm-2" for="inlineInput1">Name: </label>
            <b-input id="inlineInput1" type="text" placeholder="Jane Doe"></b-input>
            <label class="mx-sm-2" for="inlineInput2">Email: </label>
            <b-input id="inlineInput2" type="email" placeholder="jane.doe@example.com"></b-input>
          </b-form>
          <div slot="footer">
            <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
            <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
          </div>
        </b-card>
      </b-col>
    </b-row>
</template>