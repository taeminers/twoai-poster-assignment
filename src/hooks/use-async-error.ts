import { useState, useCallback } from 'react';

/**
 * This hook is used to throw an error when an async operation fails.
 * As async operations cannot be caught by the error boundary, this hook is used to force the async error into the react render.
 */

export const useAsyncError = () => {
  const [, setError] = useState();
  return useCallback(
    (e: any) => {
      setError(() => {
        throw e;
      });
    },
    [setError],
  );
};
