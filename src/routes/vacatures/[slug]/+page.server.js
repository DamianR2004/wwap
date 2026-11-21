import { error } from '@sveltejs/kit';
import { sanity, afdelingen, schoon } from '$lib/server/sanity';

export async function load({ params }) {
  const vacature = await sanity.fetch(
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
