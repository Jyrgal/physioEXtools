import { memo } from "react";
import { Button } from "components/button";
import { RadioButtons } from "components/radio-buttons";
import { Text } from "components/text";
import { TextInput } from "components/text-input";
import { useModals } from "contexts/modals";
import { useNavigate } from "react-router-dom";

export const Login = memo(({ modal }: { modal?: boolean }) => {
  const { toggleSignup } = useModals();
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-between h-full">
      <div className="flex-1 bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className="flex flex-col h-full justify-center mx-20">
          <Text value="Welcome" styles="text-white text-8xl" />
          <Text value="back!" styles="text-white text-8xl" />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex flex-col h-full justify-center mx-20">
          <Text value="Login" styles="text-4xl" />
          <Text
            value="Welcome back! Please login to your account."
            styles="text-md mt-4"
          />
          <Text value="Email" styles="text-md mt-4" />
          <TextInput styles="p-2 border rounded-md" />
          <Text value="Password" styles="text-md mt-4" />
          <TextInput styles="p-2 border rounded-md" type="password" />
          <div className="flex justify-between text-sm font-light mt-12">
            <RadioButtons
              values={["Remember me"]}
              onClick={(value) => console.log(value)}
              required={false}
            />
            <Button
              value="Forgot Password?"
              onClick={() => console.log("forgot password")}
            />
          </div>
          <Button
            value="Login"
            styles="mt-12 p-4 bg-violet-500 rounded-lg text-white font-bold text-lg"
            onClick={() => console.log("login")}
          />
          <div className="flex text-sm font-light mt-12">
            <Text value="New User?" styles="text-md" />
            <Button
              value="Signup"
              styles="ml-2 text-violet-500 font-bold"
              onClick={() =>
                modal ? toggleSignup(true) : navigate("../signup")
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
});
