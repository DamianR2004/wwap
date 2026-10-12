<script>
  import favicon from '$lib/assets/favicon.svg';
  import '../global.css';
  import { page } from '$app/state';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  let { children } = $props();

  gsap.registerPlugin(ScrollTrigger);

  $effect(() => {
    page.url.pathname;

    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const sections = document.querySelectorAll('main section');
      
      sections.forEach((section) => {
        gsap.from(section, {
          y: 24,
          opacity: 0,
          duration: 1.2,
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
            y: 24,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.2,
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

  {@render children()}
