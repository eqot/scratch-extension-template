import { BLOCKS_ORDER } from './blocks/order';
import { generateBlocks } from './utils/blocks';
import { translations } from './utils/translations';

class DummyExtension {
  private runtime: unknown;
  private blocks;

  constructor(runtime: unknown, locale?: string) {
    this.runtime = runtime;

    translations.initialize(this.runtime, locale);

    this.blocks = generateBlocks(BLOCKS_ORDER, this);
  }

  getInfo(): unknown {
    return {
      id: 'dummy',
      name: 'Dummy',
      menuIconURI: require('../assets/images/menuIcon.png'),
      blockIconURI: require('../assets/images/blockIcon.png'),
      color1: '#a0a0a0',
      color2: '#808080',
      color3: '#606060',

      blocks: this.blocks.info(),
      menus: this.blocks.menus(),
    };
  }
}

export default DummyExtension;
