export default {
  name: 'skills',
  title: 'Skills',
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
      name: 'degree',
      title: 'Degree',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
