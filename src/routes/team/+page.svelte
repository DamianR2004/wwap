<script>
  let { data } = $props();

  // JavaScript alleen voor de +-knoppen: welk teamlid staat open
  let open = $state(null);

  // Voorletters als plaatsvervanger zolang er geen foto in Sanity staat
  const voorletters = (naam) =>
    naam
      .split(/\s+/)
      .filter((deel) => /^\p{Lu}/u.test(deel))
      .map((deel) => deel[0])
      .filter((_, i, alle) => i === 0 || i === alle.length - 1)
      .join('');

  const heeftMeer = (lid) => lid.email || lid.telefoon;
</script>

<svelte:head>
  <title>Ons team | WWAP</title>
</svelte:head>

<main id="inhoud">
<section>
  <h1>Ons team</h1>

  <p>
    Achter WWAP staat een team van mensen die jongeren echt willen leren kennen.
    Begeleiders, coördinatoren en ondersteunende collega's dragen ieder vanuit
    hun eigen rol bij aan een veilige woonomgeving, betrouwbare begeleiding en
    nieuwe mogelijkheden voor de toekomst.
  </p>
</section>

{#if data.onbereikbaar}
  <section>
    <p>Het team kan op dit moment niet worden geladen. Probeer het later opnieuw.</p>
  </section>
{/if}

{#each data.groepen as groep (groep.naam)}
  <section>
    <h2>{groep.naam}</h2>

    <ul>
      {#each groep.leden as lid (lid.id)}
        <li>
          {#if lid.foto}
            <picture>
              <source
                type="image/webp"
                srcset={lid.foto.webp}
                sizes="(min-width: 80rem) 19rem, (min-width: 64rem) 22vw, (min-width: 48rem) 30vw, 45vw"
              />
              <img
                src={lid.foto.src}
                srcset={lid.foto.jpg}
                sizes="(min-width: 80rem) 19rem, (min-width: 64rem) 22vw, (min-width: 48rem) 30vw, 45vw"
                alt=""
                width="480"
                height="480"
                loading="lazy"
                decoding="async"
              />
            </picture>
          {:else}
            <span aria-hidden="true">{voorletters(lid.naam)}</span>
          {/if}

          <h3>{lid.naam}</h3>
          <p>{lid.functie}</p>

          {#if heeftMeer(lid)}
            <button
              type="button"
              aria-expanded={open === lid.id}
              onclick={() => (open = open === lid.id ? null : lid.id)}
            >
              <span class="visually-hidden">Meer over {lid.naam}</span>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v16M4 12h16" /></svg>
            </button>

            <div>
              {#if lid.email}
                <!-- <wbr>: als het adres niet past, breekt het netjes vóór de @ -->
                <a href="mailto:{lid.email}">{lid.email.split('@')[0]}<wbr />@{lid.email.split('@')[1]}</a>
              {/if}
              {#if lid.telefoon}
                <a href="tel:{lid.telefoon.replace(/[^\d+]/g, '')}">{lid.telefoon}</a>
              {/if}
            </div>
          {/if}
        </li>
      {/each}
    </ul>
  </section>
{/each}
</main>

<style>
  /* Intro gecentreerd */
  main > section:first-child {
    justify-items: center;
    text-align: center;
  }

  /* Teamgrid: 2 kolommen mobiel, 3 op tablet, 4 vanaf laptop */
  ul {
    list-style: none;
    padding: 0; /* UA-default neutraliseren */
    justify-self: stretch;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2.5rem 1rem;
  }

  @media (min-width: 48rem) {
    ul {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 3.5rem 1.5rem;
    }
  }

  @media (min-width: 64rem) {
    ul {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 4rem 2rem;
    }
  }

  /*
    Kaart:
    rij 1  foto (volle breedte)
    rij 2  lege track: ruimte tussen foto en naam
    rij 3  naam            +-knop
    rij 4  functie
    rij 5  uitklapvak
  */
  li {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    grid-template-rows: auto 0.5rem auto auto auto;
    align-content: start;
    column-gap: 0.5rem;
    row-gap: 0.25rem;
    max-width: none;
  }

  li > picture,
  li > span {
    grid-column: 1 / -1;
    grid-row: 1;
    aspect-ratio: 1;
    border-radius: 0.5rem;
    overflow: hidden;
  }

  li > picture {
    display: block;
    background-color: var(--color-bg-subtle);
  }

  li > picture img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 600ms cubic-bezier(0.2, 0.7, 0.2, 1);
  }

  li:hover > picture img {
    transform: scale(1.03);
  }

  /* Geen foto: rustig grijs vlak met voorletters */
  li > span {
    display: grid;
    place-items: center;
    font-size: clamp(1.75rem, 1.2rem + 2vw, 3rem);
    letter-spacing: 0.05em;
    color: var(--color-border);
    background-color: var(--color-bg-subtle);
  }

  /* Naam groot en licht, functie klein: zoals in de referentie */
  h3 {
    grid-column: 1 / -1;
    grid-row: 3;
    font-family: 'Atkinson Hyperlegible', sans-serif;
    font-weight: 400;
    font-size: clamp(1.125rem, 0.95rem + 0.75vw, 1.625rem);
    line-height: 1.2;
    letter-spacing: -0.01em;
    color: var(--color-text);
    hyphens: manual; /* namen niet afbreken */
  }

  li > p {
    grid-column: 1 / -1;
    grid-row: 4;
    font-size: 0.8125rem;
    line-height: 1.4;
    color: var(--color-text);
  }

  /* +-knop: 44px raakvlak zonder padding, dunne lijnen, draait naar × */
  button {
    display: grid;
    place-items: center;
    width: 2.75rem;
    height: 2.75rem;
    color: var(--color-text);
    background: none;
    border: 0;
    padding: 0; /* UA-default neutraliseren */
    border-radius: 50%;
    cursor: pointer;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.25;
    transition: transform 250ms ease-out;
  }

  button[aria-expanded='true'] svg {
    transform: rotate(45deg);
  }

  /* Mobiel: knop rechtsonder op de foto, zodat de naam de volle breedte houdt */
  li > button {
    grid-column: 2;
    grid-row: 1;
    align-self: end;
    justify-self: end;
    transform: translate(-0.5rem, -0.5rem);
    background-color: #ffffff;
  }

  /* Vanaf tablet: knop op de regel van de naam, rechts uitgelijnd met de foto */
  @media (min-width: 48rem) {
    h3,
    li > p {
      grid-column: 1;
    }

    /* Over naam + functie heen, zodat de 44px-knop de naamregel niet oprekt.
       Verschoven zodat het plusteken zelf op de fotorand en de naamregel staat. */
    li > button {
      grid-row: 3 / span 2;
      align-self: start;
      transform: translate(0.6rem, -0.35rem);
      background-color: transparent;
    }

    li > button:hover svg {
      transform: scale(1.15);
    }

    li > button[aria-expanded='true']:hover svg {
      transform: rotate(45deg) scale(1.15);
    }
  }

  /* Uitklapvak: dicht tot de knop open staat */
  li > div {
    grid-column: 1 / -1;
    grid-row: 5;
    display: none;
    gap: 0.25rem;
    font-size: 0.875rem;
  }

  li > div::before {
    content: '';
    height: 0.5rem;
  }

  button[aria-expanded='true'] + div {
    display: grid;
  }

  /* overflow-wrap is alleen nog vangnet: normaal breekt het adres bij de <wbr> */
  li > div > a {
    justify-self: start;
    overflow-wrap: anywhere;
  }
</style>
