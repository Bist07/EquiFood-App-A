import './ExploreContainer.css';

interface ContainerProps {
  name: string;
  link?: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name,link="https://ionicframework.com/docs/components" }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href={link}>UI Components</a></p>
    </div>
  );
};

export default ExploreContainer;
