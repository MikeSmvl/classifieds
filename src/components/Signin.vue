<template>
  <b-container>
    <b-row>
      <b-col cols="9">
        <div style="padding:40px;border: 1px solid rgba(0, 0, 0, .15);border-radius: .25rem;background-color:white;">
          <h4 class="w-100">Sign In</h4>
          <label for="UsernameInput" style="margin-top:20px;">Username:</label>
          <b-form-input class="w-50" id="UsernameInput" type="text"></b-form-input>
          <label for="PasswordInput" style="margin-top:20px;">Password:</label>
          <b-form-input class="w-50" id="PasswordInput" type="password" style="margin-bottom:20px;"></b-form-input>
          <b-button size="md" class="my-2 my-md-0" type="button" style="border: 1px solid #7DC780;background-color:#7DC780;color:#FFFFFF;">Sign In</b-button>
        </div>
      </b-col>
      <b-col cols="3">
        <div style="border: 1px solid rgba(0, 0, 0, .15);border-radius: .25rem;background-color:white;">
          <div style="padding-top:30px;padding-bottom:30px;padding-right:20px;padding-left:20px;">
            <div class="row">
              <span style="margin:auto;">Not registered yet?</span>
              <button class="btn w-100" style="color:white;background-color: #3097D1;margin-right:20px;margin-left:20px;margin-top:20px;">Register Now</button>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
  export default {}

</script>