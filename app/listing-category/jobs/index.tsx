'use client'
import { getJobPath } from '../../models/selectItems';
import { useNavigation } from '../../hooks/Navigation';

export default function JobItem({ id }: { id: string }) {
  const { navigate } = useNavigation();

  const handleClick = () => {
    navigate(getJobPath(id));
  };

  return (
    <button onClick={handleClick}>
      Go to {id}
    </button>
  );
}
