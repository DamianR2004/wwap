<script>
  import Foto from '$lib/components/atoms/Foto.svelte';
</script>

<main id="inhoud">
<section>
  <h1>Contact</h1>
    <p>Wil je weten of WWAP bij jouw situatie past? Ben je ouder of naaste en wil je overleggen?
    Of heb je als gemeente of verwijzer een jongere in beeld die binnen bestaande trajecten
    vastloopt? Neem contact met ons op. We luisteren, stellen vragen en denken eerlijk mee
    over wat mogelijk is.
    </p>

  <Foto naam="gesprek-aan-tafel" voorrang />
</section>

<section>
  <h2>Gegevens</h2>
    <p>Neem contact op via:</p>
  <address>
    <p>WWAP B.V. Wonen en Werken aan Perspectief</p>

    <dl>
      <div>
        <dt>Adres</dt>
        <dd>
          <a
            href="https://maps.app.goo.gl/74Sboh1TYS9S21oUA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Bekijk Klaphekweg 32a, Ede op Google Maps. Dit opent een nieuw tabblad.">
            Klaphekweg 32a, 6713 HN Ede
          </a>
        </dd>
      </div>
      <div>
        <dt>Telefoon</dt>
        <dd><a href="tel:+31626778209">06 26778209</a></dd>
      </div>
      <div>
        <dt>E-mail</dt>
        <dd><a href="mailto:info@wwap.nl">info@wwap.nl</a></dd>
      </div>
    </dl>
  </address>
</section>

<section>
  <h2>Openingstijden</h2>
    <p>
        Ons kantoor is van maandag tot en met vrijdag bereikbaar van 
      <time datetime="08:30">08.30</time> tot <time datetime="17:00">17.00</time> uur.
    </p>
</section>
</main>

<style>
  /* Gegevens en openingstijden als kaarten */
  main > section + section {
    grid-template-columns: 2rem 1fr 2rem;
    align-content: start;
    background-color: var(--color-bg-subtle);
    border-radius: 0.75rem;
  }

  /* Lege rijen boven en onder: binnenruimte zonder padding */
  main > section + section::before,
  main > section + section::after {
    content: '';
  }

  main > section + section > *,
  main > section + section::before,
  main > section + section::after {
    grid-column: 2;
  }

  /* Gegevens: geen cursief, label klein boven de waarde */
  address {
    display: grid;
    gap: 1.5rem;
    font-style: normal;
  }

  address > p {
    font-weight: 700;
    color: var(--color-petrol);
  }

  dl {
    display: grid;
    gap: 1.25rem;
  }

  dl > div {
    display: grid;
    gap: 0.25rem;
  }

  dt {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 700;
    font-size: 0.875rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--color-petrol);
  }

  dd {
    font-size: 1.125rem;
  }

  /*
    Vanaf laptop: de kolom van main wordt in tweeën gedeeld (met een lege
    kolom van 2rem ertussen), zodat de twee kaarten naast elkaar staan.
    Samen even breed als elders: min(90%, 80rem).
  */
  @media (min-width: 64rem) {
    main {
      grid-template-columns: 1fr min(calc(45% - 1rem), 39rem) 2rem min(calc(45% - 1rem), 39rem) 1fr;
    }

    main > *,
    main::before,
    main::after {
      grid-column: 2 / 5;
    }

    main > section + section {
      grid-column: 2;
    }

    main > section + section + section {
      grid-column: 4;
    }
  }
</style>
