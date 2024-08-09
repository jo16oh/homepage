<script context="module">
  const images = import.meta.glob(
    ['../../../../assets/images/**/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}'],
    {
      eager: true,
      query: { enhanced: true, w: '1956;1304;1290;860;652;430' }
    }
  );

  function getImage(fileName) {
    const path = '../../../../assets/images/' + fileName;
    const image = images[path];
    if (!image) throw new Error('image not found!');

    return image.default;
  }
</script>

<script lang="ts">
  import type { Tokens } from 'marked';
  let { token }: { token: Tokens.Image } = $props();

  const fileName = token.href.split('/').pop() || '';
  const image = getImage(fileName);
</script>

<enhanced:img
  src={image}
  sizes="(min-width: 652px) 652px, 
         (max-width: 429px) 430px, 652px"
  alt={token.text}
  class="my-3"
/>
