// toggle기능이 자주 쓰이는데, true-? false, false-<true
import { useState } from 'react';

export default function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);
  const toggle = () => {
    setValue(!value);
  };
  return [value, toggle];
}
