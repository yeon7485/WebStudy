'use client';
import { IconType } from 'react-icons';

interface CategoryInputProps {
  label: string;
  icon: IconType;
  path: string;
  selected?: boolean;
  onClick: (category: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  label,
  icon: Icon,
  path,
  selected,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(path)}
      className={`
				rounded-xl
				border-2
				p-4
				flex
				flex-col
				gap-3
				hover:border-rose-500
				transition
				cursor-pointer
				${selected ? 'border-rose-500' : 'border-neutral-200'}
		`}
    >
      <Icon size={30} />
      <div className='font-semibold'>{label}</div>
    </div>
  );
};

export default CategoryInput;
