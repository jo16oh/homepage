<script context="module">
  const images = import.meta.glob(
    ['../../../../assets/images/**/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}'],
    {
      eager: true,
      query: { enhanced: true }
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
  console.log(fileName);
  const image = getImage(fileName);
</script>

<enhanced:img src={image} alt="photo" />
