import { defineField, defineType } from 'sanity'
import { departments } from './departments'

export const vacancy = defineType({
  name: 'vacancy',
  title: 'Vacature',
  type: 'document',
  orderings: [
    {
      title: 'Nieuwste eerst',
      name: 'newestFirst',
      by: [{ field: '_createdAt', direction: 'desc' }],
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Functietitel',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      description: 'Dit wordt gebruikt voor de link naar de vacature (bijv. /vacatures/functietitel)',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isActive',
      title: 'Vacature staat open',
      type: 'boolean',
      description: 'Zet dit uit als de vacature vervuld is, maar je hem nog wel wilt bewaren in Sanity.',
      initialValue: true,
    }),
    defineField({
      name: 'isInternship',
      title: 'Is het een stageplek?',
      type: 'boolean',
      description: 'Zet dit aan als dit een vacature voor een stage of afstudeeropdracht is.',
      initialValue: false,
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
      name: 'hours',
      title: 'Aantal uren per week',
      type: 'string',
      description: 'Bijv. "32 - 40 uur" of "Parttime (24 uur)"',
    }),
    defineField({
      name: 'location',
      title: 'Locatie',
      type: 'string',
      initialValue: 'Ede',
    }),
    defineField({
      name: 'description',
      title: 'Vacature omschrijving',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      isActive: 'isActive',
      isInternship: 'isInternship',
      department: 'department',
    },
    prepare({ title, isActive, isInternship, department }) {
      const status = isActive ? '🟢 Open' : '🔴 Gesloten'
      const stageLabel = isInternship ? ' | 🎓 Stage' : ''
      const deptName = department ? department.split('_')[1] : 'Geen afdeling'
      const deptFormatted = deptName.charAt(0).toUpperCase() + deptName.slice(1)
      
      return {
        title: title,
        subtitle: `${status} | ${deptFormatted}${stageLabel}`,
      }
    },
  },
})