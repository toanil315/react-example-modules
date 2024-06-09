import { MinusIcon, PlusIcon } from '@/components/Icons';

interface Props {
  isExpanded: boolean;
}

const ExpandIcon = ({ isExpanded }: Props) => {
  if (isExpanded) {
    return <MinusIcon />;
  }

  return <PlusIcon />;
};

export default ExpandIcon;
