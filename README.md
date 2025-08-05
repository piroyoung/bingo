# 🎯 ビンゴゲーム

Remix を使用して構築されたビンゴゲームアプリケーションです。数字の範囲を設定して、ビンゴの番号抽選を行うことができます。

## 📋 前提条件

- Node.js (バージョン 18 以上推奨)
- npm (Node.js と一緒にインストールされます)

## 🚀 インストール

1. リポジトリをクローンします：

```bash
git clone https://github.com/piroyoung/bingo.git
cd bingo
```

2. 依存関係をインストールします：

```bash
npm install
```

## 🖥️ サーバーの起動方法

### Docker を使用した起動（推奨）

#### 事前準備
- Docker がインストールされていること

#### GitHub Container Registry から実行
```bash
# 最新版を実行
docker run -p 3000:3000 ghcr.io/piroyoung/bingo:latest

# 特定のバージョンを実行（例：コミットSHA）
docker run -p 3000:3000 ghcr.io/piroyoung/bingo:sha-abc1234
```

#### ローカルでビルドして実行
```bash
# リポジトリをクローン
git clone https://github.com/piroyoung/bingo.git
cd bingo

# アプリケーションをビルド
npm install
npm run build

# Dockerイメージをビルド
docker build -t bingo .

# コンテナを実行
docker run -p 3000:3000 bingo
```

サーバーが起動すると、`http://localhost:3000` でアプリケーションにアクセスできます。

### 開発サーバーの起動

開発環境でサーバーを起動する場合（ホットリロード機能付き）：

```bash
npm run dev
```

サーバーが起動すると、以下のようなメッセージが表示されます：
```
[remix-serve] http://localhost:3000 (http://10.1.0.197:3000)
```

ブラウザで `http://localhost:3000` にアクセスしてアプリケーションを使用できます。

### 本番サーバーの起動

本番環境でサーバーを起動する場合：

1. まず、アプリケーションをビルドします：

```bash
npm run build
```

2. 本番サーバーを起動します：

```bash
npm start
```

サーバーが起動すると、`http://localhost:3000` でアプリケーションにアクセスできます。

## 🎮 使用方法

1. アプリケーションにアクセスすると、数字の範囲入力画面が表示されます
2. 抽選したい数字の最大値を入力します（例：39 と入力すると 1-39 の範囲）
3. 「ゲーム開始」ボタンをクリックします
4. 「最初の番号を抽選」ボタンで番号抽選を開始します
5. 「Next」ボタンで次の番号を抽選します
6. すべての番号が抽選されるか、「リセット」ボタンで新しいゲームを開始できます

## 🛠️ 開発用コマンド

- `npm run dev` - 開発サーバーを起動（ホットリロード付き）
- `npm run build` - 本番用ビルドを作成
- `npm start` - 本番サーバーを起動
- `npm run typecheck` - TypeScript の型チェックを実行

## 🐳 Docker コマンド

- `docker build -t bingo .` - Dockerイメージをビルド
- `docker run -p 3000:3000 bingo` - コンテナを実行
- `docker pull ghcr.io/piroyoung/bingo:latest` - GitHub Container Registry から最新イメージを取得

## 📝 技術仕様

- **フレームワーク**: Remix
- **言語**: TypeScript
- **UI**: React
- **ランタイム**: Node.js
- **パッケージマネージャー**: npm
- **コンテナ**: Docker (Node.js 18 Alpine)
- **レジストリ**: GitHub Container Registry (ghcr.io)

## 📄 ライセンス

ISC