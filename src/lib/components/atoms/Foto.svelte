<script>
  /*
    Foto uit /static/images, gemaakt in 800 en 1600 px breed (3:2).
    webp voor browsers die het kennen, jpg als fallback.

    naam      bestandsnaam zonder breedte/extensie, bijv. 'bospad-zonlicht'
    alt       '' voor sfeerbeeld (decoratief), anders een beschrijving
    voorrang  true voor de foto boven de vouw: direct laden i.p.v. lazy
    sizes     weergavebreedte; standaard een halve kolom vanaf laptop
  */
  let { naam, alt = '', voorrang = false, sizes = '(min-width: 64rem) 40rem, 90vw' } = $props();
  const set = (ext) => `/images/${naam}-800.${ext} 800w, /images/${naam}-1600.${ext} 1600w`;
</script>

<picture>
  <source type="image/webp" srcset={set('webp')} {sizes} />
  <img
    src="/images/{naam}-800.jpg"
    srcset={set('jpg')}
    {sizes}
    {alt}
    width="1600"
    height="1067"
    loading={voorrang ? 'eager' : 'lazy'}
    fetchpriority={voorrang ? 'high' : 'auto'}
    decoding="async"
  />
</picture>

<style>
  picture {
    justify-self: stretch;
    max-width: 56rem;
  }

  img {
    width: 100%;
    border-radius: 0.5rem;
  }
</style>
