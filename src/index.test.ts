import * as uiTokens from './index';

describe('ui-tokens', () => {
  describe('exporting modules', () => {
    const exportedModules = [
      'generateVars',
      'getTheme',
      'unwrapVar',
      'resolveVar',
    ] as const;

    it('returns its functions', () => {
      exportedModules.forEach((exportedModule) =>
        expect(uiTokens[exportedModule]).toBeInstanceOf(Function),
      );
      exportedModules.forEach((exportedModule) =>
        expect(uiTokens[exportedModule]).not.toBeFalsy(),
      );
    });
  });
});
