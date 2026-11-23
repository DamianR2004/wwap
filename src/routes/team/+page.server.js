import { sanity, urlFor, afdelingen, schoon } from '$lib/server/sanity';

// Foto's worden vierkant getoond, van ~160px (mobiel) tot ~300px (desktop).
// Uitgesneden rond de hotspot die in de studio is gezet.
const breedtes = [320, 480, 640, 960];

const foto = (image, breedte, formaat) =>
  urlFor(image).width(breedte).height(breedte).fit('crop').format(formaat).quality(80).url();

const srcset = (image, formaat) =>
  breedtes.map((b) => `${foto(image, b, formaat)} ${b}w`).join(', ');

const fotoSets = (image) => ({
  webp: srcset(image, 'webp'),
  jpg: srcset(image, 'jpg'),
  src: foto(image, 480, 'jpg')
});

export async function load() {
  // Is Sanity onbereikbaar (bijv. geen internet), dan toont de pagina een melding i.p.v. een 500
  let leden;
  try {
    // Gesorteerd op afdeling (directie eerst), daarbinnen op naam
    leden = await sanity.fetch(`
    *[_type == "teamMember"] | order(department asc, name asc) {
      _id,
      name,
      role,
      department,
      email,
      phone,
      image
    }
  `);
  } catch (fout) {
    console.error('Teamleden ophalen uit Sanity mislukt:', fout);
    return { groepen: [], onbereikbaar: true };
  }

  // Groeperen per afdeling, in de volgorde van de afdelingenlijst
  const groepen = Object.entries(afdelingen)
    .map(([waarde, naam]) => ({
      naam,
      leden: leden
        .filter((lid) => lid.department === waarde)
        .map((lid) => ({
          id: lid._id,
          naam: schoon(lid.name),
          functie: schoon(lid.role),
          email: schoon(lid.email),
          telefoon: schoon(lid.phone),
          foto: lid.image?.asset ? fotoSets(lid.image) : null
        }))
        .sort((a, b) => a.naam.localeCompare(b.naam, 'nl'))
    }))
    .filter((groep) => groep.leden.length > 0);

  return { groepen };
}
