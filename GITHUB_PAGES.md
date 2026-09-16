# GitHub Pagesで公開する方法

1. このプロジェクトをGitHubリポジトリへアップロードします。
2. GitHubのリポジトリで「Settings」→「Pages」を開きます。
3. 「Build and deployment」のSourceを「GitHub Actions」に変更します。
4. `main`ブランチへpushすると、自動的にビルド・公開されます。

ローカルで確認する場合：

```bash
pnpm install
pnpm dev:pages
```

静的ファイルを作成する場合：

```bash
pnpm build:pages
```

生成先は `pages-dist` です。PSD・PNG・音声は外部へ送信されず、ブラウザ内で処理されます。
