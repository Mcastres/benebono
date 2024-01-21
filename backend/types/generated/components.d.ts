import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'hero';
    icon: 'apps';
    description: '';
  };
  attributes: {
    hero_text: Attribute.String;
    hero_sub_text: Attribute.String;
    hero_image: Attribute.Media;
    ctas: Attribute.Component<'shared.repeatable-buttons', true>;
    background_color: Attribute.Enumeration<['Orange', 'Green']> &
      Attribute.DefaultTo<'Orange'>;
  };
}

export interface SharedRepeatableButtons extends Schema.Component {
  collectionName: 'components_shared_repeatable_buttons';
  info: {
    displayName: 'repeatable_buttons';
    icon: 'plus';
    description: '';
  };
  attributes: {
    link: Attribute.String;
    text: Attribute.String;
    color: Attribute.Enumeration<['Yellow']> & Attribute.DefaultTo<'Yellow'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.hero': BlocksHero;
      'shared.repeatable-buttons': SharedRepeatableButtons;
    }
  }
}
