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
      name: 'percent',
      title: 'Percent',
      type: 'number',
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
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
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Front-End', value: 'frontend' },
          { title: 'Back-End', value: 'backend' },
          { title: 'Database', value: 'database' },
          { title: 'Devops', value: 'devops' },
          { title: 'Other', value: 'other' },
        ],
      },
    },
  ],
}
