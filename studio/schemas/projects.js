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
  ],
}
