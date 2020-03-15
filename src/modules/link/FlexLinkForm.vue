<template>
  <div>
    <el-dialog title="申请友情链接" :visible.sync="flag">
      <el-form :model="form" :rules="rules" ref="linkApplyForm">
        <el-form-item prop="linkTitle" label="网站标题：" :label-width="formLabelWidth">
          <el-input v-model="form.linkTitle"></el-input>
        </el-form-item>
        <el-form-item prop="linkDescription" label="网站介绍：" :label-width="formLabelWidth">
          <el-input v-model="form.linkDescription"></el-input>
        </el-form-item>
        <el-form-item prop="linkImage" label="网站插图：" :label-width="formLabelWidth">
          <el-input v-model="form.linkImage"></el-input>
        </el-form-item>
        <el-form-item prop="linkLocation" label="网站地址：" :label-width="formLabelWidth">
          <el-input v-model="form.linkLocation"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="flag = false">取 消</el-button>
        <el-button type="primary" @click="beforeSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { applyFriendLink } from "../../../static/js/api/link.api";
export default {
  data() {
    return {
      rules: {
        linkDescription: [
          { required: true, message: "请输入您的网站介绍", trigger: "blur" }
        ],
        linkLocation: [
          { required: true, message: "请输入您的网站地址", trigger: "blur" }
        ],
        linkImage: [
          { required: true, message: "请输入您的网站图标", trigger: "blur" }
        ],
        linkTitle: [
          { required: true, message: "请输入您的网站标题", trigger: "blur" }
        ]
      },
      formLabelWidth: "120px",
      flag: false,
      form: {
        linkLocation: "",
        linkDescription: "",
        linkImage: "",
        linkTitle: ""
      }
    };
  },
  mounted() {
    this.$notify({
      title: "申请友链",
      dangerouslyUseHTMLString: true,
      message: "<a herf='javascript:void(0)'>点击我申请友情链接！</a>",
      duration: 0,
      offset: 100,
      duration: 4000,
      onClick: this.open
    });
  },
  methods: {
    open() {
      if (this.flag == true) {
        this.flag = false;
      } else {
        this.flag = true;
      }
    },
    submitLink(name) {
      let that = this;
      this.$refs[name].validate(valid => {
        if (valid) {
          let friendLink = {
            FriendlinkTitle: that.form.linkTitle,
            FriendlinkImage: that.form.linkImage,
            Friendlink: that.form.linkLocation,
            FriendlinkIntroduce: that.form.linkDescription
          };
          applyFriendLink(friendLink).then(e => {
            if (e.code == 200) {
              this.$message({
                message: "提交成功,请等待管理员进行审核！",
                type: "success"
              });
            } else {
              this.$message({
                message: "提交失败,请稍后重试！",
                type: "error"
              });
            }
          });
          this.flag = false;
        } else {
          this.$message({
            message: "提交失败,请仔细验证！",
            type: "error"
          });
          return false;
        }
      });
    },
    beforeSubmit() {
      var userId = parseInt(document.getElementById("userId").innerText);
      if (userId !== 0) {
        this.submitLink("linkApplyForm");
      } else {
        this.$message({
          message: "请先登录哦！",
          type: "error"
        });
      }
    }
  }
};
</script>

<style>
.flex-form {
  position: fixed;
  top: 500px;
  margin: 0 auto;
}
</style>