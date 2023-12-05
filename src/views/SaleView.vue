<template>
  <div id="app">
    <div class="preview_zone">
      <img :src="url" alt="ここにプレビューが表示されます">
    </div>
    <div class="upload_zone">
      <input type="file" class="input_file" ref="preview" @change="previewImage">
      <div class="drop_zone">
        ここにファイルをドラッグ＆ドロップ
      </div>
    </div>

    <div class="container">
      <form method="post">
        <div class="Form">
          <div class="Form-Item">
            <p class="Form-Item-Label">名前</p>
            <input type="text" class="Form-Item-Input" placeholder="例）山田太郎">
          </div>
          <div class="Form-Item">
            <p class="Form-Item-Label">住所</p>
            <input type="text" class="Form-Item-Input" placeholder="">
          </div>
          <div class="Form-Item">
            <p class="Form-Item-Label">商品名</p>
            <input type="text" class="Form-Item-Input" placeholder="">
          </div>
          <div class="Form-Item">
            <p class="Form-Item-Label isMsg">商品説明</p>
            <textarea class="Form-Item-Textarea"></textarea>
          </div>
          <input type="submit" class="Form-Btn" value="送信する">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: '',
    };
  },
  methods: {
    previewImage() {
      let image = this.$refs.preview.files[0];
      this.url = URL.createObjectURL(image);
    }
  }
}
</script>




<style scoped>

    body {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #app {
        display: flex;
        align-items: center;
    }

.container {
  max-width:600px;
  margin:0 auto;
  text-align:center;
  -webkit-border-radius:6px;
  -moz-border-radius:6px;
  border-radius:6px;
  background-color:#FAFAFA;
}
    .drop_zone {
        border: 3px solid lightgray;
        border-radius: 20px;
        width: 300px;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: lightgray;
        font-weight: bold;
        margin-top: 20px;
    }

    .preview_zone {
        border: 2px solid black;
        width: 400px;
        height: 500px;
        margin-right: 20px;
    }

product-info{
    background-color:black;
}


input {
  margin-bottom:10px;
}
textarea {
  height:100px;
  margin-bottom:10px;
}
input:first-of-type
{
  margin-top:35px;
}
input, textarea {
  font-size: 1em;
  padding: 15px 10px 10px;
  font-family: 'Source Sans Pro',arial,sans-serif;
  border: 1px solid #cecece;
  background: #d7d7d7;
  color:#FAFAFA;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 80%;
  max-width: 600px;
}
::-webkit-input-placeholder {
   color: #FAFAFA;
}
:-moz-placeholder {
   color: #FAFAFA;  
}
::-moz-placeholder {
   color: #FAFAFA; 
}
:-ms-input-placeholder {  
   color: #FAFAFA;  
}
button {
  margin-top:15px;
  margin-bottom:25px;
  background-color:#2ABCA7;
  padding: 12px 45px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  border-radius: 5px;
  border: 1px solid #2ABCA7;
  -webkit-transition: .5s;
  transition: .5s;
  display: inline-block;
  cursor: pointer;
  width:30%;
  color:#fff;
}
button:hover, .button:hover {
  background:#19a08c;
}

/* media queries */
@media (max-width: 700px) {
  label.error {
    width: 90%;
  }
  input, textarea {
    width: 90%;
  }
  button {
    width:90%;
  }
  body {
  padding-top:10px;
  }  
}
.message {
    font-family:'Source Sans Pro',arial,sans-serif;
    font-size:1.1em;
    display:none;
    padding-top:10px;
    padding-bottom:10px;
    background-color:#2ABCA7;
    width: 80%;
    margin:auto;
    color: #FAFAFA;
    -webkit-border-radius:6px;
    -moz-border-radius:6px;
    border-radius:6px;
}
</style>