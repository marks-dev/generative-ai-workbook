import os
import subprocess
from PIL import Image

# 1. 座標を中央寄せに調整したシンボルマークのみのSVGを構築
symbol_svg_content = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <!-- クローズド・グループ: シンボルマークを 200x200 の中央に配置 (translate調整) -->
  <g transform="translate(-8.5, 16.5)">
    <!-- ニューラルネットワークのエッジ -->
    <g stroke="#C0C0C0" stroke-width="2" stroke-linecap="round" opacity="0.95">
      <line x1="105" y1="105" x2="125" y2="85" />
      <line x1="105" y1="105" x2="120" y2="120" />
      <line x1="125" y1="85" x2="145" y2="105" />
      <line x1="125" y1="85" x2="135" y2="55" />
      <line x1="145" y1="105" x2="165" y2="85" />
      <line x1="145" y1="105" x2="155" y2="125" />
      <line x1="165" y1="85" x2="185" y2="95" />
      <line x1="165" y1="85" x2="175" y2="60" />
      <line x1="135" y1="55" x2="175" y2="60" />
      <line x1="175" y1="60" x2="185" y2="95" />
      <line x1="135" y1="55" x2="120" y2="25" />
      <line x1="175" y1="60" x2="160" y2="15" />
      <line x1="120" y1="25" x2="160" y2="15" />
    </g>

    <!-- 本のページ群 (左側: 深い青 #003366) -->
    <g fill="#003366">
      <!-- 最外カバー (左) -->
      <path d="M 32,85 C 32,125 38,145 62,152 C 75,155 88,153 98,148 L 98,137 C 90,142 80,144 70,140 C 48,132 44,112 44,85 Z" />
      <!-- 中間ページ (左) -->
      <path d="M 46,73 C 46,113 50,132 71,137 C 81,140 90,138 98,133 L 98,122 C 93,127 85,129 77,126 C 61,120 58,103 58,73 Z" />
      <!-- 最内ページ (左) -->
      <path d="M 60,61 C 60,99 62,118 78,122 C 86,124 92,122 98,118 L 98,68 C 94,71 88,72 82,70 C 72,66 68,61 60,61 Z" />
    </g>

    <!-- 本のページ群 (右側: 深い青 #003366) -->
    <g fill="#003366">
      <!-- 最外カバー (右) -->
      <path d="M 168,85 C 168,125 162,145 138,152 C 125,155 112,153 102,148 L 102,137 C 110,142 120,144 130,140 C 152,132 156,112 156,85 Z" />
      <!-- 中間ページ (右) -->
      <path d="M 154,73 C 154,113 150,132 129,137 C 119,140 110,138 102,133 L 102,122 C 107,127 115,129 123,126 C 139,120 142,103 142,73 Z" />
      <!-- 最内ページ (右) -->
      <path d="M 140,61 C 140,99 138,118 122,122 C 114,124 108,122 102,118 L 102,68 C 106,71 112,72 118,70 C 128,66 132,61 140,61 Z" />
    </g>

    <!-- 星のシンボル (深い青 #003366 と シアン #00CCCC) -->
    <!-- 星1 (大、深い青) -->
    <polygon points="135,37 137.5,43 144,43.5 139.5,48 140.5,54.5 135,51.5 129.5,54.5 130.5,48 126,43.5 132.5,43" fill="#003366" />
    <!-- 星2 (大、深い青) -->
    <polygon points="175,22 177.5,28 184,28.5 179.5,33 180.5,39.5 175,36.5 169.5,39.5 170.5,33 166,28.5 172.5,28" fill="#003366" />
    <!-- 星3 (小、深い青) -->
    <polygon points="158,52 160,56.5 165,56.8 161.5,60.2 162.3,65 158,62.7 153.7,65 154.5,60.2 151,56.8 156,56.5" fill="#003366" />

    <!-- ニューラルネットワークのノード -->
    <g fill="#003366">
      <circle cx="105" cy="105" r="4.5" fill="#00CCCC" />
      <circle cx="125" cy="85" r="5" fill="#00CCCC" />
      <circle cx="145" cy="105" r="4.5" fill="#00CCCC" />
      <circle cx="165" cy="85" r="4.5" fill="#00CCCC" />
      <circle cx="135" cy="55" r="4" fill="#00CCCC" />
      <circle cx="175" cy="60" r="5" fill="#00CCCC" />
      <circle cx="120" cy="120" r="4.5" fill="#00CCCC" />
      <circle cx="155" cy="125" r="4" fill="#00CCCC" />
      <circle cx="185" cy="95" r="5" fill="#00CCCC" />
      <circle cx="120" cy="25" r="5" fill="#00CCCC" />
      <circle cx="160" cy="15" r="4" fill="#00CCCC" />
    </g>
  </g>
</svg>
"""

# 作業用ディレクトリ
scratch_dir = "scratch"
src_dir = "src"

symbol_svg_path = os.path.join(scratch_dir, "symbol.svg")
symbol_png_path = os.path.join(scratch_dir, "symbol_512.png")

# ディレクトリ作成
os.makedirs(scratch_dir, exist_ok=True)
os.makedirs(src_dir, exist_ok=True)

# 1. symbol.svg を書き出す
with open(symbol_svg_path, "w") as f:
    f.write(symbol_svg_content)
print(f"Created SVG symbol at: {symbol_svg_path}")

# 2. sips で高解像度PNG (512x512) を生成する
# sips コマンドで SVG から PNG へのラスタライズを実行
try:
    subprocess.run([
        "sips", 
        "-s", "format", "png",
        symbol_svg_path,
        "--out", symbol_png_path,
        "--resampleHeightWidth", "512", "512"
    ], check=True)
    print(f"Rasterized SVG to PNG: {symbol_png_path}")
except subprocess.CalledProcessError as e:
    print("Error during sips rasterization:", e)
    exit(1)

# 3. Pillow を使って必要なファイルを生成
try:
    base_image = Image.open(symbol_png_path)
    
    # 3-1. apple-touch-icon.png (180x180)
    apple_icon_path = os.path.join(src_dir, "apple-touch-icon.png")
    apple_img = base_image.resize((180, 180), Image.Resampling.LANCZOS)
    apple_img.save(apple_icon_path, "PNG")
    print(f"Created apple-touch-icon.png: {apple_icon_path}")

    # 3-2. ms-tile.png (150x150)
    ms_tile_path = os.path.join(src_dir, "ms-tile.png")
    ms_img = base_image.resize((150, 150), Image.Resampling.LANCZOS)
    ms_img.save(ms_tile_path, "PNG")
    print(f"Created ms-tile.png: {ms_tile_path}")

    # 3-3. favicon.ico (マルチレゾリューション: 16, 24, 32, 48, 64, 128)
    favicon_path = os.path.join(src_dir, "favicon.ico")
    # ICOに含める各サイズ用のImageオブジェクトのリストを作成
    ico_sizes = [16, 24, 32, 48, 64, 128]
    ico_imgs = [base_image.resize((size, size), Image.Resampling.LANCZOS) for size in ico_sizes]
    
    # saveメソッドで最初の画像をベースにし、残りを append_images に指定して ico として保存
    ico_imgs[0].save(favicon_path, format="ICO", append_images=ico_imgs[1:])
    print(f"Created favicon.ico: {favicon_path}")
    
    # おまけ: android-chrome-192x192.png も念のため作成しておく
    android_icon_path = os.path.join(src_dir, "android-chrome-192x192.png")
    android_img = base_image.resize((192, 192), Image.Resampling.LANCZOS)
    android_img.save(android_icon_path, "PNG")
    print(f"Created android-chrome-192x192.png: {android_icon_path}")

    # クリーンアップ (一時ファイルの削除)
    if os.path.exists(symbol_svg_path):
        os.remove(symbol_svg_path)
    if os.path.exists(symbol_png_path):
        os.remove(symbol_png_path)
    print("Cleaned up temporary files.")

except Exception as e:
    print("Error during image resizing/saving:", e)
    exit(1)
