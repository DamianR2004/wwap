<script>
  import Foto from '$lib/components/atoms/Foto.svelte';
</script>

<main id="inhoud">
<section>
  <h1>Beschermd thuis</h1>

  <p>
    Ben je toe aan een eigen woonruimte, maar wil je nog niet overal alleen voor
    staan? Bij beschermd thuis regel je steeds meer zelf. Je begeleider denkt met
    je mee, helpt wanneer je vastloopt en geeft je de ruimte om dingen op jouw
    manier te leren.
  </p>

  <Foto naam="woonkamer-bank" voorrang />
</section>

<section>
  <h2>Voor wie</h2>

  <p>
    Beschermd thuis is bedoeld voor jongeren vanaf 18 jaar die toe zijn aan meer
    zelfstandigheid, maar nog regelmatig ondersteuning nodig hebben.
    Bijvoorbeeld om overzicht te houden, financiële zaken te regelen, een
    dagritme vast te houden of een eigen netwerk op te bouwen.
  </p>
</section>

<section>
  <h2>Hoe wij werken</h2>

  <p>
    Je hebt je eigen woonruimte en bent verantwoordelijk voor je dagelijks
    leven. Je begeleider komt op afgesproken momenten langs en is beschikbaar om
    met je mee te denken. Samen bespreken jullie wat goed gaat, waar je tegenaan
    loopt en welke volgende stap haalbaar is. De ondersteuning verandert mee
    wanneer jij meer zelf kunt of tijdelijk extra hulp nodig hebt.
  </p>
</section>

<section>
  <h2>Wat je kunt verwachten</h2>

  <p>
    Je kunt hulp krijgen bij administratie, boodschappen, planning en structuur
    in je dag. Daarnaast is er ruimte om te praten over spanning, lastige keuzes
    of contact met andere mensen. We helpen je niet door alles van je over te
    nemen, maar door samen te oefenen totdat je iets steeds beter zelf kunt.
  </p>

  <p>
    Jij houdt de regie over je eigen leven. Samen spreken we af waarbij je
    ondersteuning krijgt, welke doelen voor jou belangrijk zijn en welke
    afspraken nodig zijn om veilig te kunnen wonen.
  </p>
</section>

<section>
  <h2>Aanmelden</h2>

  <p>
    Voor beschermd thuis kun je rechtstreeks contact met ons opnemen. Aanmelden
    via een gemeente of verwijzer kan ook.
  </p>

  <div>
    <a href="/contact">Neem contact op</a>
    <a href="/woonvestigingen">Bekijk onze woonvestigingen</a>
  </div>
</section>
</main>

<style>
  /* Lijn tussen de secties (vanaf 'Hoe wij werken'), met lucht tot de kop eronder */
  main > section:nth-child(n + 3) {
    border-top: 1px solid var(--color-border);
  }

  main > section:nth-child(n + 3)::before {
    content: '';
    height: 1.5rem;
  }
</style>
