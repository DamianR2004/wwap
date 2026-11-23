import { sanity, schoon } from '$lib/server/sanity';

export async function load() {
  // Is Sanity onbereikbaar (bijv. geen internet), dan toont de pagina een melding i.p.v. een 500
  let vacatures;
  try {
    vacatures = await sanity.fetch(`
    *[_type == "vacancy" && isActive == true && defined(slug.current)]
      | order(_createdAt desc) {
        title,
        "slug": slug.current,
        hours,
        location,
        isInternship
      }
  `);
  } catch (fout) {
    console.error('Vacatures ophalen uit Sanity mislukt:', fout);
    return { vacatures: [], onbereikbaar: true };
  }

  return {
    vacatures: vacatures.map((v) => ({ ...v, title: schoon(v.title) }))
  };
}
