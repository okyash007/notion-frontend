import { DocProps } from "@/core/dtos/types/DocProps";
import { BlockNoteEditor, DefaultBlockSchema, DefaultInlineContentSchema, DefaultStyleSchema, PartialBlock } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";

const Editor = ({ onChange, initialContent, editable = true }: DocProps) => {
    const editor: BlockNoteEditor = useBlockNote({
        editable,
        initialContent: initialContent ? JSON.parse(initialContent) as PartialBlock<DefaultBlockSchema, DefaultInlineContentSchema, DefaultStyleSchema>[] : undefined,
        onEditorContentChange: (editor) => {
            editable && onChange!(JSON.stringify(editor.topLevelBlocks, null, 2));
        }
    }, [initialContent]);

    



    return <BlockNoteView editor={editor} theme={"dark"} />;
}

export default Editor;