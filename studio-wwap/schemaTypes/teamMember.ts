import { defineField, defineType } from 'sanity'

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
        list: [
          { title: 'Directie', value: '1_directie' },
          { title: 'Management', value: '2_management' },
          { title: 'Administratie', value: '3_administratie' },
          { title: 'Begeleiding', value: '4_begeleiding' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Over deze persoon',
      type: 'array',
      of: [{ type: 'block' }],
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