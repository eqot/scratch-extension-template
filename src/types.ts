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

export type Block = {
  info: () => void;
  menus: () => void;
  functions: any;
};
