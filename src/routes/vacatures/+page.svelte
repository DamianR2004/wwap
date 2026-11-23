<script>
  import Foto from '$lib/components/atoms/Foto.svelte';

  let { data } = $props();

  const kenmerken = (v) =>
    [v.hours, v.location, v.isInternship && 'Stage'].filter(Boolean).join(' · ');
</script>

<svelte:head>
  <title>Vacatures | WWAP</title>
</svelte:head>

<main id="inhoud">
<section>
  <h1>Vacatures</h1>

  <Foto naam="team-aan-tafel" voorrang />
</section>

<section>
  <h2>Werken bij WWAP: voor mensen die er écht voor gaan</h2>

  <p>
    Bij WWAP begeleid je jongvolwassenen vanaf 18 jaar bij wonen, dagelijks
    leven en de stap naar meer zelfstandigheid. Je leert jongeren kennen, maakt
    duidelijke afspraken en helpt hen om steeds meer zelf te doen. Dat vraagt om
    betrokkenheid, geduld en het vermogen om professioneel te handelen wanneer
    een situatie ingewikkeld wordt.
  </p>
</section>

<section>
  <h2>Openstaande vacatures</h2>

  {#if data.onbereikbaar}
    <p>De vacatures kunnen op dit moment niet worden geladen. Probeer het later opnieuw.</p>
  {:else if data.vacatures.length}
    <ul>
      {#each data.vacatures as vacature (vacature.slug)}
        <li>
          <h3><a href="/vacatures/{vacature.slug}">{vacature.title}</a></h3>
          {#if kenmerken(vacature)}
            <p>{kenmerken(vacature)}</p>
          {/if}
        </li>
      {/each}
    </ul>
  {:else}
    <p>Er staan op dit moment geen vacatures open.</p>
  {/if}
</section>

<section>
  <h2>Staat jouw functie er niet tussen?</h2>

  <p>
    Denk je dat je bij WWAP past? Dan kun je ook een open sollicitatie sturen.
    We maken graag kennis.
  </p>

  <a href="/contact">Neem contact op</a>
</section>
</main>

<style>
  /* Vacaturelijst: kaarten, vanaf tablet in kolommen */
  ul {
    list-style: none;
    padding: 0; /* UA-default neutraliseren */
    justify-self: stretch;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 20rem), 1fr));
    gap: 1rem;
  }

  /* Binnenruimte via lege grid-tracks en ::before/::after-rijen */
  li {
    position: relative;
    display: grid;
    grid-template-columns: 1.5rem 1fr 1.5rem;
    grid-template-rows: 1.25rem auto auto 1.25rem;
    row-gap: 0.25rem;
    max-width: none;
    background-color: var(--color-bg-subtle);
    border-radius: 0.75rem;
  }

  li::before,
  li::after {
    content: '';
  }

  li > *,
  li::before,
  li::after {
    grid-column: 2;
  }

  li::after {
    grid-row: -2;
  }

  /* Hele kaart klikbaar; de link blijft één element in de tabvolgorde */
  h3 a::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
  }

  li:has(a:focus-visible) {
    outline: 3px solid var(--color-petrol);
    outline-offset: 3px;
  }

  h3 a:focus-visible {
    outline: none;
  }

  li:hover {
    background-color: #e3edf1;
  }
</style>
