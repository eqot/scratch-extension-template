import Runtime from 'scratch-vm/src/engine/runtime.js';

import DummyExtensions from '../src/index';
import { translations } from '../src/utils/translations';

describe('DummyBlocks', () => {
  let extension: DummyExtensions;

  beforeEach(() => {
    const runtime = new Runtime();
    extension = new DummyExtensions(runtime);
  });

  it('returns block information as expected in English', () => {
    translations.setLocale('en');

    const result = extension.getInfo();
    expect(result).toMatchSnapshot();
  });

  it('returns block information as expected in Japanese', () => {
    translations.setLocale('ja');

    const result = extension.getInfo();
    expect(result).toMatchSnapshot();
  });
});
