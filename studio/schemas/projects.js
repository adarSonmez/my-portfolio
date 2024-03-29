export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      options: {
        required: true,
        unique: true,
      },
    },
    {
      name: 'published',
      title: 'Published',
      type: 'boolean',
      options: {
        list: [
          { title: 'Yes', value: true },
          { title: 'No', value: false },
        ],
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      options: {
        required: true,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'repo',
      title: 'Repo',
      type: 'url',
      options: {
        required: true,
      },
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      options: {
        required: true,
      },
    },
    {
      name: 'finishedDate',
      title: 'Finished Date',
      type: 'date',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
  ],
}
