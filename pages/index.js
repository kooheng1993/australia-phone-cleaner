import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const formatNumbers = () => {
    const lines = input.split(/\r?\n/);
    const formattedLines = lines.map((line) => {
      line = line.trim();
      if (line.startsWith("+6104")) {
        return "614" + line.slice(5);
      } else if (line.startsWith("6104")) {
        return "614" + line.slice(4);
      } else if (line.startsWith("04")) {
        return "614" + line.slice(2);
      } else if (line.startsWith("614")) {
        return line;
      }
      return "INVALID: " + line;
    });
    setOutput(formattedLines.join("\n"));
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">澳洲手机号格式化工具</h1>
      <textarea
        className="w-full max-w-lg h-40 p-2 border rounded"
        placeholder="输入电话号码，每行一个"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={formatNumbers}
      >
        格式化
      </button>
      <textarea
        className="w-full max-w-lg h-40 p-2 border rounded mt-4"
        placeholder="输出结果"
        value={output}
        readOnly
      />
    </div>
  );
}
