import * as ts from 'typescript';
import * as tstl from 'typescript-to-lua';

import { transformBitwiseBinaryExpression, transformBitwisePrefixUnaryExpression } from './visitors/bitwise';
import { transformContinueStatement } from './visitors/continue';

const plugin: tstl.Plugin = {
   visitors: {
      [ts.SyntaxKind.BinaryExpression]: transformBitwiseBinaryExpression,
      [ts.SyntaxKind.PrefixUnaryExpression]: transformBitwisePrefixUnaryExpression,
      [ts.SyntaxKind.ContinueStatement]: transformContinueStatement,
   },
};

export default plugin;
