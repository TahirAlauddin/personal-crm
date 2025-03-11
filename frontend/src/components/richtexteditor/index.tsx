import { useState } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { HeadingNode  } from "@lexical/rich-text";
import { TextNode, LexicalCommand, $getSelection, $isRangeSelection, $getTextContent, $createTextNode } from "lexical";
import { FontFamilyDropdown, FontSizeDropdown, AlignmentToolbar, BulletListButton } from "@/components/Toolbar";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, List, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TagBadge } from "../Tagbadge";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { exampleTheme } from "./theme";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import "./styles.css"

const initialConfig = {
  namespace: "MyEditor",
  nodes: [HeadingNode, TextNode],
  exampleTheme,
  onError(error: Error) {
    console.error(error);
  },
};


export default function NoteEditor({ selectedNote, setSelectedNote }: { selectedNote: number | null; setSelectedNote: (note: number | null) => void }) {
  const [editorState, setEditorState] = useState(null);

  return (
    selectedNote !== null && (
      <div className="flex w-full h-screen bg-white border-l overflow-y-auto">
        <div className="flex flex-col bg-white border-b z-10 w-full">
          <div className="flex items-center justify-between p-6">
            <div>
              <div className="flex gap-2 mb-2">
                <TagBadge label="Weekly" color="yellow" />
                <TagBadge label="Product" color="blue" />
              </div>
              <h2 className="text-2xl font-bold">Product Team Meeting</h2>
              <p className="text-sm text-gray-500">Dec 4, 2019 21:42</p>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setSelectedNote(null)}>
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>

          {/* Editor Toolbar */}
          <LexicalComposer initialConfig={initialConfig}>
          <div className="px-6 pb-4 flex items-center gap-4 border-b">
            <FontFamilyDropdown  />
            <FontSizeDropdown />
            <div className="flex items-center gap-1 border-l border-r px-4">
              <Button variant="ghost" size="icon"><Bold className="h-4 w-4" /></Button>
              <Button variant="ghost" size="icon"><Italic className="h-4 w-4" /></Button>
              <Button variant="ghost" size="icon"><Underline className="h-4 w-4" /></Button>
            </div>
            <AlignmentToolbar />
            <BulletListButton />
          </div>

          {/* Lexical Editor */}
            <div className="p-6">
              <RichTextPlugin ErrorBoundary={LexicalErrorBoundary} contentEditable={<ContentEditable className="min-h-[300px] border p-4" />} />
              <HistoryPlugin />
              {/* <HeaderPlugin /> */}
              <OnChangePlugin onChange={()=> 0} />
            </div>
          </LexicalComposer>
        </div>
      </div>
    )
  );
}

function HeaderPlugin() {
  const [editor] = useLexicalComposerContext();

}