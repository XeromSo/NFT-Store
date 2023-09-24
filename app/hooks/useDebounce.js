import _ from 'lodash'
import { useRef } from 'react';

export default function useDebounce(fn,delay=500) {

  const debouncedFn = useRef(
    _.debounce(fn, delay)
  ).current

  return debouncedFn;
}
