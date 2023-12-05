<template>
  <div class="search-container">
    <img src="../assets/asdf.png" alt="アイコン" />
    <select class="search-input" v-model="selectedCategory">
      <option value="すべて">すべて</option>
      <option value="衣服">衣服</option>
      <option value="部活用品">部活用品</option>
      <option value="書籍">書籍</option>
    </select>
    <input
      type="text"
      class="search-input"
      placeholder="検索..."
      v-model="searchQuery"
    />
    <button class="search-button" @click="searchItems">検索</button>
  </div>
  <div class="items-view">
    <h1>あなたへのおすすめ</h1>
    <div class="items-container">
      
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
  name: "HomeView",
  data() {
    return {
      searchQuery: '', // ユーザーの入力を保持
      activeSearchQuery: '', // 検索ボタンを押した後のアクティブな検索クエリ
      selectedCategory: 'すべて', // 選択されたカテゴリ
      // 他のデータプロパティ...
    };
  },
  computed: {
    hasMemos() {
      return this.$store.getters.getCount; // Vuexストアからアイテムがあるかどうかを確認
    },
    items() {
      return this.$store.getters.getAll; // Vuexストアからアイテムリストを取得
    },
    filteredItems() {
      return this.items.filter(item => {
        const matchesQuery = item.title.toLowerCase().includes(this.activeSearchQuery.toLowerCase());
        const matchesCategory = this.selectedCategory === 'すべて' || item.category === this.selectedCategory;
        return matchesQuery && matchesCategory;
      });
    },
    // ... 他の計算プロパティ...
  },
  methods: {
    searchItems() {
      this.activeSearchQuery = this.searchQuery; // 検索ボタンを押した時にアクティブなクエリを更新
    },
    goToItems(item) {
      this.$router.push({
        name: 'items',
        params: {
          productId: item.id
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
        }
      });
    }
    // ... 他のメソッド...
  }
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
  /* ボタンを丸くする */
  border-radius: 5px;
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
  width: 100%;
  height: 600px;
  object-fit: cover; /* width, heightといっしょに使います */
}

h2{
  font-size: 19px;
  margin: 10px;
}

</style>
