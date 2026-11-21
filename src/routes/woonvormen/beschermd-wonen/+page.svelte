<script>
  import Foto from '$lib/components/atoms/Foto.svelte';
</script>

<main id="inhoud">
<section>
  <h1>Beschermd wonen</h1>

  <p>
    Kun je nog niet zelfstandig wonen en heb je behoefte aan een plek met rust,
    duidelijkheid en begeleiding dichtbij? Bij beschermd wonen woon je samen met
    andere jongeren op een kleinschalige locatie. Er is dag en nacht iemand in
    de buurt om je te ondersteunen.
  </p>

  <Foto naam="kamer-met-fauteuil" voorrang />
</section>

<section>
  <h2>Voor wie</h2>

  <p>
    Beschermd wonen is bedoeld voor jongeren vanaf 18 jaar die intensieve
    begeleiding nodig hebben bij het dagelijks leven. Bijvoorbeeld bij het
    opbouwen van een dagritme, het nakomen van afspraken, het verzorgen van een
    woonruimte of het omgaan met spanning.
  </p>
</section>

<section>
  <h2>Hoe wij werken</h2>

  <p>
    Je krijgt begeleiding van een vast team. Zo leer je de begeleiders kennen en
    hoeven afspraken niet steeds opnieuw te worden gemaakt. Samen bespreken we
    waar je aan wilt werken en welke ondersteuning daarbij past.
  </p>

  <p>
    We bieden duidelijkheid en houvast, maar vinden het ook belangrijk dat je
    zelf kunt oefenen. Wat je zelfstandig kunt, blijf je zoveel mogelijk zelf
    doen. Waarbij je hulp nodig hebt, staan we naast je.
  </p>

  <p>
    Gaat het een tijdje minder goed of lukt iets niet zoals afgesproken? Dan
    kijken we samen wat er is gebeurd en wat je nodig hebt om de volgende stap
    te zetten. Ontwikkeling hoeft bij ons niet in één rechte lijn te verlopen.
  </p>
</section>

<section>
  <h2>Wat je kunt verwachten</h2>

  <p>
    De begeleiding richt zich op jouw dagelijks leven. Je leert bijvoorbeeld om
    een dagritme vast te houden, je woonruimte te verzorgen en afspraken na te
    komen. Ook kijken we samen naar contact met anderen, omgaan met spanning en
    de keuzes die je wilt maken voor je toekomst.
  </p>

  <p>
    Je kunt bijvoorbeeld ondersteuning krijgen bij je dagstructuur,
    administratie en huishouden, of bij het vinden van passende dagbesteding. We
    stemmen de begeleiding af op wat jij nodig hebt en op het tempo dat bij jou
    past.
  </p>
</section>

<section>
  <h2>Aanmelden</h2>

  <p>
    Aanmelden voor beschermd wonen verloopt altijd via de gemeente of een
    verwijzer.
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
