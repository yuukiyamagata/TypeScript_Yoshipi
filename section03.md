# コンパイラを使う方法

## watchモードを使って自動的にTSからJSにコンパイルする方法
tsc  index.ts --watch
エラーが出てもコンパイルができる

## tsc --initでtsconfig.jsonを作り、すべてのファイルを一気にコンパイルする方法
tsc --initでtsconfigを作成
tscコマンドで一気にコンパイルされる
tscコマンドを使用したときに、tsconfig.jsonを見に行く

## includesとexcludesとfilesを使ってコンパイルするファイルを選ぶ方法
compilerOptions どのようにしてコンパイルするかの方法が書かれている
include コンパイル対象に含める
exclude コンパイル対照に含めない
( include + files - exclude ) でコンパイルされるファイルが決まる
files ワイルドカードを使用できない 絶対パスか相対パスを使用する

## target
コンパイルされるJSのVersion

## libを使用して、TypeScriptが用意している型の定義を追加する



## allowJs, CheckJs, 