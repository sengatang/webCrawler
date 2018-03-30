<template>
    <b-row>
        <b-col md="12">
        <b-card>
          <div slot="header">
            <strong>Add new Proxy</strong>
          </div>
          <b-form-group
            label="Email"
            label-for="horizEmail"
            description="Please enter your email."
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="horizEmail" type="email" placeholder="Enter Email.."></b-form-input>
          </b-form-group>
          <b-form-group
            label="Password"
            label-for="horizPass"
            description="Please enter your password."
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="horizPass" type="password" placeholder="Enter Password.."></b-form-input>
          </b-form-group>
          <div slot="footer">
            <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
            <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
          </div>
        </b-card>
      </b-col>
    </b-row>
</template>
