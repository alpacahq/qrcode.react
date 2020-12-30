// flow-typed signature: 65326ef4c86d25e64f2ce065e64a17ea
// flow-typed version: <<STUB>>/qr.js_v0.0.0/flow_v0.111.3

/**
 * This is an autogenerated libdef stub for:
 *
 *   'qr.js'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

type ErrorLevels = {
  L: 1,
  M: 0,
  Q: 3,
  H: 2,
};

declare module 'qr.js' {
  declare module.exports: any;
}

/**
 * We include stubs for each file inside this npm package in case you need to
 * require those files directly. Feel free to delete any files that aren't
 * needed.
 */
declare module 'qr.js/example/index' {
  declare module.exports: any;
}

declare module 'qr.js/lib/8BitByte' {
  declare module.exports: any;
}

declare module 'qr.js/lib/BitBuffer' {
  declare module.exports: any;
}

declare module 'qr.js/lib/ErrorCorrectLevel' {
  declare module.exports: ErrorLevels;
}

declare module 'qr.js/lib/math' {
  declare module.exports: any;
}

declare module 'qr.js/lib/mode' {
  declare module.exports: any;
}

declare module 'qr.js/lib/Polynomial' {
  declare module.exports: any;
}

declare module 'qr.js/lib/QRCode' {
  declare class QRCode {
    constructor(
      typeNumber: number,
      errorCorrectLevel: $Values<ErrorLevels>
    ): void;
    make(): void;
    addData(data: any): void;
    modules: Array<Array<boolean>> | null;
  }
  declare module.exports: typeof QRCode;
}

declare module 'qr.js/lib/RSBlock' {
  declare module.exports: any;
}

declare module 'qr.js/lib/util' {
  declare module.exports: any;
}

// Filename aliases
declare module 'qr.js/example/index.js' {
  declare module.exports: $Exports<'qr.js/example/index'>;
}
declare module 'qr.js/index' {
  declare module.exports: $Exports<'qr.js'>;
}
declare module 'qr.js/index.js' {
  declare module.exports: $Exports<'qr.js'>;
}
declare module 'qr.js/lib/8BitByte.js' {
  declare module.exports: $Exports<'qr.js/lib/8BitByte'>;
}
declare module 'qr.js/lib/BitBuffer.js' {
  declare module.exports: $Exports<'qr.js/lib/BitBuffer'>;
}
declare module 'qr.js/lib/ErrorCorrectLevel.js' {
  declare module.exports: $Exports<'qr.js/lib/ErrorCorrectLevel'>;
}
declare module 'qr.js/lib/math.js' {
  declare module.exports: $Exports<'qr.js/lib/math'>;
}
declare module 'qr.js/lib/mode.js' {
  declare module.exports: $Exports<'qr.js/lib/mode'>;
}
declare module 'qr.js/lib/Polynomial.js' {
  declare module.exports: $Exports<'qr.js/lib/Polynomial'>;
}
declare module 'qr.js/lib/QRCode.js' {
  declare module.exports: $Exports<'qr.js/lib/QRCode'>;
}
declare module 'qr.js/lib/RSBlock.js' {
  declare module.exports: $Exports<'qr.js/lib/RSBlock'>;
}
declare module 'qr.js/lib/util.js' {
  declare module.exports: $Exports<'qr.js/lib/util'>;
}