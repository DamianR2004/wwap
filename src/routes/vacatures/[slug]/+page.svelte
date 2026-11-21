<script>
  import { PortableText } from '@portabletext/svelte';
  import WerkenBij from '$lib/components/organims/WerkenBij.svelte';

  let { data } = $props();

  const v = $derived(data.vacature);
</script>

<svelte:head>
  <title>{v.title} | Vacatures | WWAP</title>
</svelte:head>

<main id="inhoud">
<section>
  <a href="/vacatures">Alle vacatures</a>

  <h1>{v.title}</h1>

  <dl>
    {#if v.hours}
      <div><dt>Uren</dt><dd>{v.hours}</dd></div>
    {/if}
    {#if v.location}
      <div><dt>Locatie</dt><dd>{v.location}</dd></div>
    {/if}
    {#if v.afdeling}
      <div><dt>Afdeling</dt><dd>{v.afdeling}</dd></div>
    {/if}
    {#if v.isInternship}
      <div><dt>Soort</dt><dd>Stage</dd></div>
    {/if}
  </dl>
</section>

<section>
  <h2>Over deze vacature</h2>

  <PortableText value={v.description} />
</section>

<WerkenBij />

<section>
  <h2>Interesse?</h2>

  <p>
    Lijkt deze functie je wat? Neem contact met ons op. We vertellen je graag
    meer en plannen een kennismaking.
  </p>

  <a href="/contact">Reageer op deze vacature</a>
</section>
</main>

<style>
  /* Terug-link boven de kop, met pijl ervoor */
  section:first-child > a:first-child::before {
    content: '← ';
  }

  /* Kenmerken: label boven waarde, op bredere schermen naast elkaar */
  dl {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 2.5rem;
  }

  dl > div {
    display: grid;
  }

  dt {
    font-size: 0.875rem;
    color: var(--color-petrol);
  }

  dd {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 700;
  }
</style>
