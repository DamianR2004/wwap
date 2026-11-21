import { defineField, defineType } from 'sanity'
import { departments } from './departments'

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Teamlid',
  type: 'document',
  orderings: [
    {
      title: 'Afdeling en Voornaam (A-Z)',
      name: 'deptAndNameAsc',
      by: [
        { field: 'department', direction: 'asc' },
        { field: 'name', direction: 'asc' },
      ],
    },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Naam',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Functie',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'department',
      title: 'Afdeling',
      type: 'string',
      options: {
        list: departments,
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'E-mailadres',
      type: 'string',
      validation: (rule) => rule.email().error('Vul een geldig e-mailadres in'),
    }),
    defineField({
      name: 'phone',
      title: 'Telefoonnummer',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
  },
})