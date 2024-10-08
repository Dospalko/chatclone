import React, { useEffect, useRef, useState } from "react";
import "./newPrompt.css";
import Upload from "../upload/Upload";
import { IKImage } from "imagekitio-react";
import Markdown from "react-markdown";
import model from "../../lib/gemini";
const NewPrompt = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const endRef = useRef(null);
  const [img, setImg] = useState({
    isLoading: false,
    dbData: null,
    aiData: null,
  });
  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, [answer, question, img.dbData]);
  const chat = model.startChat({
    history: [
      {
        role: 'user',
        parts: [{ text: 'Hello, how can I help you today?' }],
      },
      {
        role: 'model',
        parts: [{ text: 'I am here to assist you with your queries.' }],
      },
    ],
    generationConfig: {
      // maxOutputTokens: 100,
    },
  });
  const add = async (text, isInitial) => {
  if (!isInitial) setQuestion(text);

  try {
    const aiDataEntries = img.aiData && Object.entries(img.aiData).length ? [img.aiData, { text }] : [{ text }];
    const result = await chat.sendMessageStream(aiDataEntries);
    
    let accumulatedText = "";
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      console.log(chunkText);
      accumulatedText += chunkText;
      setAnswer(accumulatedText);
    }

    mutation.mutate();
  } catch (err) {
    console.log(err);
  }
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = e.target.text.value;
    if (!text) return;

    add(text, false);
  };
  return (
    <>
      {img.isLoading && <div className="">Loading...</div>}
      {img.dbData?.filePath && (
        <IKImage
          urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
          path={img.dbData?.filePath}
          width="380"
          transformation={[{ width: 380 }]}
        />
      )}
      {question && <div className="message user">{question}</div>}
      {answer && (
        <div className="message">
          <Markdown>{answer}</Markdown>
        </div>
      )}
      <div className="endChat" ref={endRef}></div>

      <form className="newForm" onSubmit={handleSubmit}>
        <Upload setImg={setImg} />
        <input type="file" id="file" multiple={false} hidden />
        <input type="text" name="text" placeholder="Type a message ..." />
        <button>
          <img src="/arrow.png" alt="" />
        </button>
      </form>
      <div></div>
    </>
  );
};

export default NewPrompt;
