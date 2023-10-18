import { useState } from "react";
import Button from "../components/Button";
import TextArea from "../components/TextArea";
import OpenAI from "openai";
import { ColorRing } from "react-loader-spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Chat.css"
import Logo from "../assets/openai-svgrepo-com.svg";

const ChatAI = () => {
  const [command, setCommand] = useState(""); // state input user
  const [loading, setLoading] = useState(false); // state loader untuk nunggu response dari openai
  const [result, setResult] = useState([]); // state untuk menyimpan response dari openai

  const openai = new OpenAI({
    apiKey: "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", // defaults to process.env["OPENAI_API_KEY"]
    dangerouslyAllowBrowser: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: handle openai completion
    setLoading(true);
    const res = await openai.chat.completions.create({
      // prompt: command, // parameter untuk send chat message
      // model: 'text-davinci-003',
      messages: [{ role: "system", content: command }],
      model: "gpt-3.5-turbo",
    });
    setResult(res.choices[0].message.content);
    console.log("result ", res);
    setLoading(false);
  };

  return (
    <div>
      <div className="container-md container-sm container-lg chatbox">
        <img src={Logo}  alt="logo" />
        <h2>Simple Chatbot</h2>
        <TextArea
          name="command"
          id="command"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          placeholder={"Masukkan perintah..."}
          className="input-add-article"
        />
        <Button
          type="submit"
          className="btn btn-secondary"
          text="Submit Text"
          onClick={(e) => handleSubmit(e)}
        />

        {/* Render text result */}
        {loading ? (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        ) : (
          <div className="result">
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatAI;
