<template>
  <form>
    <div class="Form">
      <div class="Form-Item">
        <p class="Form-Item-Label">名前</p>
        <input type="text" class="Form-Item-Input" placeholder="例）山田太郎" />
      </div>
      <div class="Form-Item">
        <p class="Form-Item-Label">住所</p>
        <input type="text" class="Form-Item-Input" placeholder="" />
      </div>
      <div class="Form-Item">
        <p class="Form-Item-Label">商品名</p>
        <input type="item-name" class="Form-Item-Input" placeholder="" />
      </div>
      <div class="Form-Item">
        <p class="Form-Item-Label isMsg">商品説明</p>
        <textarea class="Form-Item-Textarea"></textarea>
      </div>
      <input type="submit" class="Form-Btn" value="送信する" />
    </div>
  </form>
  <!-- <form method="post" name="buy-form">
          名前：<input type="text" name="saler_name" placeholder="名前">
          商品状態：<input type="text" name="status" placeholder="商品状態">
          商品価格：<input type="text" placeholder="商品価格">
          説明：<textarea name="message" placeholder="商品ついてご記入ください"></textarea>
      </form> -->
</template>

<script>
  
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  background-color: #fafafa;
}
input {
  margin-bottom: 10px;
}
textarea {
  height: 100px;
  margin-bottom: 10px;
}
input:first-of-type {
  margin-top: 35px;
}
input,
textarea {
  font-size: 1em;
  padding: 15px 10px 10px;
  font-family: "Source Sans Pro", arial, sans-serif;
  border: 1px solid #cecece;
  background: #d7d7d7;
  color: #fafafa;
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
  color: #fafafa;
}
:-moz-placeholder {
  color: #fafafa;
}
::-moz-placeholder {
  color: #fafafa;
}
:-ms-input-placeholder {
  color: #fafafa;
}
button {
  margin-top: 15px;
  margin-bottom: 25px;
  background-color: #2abca7;
  padding: 12px 45px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  border-radius: 5px;
  border: 1px solid #2abca7;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  display: inline-block;
  cursor: pointer;
  width: 30%;
  color: #fff;
}
button:hover,
.button:hover {
  background: #19a08c;
}
/* media queries */
@media (max-width: 700px) {
  label.error {
    width: 90%;
  }
  input,
  textarea {
    width: 90%;
  }
  button {
    width: 90%;
  }
  body {
    padding-top: 10px;
  }
}
.message {
  font-family: "Source Sans Pro", arial, sans-serif;
  font-size: 1.1em;
  display: none;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #2abca7;
  width: 80%;
  margin: auto;
  color: #fafafa;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
}
</style>
