<script>
  import favicon from '$lib/assets/favicon.svg';
  import '../global.css';
  import { page } from '$app/state';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import Header from '$lib/components/organims/Header.svelte';
  import Footer from '$lib/components/organims/Footer.svelte';

  let { children } = $props();

  gsap.registerPlugin(ScrollTrigger);

  $effect(() => {
    page.url.pathname;

    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const sections = document.querySelectorAll('main section');
      
      sections.forEach((section) => {
        gsap.from(section, {
          y: 16,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            once: true
          }
        });
      });

      const lists = document.querySelectorAll('main ul, main ol');

      lists.forEach((list) => {
        const listItems = list.querySelectorAll('li');
        
        if (listItems.length > 0) {
          gsap.from(listItems, {
            y: 16,
            opacity: 0,
            duration: 0.5,
            ease: 'power3.out',
            stagger: 0.08,
            clearProps: 'all',
            scrollTrigger: {
              trigger: list,
              start: 'top 90%',
              once: true
            }
          });
        }
      });
    });

    return () => {
      mm.revert();
    };
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

{#key page.url.pathname}
  <Header />
{/key}

{@render children()}

<Footer />
