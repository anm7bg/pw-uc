import { defineType, defineField, defineArrayMember } from 'sanity'

export const textBlock = defineType({
  type: "object",
  name: "textBlock",
  fields: [
    {
    name: "slug",
    type: "slug",
    title: "Slug of blog"
    },
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      type: "array",
      name: "content",
      of: [
        defineArrayMember({
          type: "block",
        }),
        defineArrayMember({
          type: "image",
          fields: [
            {
              type: "string",
              name: "caption",
            },
          ],
          options: { hotspot: true },
        }),
      ],
    }),
  ],
});

