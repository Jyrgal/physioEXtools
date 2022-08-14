import { memo } from "react";
import { Button } from "components/button";
import { RadioButtons } from "components/radio-buttons";
import { Text } from "components/text";
import { TextInput } from "components/text-input";
import { useModals } from "contexts/modals";
import { useNavigate } from "react-router-dom";

export const Signup = memo(({ modal }: { modal?: boolean }) => {
  const { toggleLogin } = useModals();
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-between h-full">
      <div className="flex-1">
        <div className="flex flex-col h-full justify-center mx-20">
          <Text value="Signup" styles="text-4xl" />
          <Text value="Name" styles="text-md mt-4" />
          <TextInput styles="p-2 border rounded-md" />
          <Text value="Email" styles="text-md mt-4" />
          <TextInput styles="p-2 border rounded-md" />
          <Text value="Password" styles="text-md mt-4" />
          <TextInput styles="p-2 border rounded-md" type="password" />
          <div className="flex justify-between text-sm font-light mt-12">
            <RadioButtons
              values={[
                "I have read and agree with Terms of Service and our Privacy Policy.",
              ]}
              onClick={(value) => console.log(value)}
              required={false}
            />
          </div>
          <Button
            value="Sigup"
            styles="mt-12 p-4 bg-violet-500 rounded-lg text-white font-bold text-lg"
            onClick={() => console.log("forgot password")}
          />
          <div className="flex text-sm font-light mt-12">
            <Text value="Already have an account?" styles="text-md" />
            <Button
              value="Login"
              styles="ml-2 text-violet-500 font-bold"
              onClick={() => (modal ? toggleLogin(true) : navigate("../login"))}
            />
          </div>
        </div>
      </div>
      <div className="flex-1 bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className="flex flex-col h-full justify-center mx-20">
          <Text value="physioEXtools" styles="text-white text-8xl" />
        </div>
      </div>
    </div>
  );
});
