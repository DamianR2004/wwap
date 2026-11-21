<script>
  import Foto from '$lib/components/atoms/Foto.svelte';
</script>

<main id="inhoud">
<section>
  <h1>Samen bouwen, stap voor stap.</h1>

  <p>
    Soms loopt het leven anders dan je had gehoopt en kom je er alleen niet goed
    uit. Dan helpt het als iemand je serieus neemt, eerlijk met je meedenkt en
    betrokken blijft wanneer het moeilijk wordt. Vanuit dat vertrouwen werken we
    samen aan wat jij nodig hebt om verder te komen.
  </p>

  <Foto naam="bospad-zonlicht" voorrang />
</section>

<section>
  <h2>Over ons</h2>

  <Foto naam="samen-in-het-veld" />
  <section>
    <h3>Wonen en Werken aan Perspectief</h3>

    <p>
      Het kan zijn dat je al verschillende begeleiders hebt gehad en dat
      vertrouwen niet vanzelfsprekend meer is. Bij WWAP begrijpen we dat
      vertrouwen tijd nodig heeft. Je hoeft bij ons niet direct je hele verhaal
      te vertellen of opnieuw bij nul te beginnen.
    </p>

    <p>
      We nemen eerst de tijd om je te leren kennen. Wie ben je, wat speelt er en
      wat gaat er al wél goed? Daarna kijken we samen wat jij wilt veranderen en
      welke ondersteuning daarbij past. We maken duidelijke afspraken en werken
      in stappen die voor jou haalbaar zijn.
    </p>

    <a href="/over-ons">Lees ons volledige verhaal</a>
  </section>
</section>

<section>
  <h2>Wat wij bieden</h2>
  <section>
    <Foto naam="kamer-met-fauteuil" sizes="(min-width: 64rem) 26rem, 90vw" />
    <h3>Beschermd wonen</h3>
    <p>
      Een veilige woonplek met dag en nacht begeleiding dichtbij. Je woont samen
      met andere jongeren en krijgt ondersteuning bij structuur en dagritme. Zo
      werk je toe naar steeds meer zelfstandigheid.
    </p>

    <a href="/woonvormen/beschermd-wonen">Ontdek hoe beschermd wonen eruitziet</a>
  </section>
  <section>
    <Foto naam="woonkamer-bank" sizes="(min-width: 64rem) 26rem, 90vw" />
    <h3>Beschermd thuis</h3>
    <p>
      Je hebt je eigen woonruimte en regelt al veel zelf. Je begeleider is
      dichtbij voor de momenten waarop je ondersteuning nodig hebt, bijvoorbeeld
      bij praktische zaken, het vasthouden van je ritme of een volgende stap
      naar zelfstandigheid.
    </p>

    <a href="/woonvormen/beschermd-thuis">Ontdek wat beschermd thuis kan bieden</a>
  </section>
  <section>
    <Foto naam="agenda-notitieboek" sizes="(min-width: 64rem) 26rem, 90vw" />
    <h3>Ambulante begeleiding</h3>
    <p>
      Je woont zelfstandig en krijgt begeleiding bij jou thuis of in je eigen
      omgeving. Samen werk je aan onderwerpen waarop je vastloopt, zoals
      administratie, afspraken, financiën of structuur in je week.
    </p>

    <a href="/woonvormen/ambulante-begeleiding">Lees hoe ambulante begeleiding werkt</a>
  </section>
</section>
<section>
  <h2>Onze woonvestigingen</h2>
  <p>
    Onze woonvestigingen staan in Ede, Wageningen en Lunteren. We werken
    kleinschalig, zodat jongeren en begeleiders elkaar kennen en er ruimte is
    voor persoonlijke aandacht en snel overleg wanneer dat nodig is.
  </p>

  <a href="/woonvestigingen">Bekijk waar je bij WWAP kunt wonen</a>
</section>
<section>
  <h2>Kennismaken met WWAP</h2>

  <Foto naam="plant-in-handen" />
  <p>
    Wil je weten wat WWAP voor jou, je kind of iemand die je begeleidt kan
    betekenen? Neem dan gerust contact met ons op. We luisteren naar wat er
    speelt, stellen vragen en bekijken samen welke ondersteuning passend is. Ook
    als je nog niet precies weet wat er nodig is.
  </p>

  <a href="/contact">Neem contact op</a>
</section>
</main>

<style>
  /* Wat wij bieden: drie kaarten (vanaf laptop naast elkaar) */
  section:has(> section + section) {
    justify-items: stretch;
    gap: 2rem;
  }

  section:has(> section + section) > section {
    grid-template-columns: 1.5rem 1fr 1.5rem;
    align-content: start;
    overflow: hidden;
    background-color: var(--color-bg-subtle);
    border-radius: 0.75rem;
  }

  section:has(> section + section) > section > *,
  section:has(> section + section) > section::after {
    grid-column: 2;
  }

  /* Lege rij onderaan: binnenruimte zonder padding */
  section:has(> section + section) > section::after {
    content: '';
  }

  section:has(> section + section) > section > :global(picture) {
    grid-column: 1 / -1;
  }

  section:has(> section + section) > section > :global(picture img) {
    border-radius: 0;
  }

  @media (min-width: 64rem) {
    section:has(> section + section) {
      grid-template-columns: repeat(3, 1fr);
    }

    section:has(> section + section) > h2 {
      grid-column: 1 / -1;
    }

    /* Over ons: foto links, tekst rechts */
    main > section:has(> :global(picture)):has(> section) {
      grid-template-columns: 1fr 1fr;
      column-gap: 4rem;
      row-gap: 1.5rem;
    }

    main > section:has(> :global(picture)):has(> section) > :global(picture) {
      grid-column: 1;
      grid-row: 1 / span 2;
      align-self: center;
    }

    main > section:has(> :global(picture)):has(> section) > h2 {
      grid-column: 2;
      grid-row: 1;
      align-self: end;
    }

    main > section:has(> :global(picture)):has(> section) > section {
      grid-column: 2;
      grid-row: 2;
    }

    /* Kennismaken: tekst links, foto rechts, tekst verticaal gecentreerd */
    main > section:last-child:has(> :global(picture)) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr auto auto auto 1fr;
      column-gap: 4rem;
    }

    main > section:last-child:has(> :global(picture))::before,
    main > section:last-child:has(> :global(picture))::after {
      content: '';
    }

    main > section:last-child:has(> :global(picture)) > *,
    main > section:last-child:has(> :global(picture))::before,
    main > section:last-child:has(> :global(picture))::after {
      grid-column: 1;
    }

    main > section:last-child:has(> :global(picture)) > :global(picture) {
      grid-column: 2;
      grid-row: 1 / -1;
      align-self: center;
    }
  }
</style>
