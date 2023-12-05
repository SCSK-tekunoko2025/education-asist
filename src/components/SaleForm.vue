<template>
  <form>
    <div class="Form">
      <div class="Form-Item">
        <p class="Form-Item-Label">商品名</p>
        <input type="item-name" v-model="title" class="Form-Item-Input" placeholder="チャート式"> 
      </div>
      <div class="Form-Item">
        <p class="Form-Item-Label">出品ポイント</p>
        <input type="text" v-model="price" class="Form-Item-Input" placeholder="200">
      </div>
      <div class="Form-Item">
        <p class="Form-Item-Label">カテゴリ</p>
        <!--<input type="text" v-model="category" class="Form-Item-Input" placeholder="教科書"> -->
        <select class="search-input" v-model="category">
            <option value="衣服">衣服</option>
            <option value="部活用品">部活用品</option>
            <option value="書籍">書籍</option>
            <option value="その他">その他</option>
        </select>
      </div>
      <div class="Form-Item">
        <p class="Form-Item-Label">出品物の状態</p>
        <!-- <input type="text" v-model="condition" class="Form-Item-Input" placeholder="良好"> -->
        <select class="search-input" v-model="condition">
            <option value="良好">良好</option>
            <option value="傷あり">傷あり</option>
            <option value="欠損あり">欠損あり</option>
            <option value="その他">その他</option>
        </select>
      </div>
      <div class="Form-Item">
        <p class="Form-Item-Label">出品までの日時</p>
        <input type="text" v-model="day" class="Form-Item-Input" placeholder="1-2日">
      </div>
      <div class="Form-Item">
        <p class="Form-Item-Label isMsg">商品説明</p>
        <textarea v-model="description" class="Form-Item-Textarea"></textarea>
      </div>
      <button @click="save">送信する</button>
    </div>
  </form>
</template>


<script>
export default {
    name: 'SaleView',
    props: [
        'item'
    ],
    data() {
        return {
            title: this.item.title,
            price: this.item.price,
            category: this.item.category, // pull down
            condition: this.item.condition,  //pull down
            day: this.item.day,
            description: this.item.description

        }
    },
    methods: {
        save() {
            let item = {
                title: this.title,
                price: this.price,
                category: this.category, 
                condition: this.condition, 
                day: this.day,
                description: this.description
            }

            if (this.item.id) {
                item.id = this.item.id
            }

            this.$store.commit('save', item)
            this.$router.push('/') //top pageに戻る
        },
        remove () {
            this.$store.commit('delete', this.item.id)
            this.$router.push('/')
        }
    }
}
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
