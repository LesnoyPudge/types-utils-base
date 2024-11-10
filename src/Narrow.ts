


// https://www.reddit.com/r/typescript/comments/15mnuv1/question_deep_nested_type_inferrence/
// https://stackoverflow.com/questions/76875732/how-to-infer-types-of-deeply-nested-properties

type Cast<A, B> = A extends B ? A : B;

type Narrowable = string | number | bigint | boolean;

/**
 * Force typescript to narrow passed type.
 */
export type Narrow<A> = Cast<
  A,
  [] 
  | (A extends Narrowable ? A : never) 
  | { [K in keyof A]: Narrow<A[K]> }
>;