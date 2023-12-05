<!-- <template>
  <nav>
    <router-link to="/">購入</router-link> |
    <router-link to="/sale">出品</router-link>
  </nav>
  <router-view/>
</template> -->
<template>
  <nav class="navbar">
    <ul class="nav-links">
      <li><router-link to="/" class="nav-link">購入</router-link></li>
      <li><router-link to="/sale" class="nav-link">出品</router-link></li>
    </ul>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<style scoped>
.navbar {
  background-color: #3273d4; /* ナビゲーションバーの背景色 */
  padding: 5px 20px; /* パディング */
}

.nav-links {
  list-style: none; /* リストのスタイルをなくす */
  display: flex; /* フレックスボックスを使用 */
  align-items: center; /* アイテムを中央揃えにする */
  gap: 15px; /* リンク間の間隔 */
  padding: 0; /* パディングをリセット */
}

.nav-link {
  text-decoration: none; /* 下線を消す */
  color: white; /* テキストの色 */
  font-weight: bold; /* フォントの太さ */
  transition: color 0.3s; /* 色の変化にトランジション効果を追加 */
}

.nav-link:hover {
  color: #ddd; /* ホバー時の色 */
}
</style>

