<script>
  import Foto from '$lib/components/atoms/Foto.svelte';
</script>

<main id="inhoud">
<section>
  <h1>Ambulante begeleiding</h1>

  <p>
    Woon je zelfstandig, maar merk je dat sommige dingen zich blijven
    opstapelen? Misschien verlies je het overzicht in je administratie, geven
    afspraken spanning of lukt het niet om ritme in je week te houden. Een
    ambulant begeleider komt naar je toe en helpt je om weer grip te krijgen op
    wat er speelt.
  </p>

  <Foto naam="agenda-notitieboek" voorrang />
</section>

<section>
  <h2>Voor wie</h2>

  <p>
    Ambulante begeleiding is bedoeld voor jongeren die zelfstandig wonen,
    bijvoorbeeld in een eigen woning, en op bepaalde gebieden ondersteuning
    kunnen gebruiken. Je hoeft daarvoor niet te verhuizen. Je begeleider komt
    naar jou toe, zodat jullie kunnen werken aan wat er in jouw eigen omgeving
    speelt.
  </p>
</section>

<section>
  <h2>Hoe wij werken</h2>

  <p>
    We beginnen met wat voor jou belangrijk is. Waar loop je tegenaan? Wat wil
    je veranderen? En wat lukt al wel? Samen maken we de vragen kleiner en
    vertalen we ze naar haalbare stappen. Dat kan gaan om administratie of
    dagbesteding, maar ook om een moeilijke afspraak voorbereiden, grenzen
    aangeven of hulp vragen wanneer dat nodig is.
  </p>
</section>

<section>
  <h2>Wat je kunt verwachten</h2>

  <p>
    Je kunt ondersteuning krijgen bij administratie en financiën, het omgaan met
    eventuele beperkingen, belangrijke afspraken en het vinden van een passende
    daginvulling. Soms doen we iets eerst samen. Daarna kijken we wat jij zelf
    kunt oppakken en waarbij ondersteuning nodig blijft.
  </p>

  <p>
    Je blijft zelfstandig wonen en houdt zelf de regie. Wij zitten naast je,
    niet aan het stuur. We denken mee, spreken je aan wanneer dat nodig is en
    helpen je om keuzes en routines vol te houden in het dagelijks leven.
  </p>
</section>

<section>
  <h2>Aanmelden</h2>

  <p>
    Voor ambulante begeleiding kun je rechtstreeks contact met ons opnemen.
    Aanmelden via een gemeente of verwijzer kan ook.
  </p>

  <a href="/contact">Neem contact op</a>
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
