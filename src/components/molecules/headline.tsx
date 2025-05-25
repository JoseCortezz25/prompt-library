import { Heading } from '../atoms/heading';
import { Icon } from '../atoms/icon';

interface HeadlineProps {
  icon: string;
  title: string;
}

export const Headline = ({ icon, title }: HeadlineProps) => {
  return (
    <div className="flex items-center gap-6">
      <Icon icon={icon} variant="lg" />
      <Heading variant="h2" type="title-lg">
        {title}
      </Heading>
    </div>
  );
};
