/*
  Sanity-client voor gebruik in +page.server.js.
  Staat in $lib/server, zodat SvelteKit voorkomt dat dit in de browser belandt.
  De dataset 'production' is openbaar: er is geen token nodig.
*/
import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

export const sanity = createClient({
  projectId: 'mjf2vd6j',
  dataset: 'production',
  apiVersion: '2025-02-19',
  useCdn: true
});

const builder = createImageUrlBuilder(sanity);

// Formaat (webp/jpg) kies je per gebruik met .format(), zodat <picture> kan wisselen
export const urlFor = (bron) => builder.image(bron);

// Afdelingen in dezelfde volgorde als in de studio (studio-wwap/schemaTypes/departments.ts)
export const afdelingen = {
  '1_directie': 'Directie',
  '2_management': 'Management',
  '3_administratie': 'Administratie',
  '4_begeleiding': 'Begeleiding'
};

// Verwijdert onzichtbare tekens (bijv. U+FFFC uit plakken) en spaties aan de randen
export const schoon = (tekst) => (tekst ?? '').replace(/[￼​]/g, '').trim();
