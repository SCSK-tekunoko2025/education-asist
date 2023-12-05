<template>
  <div class="search-container">
    <!-- プルダウンで商品のカテゴリを選択できるようにする -->
    <select class="search-input">
      <option value="すべて">すべて</option>
      <option value="衣服">衣服</option>
      <option value="部活用品">部活用品</option>
    </select>
    <input type="text" class="search-input" placeholder="検索..." />
    <button class="search-button">検索</button>
  </div>

  <div class="container">
    <div class="checkout-page">
      <h2>購入の確認</h2>
      <hr />

      <div class="product-info">
        <!-- <img :src="productImageUrl" alt="商品画像" class="product-image"/> -->
        <img
          :src="require('@/assets/青チャート.png')"
          alt="商品画像"
          class="product-image"
        />
        <div class="product-details">
          <h1>{{ productTitle }}</h1>
          <p class="price">{{ productPrice }}pt(送料込み)</p>
        </div>
      </div>
      <hr />

      <div class="shipping-info">
        <h2>配送先</h2>
        <ul>
          <li>山田次郎</li>
          <li>〒123-4567</li>
          <li>東京都〇〇区〇〇坂1-2-3</li>
        </ul>
      </div>
    </div>

    <div class="purchase-confirmed">
      <div class="final-confirmation">
        <ul>
          <li>商品ポイント</li>
          <li>決済手数ポイント</li>
        </ul>

        <hr />
        <ul>
          <li>支払ポイント</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="button-container">
    <button class="button">購入する</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productId: null,
      productTitle: null,
      productPrice: null,
      productImageUrl: null, // 商品画像のURL
      fees: 100, // 手数料
    };
  },
  computed: {
    totalPrice() {
      return this.productPrice + this.fees; // 商品価格と手数料の合計を計算
    },
  },
  created() {
    this.productId = this.$route.params.productId;
    this.productTitle = this.$route.query.productTitle;
    this.productPrice = parseInt(this.$route.query.productPrice, 10);
    this.productImageUrl = this.$route.query.productImageUrl; // URLクエリから画像のURLを取得
  },
};
</script>

<style scoped>

.search-container {
  display: flex; /* Flexboxを有効化 */
  width: 50%; /* 幅を設定 */
  margin: 0 auto; /* コンテナを中央に配置 */
  margin-top: 50px; /* 上側に20pxの余白を設ける */
  margin-bottom: 50px; /* 下側に20pxの余白を設ける */
}

.search-input {
  flex-grow: 1; /* 入力欄が容器の残りスペースをすべて使用するようにする */
  border: 1px solid #ccc; /* 枠線を設定 */
  padding: 10px; /* パディングを設定 */
  font-size: 16px; /* フォントサイズを設定 */
}

.search-button {
  padding: 10px 20px; /* パディングを設定 */
  border: none; /* 枠線をなくす */
  background-color: #007bff; /* 背景色を設定 */
  color: white; /* 文字色を白にする */
  cursor: pointer; /* カーソルをポインターにする */
  border-left: 1px solid #ccc; /* 左側に枠線を設定することで入力欄との区切りを明確にする */
}

button {
  float: left;
}

.container {
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}
.checkout-page {
  flex: 1;
  max-width: 500px;
  margin: 0 auto;
}

.purchase-confirmed {
  flex: 1;
  max-width: 500px;
  margin: 0 auto;
  border: 1px solid #ccc;
  padding: 20px;
  /* 左に寄せる */
}

.product-info {
  display: flex; /* Flexboxコンテナとして設定 */
  align-items: center; /* アイテムを中央揃えにする */
  gap: 20px; /* 画像と詳細の間にスペースを設ける */
}

.product-image {
  max-width: 150px; /* 画像の最大幅を設定 */
  height: auto; /* 高さを自動で調整 */
  object-fit: contain; /* 画像のアスペクト比を保持 */
}

.product-details {
  display: flex; /* これもFlexboxコンテナとして設定 */
  flex-direction: column; /* 子要素を縦に並べる */
  justify-content: center; /* 子要素を中央揃えにする */
}

.product-info {
  /* 左詰めにする */
  text-align: left;
  margin-bottom: 20px;
}
.product-image {
  max-width: 100px;
  margin-right: 20px;
}

.button-container {
  display: flex;
  justify-content: center; /* 水平方向の中央に配置 */
}

.button-container .button {
  background-color: red;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  width: 20%;
}

h1 {
  font-size: 15px;
}

h2 {
  text-align: left;
  margin-top: 0px;
  margin-bottom: 10px;
  /* border-bottom: 1px solid #ccc; */
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 20px;
  text-align: left;
  font-size: 20px;
}

.font-bold {
  font-weight: bold;
}
</style>
