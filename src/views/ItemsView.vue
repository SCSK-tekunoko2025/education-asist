<template>
  <div class="product-page">
    <!-- 画面の左側に商品画像を表示する -->
    <div class="product-image">
      <!-- <img :src="product.imageUrl" alt="商品画像"> -->
      <img :src="require('@/assets/青チャート.png')" alt="商品画像" />
    </div>

    <!--画面の右側に商品の詳細情報を表示する -->
    <div class="product-details">
      <h1>{{ title }}</h1>

      <p class="price">{{ price }}pt</p>

      <button @click="goToCheckout">購入手続きへ</button>

      <h2>商品の説明</h2>
      <p class="description">{{ description }}</p>

      <h2>商品の情報</h2>
      <hr />

      <div>
        <ul>
          <li><span class="font-bold">カテゴリー：</span>{{ category }}</li>
          <li><span class="font-bold">商品の状態：</span>{{ condition }}</li>
          <li><span class="font-bold">発送日の目安：</span>{{ day }}</li>
          <li><span class="font-bold">発送元の地域：</span>{{ region }}</li>
        </ul>
      </div>

      <h2>出品者</h2>
      <hr />

      <div>
        <ul>
          <li>出品者の名前：{{ name }}</li>
          <li>出品者の評価：{{ rating }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemsView",
  data() {
    return {
      id: null,
      title: null,
      price: null,
      imageUrl: null,
      category: null,
      description: null,
      condition: null,
      region: null,
      day: null,
      name: null,
      rating: null,
    };
  },
  created() {
    this.id = this.$route.query.productId;
    this.title = this.$route.query.title;
    this.price = this.$route.query.price;
    this.imageUrl = this.$route.query.imageUrl;
    this.category = this.$route.query.category;
    this.description = this.$route.query.description;
    this.condition = this.$route.query.condition;
    this.region = this.$route.query.region;
    this.day = this.$route.query.day;
    this.name = this.$route.query.name;
    this.rating = this.$route.query.rating;
  },
  methods: {
    goToCheckout() {
      this.$router.push({
        name: "checkout",
        params: { productId: this.id },
        query: {
          productTitle: this.title,
          productPrice: this.price,
          productImageUrl: this.imageUrl,
        },
      });
    },
  },
};
</script>

<style scoped>
.product-page {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}
.product-image img {
  max-width: 100%;
  height: auto;
}
.product-details {
  flex-basis: 50%;
}

img {
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

button {
  background-color: red;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
}
.description {
  text-align: left;
}

h1 {
  text-align: left;
  margin-top: 0;
  margin-bottom: 10px;
}

h2 {
  text-align: left;
  margin-top: 40px;
  margin-bottom: 10px;
  /* border-bottom: 1px solid #ccc; */
}

hr {
  border: none;
  border-top: 1px solid #ccc;
  margin-top: 10px;
  margin-bottom: 20px;
}

.price {
  text-align: left;
  font-size: 30px;
  font-weight: bold;
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
