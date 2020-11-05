import BlockType from 'scratch-vm/src/extension-support/block-type';
import ArgumentType from 'scratch-vm/src/extension-support/argument-type';

import { BlockInfo } from '../types';
import { translations } from '../utils/translations';

const ShowSpriteBlock = {
  info(): BlockInfo {
    return {
      opcode: 'showSprite',
      blockType: BlockType.COMMAND,
      text: translations.label('showSprite'),
      arguments: {
        TARGET: {
          type: ArgumentType.STRING,
          menu: 'Target',
        },
      },
    };
  },

  menus(): any {
    return {
      Target: {
        items: [
          {
            value: 'allSprites',
            text: translations.label('all sprites'),
          },
          {
            value: 'thisSprite',
            text: translations.label('this sprite'),
          },
        ],
        acceptReporters: true,
      },
    };
  },

  showSprite(args: { TARGET: string }, util: any): void {
    switch (args.TARGET) {
      case 'allSprites':
        console.info(util.runtime.targets);
        break;

      case 'thisSprite':
        console.info(util.target);
        break;

      default:
        break;
    }
  },
};

export default ShowSpriteBlock;
