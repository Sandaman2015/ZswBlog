<template>
  <div>
    <div class="cont wow fadeInRight">
      <ul>
        <li v-for="(item,index) in commentList" ref="mainitem">
          <div class="main-reply">
            <div class="user-info">
              <!-- 图片的路径 -->
              <img :src="item.messageParent.userPortrait" alt="头像" class="userImage" />
              <p class="info">
                <!-- 用户名 -->
                <a href="javascript:void(0)" class="name white">{{item.messageParent.userName}}</a>
              </p>
              <div class="comment" v-html="item.messageParent.message"></div>
              <div class="more">
                <p class="date">
                  <i class="fa fa-calendar" aria-hidden="true"></i>
                  {{item.messageParent.messageDate|filterDate}}
                </p>
                <p class="location">
                  <i class="fa fa-location-arrow" aria-hidden="true"></i>
                  {{item.messageParent.location}}
                </p>
                <p class="browser">
                  <i class="fa fa-chrome" aria-hidden="true"></i>
                  {{item.messageParent.browser}}
                </p>
                <p class="submit">
                  <el-button type="text" class="reply fir-reply" @click="showEditor($event)">回复</el-button>
                </p>
              </div>
            </div>
            <div v-bind:class="{'editor-reply':true,'hide':true }">
              <form class="form">
                <div class="reply-box">
                  <editor ref="textArea" />
                </div>
                <div class="submit">
                  <el-button @click="mainSubmit(index,$event)" size="small">提交回复</el-button>
                  <span hidden>{{item.messageParent.userId}}</span>
                  <span hidden>{{item.messageParent.messageId}}</span>
                </div>
              </form>
            </div>
          </div>
          <div class="all-reply">
            <div class="reply-list" v-for="(replyEntry,replyIndex) in item.messagesChildren">
              <div class="user-info">
                <img :src="replyEntry.userPortrait" alt="头像" class="userImage" />
                <p class="info">
                  <a href="javascript:void(0)" class="name">{{replyEntry.userName}}</a>
                  <span class="ct">
                    &nbsp;&nbsp;回复&nbsp;&nbsp;
                    <a
                      href="javascript:void(0)"
                    >@{{replyEntry.targetUserName}}</a>&nbsp;&nbsp;:
                  </span>
                </p>
                <div class="comment sec-coment" v-html="replyEntry.message"></div>
                <div class="more">
                  <p class="date">
                    <i class="fa fa-calendar-o" aria-hidden="true"></i>
                    {{replyEntry.messageDate|filterDate}}
                  </p>
                  <p class="location">
                    <i class="fa fa-location-arrow" aria-hidden="true"></i>
                    {{replyEntry.location}}
                  </p>
                  <p class="browser">
                    <i class="fa fa-chrome" aria-hidden="true"></i>
                    {{replyEntry.browser}}
                  </p>
                  <p class="submit">
                    <el-button type="text" class="reply fir-reply" @click="showEditor($event)">回复</el-button>
                  </p>
                </div>
              </div>
              <div v-bind:class="{'editor-reply':true,'hide':isShow}">
                <form class="form">
                  <div class="reply-box">
                    <editor :ref="'replytextArea'+index" />
                  </div>
                  <div class="submit">
                    <el-button @click="replySubmit(index,replyIndex,$event)" size="small">提交回复</el-button>
                    <span hidden>{{replyEntry.userId}}</span>
                    <span hidden>{{replyEntry.messageId}}</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import EditorBar from "../../components/WangEditor";
import { getCookie } from "../../../static/js/cookie";
import { addMessage } from "../../../static/js/api/message.api";
export default {
  components: {
    editor: EditorBar
  },
  props: {
    commentList: {
      type: Array
    }
  },
  data() {
    return {
      isShow: true,
      replyText: ""
    };
  },
  filters: {
    filterDate(date) {
      return date.replace("T", " ");
    }
  },
  methods: {
    async mainSubmit(index, target) {
      const mainText = this.$refs.textArea[index].getContent();
      if (mainText !== "" && mainText !== "<p><br></p>") {
        var userId = document.getElementById("userId").innerText;
        if (parseInt(userId) !== 0) {
          if (getCookie("userEmail") !== null) {
            let ip = "";
            let url = "https://bird.ioliu.cn/ip";
            await this.$jsonp(url).then(e => {
              ip = e.data.ip;
            });
            let tUserId =
              target.target.parentElement.parentElement.childNodes[2].innerText;
            let tId = parseInt(
              target.target.parentElement.parentElement.childNodes[4].innerText
            );
            // 主回复
            var message = {
              Location: ip,
              Browser: this.getBrowser(),
              UserId: userId,
              Message1: mainText,
              TargetId: tId,
              TargetUserId: tUserId
            };
            await addMessage(message).then(e => {
              if (e.code == 200) {
                this.$message({
                  message: e.msg,
                  type: "success"
                });
                this.changeMessageList();
              } else if (e.code == 401) {
                this.$alert("请注册邮箱后再填写哦!", "未登录", {
                  confirmButtonText: "确定",
                  callback: action => {
                    window.location.href = "register.html";
                  }
                });
              } else {
                this.$message({
                  message: e.msg,
                  type: "error"
                });
              }
            });
          } else {
            this.$alert("请注册邮箱后再填写哦!", "未登录", {
              confirmButtonText: "确定",
              callback: action => {
                window.location.href = "register.html";
              }
            });
          }
        } else {
          this.$message({
            message: "请先登录哦！",
            type: "error"
          });
        }
      } else {
        this.$message({
          message: "再多写点字吧,我相信你的文笔！",
          type: "error"
        });
      }
    },
    async replySubmit(index, replyIndex, target) {
      switch (index) {
        case 0:
          this.replyText = this.$refs.replytextArea0[replyIndex].getContent();
          break;
        case 1:
          this.replyText = this.$refs.replytextArea1[replyIndex].getContent();
          break;
        case 2:
          this.replyText = this.$refs.replytextArea2[replyIndex].getContent();
          break;
        case 3:
          this.replyText = this.$refs.replytextArea3[replyIndex].getContent();
          break;
        case 4:
          this.replyText = this.$refs.replytextArea4[replyIndex].getContent();
          break;
      }
      if (this.replyText !== "" && this.replyText !== "<p><br></p>") {
        var userId = document.getElementById("userId").innerText;
        if (parseInt(userId) !== 0) {
          if (getCookie("userEmail") !== null) {
            let ip = "";
            let url = "https://bird.ioliu.cn/ip";
            await this.$jsonp(url).then(e => {
              ip = e.data.ip;
            });
            let tUserId =
              target.target.parentElement.parentElement.childNodes[2].innerText;
            let tId = parseInt(
              target.target.parentElement.parentElement.childNodes[4].innerText
            );
            // 主回复
            var message = {
              Location: ip,
              Browser: this.getBrowser(),
              UserId: userId,
              Message1: this.replyText,
              TargetId: tId,
              TargetUserId: tUserId
            };
            await addMessage(message).then(e => {
              if (e.code == 200) {
                this.$message({
                  message: e.msg,
                  type: "success"
                });
                this.changeMessageList();
              } else if (e.code == 401) {
                this.$alert("请注册邮箱后再填写哦!", "未登录", {
                  confirmButtonText: "确定",
                  callback: action => {
                    window.location.href = "register.html";
                  }
                });
              } else {
                this.$message({
                  message: e.msg,
                  type: "error"
                });
              }
            });
          } else {
            this.$alert("请注册邮箱后再填写哦!", "未登录", {
              confirmButtonText: "确定",
              callback: action => {
                window.location.href = "register.html";
              }
            });
          }
        } else {
          this.$message({
            message: "请先登录哦！",
            type: "error"
          });
        }
      } else {
        this.$message({
          message: "再多写点字吧,我相信你的文笔！",
          type: "error"
        });
      }
    },
    getBrowser() {
      var userAgent = navigator.userAgent; // 取得浏览器的userAgent字符串
      var broswer = "";
      var isOpera = userAgent.indexOf("Opera") > -1;
      if (isOpera) {
        broswer = "Opera";
      } else if (userAgent.indexOf("Firefox") > -1) {
        broswer = userAgent.substring(66, 78);
      } else if (userAgent.indexOf("Chrome") > -1) {
        broswer = userAgent.substring(81, 92);
      } else if (userAgent.indexOf("Safari") > -1) {
        broswer = "Safari";
      } else if (
        userAgent.indexOf("compatible") > -1 &&
        userAgent.indexOf("MSIE") > -1 &&
        !isOpera
      ) {
        broswer = "IE";
      } else if (userAgent.indexOf("Trident") > -1) {
        broswer = "Edge";
      } else {
      }
      return broswer;
    },
    showEditor(e) {
      if (
        e.currentTarget.parentElement.parentElement.parentElement.parentElement
          .childNodes[1].nextElementSibling.className == "editor-reply hide"
      ) {
        e.currentTarget.parentElement.parentElement.parentElement.parentElement.childNodes[1].nextElementSibling.className =
          "editor-reply";
        e.currentTarget.innerText = "收起";
      } else {
        e.currentTarget.parentElement.parentElement.parentElement.parentElement.childNodes[1].nextElementSibling.className =
          "editor-reply hide";
        e.currentTarget.innerText = "回复";
      }
    },
    changeMessageList() {
      this.$emit("changeList");
    }
  }
};
</script>

<style scoped>
.hide {
  display: none;
}

.cont {
  display: flex;
}
.user-info .userImage {
  float: left;
  margin: 10px 10px;
  border-radius: 20px;
}
.user-info .info {
  margin-top: 15px;
  margin-bottom: 10px;
  height: 20px;
}

.name {
  float: left;
  font-size: 16px;
}

.date {
  float: left;
}

.comment {
  margin-left: 65px;
}

.comment > p {
  font-size: 16px;
}

.submit {
  float: left;
  margin-bottom: 10px;
}
.submit .reply {
  line-height: 25px;
  margin-top: -25px;
}
.info .ct {
  float: left;
}

.more {
  line-height: 25px;
  margin-left: 65px;
  margin-top: 10px;
  font-size: 13px;
  color: #555;
}
.more:after {
  content: "";
  display: table;
  clear: both;
}

.location {
  float: left;
  margin-left: 20px;
}

.browser {
  float: left;
  margin-left: 20px;
}
.main-reply {
  float: left;
}

a {
  color: #66b1ff;
  text-decoration: none;
}
.reply-box {
  position: relative;
  width: 100%;
}
.editor-reply {
  margin-top: 10px;
  width: 700px;
  margin-left: 50px;
}
.all-reply {
  float: left;
  margin-left: 50px;
  width: 100%;
}
.reply-list {
  float: right;
  width: 100%;
  border-top: #96c2f1 dashed 1px;
}

ul {
  display: block;
}
li {
  /* float: right; */
  min-height: 108px;
  margin-top: 10px;
  list-style: none;
  display: block;
}

p {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
@media screen and (max-width: 475px) {
  .browser,
  .location,
  .submit {
    margin-left: 5px;
  }
  .editor-reply {
    margin: 0px;
    width: 100% !important;
  }
}
</style>