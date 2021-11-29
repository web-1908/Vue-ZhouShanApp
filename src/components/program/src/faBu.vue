<template>
  <div>
    <div id="title">
      <img src="http://localhost:4000/cha.png" @click="fanhui()" />
      <span>发布状态</span>
      <button @click="issue()">发布</button>
    </div>
    <!--照片区域-->
    <div
      v-for="(urls, index) in imgs "
      :key="index"
      style="float: left; margin: 10px ; border: 1px solid #ccc;"
    >
      <div style="text-align: right; position: relative;" v-on:click="deleteImg(index)">x</div>
      <img :src="urls" width="100px" height="100px" />
    </div>
    <div
      style=" width: 100px; height: 100px; background-color: #fff; border:1px solid #ccc; float: left;  margin: 10px ;"
      v-on:click="imgClick()"
    ></div>
    <input
      style="float: left;  display: none;"
      type="file"
      id="uploadFile"
      accept="image/*"
      v-on:change="readLocalFile()"
    />
    <div id="liuyan">
      <textarea placeholder="交流，共享城市的体验与见识" v-model="notedata" @input="descInput"></textarea>
      <span>{{remnant}}字</span>
    </div>
    <div id="dingwei">
      <span>
        <img src="http://localhost:4000/dingwei2.png" alt />金沙绿岛
      </span>
      <span class="more">
        more
        <img src="http://localhost:4000/you.png" alt />
      </span>
    </div>
    <div id="xuan">
      <span style="color:green;font-size:15px;">你可能想选的目的地</span>
      <span class="dian">
        沙河绿道东郊记忆节点
        <span>舟山市人民路</span>
      </span>
      <span class="dian">
        金沙绿岛·滨河公园
        <span>舟山市</span>
      </span>
      <span class="dian">
        九田家黑牛烤肉
        <span>舟山市梦想4层</span>
      </span>
    </div>
  </div>
</template>
 
<script>
var url = "";
export default {
  data() {
    return {
      imgs: [],
      remnant: 0,
      notedata: "",
  
    };
  },

  methods: {
    fanhui() {
      //点击跳转对应的页面
      this.$router.push("/" + "home");
    },
    // 留言字数
    descInput() {
      var txtVal = this.notedata.length;
      this.remnant = txtVal;
    },
    //删除图片
    deleteImg: function(index) {
      this.imgs.splice(index, 1);
    },
    //图片click
    imgClick: function() {
      document.getElementById("uploadFile").click();
    },
    //点击选中图片
    readLocalFile: function() {
      var localFile = document.getElementById("uploadFile").files[0];
      var reader = new FileReader();

      var content;
      var current = this;
      reader.onload = function(event) {
        content = event.target.result;
        current.imgs.push(content); //获取图片base64代码
      };
      reader.onerror = function(event) {
        alert("error");
      };
      content = reader.readAsDataURL(localFile, "UTF-8");
      console.log(content);
      var sss = document.getElementById("uploadFile").value;
      return this.reader;

    var uppath="";//用于保存图片上传路径
　　//获取上传图片的文件名
　　var fileFullname = this.FileUpload1.FileName;
　　//获取图片上传的时间，以时间作为图片的名字可以防止图片重名
　　var dataName = DateTime.Now.ToString("yyyyMMddhhmmss");
　　//获取图片的文件名（不含扩展名）
　　var fileName = fileFullname.Substring(fileFullname.LastIndexOf("\\") + 1);
　　//获取图片扩展名
　　var type = fileFullname.Substring(fileFullname.LastIndexOf(".") + 1);
　　//判断是否为要求的格式
　　if (type == "bmp" || type == "jpg" || type == "jpeg" || type == "gif" || type == "JPG" || type == "JPEG" || type == "BMP" || type == "GIF")
　　{
　　//将图片上传到指定路径的文件夹
　　this.FileUpload1.SaveAs(Server.MapPath("~/upload") + "\\" + dataName + "." + type);
　　//将路径保存到变量，将该变量的值保存到数据库相应字段即可
　　uppath = "~/upload/" + dataName + "." + type;
console.log(uppath);
}
    },

    // 上传图片
    issue() {
      var img = this.uppath;
      var comment = this.notedata;
      var url = "addissue";
      var obj = { imgurl: img, comment: comment };
      //3:获取返回的结果
      this.axios.get(url, { params: obj }).then(res => {
        if (res.data.code == 1) {
          this.$toast("添加成功");
        } else {
          this.$toast("添加失败");
        }
      });
    },
  } 
};
</script>
 
<style scoped>
#title {
  margin: 20px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#title > img {
  width: 20px;
}
#title > button {
  width: 70px;
  height: 30px;
  background: rgb(26, 25, 25);
  border: 0;
  color: #fff;
}
#liuyan {
  border-bottom: 1px solid rgb(197, 195, 195);
}
#liuyan > textarea {
  width: 300px;
  border: 0;
  padding: 30px 10px;
}
#liuyan > span {
  font-size: 15px;
  color: gray;
}
#dingwei {
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(197, 195, 195);
}
#dingwei img {
  height: 20px;
  width: 20px;
}
#dingwei > .more > img {
  height: 10px;
  width: 10px;
}
#xuan {
  padding: 10px;
  display: flex;
  flex-direction: column;
}
#xuan > span {
  padding: 10px;
}
.dian {
  display: flex;
  flex-direction: column;
  font-size: 15px;
}
#xuan > .dian span {
  font-size: 13px;
  color: gray;
}
</style>