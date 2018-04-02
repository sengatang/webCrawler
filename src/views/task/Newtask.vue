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
        <b-card>
          <div slot="header">
            <strong>任务</strong> 责任人
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
