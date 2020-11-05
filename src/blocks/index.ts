export type BlockInfo = {
  opcode: string;
  blockType: string;
  branchCount?: number;
  terminal?: boolean;
  blockAllThreads?: boolean;
  text: string;
  arguments?: unknown;
  func?: string;
  filter?: string[];
};

type Block = {
  info: () => void;
  menus: () => void;
  functions: any;
};

const Separator = '---';

const Blocks = (blocksOrder: string[]): any => {
  const blocks = blocksOrder.map((block: any) => {
    if (isSeparator(block)) {
      return block;
    }

    const { info, menus, ...functions } = require(`./${block}.ts`).default;
    return { info, menus, functions };
  }) as Block[];

  const info = (): any => blocks.map((block) => (isSeparator(block) ? block : block.info()));
  const menus = (): any =>
    blocks.reduce((acc, { menus }) => (menus ? Object.assign(acc, menus()) : acc), {});
  const functions: any = blocks.reduce((acc, { functions }) => Object.assign(acc, functions), {});

  return {
    info,
    menus,
    functions,

    inject(object: any): void {
      for (const functionName in functions) {
        object[functionName] = functions[functionName].bind(object);
      }
    },
  };
};

function isSeparator(block: unknown): boolean {
  return block === Separator;
}

export { Blocks };
