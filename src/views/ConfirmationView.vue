<template>
  <div class="confirmation-page">
    <h1>注文が確定されました。</h1>
    <div class="alert alert-warning">
      <strong>発送をお待ちください</strong>
    </div>
    <div class="order-details">
      <h2>取引情報</h2>
      <div class="image-and-info">
        
      </div>
      <div class="product-image">
        <!-- <img :src="productImageUrl" alt="Product Image"> -->
        <img
          :src="require('@/assets/青チャート.png')"
          alt="商品画像"
          class="product-image"
        />
      </div>

      <div class="product-info">
        <h3>{{ productTitle }}</h3>
        <p>商品ポイント: {{ productPrice }}pt</p>
        <p>手数料ポイント: {{ fees }}pt</p>
        <p>合計ポイント: {{ totalPrice }}pt</p>
        <hr />
        <h2>お届け先</h2>
        <address>
          氏名: <span>山田次郎</span><br />
          住所: <span>〒123-4567 東京都〇〇区〇〇坂1-2-3</span>
        </address>
      </div>

    </div>
    <button class="goToHome-btn" @click="goToHome">Homeに戻る</button>
  </div>
</template>

<script>
export default {
  name: "ConfirmationView",
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
  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.confirmation-page {
  width: 60%;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
}

.alert-warning {
  background-color: #fff3cd;
  border-color: #ffeeba;
  color: #856404;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 4px;
}

.order-details {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 4px;
}

.product-info h3 {
  margin-top: 0;
}

.product-info address {
  text-align: left;
  margin-left: 30px;
}

.product-image img {
  max-width: 100px;
  margin-right: 20px;
}

address {
  font-style: normal;
  line-height: 1.4;
}

h2 {
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: left;
  margin-left: 30px;
}

.goToHome-btn{
  background-color: #1100ff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  width: 30%;
  margin-top: 20px;
}
</style>
