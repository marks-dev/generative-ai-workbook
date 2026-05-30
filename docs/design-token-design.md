

# Design Token Design

## 目的

デザインで利用する共通トークンを定義する。

実装時の見た目の揺れを防止することを目的とする。

---

## 基本方針

- デザイン値を共通化する
- CSSへ直接値を書かない
- トークン経由で利用する
- AI実装時の差異を最小化する
- 長期保守しやすい構成とする

---

## 位置付け

```text
Design Token
↓
site.css
↓
各画面
```

補足:

- 実装時はDesign Tokenを利用する
- 個別値の乱立を防止する

---

## Color Token

用途:

- 背景色
- 文字色
- ボーダー色
- アクセント色

例:

```css
--color-background
--color-surface
--color-text
--color-text-muted
--color-border
--color-accent
```

補足:

- カラーコードは後で決定する

---

## Typography Token

用途:

- 見出し
- 本文
- 補足情報

例:

```css
--font-size-body
--font-size-small
--font-size-h3
--font-size-h2
--font-size-h1
```

---

## Spacing Token

用途:

- Margin
- Padding
- セクション間余白

例:

```css
--space-xs
--space-sm
--space-md
--space-lg
--space-xl
```

補足:

- 読んで学ぶ
- 触って学ぶ

で利用する

---

## Radius Token

用途:

- Card
- Button
- Input

例:

```css
--radius-sm
--radius-md
```

方針:

- 過度な角丸を避ける

---

## Border Token

用途:

- Card
- Sidebar
- Header

例:

```css
--border-width
```

---

## Shadow Token

用途:

- 補助的な強調

例:

```css
--shadow-sm
```

方針:

- 必要最小限とする

---

## Responsive Token

用途:

- ブレークポイント

例:

```css
--breakpoint-mobile
--breakpoint-tablet
--breakpoint-desktop
```

補足:

- 詳細値は後で決定する

---

## 利用ルール

推奨:

- トークン経由で値を参照する

非推奨:

- 個別コンポーネントで独自値を定義する

目的:

- 一貫性維持
- 保守性向上

---

## 今後決めること

- カラーコード
- フォントサイズ
- スペーシング値
- Radius値
- ブレークポイント値