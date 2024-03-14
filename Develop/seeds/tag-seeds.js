const { Tag } = require('../models');

const tagData = [
  //TODO: Place ids in the '' based off of wireframing data.
  {
    tag_name: 'Yeezy',
  },
  {
    tag_name: 'Jordans',
  },
  {
    tag_name: 'Red October',
  },
  {
    tag_name: 'Pirate Black',
  },
  {
    tag_name: 'Black Red',
  },
  {
    tag_name: 'Granite',
  },
  {
    tag_name: 'Cream',
  },
  {
    tag_name: 'Wave Runner',
  },
  {
    tag_name: 'Utility Black',
  },
  {
    tag_name: 'Salt',
  },
  {
    tag_name: 'Teal Blue',
  },
  {
    tag_name: 'Dark Glow',
  },
  {
    tag_name: 'Clay Red',
  },
  {
    tag_name: 'Cinder',
  },
  {
    tag_name: 'High OG',
  },
  {
    tag_name: 'Black White',
  },
  {
    tag_name: 'Yellow Ochre',
  },
  {
    tag_name: 'Palomino',
  },
  {
    tag_name: 'Mocha',
  },
  {
    tag_name: 'Black Phantom',
  },
  {
    tag_name: 'Olive',
  },
  {
    tag_name: 'Reimagined',
  },
  {
    tag_name: 'Retro Thunder',
  },
  {
    tag_name: 'Military Black',
  },
  {
    tag_name: 'Pine Green',
  },
  {
    tag_name: 'Black Cat',
  },
  {
    tag_name: 'Midnight Navy',
  },
  {
    tag_name: 'Off-White Sail',
  },
  {
    tag_name: 'Retro Lightning',
  },
  {
    tag_name: 'Gratitude',
  },
  {
    tag_name: 'Cool Grey',
  },
  {
    tag_name: 'Retro Cherry',
  },
  {
    tag_name: 'Retro Playoffs Bred',
  },
  {
    tag_name: 'Concord',
  },
  {
    tag_name: 'Retro Space Jam',
  },
  {
    tag_name: 'Retro Jubilee 25th',
  },
  {
    tag_name: 'Retro Gamma Blue',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
