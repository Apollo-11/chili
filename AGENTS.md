Agent Guidelines for This Repo

Scope: This file applies to the entire repository.

Conventions to follow when making changes:

- Maintain alphabetical order
  - Keep props in TypeScript interfaces and exported members sorted alphabetically where the file already follows that style.
  - Keep docs props tables in alphabetical order unless a file clearly uses a different established order.

- Respect existing style
  - Match the import grouping and wrapping used in the touched file (e.g., multiline named imports with one identifier per line when long).
  - Destructure new component props so unknown props are not passed down to DOM elements via `...restProps`.

- Prefer const, scope let with IIFE
  - Prefer `const` over `let` for derived values.
  - If you need to mutate a temporary variable, wrap the `let` inside an IIFE to limit scope, and assign the final result to a `const`.
  - This pattern is also used when calculating a `const` value based on other variables.

- Document API changes
  - Any changes to component props or other public APIs must include corresponding docs updates.
  - Update the docs props tables, examples/usages, and type snippets to reflect the change.
  - Keep docs props tables ordered alphabetically when that is the file’s convention.

- Transformation pattern example (from Input)
  - When transforming input value (e.g., applying `maxLength`, letter casing, and first-letter capitalization), use this pattern:

    const newValue = (() => {
      let val = letterCase
        ? transformToCase(maxLengthAdjustedValue, letterCase)
        : maxLengthAdjustedValue;

      if ((letterCase == null || letterCase == 'lower') && capitalizeFirstLetter) {
        val = capitalizeFirstChar(val);
      }

      return val;
    })();

  - All `let` declarations must be wrapped in a `(() => { ... })()` to scope possible mutations.
  - Use this IIFE pattern whenever you need to compute a `const` based on other variables while keeping interim mutations local.
