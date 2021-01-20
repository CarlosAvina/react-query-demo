import Input from "../components/Input";
import TextArea from "../components/TextArea";
import SaveButton from "../components/SaveButton";

const NotePage: React.FC = () => {
  return (
    <div>
      <SaveButton />
      <Input />
      <TextArea />
    </div>
  );
};

export default NotePage;
