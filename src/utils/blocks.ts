import { Block } from '../types';

const Separator = '---';

export const generateBlocks = (blocksOrder: string[], object: any): any => {
  const blocks = blocksOrder.map((block: any) => {
    if (isSeparator(block)) {
      return block;
    }

    const { info, menus, ...functions } = require(`../blocks/${block}.ts`).default;
    return { info, menus, functions };
  }) as Block[];

  const info = (): any => blocks.map((block) => (isSeparator(block) ? block : block.info()));
  const menus = (): any =>
    blocks.reduce((acc, { menus }) => (menus ? Object.assign(acc, menus()) : acc), {});
  const functions: any = blocks.reduce((acc, { functions }) => Object.assign(acc, functions), {});

  for (const functionName in functions) {
    object[functionName] = functions[functionName].bind(object);
  }

  return {
    info,
    menus,
    functions,
  };
};

function isSeparator(block: unknown): boolean {
  return block === Separator;
}
