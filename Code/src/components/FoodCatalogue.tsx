import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import "./FoodCatalogue.css";

interface FoodProps {
    name: string;
    description: string;
    imgPath: string;
  }

const FoodCatalogue: React.FC<FoodProps> = ({name, description, imgPath}) => {
  return (
    <IonCard color="light">
      <img
        alt="A&W Logo"
        className="foodCard"
        src={imgPath}
      />
      <IonCardHeader>
        <IonCardTitle>{name}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>{description}</IonCardContent>
    </IonCard>
  );
};
