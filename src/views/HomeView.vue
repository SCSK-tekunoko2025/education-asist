<template>
  <div class="product-page">

    <!-- 画面の左側に商品画像を表示する -->
    <div class="product-image">
      <!-- <img :src="product.imageUrl" alt="商品画像"> -->
      <img
        :src="require('@/assets/青チャート.png')"
        alt="商品画像"
      />
    </div>

    <!--画面の右側に商品の詳細情報を表示する -->
    <div class="product-details">
      <h1>{{ product.title }}</h1>

      <p class="price">{{ product.price }}pt</p>

      <button @click="goToCheckout">購入手続きへ</button>

      <h2>商品の説明</h2>
      <p class="description">{{ product.description }}</p>

      <h2>商品の情報</h2>
      <hr />

      <div>
        <ul>
          <li>
            <span class="font-bold">カテゴリー：</span>{{ product.category }}
          </li>
          <li>
            <span class="font-bold">商品の状態：</span>{{ product.condition }}
          </li>
          <li>
            <span class="font-bold">発送日の目安：</span>{{ product.day }}
          </li>
          <li>
            <span class="font-bold">発送元の地域：</span>{{ product.region }}
          </li>
        </ul>
      </div>

      <h2>出品者</h2>
      <hr />

      <div>
        <ul>
          <li>出品者の名前：{{ product.name }}</li>
          <li>出品者の評価：{{ product.rating }}</li>
        </ul>
      </div>

    </div>

  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "HomeView",
  setup() {
    // 商品データはDBから取得したいが、現在はダミーデータを使用している。
    const product = ref({
      id: 1,
      category: "書籍",
      title: "新課程 チャート式基礎からの数学I+A",
      price: 800,
      description:
        "改訂版チャート式 基礎からの数学Ⅱ＋B 解答付き 本誌・解答共に表紙やカバーに使用感あります。中は綺麗です。 書き込みが少々ありましたので極力消去して発送しますが、消し残し等ありましたらご容赦ください。",
      condition: "やや傷や汚れあり",
      region: "東京都",
      day: "1~2日で発送",
      imageUrl:
        "C:\\Users\\inoma\\Documents\\vue_project_pre\\src\\assets\\青チャート.png", // 商品画像のパス（うまくいかない）
      name: "山田太郎",
      rating: 4.5,
    });

    // setup関数から返されたプロパティはテンプレート内で使用できます。
    return {
      product,
    };
  },

  methods: {
    goToCheckout() {
      // 商品IDはURLパラメーターとして、商品名と価格はクエリパラメーターとして渡す
      this.$router.push({
        name: "checkout",
        params: {
          productId: this.product.id,
        },
        query: {
          productTitle: this.product.title,
          productPrice: this.product.price,
          productImageUrl: this.product.imageUrl,
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
