import { defineType, defineField, defineArrayMember } from 'sanity'

export const page = defineType({
  type: "document",
  name: "page",
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      type: "slug",
      name: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      type: "array",
      name: "sections",
      title: "Page sections",
      of: [
        defineArrayMember({
          type: "post",
        }),
        defineArrayMember({
          type: "heroBlock",
        }),
        defineArrayMember({
          type: "textBlock",
        }),
        defineArrayMember({
          type: "ctaBlock",
        }),
        defineArrayMember({
          type: "imageCarousel",
        }),
      ],
    }),
  ],
});

