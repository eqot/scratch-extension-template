import { BLOCKS_ORDER } from './blocks/order';
import { generateBlocks } from './utils/blocks';
import { translations } from './utils/translations';

class Extension {
  private static ID = 'dummy';

  private runtime: unknown;
  private blocks;

  constructor(runtime: unknown, locale?: string) {
    this.runtime = runtime;

    translations.initialize(locale, this.runtime);

    this.blocks = generateBlocks(BLOCKS_ORDER, this);
  }

  // Information for scratch-vm
  getInfo(): unknown {
    return {
      id: Extension.ID,
      name: translations.label('extension.name'),
      blockIconURI: require('../assets/images/blockIcon.png'),
      menuIconURI: require('../assets/images/menuIcon.png'),
      color1: '#a0a0a0',
      color2: '#808080',
      color3: '#606060',
      blocks: this.blocks.info(),
      menus: this.blocks.menus(),
      // showStatusButton: false,
    };
  }

  // Information for scratch-gui
  static getInfoForGui(): unknown {
    translations.initialize();

    return {
      name: translations.label('extension.name'),
      extensionId: Extension.ID,
      collaborator: translations.label('extension.collaborator'),
      iconURL: require('../assets/images/icon.png'),
      insetIconURL: require('../assets/images/blockIcon.png'),
      description: translations.label('extension.description'),
      featured: true,
      // disabled: false,
      // bluetoothRequired: false,
      // internetConnectionRequired: false,
      // launchPeripheralConnectionFlow: false,
      // useAutoScan: false,
      // connectionIconURL: null,
      // connectionSmallIconURL: null,
      // connectingMessage: 'Connecting...',
      // helpLink: 'https://github.com/eqot/scratch-extension-template/',
    };
  }
}

export default Extension;
