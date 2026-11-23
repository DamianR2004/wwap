<script>
  import { page } from '$app/state';
  import logo from '$lib/assets/logo-wwap.svg';

  const menu = [
    {
      label: 'Woonvormen',
      children: [
        { href: '/woonvormen/beschermd-wonen', label: 'Beschermd wonen' },
        { href: '/woonvormen/beschermd-thuis', label: 'Beschermd thuis' },
        { href: '/woonvormen/ambulante-begeleiding', label: 'Ambulante begeleiding' }
      ]
    },
    { href: '/woonvestigingen', label: 'Woonvestigingen' },
    {
      label: 'Over ons',
      children: [
        { href: '/over-ons', label: 'Over WWAP' },
        { href: '/team', label: 'Ons team' },
        { href: '/kwaliteit', label: 'Kwaliteit' },
        { href: '/partners', label: 'Partners' }
      ]
    },
    { href: '/vacatures', label: 'Vacatures' }
  ];

  // JavaScript alleen voor de klikknoppen: open/dicht + aria-expanded.
  // Na navigatie wordt de header opnieuw gemount (zie {#key} in +layout.svelte),
  // waardoor alles vanzelf weer dicht is.
  let openMenu = $state(null);
  let mobileOpen = $state(false);

  const current = (href) => (page.url.pathname === href ? 'page' : undefined);
</script>

<header>
  <a href="#inhoud" class="visually-hidden-focusable">Naar de inhoud</a>

  <nav aria-label="Hoofdmenu">
    <a href="/">
      <img src={logo} alt="WWAP, naar de homepage" width="164" height="100" />
    </a>

    <button type="button" aria-expanded={mobileOpen} onclick={() => (mobileOpen = !mobileOpen)}>
      Menu
      <svg viewBox="0 0 24 24" aria-hidden="true">
        {#if mobileOpen}
          <path d="M18 6 6 18M6 6l12 12" />
        {:else}
          <path d="M4 6h16M4 12h16M4 18h16" />
        {/if}
      </svg>
    </button>

    <ul>
      {#each menu as item (item.label)}
        <li>
          {#if item.children}
            <button
              type="button"
              aria-expanded={openMenu === item.label}
              onclick={() => (openMenu = openMenu === item.label ? null : item.label)}
            >
              {item.label}
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
            </button>

            <ul>
              {#each item.children as child (child.href)}
                <li><a href={child.href} aria-current={current(child.href)}>{child.label}</a></li>
              {/each}
            </ul>
          {:else}
            <a href={item.href} aria-current={current(item.href)}>{item.label}</a>
          {/if}
        </li>
      {/each}

      <li><a href="/contact" aria-current={current('/contact')}>Contact</a></li>
    </ul>
  </nav>
</header>

<style>
  /*
    Geen classes/id's: alles op element, structuur en aria-attributen.
    Ruimte komt uit grid-tracks en gap, niet uit padding/margin.

    header > a                    skiplink
    nav > a                       logo
    nav > button                  hamburger (mobiel/tablet)
    nav > ul                      hoofdmenu
    nav > ul > li > button        dropdownknop
    nav > ul > li > ul            submenu
    a[href='/contact']            contactknop
  */

  /* Sticky: blijft bovenin staan tijdens scrollen */
  header {
    position: sticky;
    inset-block-start: 0;
    z-index: 20;
    display: grid;
    grid-template-columns: 1fr min(90%, 80rem) 1fr;
    grid-template-rows: 1rem auto 1rem;
    background-color: #ffffff;
    border-bottom: 1px solid var(--color-border);
  }

  nav {
    grid-column: 2;
    grid-row: 2;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    row-gap: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0; /* UA-default neutraliseren */
  }

  a {
    color: var(--color-petrol);
    text-decoration: none;
  }

  button {
    font: inherit;
    color: var(--color-petrol);
    background: none;
    border: 0;
    padding: 0; /* UA-default neutraliseren */
    cursor: pointer;
    text-underline-offset: 0.25em;
  }

  a:hover,
  button:hover {
    color: var(--color-petrol);
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }

  /* Huidige pagina, en de dropdownknop van de sectie waarin je zit */
  [aria-current='page'],
  li:has([aria-current='page']) > button {
    text-decoration: underline;
    text-decoration-color: var(--color-orange);
    text-decoration-thickness: 3px;
  }

  svg {
    width: 1.5em;
    height: 1.5em;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: transform 200ms ease-out;
  }

  /* Skiplink: zichtbaar zodra hij focus krijgt */
  header > a:focus {
    position: absolute;
    inset-block-start: 0.5rem;
    inset-inline-start: 0.5rem;
    z-index: 10;
    display: grid;
    grid-template-columns: 1rem auto 1rem;
    align-items: center;
    min-height: 2.75rem;
    background-color: var(--color-petrol);
    color: #ffffff;
  }

  header > a:focus::before,
  header > a:focus::after {
    content: '';
  }

  header > a:focus-visible {
    outline-color: var(--color-orange);
  }

  /* Logo */
  nav > a img {
    width: auto;
    height: 4rem;
  }

  /* Hamburger: 44px raakvlak zonder padding */
  nav > button {
    justify-self: end;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    min-height: 2.75rem;
    font-size: 1.125rem;
  }

  /* Hoofdmenu: mobiel dicht tot de hamburger open staat */
  nav > ul {
    grid-column: 1 / -1;
    display: none;
    gap: 1.25rem;
    font-size: 1.25rem;
  }

  nav > button[aria-expanded='true'] + ul {
    display: grid;
  }

  /* Open mobiel menu langer dan het scherm: binnen de header scrollen */
  @media (max-width: 63.99rem) {
    header:has(nav > button[aria-expanded='true']) {
      max-height: 100dvh;
      overflow-y: auto;
      overscroll-behavior: contain;
    }
  }

  /* Dropdownknop */
  nav > ul > li > button {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    min-height: 2.75rem;
  }

  button[aria-expanded='true'] svg {
    transform: rotate(180deg);
  }

  /* Hamburger-icoon wisselt zelf al, niet draaien */
  nav > button[aria-expanded='true'] svg {
    transform: none;
  }

  /* Submenu mobiel: ingesprongen lijst onder de knop */
  nav > ul > li > ul {
    display: none;
    grid-template-columns: 1rem 1fr;
    gap: 1rem;
  }

  nav > ul > li > ul > li {
    grid-column: 2;
  }

  nav > ul > li > button[aria-expanded='true'] + ul {
    display: grid;
  }

  /* Contactknop: binnenruimte via lege grid-kolommen */
  a[href='/contact'] {
    display: inline-grid;
    grid-template-columns: 1.25rem auto 1.25rem;
    align-items: center;
    min-height: 2.75rem;
    background-color: var(--color-orange-dark);
    color: #ffffff;
    border-radius: 999px;
  }

  a[href='/contact']::before,
  a[href='/contact']::after {
    content: '';
  }

  a[href='/contact']:hover,
  a[href='/contact'][aria-current='page'] {
    color: #ffffff;
    background-color: var(--color-petrol);
    text-decoration: none;
  }

  /* Laptop/desktop: horizontaal menu met dropdowns */
  @media (min-width: 64rem) {
    header {
      grid-template-rows: 1.25rem auto 1.25rem;
    }

    nav > a img {
      height: 5rem;
    }

    nav > button {
      display: none;
    }

    nav > ul,
    nav > button[aria-expanded='true'] + ul {
      grid-column: auto;
      justify-self: end;
      display: flex;
      align-items: center;
      gap: 2rem;
      font-size: 1.125rem;
    }

    nav > ul > li {
      position: relative;
    }

    /* Techniek uit moderncss.dev: visibility + transform i.p.v. display:none */
    nav > ul > li > ul,
    nav > ul > li > button[aria-expanded='true'] + ul {
      position: absolute;
      inset-block-start: calc(100% + 0.5rem);
      inset-inline-start: 50%;
      z-index: 10;
      display: grid;
      grid-template-columns: 1.25rem max-content 1.25rem;
      row-gap: 0.75rem;
      background-color: #ffffff;
      border: 1px solid var(--color-border);
      border-radius: 0.5rem;
      box-shadow: 0 0.5rem 1.5rem rgb(0 59 73 / 0.12);
      transform-origin: top center;
      transition:
        transform 200ms ease-out,
        opacity 200ms ease-out,
        visibility 200ms;
    }

    nav > ul > li > ul {
      visibility: hidden;
      opacity: 0.3;
      transform: translateX(-50%) rotateX(-90deg);
    }

    nav > ul > li > button[aria-expanded='true'] + ul {
      visibility: visible;
      opacity: 1;
      transform: translateX(-50%) rotateX(0);
    }

    /* Lege rijen boven en onder: row-gap geeft binnenruimte */
    nav > ul > li > ul::before,
    nav > ul > li > ul::after {
      content: '';
      grid-column: 2;
    }
  }
</style>
