import * as ts from 'typescript';
import * as tstl from 'typescript-to-lua';

const BIT_BINARY_MAP: Partial<Record<ts.SyntaxKind, string>> = {
   [ts.SyntaxKind.AmpersandToken]: 'band',
   [ts.SyntaxKind.BarToken]: 'bor',
   [ts.SyntaxKind.CaretToken]: 'bxor',
   [ts.SyntaxKind.LessThanLessThanToken]: 'lshift',
   [ts.SyntaxKind.GreaterThanGreaterThanToken]: 'arshift',
   [ts.SyntaxKind.GreaterThanGreaterThanGreaterThanToken]: 'rshift',
};

function createBit32Call(
   fnName: string,
   args: tstl.Expression[],
   tsOriginal: ts.Node,
): tstl.CallExpression {
   return tstl.createCallExpression(
      tstl.createTableIndexExpression(
         tstl.createIdentifier('bit32'),
         tstl.createStringLiteral(fnName),
      ),
      args,
      tsOriginal,
   );
}

export function transformBitwiseBinaryExpression(
   node: ts.BinaryExpression,
   context: tstl.TransformationContext,
) {
   const fnName = BIT_BINARY_MAP[node.operatorToken.kind];
   if (fnName === undefined) {
      return context.superTransformExpression(node);
   }

   const left = context.transformExpression(node.left);
   const right = context.transformExpression(node.right);
   return createBit32Call(fnName, [left, right], node);
}

export function transformBitwisePrefixUnaryExpression(
   node: ts.PrefixUnaryExpression,
   context: tstl.TransformationContext,
) {
   if (node.operator === ts.SyntaxKind.TildeToken) {
      const operand = context.transformExpression(node.operand);
      return createBit32Call('bnot', [operand], node);
   }

   return context.superTransformExpression(node);
}
