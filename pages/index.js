
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
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">澳洲手机号格式化工具</h1>
        <textarea
          className="w-full h-40 p-3 border rounded-lg focus:ring focus:ring-blue-300"
          placeholder="输入电话号码，每行一个"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md"
          onClick={formatNumbers}
        >
          格式化
        </button>
        <textarea
          className="w-full h-40 p-3 border rounded-lg mt-4 bg-gray-50 focus:ring focus:ring-blue-300"
          placeholder="输出结果"
          value={output}
          readOnly
        />
      </div>
    </div>
  );
}
