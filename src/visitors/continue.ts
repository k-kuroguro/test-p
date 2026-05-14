import * as ts from 'typescript';
import * as tstl from 'typescript-to-lua';
import { findScope, LoopContinued, ScopeType } from 'typescript-to-lua/dist/transformation/utils/scope';

export function transformContinueStatement(
   node: ts.ContinueStatement,
   context: tstl.TransformationContext,
) {
   const loopScope = findScope(context, ScopeType.Loop);
   if (loopScope) {
      loopScope.loopContinued = LoopContinued.WithGoto;
   }

   const label = `__continue${loopScope?.id ?? ''}`;
   return tstl.createGotoStatement(label, node);
}
