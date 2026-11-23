import { error } from '@sveltejs/kit';
import { sanity, afdelingen, schoon } from '$lib/server/sanity';

export async function load({ params }) {
  // Sanity onbereikbaar: 503 (tijdelijk) i.p.v. een onverwachte 500
  let vacature;
  try {
    vacature = await sanity.fetch(
      `*[_type == "vacancy" && isActive == true && slug.current == $slug][0] {
      title,
      hours,
      location,
      department,
      isInternship,
      description
    }`,
      { slug: params.slug }
    );
  } catch (fout) {
    console.error('Vacature ophalen uit Sanity mislukt:', fout);
    error(503, 'De vacature kan nu niet worden geladen. Probeer het later opnieuw.');
  }

  if (!vacature) {
    error(404, 'Deze vacature bestaat niet (meer)');
  }

  return {
    vacature: {
      ...vacature,
      title: schoon(vacature.title),
      afdeling: afdelingen[vacature.department]
    }
  };
}
