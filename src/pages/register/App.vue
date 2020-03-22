<template>
  <div id="particles-js">
    <div class="login-top">
      <el-form
        :model="emailValidateForm"
        ref="emailValidateForm"
        label-width="100px"
        class="demo-ruleForm"
        :rules="rules"
      >
        <el-form-item label="邮箱地址:" prop="email">
          <el-input type v-model="emailValidateForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('emailValidateForm')">提交</el-button>
          <el-button @click="resetForm('emailValidateForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import NProgress from "nprogress";
NProgress.start(); //开始
import { WOW } from "wowjs";
import particlesJs from "particles.js";
import particlesConfig from "../../../static/data/particles.json";
import { addUserEmail } from "../../../static/js/api/login.api";
import { getCookie } from "../../../static/js/cookie";
export default {
  data() {
    return {
      rules: {
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          { type: "email", message: "请输入正确的邮箱地址", trigger: "blur" }
        ]
      },
      emailValidateForm: {
        email: ""
      }
    };
  },
  mounted() {
    new WOW().init();
    particlesJS("particles-js", particlesConfig);
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          var id = getCookie("userId");
          if (id !== null) {
            var User = {
              UserId: id,
              UserEmail: this.emailValidateForm.email
            };
            addUserEmail(User).then(e => {
              if (e.code == 200) {
                this.$message({
                  message: "提交成功,即将跳转到文章页面！",
                  type: "success"
                });
                window.location.href = "whisper.html";
              } else {
                this.$message({
                  message: "提交失败,请重新登录试试！",
                  type: "error"
                });
              }
            });
          } else {
            this.$message({
              message: "你没登陆就跳过来？没意思了！",
              type: "error"
            });
          }
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style socped>
html,
body {
  width: 100%;
  height: 100%;
}
#particles-js {
  position: relative;
  background: url("https://singleblog.oss-cn-beijing.aliyuncs.com/images/bg_1.jpg")
    no-repeat fixed center;
  background-position: 50% 50%;
  background-size: 100% 100%;
  background-attachment: fixed;
}
.login-top {
  position: fixed;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 450px;
  height: 250px;
}
label {
  color: white;
}
.el-form {
  margin: 0 auto;
  text-align: center;
}
</style>
