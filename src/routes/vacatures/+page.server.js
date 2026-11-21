import { sanity, schoon } from '$lib/server/sanity';

export async function load() {
  const vacatures = await sanity.fetch(`
    *[_type == "vacancy" && isActive == true && defined(slug.current)]
      | order(_createdAt desc) {
        title,
        "slug": slug.current,
        hours,
        location,
        isInternship
      }
  `);

  return {
    vacatures: vacatures.map((v) => ({ ...v, title: schoon(v.title) }))
  };
}
