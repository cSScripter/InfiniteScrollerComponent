import type { FC } from 'react';

interface ToggleButtonProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

const ToggleButton: FC<ToggleButtonProps> = ({ isDarkMode, onToggle }) => (
  <button
    onClick={onToggle}
    className="px-4 py-2 rounded border border-gray-400 bg-gray-200 dark:bg-gray-800 dark:text-white"
  >
    {isDarkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
  </button>
);

export default ToggleButton;
