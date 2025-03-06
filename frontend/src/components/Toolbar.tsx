"use client";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { LexicalEditor } from "lexical";
import { $setBlocksType, $patchStyleText } from "@lexical/selection";
import {
  $createParagraphNode,
  $getSelection,
  $isRangeSelection,
} from "lexical";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { AlignLeft, AlignCenter, AlignRight, List } from "lucide-react";

export function FontFamilyDropdown() {
  const [editor] = useLexicalComposerContext();
  return (
    <select
      defaultValue="inter"
      onChange={(event) => {
        const value = event.target.value;
        editor.update(() => {
          const selection = $getSelection();
          if ($isRangeSelection(selection)) {
            //   selection.formatText("font-family", value);
            console.log(event)
            console.log(event.target.value)
            $patchStyleText(selection, {
              "font-family": value,
            });
          }
        });
      }}
    >
      <option value="inter">Inter</option>
      <option value="arial">Arial</option>
      <option value="helvetica">Helvetica</option>
    </select>
  );
}

export function FontSizeDropdown() {
  const [editor] = useLexicalComposerContext();
  return (
    <select
      onChange={(event) => {
        // onValueChange={(value) => {
        const value = event.target.value;
        editor.update(() => {
          const selection = $getSelection();
          if ($isRangeSelection(selection)) {
            //   selection.formatText("", value);
            $setBlocksType(selection, () => $createParagraphNode());
          }
        });
      }}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="6">6</option>
    </select>
  );
}

export function AlignmentToolbar() {
  const [editor] = useLexicalComposerContext();
  return (
    <div className="flex gap-1">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setAlignment(editor, "left")}
      >
        <AlignLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setAlignment(editor, "center")}
      >
        <AlignCenter className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setAlignment(editor, "right")}
      >
        <AlignRight className="h-4 w-4" />
      </Button>
    </div>
  );
}

function setAlignment(
  editor: LexicalEditor,
  alignment: "left" | "right" | "center"
) {
  editor.update(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      $setBlocksType(selection, () =>
        $createParagraphNode().setFormat(alignment)
      );
    }
  });
}

export function BulletListButton() {
  const [editor] = useLexicalComposerContext();
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        editor.update(() => {
          const selection = $getSelection();
          if ($isRangeSelection(selection)) {
            //   $setBlocksType(selection, () => $createParagraphNode().setListItem());
          }
        });
      }}
    >
      <List className="h-4 w-4" />
    </Button>
  );
}
