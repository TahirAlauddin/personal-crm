"use client";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { LexicalEditor } from "lexical";
import { $setBlocksType, $patchStyleText } from "@lexical/selection";
import { $createParagraphNode, $getSelection, $isRangeSelection } from "lexical";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { AlignLeft, AlignCenter, AlignRight, List } from "lucide-react";

export function FontFamilyDropdown() {
  const [editor] = useLexicalComposerContext();
  return (
    <Select defaultValue="inter" onValueChange={(value) => {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
        //   selection.formatText("font-family", value);
        }
      });
    }}>
      <option value="inter">Inter</option>
      <option value="arial">Arial</option>
      <option value="helvetica">Helvetica</option>
    </Select>
  );
}

export function FontSizeDropdown() {
  const [editor] = useLexicalComposerContext();
  return (
    <Select defaultValue="24" onValueChange={(value) => {
    //   editor.update(() => {
    //     const selection = $getSelection();
    //     if ($isRangeSelection(selection)) {
    //     //   selection.formatText("font-size", value);
    //       //   selection.formatText()
    //     //   $patchStyleText(selection, { "font-family": fontName || DEFAULT_FONT_FAMILIES[0] });

    //     }
    //   });
    }}>
      <option value="12">12</option>
      <option value="14">14</option>
      <option value="24">24</option>
    </Select>
  );
}

export function AlignmentToolbar() {
  const [editor] = useLexicalComposerContext();
  return (
    <div className="flex gap-1">
      <Button variant="ghost" size="icon" onClick={() => setAlignment(editor, "left")}>
        <AlignLeft className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" onClick={() => setAlignment(editor, "center")}>
        <AlignCenter className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" onClick={() => setAlignment(editor, "right")}>
        <AlignRight className="h-4 w-4" />
      </Button>
    </div>
  );
}

function setAlignment(editor: LexicalEditor, alignment: "left" | "right" | "center") {
  editor.update(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      $setBlocksType(selection, () => $createParagraphNode().setFormat(alignment));
    }
  });
}

export function BulletListButton() {
  const [editor] = useLexicalComposerContext();
  return (
    <Button variant="ghost" size="icon" onClick={() => {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
        //   $setBlocksType(selection, () => $createParagraphNode().setListItem());
        }
      });
    }}>
      <List className="h-4 w-4" />
    </Button>
  );
}
