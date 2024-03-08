const { Tag } = require('../models');

const tagData = [
    //TODO: Place ids in the '' based off of wireframing data. 
  {
    tag_name: '',
  },
  {
    tag_name: '',
  },
  {
    tag_name: '',
  },
  {
    tag_name: '',
  },
  {
    tag_name: '',
  },
  {
    tag_name: '',
  },
  {
    tag_name: '',
  },
  {
    tag_name: '',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
