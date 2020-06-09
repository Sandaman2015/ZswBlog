<template>
  <div id="particles-js">
    <div class="login-top">
      <div class="demo">
        <el-container>
          <el-row>
            <el-col :span="24" :offset="3">
              <el-form
                :model="emailValidateForm"
                ref="emailValidateForm"
                label-width="20px"
                class="form-horizontal"
                :rules="rules"
              >
                <span class="heading">ZswBlog</span>
                <el-form-item>
                  <p>您填写的地址只会用于邮箱回复，请放心填写，提交后会自动跳转至首页！感谢您的浏览！</p>
                </el-form-item>
                <el-form-item prop="email" class="form-group">
                  <i class="fa fa-envelope-o"></i>
                  <input
                    type="email"
                    v-model="emailValidateForm.email"
                    autocomplete="off"
                    class="form-control"
                    id="inputEmail3"
                    placeholder="请填写电子邮件"
                  />
                </el-form-item>
                <el-form-item class="form-group">
                  <el-button @click="submitForm('emailValidateForm')" class="btn btn-default">提交</el-button>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </el-container>
      </div>
    </div>
  </div>
</template>

<script>
import NProgress from "nprogress";
NProgress.start(); //开始
import { WOW } from "wowjs";
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
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let id = getCookie("userId");
          if (id !== null) {
            let User = {
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
            this.$alert("你没登陆就跳过来？", "未登录", {
              confirmButtonText: "确定",
              callback: action => {
                window.location.href =
                  "https://graph.qq.com/oauth2.0/authorize?client_id=101858486&response_type=token&scope=all&redirect_uri=http://www.zswblog.xyz/index.html";
              }
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
* {
  margin: 0;
  padding: 0;
}
#particles-js {
  position: relative;
  background: url("https://singleblog.oss-cn-beijing.aliyuncs.com/images/bg_1.jpg")
    no-repeat fixed center;
  /* background-position: 50% 50%; */
  background-size: 100% 100%;
  background-attachment: fixed;
}
.form-horizontal {
  background: #fff;
  padding-bottom: 40px;
  border-radius: 15px;
  text-align: center;
}
.form-horizontal .heading {
  display: block;
  font-size: 25px;
  font-weight: 600;
  padding: 35px 0;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 30px;
}
.form-horizontal .form-group {
  padding: 0 40px;
  margin: 0 0 25px 25px;
  position: relative;
}
.form-horizontal .form-control {
  background: #f0f0f0;
  border: none;
  border-radius: 20px;
  box-shadow: none;
  padding: 0 20px 0 45px;
  height: 40px;
  transition: all 0.3s ease 0s;
}
.form-horizontal .form-control:focus {
  background: #e0e0e0;
  box-shadow: none;
  outline: 0 none;
}
.form-horizontal .form-group i {
  position: absolute;
  top: 12px;
  left: 60px;
  font-size: 17px;
  color: #c8c8c8;
  transition: all 0.5s ease 0s;
}
.form-horizontal .form-control:focus + i {
  color: #00b4ef;
}

.form-horizontal .text {
  float: left;
  margin-left: 7px;
  line-height: 20px;
  padding-top: 5px;
  text-transform: capitalize;
}
.form-horizontal .btn {
  float: right;
  height: 35px;
  font-size: 14px;
  color: #fff;
  background: #00b4ef;
  border-radius: 30px;
  padding: 10px 25px;
  border: none;
  text-transform: capitalize;
  transition: all 0.5s ease 0s;
}
@media only screen and (max-width: 479px) {
  .form-horizontal .form-group {
    padding: 0 25px;
  }
  .form-horizontal .form-group i {
    left: 45px;
  }
  .form-horizontal .btn {
    padding: 10px 20px;
  }
}
.login-top {
  position: fixed;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 670px;
  height: 320px;
}
</style>
