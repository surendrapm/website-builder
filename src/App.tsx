import grapesjs, { Editor } from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import { useEffect, useState } from "react";
import plugin from "grapesjs-blocks-basic";
import gjsForms from "grapesjs-plugin-forms";

function App() {
  const [editor, setEditor] = useState<Editor | null>(null);

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      fromElement: true,

      plugins: [plugin,gjsForms],
      pluginsOpts: {
        [plugin]: {
          /* options */
        },
      },

      storageManager: false,
    });
    setEditor(editor);
  }, []);

  return (
    <div>
      <h1>My React App with GrapeJS</h1>
      <div
        id="editor"
        style={{
          height: "0px",
          overflow: "hidden",
        }}
      >
        <h1>Hello World</h1>
      </div>
    </div>
  );
}

export default App;
