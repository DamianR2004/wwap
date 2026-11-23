<footer>
  <section>
    <h2 class="visually-hidden">Snelkoppelingen</h2>
    <section>
      <h3>Navigatie</h3>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/over-ons">Over ons</a></li>
        <li><a href="/woonvestigingen">Woonvestigingen</a></li>
      </ul>
    </section>

    <section>
      <h3>Algemeen</h3>
      <ul>
        <li><a href="/partners">Partners</a></li>
        <li><a href="/klachten">Klachten</a></li>
        <li><a href="/kwaliteit">Kwaliteit</a></li>
        <li><a href="/vacatures">Vacatures</a></li>
      </ul>
    </section>

    <section>
      <h3>Socials</h3>
      <ul>
        <li>
          <a href="https://www.linkedin.com/company/wwap/">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="2" />
              <path d="M7 10v7M7 7v.01M11 17v-7M11 13a3 3 0 0 1 6 0v4" />
            </svg>
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/WWAP2019/">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="2" />
              <path d="M16 7h-1.5A2.5 2.5 0 0 0 12 9.5V22M9 13h6" />
            </svg>
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/wwapede/">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <path d="M17.5 6.5h.01" />
            </svg>
            <span>Instagram</span>
          </a>
        </li>
      </ul>
    </section>

    <section>
      <h3>Contact</h3>
      <ul>
        <li>
          <a href="tel:+31626778209">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"
              />
            </svg>
            06 26778209
          </a>
        </li>
        <li>
          <a href="mailto:info@wwap.nl">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-10 6L2 7" />
            </svg>
            info@wwap.nl
          </a>
        </li>
        <li>
          <a
            href="https://maps.app.goo.gl/74Sboh1TYS9S21oUA"
            target="_blank"
            rel="noopener noreferrer"
           
            aria-label="Bekijk Klaphekweg 32a, 6713 HN Ede op Google Maps. Dit opent een nieuw tabblad."
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>
              <span>Klaphekweg 32a</span>
              <span>6713 HN, Ede</span>
            </span>
          </a>
        </li>
      </ul>
    </section>
  </section>

  <section>
    <h2 class="visually-hidden">Copyright en juridische informatie</h2>
    <ul>
      <li><p>&copy; 2026 WWAP</p></li>
      <li><a href="/privacy">Privacy verklaring</a></li>
      <li><a href="/disclaimer">Disclaimer</a></li>
    </ul>
    <a href="https://www.bydr.studio" aria-label="Ontworpen en ontwikkeld door bydr.studio">bydr.studio</a>
  </section>
</footer>


<style>
  /*
    Geen classes/id's: alles op element, structuur en attributen.
    Ruimte komt volledig uit grid/flex (tracks en gap).

    footer > section:first-of-type            de vier kolommen
    footer > section:first-of-type > section  één kolom
    footer > section:last-of-type             onderste balk
    ul:has(a[href^='tel:'])                   contactlijst
  */

  footer {
    display: grid;
    grid-template-columns: 1fr min(90%, 80rem) 1fr;
    grid-template-rows: clamp(2.5rem, 6vw, 4rem) auto clamp(2.5rem, 7vw, 6rem) auto 1.5rem;
    background-color: var(--color-petrol);
    color: #ffffff;
  }

  footer > section {
    grid-column: 2;
  }

  /*
    Kolommen in HTML-volgorde: Navigatie, Algemeen, Socials, Contact
    Mobiel en tablet: Navigatie | Algemeen, Socials | Contact (2x2)
    Desktop: alle vier naast elkaar
    Visuele volgorde = tabvolgorde, dus geen herschikking.
  */
  footer > section:first-of-type {
    grid-row: 2;
    display: grid;
    /* Mobiel: eerste kolom zo smal als nodig, zodat het adres op één regel past */
    grid-template-columns: auto 1fr;
    gap: 2rem 1rem;
  }

  @media (min-width: 30rem) {
    footer > section:first-of-type {
      grid-template-columns: repeat(2, 1fr);
      gap: 2.5rem 2rem;
    }
  }

  @media (min-width: 64rem) {
    footer > section:first-of-type {
      grid-template-columns: repeat(4, auto);
      justify-content: space-between;
    }
  }

  footer > section:first-of-type > section {
    display: grid;
    align-content: start;
    gap: 1.25rem;
  }

  /* Onderste balk */
  footer > section:last-of-type {
    grid-row: 4;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1.25rem 2rem;
    font-size: 1rem;
  }

  /* Scheidingslijn boven de onderste balk */
  footer > section:last-of-type::before {
    content: '';
    flex-basis: 100%;
    height: 2px;
    background-color: currentColor;
  }

  /* UA-/globale defaults neutraliseren */
  h3,
  p,
  ul {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
    display: grid;
    gap: 0.75rem;
  }

  /* Jakarta bold + grootte uit de globale h3-schaal, alleen kleur aanpassen */
  h3 {
    color: inherit;
  }

  /* Zelfde grootte als het hoofdmenu in de header */
  section > section a {
    font-size: 1.125rem;
  }

  /* Copyright, privacy, disclaimer met streepjes ertussen */
  footer > section:last-of-type > ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4em;
  }

  footer > section:last-of-type > ul > li {
    display: flex;
    gap: 0.4em;
  }

  footer > section:last-of-type > ul > li:not(:last-child)::after {
    content: '-' / '';
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    color: inherit;
    text-decoration: underline;
  }

  a:focus-visible {
    outline-color: #ffffff;
  }

  /* Links met icoon */
  a:has(> svg) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  /* Adres loopt over twee regels: icoon bovenaan uitlijnen */
  ul:has(a[href^='tel:']) a:has(> svg) {
    align-items: start;
  }

  svg {
    flex-shrink: 0;
    width: 1.1em;
    height: 1.1em;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* Adres over twee regels */
  a > span {
    display: grid;
  }
</style>
