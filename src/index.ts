import { translations } from './translations';
import { Blocks } from './blocks';

class DummyExtension {
  private static BLOCKS_ORDER = ['say', '---', 'showSprite'];

  private runtime: unknown;
  private blocks;

  constructor(runtime: unknown, locale?: string) {
    this.runtime = runtime;

    translations.initialize(this.runtime, locale);

    this.blocks = Blocks(DummyExtension.BLOCKS_ORDER);
    this.blocks.inject(this);
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
