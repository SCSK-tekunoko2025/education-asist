<template>
  <div class="search-container">
    <img src="../assets/icon.png" alt="アイコン" />
    <select class="search-input" v-model="selectedCategory">
      <option value="すべて">すべて</option>
      <option value="衣服">衣服</option>
      <option value="部活用品">部活用品</option>
      <option value="書籍">書籍</option>
    </select>
    <!-- 検索入力の値をsearchQueryにバインド -->
    <input
      type="text"
      class="search-input"
      placeholder="検索..."
      v-model="searchQuery"
    />
    <!-- 検索メソッドを呼び出す -->
    <button class="search-button" @click="searchItems">検索</button>
  </div>

  <div class="items-view">
    <h1>あなたへのおすすめ</h1>
    <div class="items-container">
      <!-- フィルタリングされたアイテムを表示 -->
      <div class="item" v-for="item in filteredItems" :key="item.id">
        <img :src="item.imageUrl" alt="商品画像" @click="goToItems(item)" />
        <h2>{{ item.title }}</h2>
        <p>{{ item.price }}pt</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView", // ... 既存のコンポーネントオプション ...
  data() {
    return {
      // ... 既存のデータプロパティ ...
      items: [
        {
          id: 1,
          title: "赤チャートI+A",
          price: 100,
          imageUrl: require("@/assets/赤チャート.png"),
          category: "書籍",
          description:
            "改訂版チャート式 基礎からの数学Ⅱ＋B 解答付き 本誌・解答共に表紙やカバーに使用感あります。中は綺麗です。 書き込みが少々ありましたので極力消去して発送しますが、消し残し等ありましたらご容赦ください。",
          condition: "やや傷や汚れあり",
          region: "東京都",
          day: "1~2日で発送",
          name: "山田太郎",
          rating: "4",
        },
        {
          id: 2,
          title: "青チャートI+A",
          price: 200,
          imageUrl: require("@/assets/青チャート.png"),
          category: "書籍",
          description:
            "改訂版チャート式 基礎からの数学Ⅱ＋B 解答付き 本誌・解答共に表紙やカバーに使用感あります。中は綺麗です。 書き込みが少々ありましたので極力消去して発送しますが、消し残し等ありましたらご容赦ください。",
          condition: "やや傷や汚れあり",
          region: "東京都",
          day: "1~2日で発送",
          name: "出品者の名前",
          rating: "出品者の評価",
        },
        {
          id: 3,
          title: "〇〇高校制服",
          price: 300,
          imageUrl: require("@/assets/〇〇高校制服.png"),
          category: "衣服",
          description:
            "改訂版チャート式 基礎からの数学Ⅱ＋B 解答付き 本誌・解答共に表紙やカバーに使用感あります。中は綺麗です。 書き込みが少々ありましたので極力消去して発送しますが、消し残し等ありましたらご容赦ください。",
          condition: "やや傷や汚れあり",
          region: "東京都",
          day: "1~2日で発送",
          name: "出品者の名前",
          rating: "出品者の評価",
        },
        {
          id: 4,
          title: "卓球ラケット",
          price: 400,
          imageUrl: require("@/assets/卓球ラケット.png"),
          category: "部活用品",
          description:
            "改訂版チャート式 基礎からの数学Ⅱ＋B 解答付き 本誌・解答共に表紙やカバーに使用感あります。中は綺麗です。 書き込みが少々ありましたので極力消去して発送しますが、消し残し等ありましたらご容赦ください。",
          condition: "やや傷や汚れあり",
          region: "東京都",
          day: "1~2日で発送",
          name: "出品者の名前",
          rating: "出品者の評価",
        },
        {
          id: 5,
          title: "青チャートI+A",
          price: 500,
          imageUrl: require("@/assets/青チャート.png"),
          category: "書籍",
          description:
            "改訂版チャート式 基礎からの数学Ⅱ＋B 解答付き 本誌・解答共に表紙やカバーに使用感あります。中は綺麗です。 書き込みが少々ありましたので極力消去して発送しますが、消し残し等ありましたらご容赦ください。",
          condition: "やや傷や汚れあり",
          region: "東京都",
          day: "1~2日で発送",
          name: "出品者の名前",
          rating: "出品者の評価",
        },
        {
          id: 6,
          title: "青チャートI+A",
          price: 600,
          imageUrl: require("@/assets/青チャート.png"),
          category: "書籍",
          description:
            "改訂版チャート式 基礎からの数学Ⅱ＋B 解答付き 本誌・解答共に表紙やカバーに使用感あります。中は綺麗です。 書き込みが少々ありましたので極力消去して発送しますが、消し残し等ありましたらご容赦ください。",
          condition: "やや傷や汚れあり",
          region: "東京都",
          day: "1~2日で発送",
          name: "出品者の名前",
          rating: "出品者の評価",
        },
        {
          id: 7,
          title: "青チャートI+A",
          price: 700,
          imageUrl: require("@/assets/青チャート.png"),
          category: "書籍",
          description:
            "改訂版チャート式 基礎からの数学Ⅱ＋B 解答付き 本誌・解答共に表紙やカバーに使用感あります。中は綺麗です。 書き込みが少々ありましたので極力消去して発送しますが、消し残し等ありましたらご容赦ください。",
          condition: "やや傷や汚れあり",
          region: "東京都",
          day: "1~2日で発送",
          name: "出品者の名前",
          rating: "出品者の評価",
        },
        {
          id: 8,
          title: "青チャートI+A",
          price: 800,
          imageUrl: require("@/assets/青チャート.png"),
          category: "書籍",
          description:
            "改訂版チャート式 基礎からの数学Ⅱ＋B 解答付き 本誌・解答共に表紙やカバーに使用感あります。中は綺麗です。 書き込みが少々ありましたので極力消去して発送しますが、消し残し等ありましたらご容赦ください。",
          condition: "やや傷や汚れあり",
          region: "東京都",
          day: "1~2日で発送",
          name: "出品者の名前",
          rating: "出品者の評価",
        },
        {
          id: 9,
          title: "青チャートI+A",
          price: 900,
          imageUrl: require("@/assets/青チャート.png"),
          category: "書籍",
          description:
            "改訂版チャート式 基礎からの数学Ⅱ＋B 解答付き 本誌・解答共に表紙やカバーに使用感あります。中は綺麗です。 書き込みが少々ありましたので極力消去して発送しますが、消し残し等ありましたらご容赦ください。",
          condition: "やや傷や汚れあり",
          region: "東京都",
          day: "1~2日で発送",
          name: "出品者の名前",
          rating: "出品者の評価",
        }, // アイテムデータ
      ],
      activeSearchQuery: "", // 新しいデータプロパティを追加
      selectedCategory: "すべて", // 新しいデータプロパティを追加
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) => {
        const matchesQuery = item.title
          .toLowerCase()
          .includes(this.activeSearchQuery.toLowerCase());
        const matchesCategory =
          this.selectedCategory === "すべて" ||
          item.category === this.selectedCategory;
        return matchesQuery && matchesCategory;
      });
    },
  },
  methods: {
    // ... 既存のメソッド ...
    goToItems(item) {
      this.$router.push({
        name: "items",
        params: {
          productId: item.id,
        },
        query: {
          title: item.title,
          price: item.price,
          imageUrl: item.imageUrl,
          category: item.category,
          description: item.description,
          condition: item.condition,
          region: item.region,
          day: item.day,
          name: item.name,
          rating: item.rating,
        },
      });
    },
    searchItems() {
      this.activeSearchQuery = this.searchQuery; // 検索クエリをアクティブなクエリに設定
    },
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

.search-container img {
  width: 50px;
  height: 50px;
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

h1 {
  text-align: left;
  margin-left: 100px;
  margin-bottom: 50px;
}

.items-container {
  /* １行あたり商品は３つまで表示する */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  width: 80%;
  margin: 0 auto;
}

.items-container img {
  cursor: pointer;
  /* どの画像もすべて同じ大きさで表示されるようにする */
  width: 100%;
  height: 600px;
  object-fit: cover; /* width, heightといっしょに使います */
}

h2 {
  font-size: 19px;
  margin: 10px;
}
</style>
